

import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Computer, Book, Rocket, Speech, SkullIcon, Facebook } from "lucide-react";


export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 6,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "#!"

    }
];

export const perfil = [
    {
        id: 1,
        name: "Jose Arango",
        image: "/Llamocca.png"
    }
];
export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },

 
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Skill",
        icon: <SkullIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/sillk",
    },
    {
        id: 4,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 5,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "TechSolutions",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "PixelCrafters",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "CodeForge Solutions",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Prácticas Grado",
        subtitle: "WebWizards Inc.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 0,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 4,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Desarrollo Frontend",
        description: "Construcción de interfaces modernas con React, Next.js y Tailwind CSS, optimizadas para rendimiento y SEO.",
    },
    {
        icon: <Rocket />,
        title: "Desarrollo Backend",
        description: "Creación de APIs escalables con Node.js y NestJS, integrando bases de datos SQL y NoSQL.",
    },
    {
        icon: <CodeSquare />,
        title: "Aplicaciones Full Stack",
        description: "Desarrollo de aplicaciones completas combinando tecnologías Frontend y Backend.",
    },
    {
        icon: <Book />,
        title: "Optimización y SEO",
        description: "Mejoras en rendimiento y SEO técnico para aplicaciones web modernas.",
    },
    {
        icon: <Speech />,
        title: "Consultoría Técnica",
        description: "Asesoría en la arquitectura y desarrollo de proyectos web con tecnologías modernas.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Clon Netflix",
        image: "/Clone_Netflix.jpg",
        urlGithub: "https://github.com/JArangol1212",
        urlDemo: "https://clone-netflix-s98z-logi1znnn-jarangol1212s-projects.vercel.app/",
    },
    {
        id: 2,
        title: "Portafolio Personal",
        image: "/ArangoJose.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Gestion De Tareas",
        image: "/Gestion.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ecommerce",
        image: "/Ecommerce.png",
        urlGithub: "https://github.com/JArangol1212",
        urlDemo: "https://ecommerce-coffe-8dl1.vercel.app/",
    },
  
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];

export const dataSkill = [
    { id: 1, name: "HTML", imageUrl: "/HTML.JPG", category: "Frontend",link: "#" ,color:"ff8000"},
    { id: 2, name: "CSS", imageUrl: "/CSSS.jpg", category: "Frontend",link: "#" },
    { id: 3, name: "JavaScript", imageUrl: "/javascript.jpg", category: "Frontend",link: "#" },
    { id: 4, name: "TypeScript", imageUrl: "/TYPESCRPT.jpg", category: "Frontend",link: "#" },
    { id: 5, name: "React", imageUrl: "/REACT.jpg", category: "Frontend",link: "#" },
    { id: 6, name: "Nextjs", imageUrl: "/NEXTJS.jpg", category: "Frontend",link: "#" },
    { id: 7, name: "Tailwind", imageUrl: "/TAILWINCSS.jpg", category: "Frontend",link: "#" },
    { id: 8, name: "Bootstrap", imageUrl: "/Bootstrap.jpg", category: "Frontend",link: "#" },

    { id: 9, name: "Node.js", imageUrl: "/Nodejs.jpg", category: "Backend",link: "#" },
    { id: 10, name: "Javascript", imageUrl: "/javascript.jpg", category: "Backend", link: "#" },
    { id: 11, name: "TypeScript", imageUrl: "/TYPESCRPT.jpg", category: "Backend", link: "#" },
    { id: 12, name: "Nest.js", imageUrl: "/NESTJS.JPG", category: "Backend" ,link: "#" },
    { id: 13, name: "Express", imageUrl: "/EXPRESSJS.jpg", category: "Backend" ,link: "#" },
    { id: 14, name: "Java", imageUrl: "/java.jpg", category: "Backend", link: "#" },
    { id: 15, name: "Spring Boot", imageUrl: "/SPRINBOOT.jpg", category: "Backend", link: "#" },

    { id: 16, name: "MySQL", imageUrl: "/MYSQL.jpg", category: "Base de Datos", link: "#" },
    { id: 17, name: "PostgreSQL", imageUrl: "/POSTGRESQL.jpg", category: "Base de Datos", link: "#" },
    { id: 18, name: "MongoDB", imageUrl: "/MONODB.jpg", category: "Base de Datos", link: "#" },
    { id: 19, name: "Oracle", imageUrl: "/ORACLE.jpg", category: "Base de Datos", link: "#" },
    { id: 21, name: "SqlServer", imageUrl: "/SQLSERVER.jpg", category: "Base de Datos", link: "#" },

    { id: 23, name: "Git", imageUrl: "/GITHUB.jpg", category: "otros", link: "#" },
    { id: 24, name: "Github", imageUrl: "/GIT.jpg", category: "otros", link: "#" },
    { id: 25, name: "Visual Studio Code", imageUrl: "/VISUALSTUDIO.jpg", category: "otros", link: "#" },
];

export const Tecnologias = [

    {
        id: 1, name: "Tailwind", imageUrl: "/TAILWINCSS.jpg", category: "Frontend",
    },
    {
        id: 2, name: "Next.js", imageUrl: "/NEXTJS.jpg", category: "Frontend",
    },
  
    {
        id: 3, name: "React", imageUrl: "/REACT.jpg", category: "Frontend"
    },
    {
        id: 4, name: "Prisma", imageUrl: "/prisma.jpg", category: "Backend"
    },
    { 
        id: 10, name: "Auth", imageUrl: "/auth.jpg", category: "Backend" 
    },
]
export const Portafolio = [

    {
        id: 1, name: "Tailwind", imageUrl: "/TAILWINCSS.jpg", category: "Frontend",
    },
    {
        id: 2, name: "Next.js", imageUrl: "/NEXTJS.jpg", category: "Frontend",
    },
  
    {
        id: 3, name: "React", imageUrl: "/REACT.jpg", category: "Frontend"
    },
    {
        id: 4, name: "Typescrip", imageUrl: "/TYPESCRPT.jpg", category: "Backend"
    },
   
]


export const dataArango =[
    {
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Netflix",
        description:
          "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
      },
      {
        title: "Google",
        description:
          "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
      },
      {
        title: "Meta",
        description:
          "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
      },
      {
        title: "Amazon",
        description:
          "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
      },
      {
        title: "Microsoft",
        description:
          "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
      },
    
   
]