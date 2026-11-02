export type Lang = "ru" | "en";
export type L<T> = Record<Lang, T>;

export const config = {
  name: "Shinmenn",
  github: "https://github.com/shinmenn",
  telegram: "https://t.me/gkqdx",
  email: "execdoto@mail.ru",
  resume: "",
};

export interface Project {
  id: string;
  name: string;
  kind: L<string>;
  description: L<string>;
  highlights: L<string[]>;
  stack: string[];
  badge: L<string>;
  links: { label: L<string>; href: string }[];
}

export const projects: Project[] = [
  {
    id: "braid",
    name: "Braid",
    kind: {
      ru: "Платформа интеграции данных",
      en: "Data integration platform",
    },
    description: {
      ru: "Бэкенд на Go и дашборд на React для управления интеграциями между системами.",
      en: "A Go backend and a React dashboard for managing integrations between systems.",
    },
    highlights: {
      ru: [
        "Go + Gin, PostgreSQL 17",
        "Дашборд на React и MUI",
        "Открытый исходный код",
      ],
      en: [
        "Go + Gin, PostgreSQL 17",
        "React and MUI dashboard",
        "Open source",
      ],
    },
    stack: ["Go", "Gin", "PostgreSQL", "React", "MUI", "Docker"],
    badge: { ru: "Open source", en: "Open source" },
    links: [
      {
        label: { ru: "Код на GitHub", en: "Source on GitHub" },
        href: "https://github.com/shinmenn/braid",
      },
    ],
  },
  {
    id: "tealog",
    name: "Tealog",
    kind: {
      ru: "Сервис сбора и просмотра логов",
      en: "Log collection and viewing service",
    },
    description: {
      ru: "Webhook-сервис, который принимает логи по protobuf, отдаёт их обратно по protobuf и REST, и показывает в веб-интерфейсе.",
      en: "A webhook service that ingests logs over protobuf, serves them back over protobuf and REST, and shows them in a web UI.",
    },
    highlights: {
      ru: [
        "Чистый микросервис без прокси и авторизационного слоя",
        "Интерфейс на русском, английском и китайском, светлая и тёмная тема",
        "Запуск одной командой через Docker Compose, миграции БД",
      ],
      en: [
        "A pure microservice with no proxy or auth layer",
        "UI in Russian, English and Chinese, light and dark themes",
        "One-command start with Docker Compose, DB migrations",
      ],
    },
    stack: ["Python", "FastAPI", "protobuf", "Next.js", "TypeScript", "Tailwind", "Docker"],
    badge: { ru: "Open source", en: "Open source" },
    links: [
      {
        label: { ru: "Код на GitHub", en: "Source on GitHub" },
        href: "https://github.com/shinmenn/tealog",
      },
    ],
  },
  {
    id: "visualizer",
    name: "Go Concurrency Visualizer",
    kind: {
      ru: "Интерактивный визуализатор конкурентности",
      en: "Interactive concurrency visualizer",
    },
    description: {
      ru: "Показывает, как работают горутины, каналы и воркер-пулы: схема на canvas, таймлайн и метрики в реальном времени.",
      en: "Shows how goroutines, channels and worker pools behave: a canvas diagram, a timeline and live metrics.",
    },
    highlights: {
      ru: [
        "Next.js и Tailwind, небольшой бэкенд на Go",
        "Сохранение сценариев по ссылке",
        "Исходный код закрыт, доступна живая версия",
      ],
      en: [
        "Next.js and Tailwind, a small Go backend",
        "Scenarios saved as shareable links",
        "Closed source, live version available",
      ],
    },
    stack: ["TypeScript", "Next.js", "React", "Tailwind", "Canvas", "Go"],
    badge: { ru: "Живая демка", en: "Live demo" },
    links: [
      {
        label: { ru: "Открыть демо", en: "Open the demo" },
        href: "https://boorishly-pretty-zorilla.cloudpub.ru/",
      },
    ],
  },
];

export interface Service {
  title: L<string>;
  text: L<string>;
}

export const services: Service[] = [
  {
    title: { ru: "API и бэкенд под ключ", en: "APIs and backends, end to end" },
    text: {
      ru: "REST и gRPC сервисы на Go или Python: схема БД, миграции, авторизация, тесты, Docker. Документация OpenAPI в комплекте.",
      en: "REST and gRPC services in Go or Python: DB schema, migrations, auth, tests, Docker. OpenAPI docs included.",
    },
  },
  {
    title: { ru: "Интеграции и вебхуки", en: "Integrations and webhooks" },
    text: {
      ru: "Связываю сервисы между собой: приём и отправка вебхуков, очереди, повторные попытки, сбор и просмотр логов.",
      en: "I connect services together: webhook in and out, queues, retries, log collection and viewing.",
    },
  },
  {
    title: { ru: "Дашборды и интерфейсы", en: "Dashboards and interfaces" },
    text: {
      ru: "Фронтенд на TypeScript, React и Next.js поверх вашего API: таблицы, графики, тёмная тема, несколько языков.",
      en: "TypeScript, React and Next.js frontends on top of your API: tables, charts, dark mode, multiple languages.",
    },
  },
];

export interface Role {
  company: string;
  role: L<string>;
  period: L<string>;
  points: L<string[]>;
}

export const experience: Role[] = [
  {
    company: "Радар ММС",
    role: { ru: "Разработчик, производственная практика", en: "Developer, production internship" },
    period: { ru: "Практика", en: "Internship" },
    points: {
      ru: [
        "API Gateway на Go, маршрутизирующий запросы к 8 сервисам",
        "Сервис авторизации на JWT и админ-панель",
        "Сервис файлового хранилища на MinIO",
        "Мини-кластер Kubernetes для файловой системы RAG",
      ],
      en: [
        "A Go API gateway routing requests to 8 services",
        "A JWT auth service and an admin panel",
        "A file storage service on MinIO",
        "A small Kubernetes cluster for a RAG file system",
      ],
    },
  },
];

export const stack: { group: L<string>; items: string[] }[] = [
  { group: { ru: "Бэкенд", en: "Backend" }, items: ["Go", "Python", "FastAPI", "gRPC", "protobuf", "NATS JetStream"] },
  { group: { ru: "Данные", en: "Data" }, items: ["PostgreSQL", "MinIO", "SQL-миграции"] },
  { group: { ru: "Фронтенд", en: "Frontend" }, items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { group: { ru: "Инфраструктура", en: "Infrastructure" }, items: ["Docker", "Docker Compose", "Kubernetes", "CI"] },
];

export const t = {
  nav: {
    services: { ru: "Услуги", en: "Services" },
    projects: { ru: "Проекты", en: "Projects" },
    experience: { ru: "Опыт", en: "Experience" },
    contact: { ru: "Контакты", en: "Contact" },
  },
  hero: {
    eyebrow: { ru: "Go · Python · TypeScript", en: "Go · Python · TypeScript" },
    title: {
      ru: "Делаю бэкенды и интерфейсы, которые работают и которые можно поддерживать",
      en: "I build backends and interfaces that work and can be maintained",
    },
    text: {
      ru: "Full-stack разработчик. Сильная сторона — бэкенд на Go и Python: API, интеграции, потоки данных. Интерфейсы делаю на TypeScript и React, чтобы проект сдавался целиком, а не по частям.",
      en: "Full-stack developer. My strength is backend in Go and Python: APIs, integrations, data flows. I build interfaces in TypeScript and React so a project is delivered whole, not in pieces.",
    },
    primary: { ru: "Обсудить задачу", en: "Discuss a task" },
    secondary: { ru: "Смотреть проекты", en: "See the projects" },
  },
  sections: {
    services: { ru: "Чем могу помочь", en: "How I can help" },
    servicesNote: {
      ru: "Стоимость называю после того, как пойму задачу. Небольшие задачи беру отдельно.",
      en: "I quote after I understand the task. Small tasks are welcome on their own.",
    },
    projects: { ru: "Проекты", en: "Projects" },
    experience: { ru: "Опыт", en: "Experience" },
    stack: { ru: "Технологии", en: "Stack" },
    contact: { ru: "Напишите мне", en: "Get in touch" },
    contactText: {
      ru: "Опишите задачу в паре предложений: что есть сейчас и что нужно получить. Отвечу с вопросами и оценкой сроков.",
      en: "Describe the task in a couple of sentences: what exists now and what you need. I will reply with questions and a time estimate.",
    },
  },
  ui: {
    theme: { ru: "Сменить тему", en: "Toggle theme" },
    education: {
      ru: "Образование: ВОЕНМЕХ им. Д. Ф. Устинова, 09.02.07 «Информационные системы и программирование», 2023–2027",
      en: "Education: BSTU Voenmeh, 09.02.07 Information Systems and Programming, 2023–2027",
    },
  },
} as const;
