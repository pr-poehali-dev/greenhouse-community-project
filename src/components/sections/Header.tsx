import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-emerald-100/50 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <span className="text-2xl">🌱</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
            ТеплиЦапля
          </span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a
            href="#about"
            className="text-gray-700 hover:text-emerald-600 transition-all font-medium"
          >
            О клубе
          </a>
          <a
            href="#benefits"
            className="text-gray-700 hover:text-emerald-600 transition-all font-medium"
          >
            Преимущества
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-emerald-600 transition-all font-medium"
          >
            Тарифы
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-emerald-600 transition-all font-medium"
          >
            Контакты
          </a>
        </nav>
        <Button
          asChild
          className="shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
        >
          <a href="#contact">Оставить заявку</a>
        </Button>
      </div>
    </header>
  );
};
