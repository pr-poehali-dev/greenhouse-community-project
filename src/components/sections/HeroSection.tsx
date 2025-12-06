import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
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
              Ваша теплица
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                в 15 минутах
              </span>
              <br />
              от МКАД
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Приезжайте с пустыми руками — начните выращивать свой урожай уже
              сегодня. Никаких хлопот, только удовольствие.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg h-14 px-8 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                asChild
              >
                <a href="#pricing">Выбрать тариф</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 border-2 hover:bg-emerald-50"
                asChild
              >
                <a href="#about">Узнать больше</a>
              </Button>
            </div>
          </div>
          <div className="animate-scale-in relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl blur-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80"
              alt="Счастливая женщина с первым урожаем в теплице"
              className="relative rounded-3xl shadow-2xl w-full h-auto ring-1 ring-gray-900/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
