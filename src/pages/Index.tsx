import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-emerald-100/50 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-2xl">🌱</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">ТеплиЦапля</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-all font-medium">О клубе</a>
            <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition-all font-medium">Преимущества</a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-all font-medium">Тарифы</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-all font-medium">Контакты</a>
          </nav>
          <Button asChild className="shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all">
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
      </header>

      <section className="pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                  🚀 Открыто 24/7 для премиум-участников
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Ваша теплица<br />
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">в 15 минутах</span><br />
                от МКАД
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Всё готово: вода, земля, инструменты. Приезжайте с пустыми руками — начните выращивать свой урожай уже сегодня. Никаких хлопот, только удовольствие.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg h-14 px-8 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all" asChild>
                  <a href="#pricing">Выбрать тариф</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 hover:bg-emerald-50" asChild>
                  <a href="#about">Узнать больше</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/cf35ae38-868c-48cd-b859-4377c3ffa5a4.jpg" 
                alt="Свежие овощи из теплицы" 
                className="relative rounded-3xl shadow-2xl w-full h-auto ring-1 ring-gray-900/5"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Почему дача — не решение?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Мы понимаем желание горожан выращивать свои овощи, но традиционная дача создаёт больше проблем, чем решений
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Wallet", title: "Дорого", desc: "Покупка, строительство теплицы, подведение коммуникаций — миллионы рублей", gradient: "from-red-500 to-orange-500" },
              { icon: "Truck", title: "Привозить и увозить", desc: "Инструменты, удобрения, воду — постоянная логистика и груз в машине", gradient: "from-orange-500 to-amber-500" },
              { icon: "Wrench", title: "Много хлопот", desc: "Постоянный ремонт, поиск почвы, настройка полива, зимнее обслуживание", gradient: "from-amber-500 to-yellow-500" }
            ].map((item, i) => (
              <Card key={i} className="animate-fade-in border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="pt-8 pb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon name={item.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-32 px-6 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">ТеплиЦапля решает 3 ключевые потребности</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Мы создали пространство, где каждый горожанин получает больше, чем просто участок земли
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              { 
                icon: "Sprout", 
                title: "Свежие овощи круглый год", 
                desc: "Приезжайте с пустыми руками — вода, земля, инструменты уже здесь. Начинайте с рассады весной, собирайте урожай до зимы. Ничего не нужно привозить и увозить.",
                gradient: "from-emerald-400 to-green-500"
              },
              { 
                icon: "Users", 
                title: "Сообщество единомышленников", 
                desc: "Обмен опытом, рассадой, рецептами. Мастер-классы от агронома. Праздники урожая. Неформальное общение за городом.",
                gradient: "from-green-400 to-teal-500"
              },
              { 
                icon: "Heart", 
                title: "Антистресс на природе", 
                desc: "Легальный повод выехать на природу с семьёй. Осмысленное хобби с видимым результатом. Покажите детям, как растут овощи.",
                gradient: "from-teal-400 to-cyan-500"
              }
            ].map((item, i) => (
              <Card key={i} className="animate-fade-in hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="pt-10 pb-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-xl`}>
                    <Icon name={item.icon as any} size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl ring-1 ring-gray-900/5">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 text-gray-900">Что входит в членство</h3>
              <p className="text-xl text-emerald-600 font-semibold">Приезжайте с пустыми руками — всё уже здесь</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: "Home", title: "Всё уже готово", items: ["Автополив — вода всегда есть", "Плодородная почва на месте", "Все инструменты в теплице", "Ничего не нужно привозить"], color: "emerald" },
                { icon: "Users", title: "Клубная жизнь", items: ["Закрытый чат сообщества", "Мастер-классы от агронома", "Праздники урожая", "Обмен опытом и рассадой"], color: "green" },
                { icon: "Coffee", title: "Инфраструктура", items: ["Парковка и подъезд", "Зона отдыха с беседками", "Чистые туалеты", "WiFi на территории"], color: "teal" },
                { icon: "Briefcase", title: "Экспертная поддержка", items: ["Консультации агронома", "Помощь в выборе культур", "Советы по выращиванию", "Решение проблем с урожаем"], color: "cyan" }
              ].map((block, i) => (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 bg-gradient-to-br from-${block.color}-400 to-${block.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon name={block.icon as any} className="text-white" size={26} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold mb-4 text-gray-900">{block.title}</h4>
                        <ul className="space-y-3">
                          {block.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <Icon name="Check" className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                              <span className="text-gray-600 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Сезонность выращивания</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Начинайте с рассады весной — выращивайте её прямо в теплице. Благодаря отоплению собирайте урожай круглый год
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { season: "Весна", icon: "🌸", crops: ["🌱 Рассада томатов, перцев", "Редис", "Салат", "Укроп", "Лук на перо"], gradient: "from-pink-400 to-rose-400" },
              { season: "Лето", icon: "☀️", crops: ["Томаты", "Огурцы", "Перцы", "Баклажаны", "Зелень"], gradient: "from-yellow-400 to-orange-400" },
              { season: "Осень", icon: "🍂", crops: ["Капуста", "Свёкла", "Морковь", "Зелень", "Редька"], gradient: "from-orange-400 to-amber-500" },
              { season: "Зима", icon: "❄️", crops: ["Зелень", "Микрозелень", "Салаты", "Шпинат", "Руккола"], gradient: "from-blue-400 to-cyan-400" }
            ].map((season, i) => (
              <Card key={i} className="animate-fade-in hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${season.gradient}`}></div>
                <CardContent className="pt-8 pb-8">
                  <div className="text-6xl mb-6 text-center">{season.icon}</div>
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">{season.season}</h3>
                  <ul className="space-y-3">
                    {season.crops.map((crop, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Icon name="Leaf" className="text-emerald-600" size={18} />
                        <span className="text-gray-700">{crop}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Истории наших участников</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна, 34", story: "Раньше покупала зелень в магазине — безвкусная. Теперь круглый год свой базилик, руккола и салаты. Дети в восторге!", img: "https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/0de12d4c-8756-4c33-9f9e-1a73f76ddc86.jpg" },
              { name: "Михаил, 42", story: "Нашёл здесь не просто теплицу, а друзей. Каждые выходные — как маленький отпуск. Обмениваемся опытом, пьём чай в беседке.", img: "https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/24eb7dba-1007-431d-8549-dfd0fe5f2582.jpg" },
              { name: "Елена, 38", story: "Мечтала о даче, но поняла — не готова к хлопотам. ТеплиЦапля — идеальное решение! Все блага без головной боли.", img: "https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/cf35ae38-868c-48cd-b859-4377c3ffa5a4.jpg" }
            ].map((person, i) => (
              <Card key={i} className="animate-fade-in overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{person.name}</h3>
                  <p className="text-gray-600 italic leading-relaxed">"{person.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Тарифы и членство</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Выберите размер теплицы по вашим потребностям. Все клубные преимущества включены в каждый тариф
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Старт", 
                size: "20 м²", 
                price: "15 000", 
                features: ["Теплица 4×5 м с автополивом", "Идеально для зелени и салатов", "Рассада весной — урожай летом", "Все инструменты на месте"], 
                popular: false,
                image: "https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/4ba24fef-7d18-45f6-8fd6-fab507717fa1.jpg"
              },
              { 
                name: "Комфорт", 
                size: "35 м²", 
                price: "24 000", 
                features: ["Теплица 5×7 м с отоплением", "Овощи + зелень круглый год", "Выращивание рассады в теплице", "Приоритет на мастер-классах"], 
                popular: true,
                image: "https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/dc0b3eb0-baf4-4c06-99c1-103ee7373a1b.jpg"
              },
              { 
                name: "Премиум", 
                size: "50 м²", 
                price: "32 000", 
                features: ["Теплица 6×8 м с умным управлением", "📱 Удалённый контроль полива", "🚚 Задание на сбор и доставку урожая", "VIP-поддержка агронома 24/7"], 
                popular: false,
                image: "https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/e1e1e216-2c62-43e6-a441-82709f35f0d2.jpg"
              }
            ].map((plan, i) => (
              <Card key={i} className={`animate-fade-in relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${plan.popular ? 'scale-105 bg-gradient-to-br from-emerald-600 to-green-600 text-white' : 'bg-white hover:-translate-y-2'}`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                    ⭐ Популярный
                  </div>
                )}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={`Теплица ${plan.name}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${plan.popular ? 'bg-gradient-to-t from-emerald-600/90 to-transparent' : 'bg-gradient-to-t from-black/40 to-transparent'}`}></div>
                </div>
                <CardContent className="pt-8 pb-10">
                  <h3 className={`text-3xl font-bold text-center mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  <p className={`text-center mb-6 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>{plan.size}</p>
                  <div className="text-center mb-8">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-emerald-600'}`}>{plan.price}</span>
                    <span className={plan.popular ? 'text-emerald-100' : 'text-gray-600'}> ₽/мес</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Icon name="Check" className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-emerald-600'}`} size={22} />
                        <span className={`leading-relaxed ${plan.popular ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full h-14 text-lg shadow-lg ${plan.popular ? 'bg-white text-emerald-600 hover:bg-gray-100' : 'shadow-emerald-500/30 hover:shadow-emerald-500/50'}`}
                    variant={plan.popular ? "secondary" : "default"} 
                    asChild
                  >
                    <a href="#contact">Выбрать тариф</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 text-lg">
            Все тарифы включают: доступ к инфраструктуре, участие в клубных мероприятиях, поддержку агронома
          </p>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-10 text-gray-900">Как добраться</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900 mb-1">Адрес</p>
                    <p className="text-gray-600 leading-relaxed">Московская область, 15 км от МКАД по Новорижскому шоссе</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Car" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900 mb-1">На машине</p>
                    <p className="text-gray-600 leading-relaxed">Удобный подъезд, бесплатная парковка на 50 мест</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900 mb-1">Режим работы</p>
                    <p className="text-gray-600 leading-relaxed">Ежедневно с 8:00 до 22:00. Доступ 24/7 для премиум-участников</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="animate-scale-in border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardContent className="pt-10 pb-10">
                <h3 className="text-3xl font-bold mb-8 text-gray-900">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">Ваше имя</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-lg"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">Телефон</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-lg"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-lg"
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <Button type="submit" className="w-full h-14 text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Нужен ли опыт в садоводстве?", a: "Совершенно нет! Наш агроном проведёт вводный инструктаж и будет консультировать вас на всех этапах. В сообществе всегда помогут советом." },
              { q: "Что если я не смогу приезжать каждую неделю?", a: "Система автополива поддержит ваши растения. Можно договориться с соседями по клубу о взаимопомощи. Минимум — раз в 2 недели." },
              { q: "Можно ли привозить детей?", a: "Да! У нас семейная атмосфера. Детская площадка, зона отдыха, безопасная территория. Многие участники приезжают всей семьёй." },
              { q: "Что входит в стоимость аренды?", a: "Теплица с оборудованием, вода, электричество, отопление, базовый инвентарь, доступ к инфраструктуре, участие во всех клубных мероприятиях." },
              { q: "Можно ли продлить или сменить тариф?", a: "Конечно! Договор гибкий. Можно перейти на больший или меньший размер при наличии свободных теплиц." },
              { q: "Как проходят мастер-классы?", a: "Каждую субботу агроном проводит практические занятия: посадка, уход, борьба с вредителями, подкормка. Бесплатно для всех участников." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg rounded-2xl px-8">
                <AccordionTrigger className="text-left font-bold hover:no-underline text-lg py-6 text-gray-900">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-16 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🌱</span>
                </div>
                <span className="text-2xl font-bold">ТеплиЦапля</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">Тепличный клуб для горожан. Выращивайте свои овощи, общайтесь с единомышленниками.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Контакты</h4>
              <div className="space-y-3 text-gray-300 text-lg">
                <p>📞 +7 (495) 123-45-67</p>
                <p>✉️ info@teplicaplya.ru</p>
                <p>📍 Новорижское шоссе, 15 км от МКАД</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">График работы</h4>
              <p className="text-gray-300 leading-relaxed text-lg">Ежедневно с 8:00 до 22:00<br />Доступ 24/7 для премиум-участников</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТеплиЦапля. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;