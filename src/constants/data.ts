export const PORTFOLIO_DATA = {
    hero: {
        name: "Sinan Pmk",
        title: "Frontend Engineer",
        location: "Kozhikode, Kerala",
        headline: "React & Next.js Developer",
        tagline: "2+ years building production-grade fintech, healthcare and SaaS applications optimized for performance and maintainability.",
        microProof: "Currently building a neuro-psychiatric hospital management platform at MetroMind Hospitals, Kochi.",
        image: "/sinan.webp"
    },
    about: {
        summary: [
            "I’m a frontend engineer based in Kozhikode, Kerala, building production-grade applications with React.js and Next.js. My work has centred on data-heavy dashboards and systems that handle sensitive data — enterprise fintech at Finnest Technologies, and now a full hospital management platform at MetroMind Hospitals, Kochi.",
            "I care about clean state, predictable data flow and component architecture that stays maintainable as a product grows. I also work daily with AI-assisted development tools, using them to move faster while reviewing every output for correctness and security."
        ],
        principles: [
            'Performance',
            'Architecture',
            'Clean Code',
            'Clean State',
            'Mentoring'
        ],
        lookingFor: "Mid-level Frontend / Fullstack roles"
    },
    experience: [
        {
            company: "MetroMind Hospitals",
            role: "Frontend Developer",
            duration: "May 2026 – Present",
            location: "Kochi",
            description: [
                "Frontend developer on a cross-functional team of clinicians, system architects, AI engineers and IT staff, building a mental health hospital management system from the ground up — generic hospital software doesn't fit the needs of psychiatric care.",
                "Digitizing every step of a patient's treatment journey — nursing stations, vitals, qEEG analysis, psychometric assessments and case sheets — cutting clinician paperwork and keeping records centralised.",
                "Built the frontend for an AI-assisted case sheet workflow that transcribes and summarises psychologist–patient sessions to auto-fill case sheets, collaborating with the backend team on AI summarization used across the platform.",
                "Unified clinical assessments and reports — qEEG, psychometric evaluations and genetic reports — into a single system, and built internal utility tools replacing paper-based department workflows.",
                "Shipped role-based interfaces across the hospital's full range of departments, plus the hospital's public marketing site."
            ],
            techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "React Query", "Zustand", "Server-Sent Events", "DigitalOcean"],
            link: "https://www.metromindhospitals.com/"
        },
        {
            company: "Finnest Technologies",
            role: "Software Developer",
            duration: "May 2024 – Feb 2026",
            location: "Kochi",
            description: [
                "Key frontend contributor to Dinero, a large-scale enterprise fintech platform used by money exchange businesses for remittance processing, AML compliance, treasury operations and accounting workflows.",
                "Built and maintained data-heavy dashboards, operational workflows and transaction systems used in real-world financial environments, including multi-step transaction flows with draft persistence.",
                "Developed AML compliance dashboards enabling compliance teams to monitor, investigate and assess financial risk, with secure Maker–Checker workflows and role-based access control (RBAC).",
                "Collaborated closely with backend teams to define data contracts, API integrations and edge case handling, and improved delivery speed through component reuse and shared form modules.",
                "Represented frontend engineering during client product demonstrations in Qatar."
            ],
            techStack: ["React 18", "Next.js", "TypeScript", "Zustand", "React Query", "REST APIs", "JWT", "Tailwind CSS"],
            link: "https://www.linkedin.com/company/finnest-technologies/posts/?feedView=all"
        },
        {
            company: "Freelance",
            role: "Frontend Engineer",
            duration: "Feb 2024 – Present",
            location: "Remote",
            description: [
                "Designed and developed custom web applications for clients including order management systems and high-converting landing pages.",
                "Delivered performant, responsive single-page applications tailored to business workflows and user needs.",
                "Built and maintained independent products such as SynConnect while managing end-to-end development from concept to deployment."
            ]
            ,
            techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Express", "MongoDB", "Redux Toolkit",]
        },
        {
            company: "Brototype",
            role: "MERN Stack Developer Intern",
            duration: "Jan 2023 – Feb 2024",
            location: "Kochi",
            description: [
                "Developed a full-stack e-commerce platform end to end, from product catalog to checkout.",
                "Implemented cart, checkout and payment workflows including online payment gateway integration, plus secure authentication and OTP verification.",
                "Designed and optimized backend APIs and database queries, building strong fundamentals in frontend architecture, backend integration and debugging."
            ]
            ,
            techStack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
            link: "https://www.linkedin.com/company/brototype/"
        },
        {
            company: "Iqraa",
            role: "Tutor",
            duration: "Past Experience",
            location: "Calicut",
            description: [
                "Tutored primary-to-high school students up to Xth Standard.",
                "Developed engaging study plans simplifying complex syllabuses into understandable blocks."
            ],
            techStack: ["Mentoring", "Teaching", "Communication"]
        }
    ],
    projects: [
        {
            title: "MetroMind",
            tagline: "Neuro-Psychiatric Hospital Management Platform",
            company: "MetroMind Hospitals",
            description: "A multi-role platform covering the hospital's full clinical and operational workflow — nursing, reception, therapists, psychologists and psychiatrists, each with interfaces tailored to their permissions. Features AI audio transcription of sessions, AI-powered case sheet auto-fill, report summarization, and real-time sync across concurrent users via Server-Sent Events. The clinical platform is internal; the public hospital site linked here is part of the same build.",
            techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "React Query", "Zustand", "SSE"],
            image: "/projects/metromind.webp",
            link: "https://www.metromindhospitals.com/"
        },
        {
            title: "Dinero",
            tagline: "Enterprise Core Financial & AML Compliance System",
            company: "Finnest Technologies",
            description: "A large-scale fintech system spanning 90+ modules across treasury, accounting, AML compliance, reporting and transaction processing. Built teller operations, onboarding, workflow automation and compliance features, handling high-volume financial data through code splitting, lazy loading, memoization and virtualization.",
            techStack: ["React 18", "Next.js", "TypeScript", "Zustand", "React Query", "Tailwind CSS"],
            image: "https://res.cloudinary.com/dtgwrj1md/image/upload/v1772624060/cust-dash_zjjuuz.png",
            link: "https://www.linkedin.com/company/finnest-technologies/posts/?feedView=all",
            isConfidential: true
        },
        {
            title: "SynConnect",
            tagline: "The Future of Professional Networking",
            company: "Freelance",
            description: "A premium NFC-based digital business card platform supporting 250+ active users. Solo development featuring customizable profile systems, analytics tracking, lead capture and contact exchange metrics.",
            techStack: ["Next.js", "Redux Toolkit", "React Query", "Node.js", "Express", "MongoDB"],
            image: "https://res.cloudinary.com/dtgwrj1md/image/upload/v1772569866/Screenshot_From_2026-03-04_01-58-14_rl24sb.png",
            link: "https://synconnect.in"
        },
         {
            title: "Carewell",
            tagline: "AI-Powered Clinical Management SaaS",
            company: "Personal Project",
            description: "A clinical management platform for homeopathic doctors to manage patient cases. Features structured UI for medical histories, Google Gemini AI for automated data organization, and a high-performance MongoDB caching system with secure RBAC.",
            techStack: ["Next.js", "MongoDB", "Gemini AI", "Tailwind CSS", "TypeScript"],
            image: "https://res.cloudinary.com/dtgwrj1md/image/upload/v1774367513/Screenshot_From_2026-03-24_21-21-16_cd2ly6.png",
            // link: "https://carewell-ai-clinic-management.vercel.app/"
        },
        {
            title: "Venture Apparels",
            tagline: "Modern E-Commerce with Seamless Checkout",
            company: "Personal Project",
            description: "A full-stack MERN platform featuring an intuitive shopping experience, advanced admin dashboard for inventory management, and secure Razorpay payment integration.",
            techStack: ["MongoDB", "Express", "React", "Node.js"],
            image: "https://res.cloudinary.com/dtgwrj1md/image/upload/v1772587913/Screenshot_From_2026-03-04_07-01-17_ek5gvr.png",
            link: "#"
        }
    ],
    skills: {
        languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
        frontend: ["React.js", "Next.js", "Tailwind CSS", "Zustand", "React Query", "Redux Toolkit", "Vite", "Bootstrap", "React Router", "Axios", "Responsive Design"],
        backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT Authentication"],
        tools: ["Git", "GitHub", "GitHub Actions", "DigitalOcean", "Claude Code", "Postman", "Firebase", "Razorpay", "Twilio"]
    },
    education: [
        {
            degree: "Bachelor of Science in Chemistry (65%)",
            institution: "Zamorins Guruvayoorappan College, Calicut University",
            period: "2019 – 2022"
        },
        {
            degree: "Higher Secondary (86%)",
            institution: "M.M.V.H.S.S",
            period: "2017 – 2019"
        },
        {
            degree: "Xth - CBSE (100%)",
            institution: "Sapphire Central School",
            period: "2016 – 2017"
        }
    ],
    testimonials: [
        {
            name: "Nazeem",
            role: "Founder, SynConnect",
            content: "Sinan's ability to translate complex networking concepts into a seamless digital experience was remarkable. SynConnect's growth is a testament to his engineering prowess.",
            image: "https://res.cloudinary.com/dtgwrj1md/image/upload/v1772576824/Screenshot_From_2026-03-04_03-54-07_ukqzvg.png"
        },
        {
            name: "Haashir",
            role: "Founder, Azhag",
            content: "The custom order management software Sinan built for Azhag is both beautiful and highly functional. It has significantly streamlined our startup's operations while delivering a premium user experience.",
            image: "https://res.cloudinary.com/dtgwrj1md/image/upload/v1772576825/Screenshot_From_2026-03-04_03-56-10_uloz06.png"
        },
        {
            name: "Sahad",
            role: "Founder, Trinity Bags",
            content: "Professional, efficient, and technically brilliant. Sinan delivered our landing page ahead of schedule with zero compromises on quality.",
            image: "https://res.cloudinary.com/dtgwrj1md/image/upload/v1772577044/Screenshot_From_2026-03-04_04-00-26_whvbdc.png"
        },

    ],
    socialLinks: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/sinan-pmk/",
            icon: "FaLinkedin",
            color: "text-[#0A66C2]",
            borderColor: "border-[#0A66C2]/30",
            hoverText: "hover:text-[#0A66C2]",
            hoverBg: "hover:bg-[#0A66C2]/10",
            hoverBorder: "hover:border-[#0A66C2]/20"
        },
        {
            name: "GitHub",
            url: "https://github.com/snanpmk",
            icon: "FaGithub",
            color: "text-white",
            borderColor: "border-white/30",
            hoverText: "hover:text-white",
            hoverBg: "hover:bg-white/10",
            hoverBorder: "hover:border-white/20"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/917736689774",
            icon: "FaWhatsapp",
            color: "text-[#25D366]",
            borderColor: "border-[#25D366]/30",
            hoverText: "hover:text-[#25D366]",
            hoverBg: "hover:bg-[#25D366]/10",
            hoverBorder: "hover:border-[#25D366]/20"
        }
    ]
};
