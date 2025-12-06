import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

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
    fetchApplications();
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Админ-панель</h1>
            <p className="text-gray-600">Управление заявками клиентов</p>
          </div>
          <Button 
            onClick={fetchApplications}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Icon name="RefreshCw" size={18} />
            Обновить
          </Button>
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
              Все заявки ({applications.length})
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
            ) : applications.length === 0 ? (
              <div className="text-center py-20">
                <Icon name="Inbox" size={64} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Заявок пока нет</p>
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
                    {applications.map((app) => (
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
