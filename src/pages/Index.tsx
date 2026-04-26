import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/ecee3972-71be-4e36-839b-9f4e2b8cde08/files/419cde69-5001-45e5-9c34-aef9376f6ead.jpg";

const services = [
  {
    icon: "BookOpen",
    title: "Бухгалтерский учёт",
    desc: "Ведение первичной документации, учёт хозяйственных операций, подготовка регистров",
  },
  {
    icon: "FileText",
    title: "Налоговая отчётность",
    desc: "Составление и сдача деклараций, расчёт налогов, взаимодействие с ФНС",
  },
  {
    icon: "TrendingUp",
    title: "Финансовый анализ",
    desc: "Оценка финансового состояния, управленческая отчётность, бюджетирование",
  },
  {
    icon: "Shield",
    title: "Налоговый аудит",
    desc: "Проверка правильности исчисления налогов, снижение налоговых рисков",
  },
  {
    icon: "Users",
    title: "Кадровый учёт",
    desc: "Оформление сотрудников, расчёт зарплаты, отчётность в фонды",
  },
  {
    icon: "Clock",
    title: "Восстановление учёта",
    desc: "Восстановление бухгалтерского учёта за прошлые периоды любой сложности",
  },
];

const packages = [
  {
    name: "Стандарт",
    price: "от 8 000 ₽",
    period: "/ месяц",
    description: "Для малого бизнеса и ИП",
    features: [
      "До 50 операций в месяц",
      "Ведение бухгалтерского учёта",
      "Ежеквартальная отчётность",
      "Расчёт налогов и взносов",
      "Консультации по e-mail",
    ],
    highlighted: false,
  },
  {
    name: "Бизнес",
    price: "от 18 000 ₽",
    period: "/ месяц",
    description: "Для растущих компаний",
    features: [
      "До 200 операций в месяц",
      "Полное бухгалтерское сопровождение",
      "Ежемесячная отчётность",
      "Расчёт зарплаты до 10 сотрудников",
      "Налоговое планирование",
      "Консультации по телефону",
    ],
    highlighted: true,
  },
  {
    name: "Премиум",
    price: "от 35 000 ₽",
    period: "/ месяц",
    description: "Для крупного бизнеса",
    features: [
      "Неограниченное количество операций",
      "Персональный бухгалтер",
      "Еженедельная отчётность",
      "Расчёт зарплаты без ограничений",
      "Представление в ФНС",
      "Финансовый анализ и планирование",
      "Приоритетная поддержка 24/7",
    ],
    highlighted: false,
  },
];

const oneTimeServices = [
  { icon: "Building2", title: "Регистрация ООО, ИП" },
  { icon: "XCircle", title: "Сопровождение процедур ликвидации" },
  { icon: "HelpCircle", title: "Консультация по выбору систем налогообложения" },
  { icon: "CreditCard", title: "Регистрация ККТ" },
  { icon: "FilePen", title: "Внесение изменений в ЕГРЮЛ, ЕГРИП" },
  { icon: "ReceiptText", title: "Налоговые вычеты, возврат НДФЛ" },
  { icon: "RefreshCw", title: "Восстановление бухгалтерского учёта" },
  { icon: "BookMarked", title: "Постановка бухгалтерского, налогового, кадрового учёта" },
  { icon: "Sword", title: "Воинский учёт" },
  { icon: "Target", title: "Налоговое планирование" },
  { icon: "ScrollText", title: "Формирование учётной политики" },
  { icon: "FileSignature", title: "Разработка Устава" },
  { icon: "Banknote", title: "Расчёт заработной платы, дивидендов" },
  { icon: "MessageCircle", title: "Консультация бухгалтера" },
  { icon: "ClipboardList", title: "Составление бухгалтерской и налоговой отчётности" },
  { icon: "Landmark", title: "Взаимодействие с контролирующими органами" },
  { icon: "UserCheck", title: "Функция главного бухгалтера" },
  { icon: "Search", title: "Аудит Вашей компании" },
];

const stats = [
  { value: "15+", label: "лет на рынке" },
  { value: "320+", label: "клиентов" },
  { value: "0", label: "штрафов за весь период" },
  { value: "98%", label: "клиентов продлевают договор" },
];

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── NAVBAR ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gold flex items-center justify-center">
              <span className="font-display font-bold text-[hsl(222,28%,7%)] text-sm">А</span>
            </div>
            <span className="font-display text-xl font-semibold tracking-wide">АудитПро</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "home", label: "Главная" },
              { id: "services", label: "Услуги" },
              { id: "contacts", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-body text-sm font-light text-muted-foreground hover:text-gold transition-colors duration-200 tracking-wider uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("contacts")}
            className="bg-gold text-[hsl(222,28%,7%)] font-body text-sm font-medium px-5 py-2 hover:opacity-90 transition-opacity tracking-wide"
          >
            Связаться
          </button>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <p className="font-body text-gold text-xs font-medium tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
              Профессиональная бухгалтерия
            </p>
            <h1 className="font-display text-6xl md:text-7xl font-light leading-[1.05] mb-8 animate-fade-in-up-delay-1">
              Ваши финансы
              <br />
              <em className="text-gold not-italic font-medium">под надёжной</em>
              <br />
              защитой
            </h1>
            <p className="font-body text-base font-light text-muted-foreground leading-relaxed mb-10 animate-fade-in-up-delay-2 max-w-lg">
              Аутсорсинг бухгалтерии для предпринимателей и компаний. Берём на себя полный учёт — вы занимаетесь бизнесом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
              <button
                onClick={() => scrollTo("contacts")}
                className="bg-gold text-[hsl(222,28%,7%)] font-body text-sm font-medium px-8 py-4 hover:opacity-90 transition-opacity tracking-widest uppercase"
              >
                Получить консультацию
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="border border-gold/40 text-gold font-body text-sm font-light px-8 py-4 hover:border-gold transition-colors tracking-widest uppercase"
              >
                Наши услуги
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy-mid border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up-delay-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-semibold text-gold">{s.value}</div>
                <div className="font-body text-xs text-muted-foreground mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────── */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Что мы делаем</p>
            <h2 className="font-display text-5xl font-light">Направления работы</h2>
            <div className="w-16 h-px bg-gold mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-background p-8 group hover:bg-navy-mid transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
                  <Icon name={s.icon} size={18} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3">{s.title}</h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ──────────────────────────────────── */}
      <section className="py-24 bg-navy-mid">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Тарифы</p>
            <h2 className="font-display text-5xl font-light">Пакеты услуг</h2>
            <div className="w-16 h-px bg-gold mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-border">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`relative p-8 flex flex-col ${
                  pkg.highlighted
                    ? "bg-gold"
                    : "bg-navy-mid"
                } ${i < 2 ? "border-r border-border" : ""}`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-background text-gold font-body text-xs font-medium px-4 py-1 tracking-widest uppercase border border-gold">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`font-display text-2xl font-semibold mb-1 ${pkg.highlighted ? "text-[hsl(222,28%,7%)]" : ""}`}>
                    {pkg.name}
                  </h3>
                  <p className={`font-body text-xs font-light tracking-wide ${pkg.highlighted ? "text-[hsl(222,28%,7%)]/70" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className={`font-display text-4xl font-light ${pkg.highlighted ? "text-[hsl(222,28%,7%)]" : "text-gold"}`}>
                    {pkg.price}
                  </span>
                  <span className={`font-body text-sm ml-1 ${pkg.highlighted ? "text-[hsl(222,28%,7%)]/60" : "text-muted-foreground"}`}>
                    {pkg.period}
                  </span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Icon
                        name="Check"
                        size={14}
                        className={`mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-[hsl(222,28%,7%)]" : "text-gold"}`}
                      />
                      <span className={`font-body text-sm font-light leading-snug ${pkg.highlighted ? "text-[hsl(222,28%,7%)]" : "text-muted-foreground"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("contacts")}
                  className={`w-full py-3 font-body text-sm font-medium tracking-widest uppercase transition-all ${
                    pkg.highlighted
                      ? "bg-[hsl(222,28%,7%)] text-gold hover:opacity-90"
                      : "border border-gold/40 text-gold hover:border-gold hover:bg-gold/5"
                  }`}
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>

          <p className="font-body text-xs text-muted-foreground mt-6 text-center font-light">
            Цены указаны ориентировочно. Точная стоимость определяется после анализа вашей ситуации.
          </p>
        </div>
      </section>

      {/* ── ONE-TIME SERVICES ──────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Отдельные задачи</p>
            <h2 className="font-display text-5xl font-light">Разовые услуги</h2>
            <div className="w-16 h-px bg-gold mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {oneTimeServices.map((s) => (
              <div
                key={s.title}
                className="bg-background p-6 flex items-center justify-between group hover:bg-navy-mid transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                    <Icon name={s.icon} size={14} className="text-gold" fallback="FileText" />
                  </div>
                  <span className="font-body text-sm font-light leading-snug">{s.title}</span>
                </div>
                <div className="ml-4 flex-shrink-0 text-right">
                  <span className="font-body text-xs text-gold/70 tracking-wide whitespace-nowrap">по запросу</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => scrollTo("contacts")}
              className="border border-gold/40 text-gold font-body text-sm font-light px-10 py-4 hover:border-gold hover:bg-gold/5 transition-all tracking-widest uppercase"
            >
              Узнать стоимость
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Наши принципы</p>
              <h2 className="font-display text-5xl font-light mb-6">Почему выбирают нас</h2>
              <div className="w-16 h-px bg-gold mb-10" />

              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "Полная ответственность",
                    desc: "Несём финансовую ответственность за ошибки. Страхование профессиональной ответственности.",
                  },
                  {
                    num: "02",
                    title: "Конфиденциальность",
                    desc: "Строгое соблюдение коммерческой тайны. Все сотрудники подписывают соглашение о неразглашении.",
                  },
                  {
                    num: "03",
                    title: "Сроки под контролем",
                    desc: "Сдаём отчётность заблаговременно. Ни одного просроченного документа за 15 лет работы.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6">
                    <span className="font-display text-3xl font-light text-gold/30 flex-shrink-0 leading-none mt-1">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-display text-xl font-medium mb-2">{item.title}</h4>
                      <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20" />
              <div className="relative bg-navy-mid p-10 border border-border">
                <Icon name="Quote" size={32} className="text-gold/30 mb-6" />
                <blockquote className="font-display text-2xl font-light italic leading-relaxed mb-6">
                  «Точность в цифрах — это не просто профессиональный стандарт. Это основа вашего спокойствия.»
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium">Главный бухгалтер</div>
                    <div className="font-body text-xs text-muted-foreground">АудитПро</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTS ───────────────────────────────────────── */}
      <section id="contacts" className="py-24 bg-navy-mid">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Обращение</p>
            <h2 className="font-display text-5xl font-light">Свяжитесь с нами</h2>
            <div className="w-16 h-px bg-gold mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                {
                  icon: "Phone",
                  label: "Телефон",
                  value: "+7 (495) 000-00-00",
                  sub: "Пн–Пт, 9:00–18:00",
                },
                {
                  icon: "Mail",
                  label: "Электронная почта",
                  value: "info@auditpro.ru",
                  sub: "Ответим в течение 2 часов",
                },
                {
                  icon: "MapPin",
                  label: "Адрес",
                  value: "Москва, ул. Примерная, д. 1",
                  sub: "Приём по предварительной записи",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-1">{c.label}</div>
                    <div className="font-display text-xl font-medium">{c.value}</div>
                    <div className="font-body text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-0 border border-border"
            >
              <div className="p-6 border-b border-border">
                <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full bg-transparent font-body text-sm font-light outline-none placeholder:text-muted-foreground/40"
                />
              </div>
              <div className="p-6 border-b border-border">
                <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-transparent font-body text-sm font-light outline-none placeholder:text-muted-foreground/40"
                />
              </div>
              <div className="p-6 border-b border-border">
                <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Опишите вашу задачу..."
                  className="w-full bg-transparent font-body text-sm font-light outline-none placeholder:text-muted-foreground/40 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-[hsl(222,28%,7%)] font-body text-sm font-medium py-5 hover:opacity-90 transition-opacity tracking-widest uppercase"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gold flex items-center justify-center">
              <span className="font-display font-bold text-[hsl(222,28%,7%)] text-xs">А</span>
            </div>
            <span className="font-display text-base font-medium">АудитПро</span>
          </div>
          <p className="font-body text-xs text-muted-foreground font-light">
            © 2024 АудитПро. Профессиональные бухгалтерские услуги.
          </p>
          <div className="flex gap-6">
            {[
              { id: "home", label: "Главная" },
              { id: "services", label: "Услуги" },
              { id: "contacts", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-body text-xs text-muted-foreground hover:text-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}