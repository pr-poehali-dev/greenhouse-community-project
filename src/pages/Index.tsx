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
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🌱</span>
            <span className="text-2xl font-bold text-primary">ТеплиЦапля</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О клубе</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Ваша теплица<br />и сообщество<br />в 15 минутах<br />от МКАД
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Забудьте о поисках участка и стройке. Выращивайте свои овощи круглый год, общайтесь с единомышленниками и наслаждайтесь природой без хлопот.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#pricing">Выбрать тариф</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#about">Узнать больше</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/cf35ae38-868c-48cd-b859-4377c3ffa5a4.jpg" 
                alt="Свежие овощи из теплицы" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Почему дача — не решение?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы понимаем желание горожан выращивать свои овощи, но традиционная дача создаёт больше проблем, чем решений
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Wallet", title: "Дорого", desc: "Покупка, строительство теплицы, подведение коммуникаций — миллионы рублей" },
              { icon: "MapPin", title: "Далеко", desc: "Часы в пробках, дорогой бензин, усталость вместо отдыха" },
              { icon: "Wrench", title: "Много хлопот", desc: "Постоянный ремонт, охрана участка, зимнее обслуживание" }
            ].map((item, i) => (
              <Card key={i} className="animate-fade-in border-2 hover:border-primary transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-destructive" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ТеплиЦапля решает 3 ключевые потребности</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы создали пространство, где каждый горожанин получает больше, чем просто участок земли
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: "Sprout", 
                title: "Свежие овощи круглый год", 
                desc: "Ваша личная теплица с полным оснащением. Вода, свет, отопление, почва — всё готово. Просто приезжайте и выращивайте.",
                color: "bg-primary/10 text-primary"
              },
              { 
                icon: "Users", 
                title: "Сообщество единомышленников", 
                desc: "Обмен опытом, рассадой, рецептами. Мастер-классы от агронома. Праздники урожая. Неформальное общение за городом.",
                color: "bg-accent/10 text-accent"
              },
              { 
                icon: "Heart", 
                title: "Антистресс на природе", 
                desc: "Легальный повод выехать на природу с семьёй. Осмысленное хобби с видимым результатом. Покажите детям, как растут овощи.",
                color: "bg-secondary/10 text-secondary"
              }
            ].map((item, i) => (
              <Card key={i} className="animate-fade-in hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mb-6`}>
                    <Icon name={item.icon as any} size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Что входит в членство</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "Home", title: "Готовая теплица", items: ["Площадь от 20 до 50 м²", "Система полива и отопления", "Качественная почва", "Стеллажи и инвентарь"] },
                { icon: "Users", title: "Клубная жизнь", items: ["Закрытый чат сообщества", "Мастер-классы от агронома", "Праздники урожая", "Обмен опытом и рассадой"] },
                { icon: "Coffee", title: "Инфраструктура", items: ["Парковка и подъезд", "Зона отдыха с беседками", "Чистые туалеты", "WiFi на территории"] },
                { icon: "Briefcase", title: "Экспертная поддержка", items: ["Консультации агронома", "Помощь в выборе культур", "Советы по выращиванию", "Решение проблем с урожаем"] }
              ].map((block, i) => (
                <Card key={i} className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={block.icon as any} className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">{block.title}</h4>
                        <ul className="space-y-2">
                          {block.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-muted-foreground">{item}</span>
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

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Сезонность выращивания</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Благодаря отоплению теплиц вы можете выращивать овощи круглый год
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { season: "Весна", icon: "🌸", crops: ["Редис", "Салат", "Укроп", "Лук", "Рассада томатов"] },
              { season: "Лето", icon: "☀️", crops: ["Томаты", "Огурцы", "Перцы", "Баклажаны", "Зелень"] },
              { season: "Осень", icon: "🍂", crops: ["Капуста", "Свёкла", "Морковь", "Зелень", "Редька"] },
              { season: "Зима", icon: "❄️", crops: ["Зелень", "Микрозелень", "Салаты", "Шпинат", "Руккола"] }
            ].map((season, i) => (
              <Card key={i} className="animate-fade-in hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4 text-center">{season.icon}</div>
                  <h3 className="text-2xl font-bold text-center mb-4">{season.season}</h3>
                  <ul className="space-y-2">
                    {season.crops.map((crop, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Icon name="Leaf" className="text-primary" size={16} />
                        <span>{crop}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Истории наших участников</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна, 34", story: "Раньше покупала зелень в магазине — безвкусная. Теперь круглый год свой базилик, руккола и салаты. Дети в восторге!", img: "https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/0de12d4c-8756-4c33-9f9e-1a73f76ddc86.jpg" },
              { name: "Михаил, 42", story: "Нашёл здесь не просто теплицу, а друзей. Каждые выходные — как маленький отпуск. Обмениваемся опытом, пьём чай в беседке.", img: "https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/24eb7dba-1007-431d-8549-dfd0fe5f2582.jpg" },
              { name: "Елена, 38", story: "Мечтала о даче, но поняла — не готова к хлопотам. ТеплиЦапля — идеальное решение! Все блага без головной боли.", img: "https://cdn.poehali.dev/projects/d80de847-ec76-47df-9810-364313f6f372/files/cf35ae38-868c-48cd-b859-4377c3ffa5a4.jpg" }
            ].map((person, i) => (
              <Card key={i} className="animate-fade-in overflow-hidden hover:shadow-xl transition-all">
                <img src={person.img} alt={person.name} className="w-full h-48 object-cover" />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">{person.name}</h3>
                  <p className="text-muted-foreground italic">"{person.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Тарифы и членство</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите размер теплицы по вашим потребностям. Все клубные преимущества включены в каждый тариф
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Старт", size: "20 м²", price: "15 000", features: ["Идеально для зелени и салатов", "До 50 растений", "Базовый инвентарь"], popular: false },
              { name: "Комфорт", size: "35 м²", price: "24 000", features: ["Для овощей и зелени", "До 100 растений", "Расширенный инвентарь", "Приоритет на мастер-классах"], popular: true },
              { name: "Премиум", size: "50 м²", price: "32 000", features: ["Максимальные возможности", "До 150 растений", "Полный набор инвентаря", "VIP-поддержка агронома"], popular: false }
            ].map((plan, i) => (
              <Card key={i} className={`animate-fade-in relative ${plan.popular ? 'border-2 border-primary shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </div>
                )}
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                  <p className="text-center text-muted-foreground mb-4">{plan.size}</p>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽/мес</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <a href="#contact">Выбрать тариф</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Все тарифы включают: доступ к инфраструктуре, участие в клубных мероприятиях, поддержку агронома
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Как добраться</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">Московская область, 15 км от МКАД по Новорижскому шоссе</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Car" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">На машине</p>
                    <p className="text-muted-foreground">Удобный подъезд, бесплатная парковка на 50 мест</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно с 8:00 до 22:00. Доступ по картам 24/7 для премиум-участников</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="animate-scale-in">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Нужен ли опыт в садоводстве?", a: "Совершенно нет! Наш агроном проведёт вводный инструктаж и будет консультировать вас на всех этапах. В сообществе всегда помогут советом." },
              { q: "Что если я не смогу приезжать каждую неделю?", a: "Система автополива поддержит ваши растения. Можно договориться с соседями по клубу о взаимопомощи. Минимум — раз в 2 недели." },
              { q: "Можно ли привозить детей?", a: "Да! У нас семейная атмосфера. Детская площадка, зона отдыха, безопасная территория. Многие участники приезжают всей семьёй." },
              { q: "Что входит в стоимость аренды?", a: "Теплица с оборудованием, вода, электричество, отопление, базовый инвентарь, доступ к инфраструктуре, участие во всех клубных мероприятиях." },
              { q: "Можно ли продлить или сменить тариф?", a: "Конечно! Договор гибкий. Можно перейти на больший или меньший размер при наличии свободных теплиц." },
              { q: "Как проходят мастер-классы?", a: "Каждую субботу агроном проводит практические занятия: посадка, уход, борьба с вредителями, подкормка. Бесплатно для всех участников." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🌱</span>
                <span className="text-2xl font-bold">ТеплиЦапля</span>
              </div>
              <p className="opacity-90">Тепличный клуб для горожан. Выращивайте свои овощи, общайтесь с единомышленниками.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p>📞 +7 (495) 123-45-67</p>
                <p>✉️ info@teplicaplya.ru</p>
                <p>📍 Новорижское шоссе, 15 км от МКАД</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">График работы</h4>
              <p className="opacity-90">Ежедневно с 8:00 до 22:00<br />Доступ 24/7 для премиум-участников</p>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center opacity-75">
            <p>&copy; 2024 ТеплиЦапля. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
