import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import * as XLSX from 'xlsx';
import type { DateRange } from "react-day-picker";

interface Application {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  email: string;
}

const Admin = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const fetchApplications = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://functions.poehali.dev/0219e40d-834a-4200-9a61-b7a36f02fadf');
      const result = await response.json();

      if (response.ok) {
        setApplications(result.applications || []);
      } else {
        setError(result.error || "Ошибка загрузки заявок");
      }
    } catch (err) {
      setError("Ошибка соединения с сервером");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const savedAuth = sessionStorage.getItem('admin_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      fetchApplications();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      sessionStorage.setItem('admin_auth', 'true');
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "520129") {
      setIsAuthenticated(true);
      setAuthError("");
      fetchApplications();
    } else {
      setAuthError("Неверный пароль");
    }
  };

  const filteredApplications = applications.filter(app => {
    if (!dateRange?.from) return true;
    
    const appDate = new Date(app.created_at);
    const fromDate = new Date(dateRange.from);
    fromDate.setHours(0, 0, 0, 0);
    
    if (dateRange.to) {
      const toDate = new Date(dateRange.to);
      toDate.setHours(23, 59, 59, 999);
      return appDate >= fromDate && appDate <= toDate;
    }
    
    return appDate >= fromDate;
  });

  const handleExportToExcel = () => {
    const exportData = filteredApplications.map(app => ({
      'ID': app.id,
      'Дата и время': formatDate(app.created_at),
      'Имя': app.name,
      'Телефон': app.phone,
      'Email': app.email
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Заявки');
    
    const fileName = `заявки_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  const handleResetFilter = () => {
    setDateRange(undefined);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center px-6">
        <Card className="w-full max-w-md shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Icon name="Lock" size={28} />
              Вход в админ-панель
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8 pb-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">Пароль</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль"
                  className="text-lg"
                  autoFocus
                />
                {authError && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-2">
                    <Icon name="AlertCircle" size={16} />
                    {authError}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full h-12 text-lg">
                Войти
              </Button>
            </form>
            <div className="mt-6 text-center">
              <a 
                href="/" 
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors text-sm"
              >
                <Icon name="ArrowLeft" size={16} />
                Вернуться на главную
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Админ-панель</h1>
              <p className="text-gray-600">Управление заявками клиентов</p>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                onClick={handleExportToExcel}
                disabled={isLoading || filteredApplications.length === 0}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Icon name="Download" size={18} />
                Экспорт в Excel
              </Button>
              <Button 
                onClick={fetchApplications}
                disabled={isLoading}
                className="flex items-center gap-2"
              >
                <Icon name="RefreshCw" size={18} />
                Обновить
              </Button>
            </div>
          </div>

          <Card className="shadow-lg border-emerald-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Filter" size={20} className="text-emerald-600" />
                  <span className="font-semibold text-gray-700">Фильтр по дате:</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[280px] justify-start text-left font-normal"
                    >
                      <Icon name="Calendar" size={16} className="mr-2" />
                      {dateRange?.from ? (
                        dateRange.to ? (
                          <>
                            {format(dateRange.from, "dd.MM.yyyy", { locale: ru })} -{" "}
                            {format(dateRange.to, "dd.MM.yyyy", { locale: ru })}
                          </>
                        ) : (
                          format(dateRange.from, "dd.MM.yyyy", { locale: ru })
                        )
                      ) : (
                        <span>Выберите диапазон дат</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={dateRange?.from}
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={2}
                      locale={ru}
                    />
                  </PopoverContent>
                </Popover>
                {dateRange?.from && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleResetFilter}
                    className="flex items-center gap-2"
                  >
                    <Icon name="X" size={16} />
                    Сбросить
                  </Button>
                )}
                <div className="ml-auto text-sm text-gray-600">
                  Показано: <span className="font-semibold text-emerald-600">{filteredApplications.length}</span> из {applications.length}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {error && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-red-700">
                <Icon name="AlertCircle" size={24} />
                <span>{error}</span>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Icon name="FileText" size={28} />
              Заявки ({filteredApplications.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <Icon name="Loader2" size={48} className="animate-spin text-emerald-600 mx-auto mb-4" />
                  <p className="text-gray-600">Загрузка заявок...</p>
                </div>
              </div>
            ) : filteredApplications.length === 0 ? (
              <div className="text-center py-20">
                <Icon name="Inbox" size={64} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  {dateRange?.from ? "Заявок в выбранном диапазоне нет" : "Заявок пока нет"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ID</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Дата и время</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Имя</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Телефон</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredApplications.map((app) => (
                      <tr key={app.id} className="hover:bg-emerald-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">#{app.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Icon name="Calendar" size={16} className="text-emerald-600" />
                            {formatDate(app.created_at)}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{app.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Icon name="Phone" size={16} className="text-emerald-600" />
                            {app.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Icon name="Mail" size={16} className="text-emerald-600" />
                            {app.email}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            <Icon name="ArrowLeft" size={18} />
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;