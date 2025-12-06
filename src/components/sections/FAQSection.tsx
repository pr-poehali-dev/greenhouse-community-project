import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ответы на вопросы, которые интересуют больше всего
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "Нужен ли опыт в садоводстве?",
              a: "Нет, мы принимаем всех — от новичков до опытных садоводов. Наша команда агрономов проведёт вводное обучение и всегда готова помочь советом. Все инструменты и инструкции на месте.",
            },
            {
              q: "Что будет зимой?",
              a: "Наши теплицы работают круглый год! Они оборудованы системой отопления и освещения. Зимой можно выращивать зелень, корнеплоды и даже некоторые овощи. Это идеальное время для экспериментов.",
            },
            {
              q: "Могу ли я прийти с детьми?",
              a: "Конечно! Мы создавали клуб именно для семей. У нас безопасная территория, зона отдыха, туалеты, и мы регулярно проводим детские мастер-классы по садоводству.",
            },
            {
              q: "Можно ли отменить подписку?",
              a: "Да, вы можете отменить подписку в любой момент с уведомлением за 14 дней. Неиспользованная часть оплаты возвращается на карту. Никаких скрытых условий.",
            },
            {
              q: "Как добраться до клуба?",
              a: "Мы находимся в 15 минутах от МКАД по Новорижскому шоссе. Есть бесплатная парковка на 50 мест. По выходным организуем групповой трансфер от метро Строгино.",
            },
            {
              q: "Что делать, если я уезжаю в отпуск?",
              a: "Мы можем взять уход за вашими растениями на себя за символическую плату. Либо вы можете заморозить подписку на срок от 2 недель до 2 месяцев с пересчётом оплаты.",
            },
          ].map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white border-0 rounded-2xl shadow-lg px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 text-gray-900">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
