import { createI18n } from "vue-i18n";

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
        en: {
            about: "I am a backend developer specializing in Go and Rust.",
            ul: "My other endeavours:",
            li1: "industrial confusion and inconvenience engineering",
            li2: "using alchemic approach to write code",
            li3: "research in the field of higher vibelogy",
            projects: "Projects",
            repo: "View repo",
            masterbeat: "A TUI metronome built with Go.",
            jazzcoding: "My blog page. Built with Rust (Actix, Diesel) and Vue3. Uses PostgreSQL.",
            "black-turtle": "Telegram bot for viewing schedule in my college. Built with Go. Uses PostgreSQL and Redis.",
            contacts: "Find me here",
            telegram: "Telegram",
            "telegram-desc": "I spend more time there than I'd like to admit",
            github: "Github",
            "github-desc": "Game changing projects here",
            email: "Email",
            "email-desc": "I am open to talk business",
            misc: "Check out my other stuff",
            channel: "My telegram channel",
            "channel-desc": "Memes and stuff (warning: russian language)",
            blog: "My blog",
            "blog-desc": "Long reads (warning: russian language)",
            library: "My library",
            "library-desc": "Curious books. Also contains cheat sheets and sheet music",
        },
        ru: {
            about: "Я бекэнд разработчик, специализирующийся на Go и Rust.",
            ul: "Мои увлечения:",
            li1: "производственный хаос и инженерия неудобств",
            li2: "применение алхимического подхода к написанию кода",
            li3: "исследования в области высшей кайфологии",
            projects: "Проекты",
            repo: "Репозиторий",
            masterbeat: "Метроном в терминале на Go.",
            jazzcoding: "Мой блог. Сделан на Rust (Actix, Diesel) и Vue3. Используется PostgreSQL.",
            "black-turtle": "Телеграм бот для просмотра расписания в моем колледже. Сделан на Go. Используется PostgreSQL и Redis.",
            contacts: "Я доступен здесь",
            telegram: "Telegram",
            "telegram-desc": "Я провожу в нем больше времени, чем стоило бы",
            github: "Github",
            "github-desc": "Проекты, перевернувшие индустрию",
            email: "Email",
            "email-desc": "Я открыт для деловых предложений",
            misc: "Зацени еще",
            channel: "Телеграм канал",
            "channel-desc": "Приколы о программировании и не только",
            blog: "Блог",
            "blog-desc": "Для более длинных постов",
            library: "Библиотека",
            "library-desc": "Занятные книжки. Также есть шпаргалки и ноты",
        }
    }

})

export default i18n;
