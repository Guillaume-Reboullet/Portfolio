import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    php,
    sql,
    git,
    docker,
    my_quiz,
    spotify,
    twitter,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Full Stack",
        icon: creator,
    },
    {
        title: "Javascript Developer",
        icon: mobile,
    },
    {
        title: "Github Illustator",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Sql",
        icon: sql,
    },
    {
        name: "Php",
        icon: php,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Backend",
        company_name: "Epitech",
        icon: backend,
        iconBg: "#383E56",
        date: "Nov 2024 - Nov 2025",
        points: [
            "Developing web-based applications like Meetic, Twitter clones using PHP and JavaScript ES6.",
            "Creating backend services and APIs using TypeScript and object-oriented programming.",
            "Developing web games using JavaScript.",
            "Working on websites database and back end using Laravel and Symphony.",
        ],
    },
    {
        title: "Front-End",
        company_name: "Epitech",
        icon: mobile,
        iconBg: "#E6DEDD",
        date: "Nov 2024 - Nov 2025",
        points: [
            "Developing user interfaces for various projects using React and Tailwind CSS.",
            "Ensuring responsive design and cross-browser compatibility.",
            "Collaborating with cross-functional teams to deliver high-quality products.",
            "Participating in code reviews and providing constructive feedback.",
        ],
    },
    {
        title: "Full Stack",
        company_name: "Epitech",
        icon: creator,
        iconBg: "#383E56",
        date: "Nov 2024 - Nov 2025",
        points: [
            "Building e-commerce sites using React, Symfony, and Laravel.",
            "Developing complex algorithms for games, sorting, parsing.",
            "Creating quiz applications using Symfony, Bootstrap, and SQL.",
            "Building real-time chat applications using Socket IO and the MERN stack.",
        ],
    },
    {
        title: "Developer JavaScript",
        company_name: "Epitech",
        icon: web,
        iconBg: "#E6DEDD",
        date: "Nov 2024 - Nov 2025",
        points: [
            "Creating full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
            "Building backend services with TypeScript and object-oriented programming.",
            "Implementing modern JavaScript (ES6) features and practices in development.",
            "Designing and coding applications with integrated front-end and back-end solutions.",
        ],
    },
];

const projects = [
    {
        name: "My Quiz",
        description:
            "Web-based platform that allows users to test their general knowledge through quizzes, track their quiz history and scores, and create new quizzes once registered.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "symfony",
                color: "green-text-gradient",
            },
            {
                name: "twig",
                color: "pink-text-gradient",
            },
        ],
        image: my_quiz,
        source_code_link: "https://github.com/Guillaume-Reboullet/My-Quiz",
    },
    {
        name: "Tweet Academy",
        description:
            "Web-based social network platform designed for students, mimicking Twitter's functionalities including tweeting, following, messaging, and hashtagging.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: twitter,
        source_code_link: "https://github.com/Guillaume-Reboullet/Tweet-Academy",
    },
    {
        name: "Spotify",
        description:
            "Web-based music streaming platform that allows users to browse and play albums, genres, and artists, utilizing a provided API for data retrieval and management.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "docker",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: spotify,
        source_code_link: "https://github.com/Guillaume-Reboullet/Spotify",
    },
];

export { services, technologies, experiences, projects };