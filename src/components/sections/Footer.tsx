import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-emerald-900 to-green-950 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🌱</span>
              </div>
              <span className="text-xl font-bold">ТеплиЦапля</span>
            </div>
            <p className="text-emerald-200 leading-relaxed">
              Клуб для горожан, где каждый может вырастить свой урожай в
              комфортных теплицах.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  О клубе
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  Преимущества
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  Тарифы
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Контакты</h3>
            <ul className="space-y-3 text-emerald-200">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@teplitsaplya.ru
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Московская область, Новорижское шоссе, 15 км от МКАД
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Мы в соцсетях</h3>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "Twitter", "Youtube"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon name={social as any} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-800 pt-8 text-center text-emerald-300">
          <p>© 2024 ТеплиЦапля. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
