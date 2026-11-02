export const PORTFOLIO_DATA = {
    hero: {
        name: "Sinan Pmk",
        title: "Frontend Engineer",
        location: "Kozhikode, Kerala",
        headline: "React & Next.js Engineer",
        tagline: "Frontend Engineer with 3 years designing and building large-scale healthcare and fintech applications in React, Next.js and TypeScript — with AI integrated into production workflows.",
        microProof: "Sole frontend engineer on MetroMind's Hospital Management and Clinical Decision Support platforms — with AI-assisted case taking in production.",
        image: "/sinan.webp"
    },
    about: {
        summary: [
            "I’m a frontend engineer based in Kozhikode, Kerala, with 3 years of designing and building large-scale web applications in healthcare and fintech. I work across frontend system design and codebase architecture, taking features from requirements gathering to release on complex, domain-heavy products.",
            "Today I’m the sole frontend engineer at Utharam Health Tech, where I set up MetroMind’s Hospital Management and Clinical Decision Support platforms from scratch. Before that, I built data-heavy dashboards and compliance workflows for Dinero, an enterprise fintech platform at Finnest Technologies.",
            "AI runs through both how I build and what I ship: I integrate AI features into production workflows — speech-to-text case taking with Sarvam AI, LLM-drafted medical notes with Gemini — and use AI-assisted development with Claude Code daily, reviewing every output for correctness and security."
        ],
        principles: [
            'Frontend Architecture',
            'System Design',
            'AI Integration',
            'Real-time UIs',
            'Performance'
        ],
        lookingFor: "Frontend Engineer roles on product teams"
    },
    experience: [
        {
            company: "Utharam Health Tech",
            companyNote: "Technology partner for MetroMind Hospital",
            role: "Frontend Engineer",
            duration: "May 2026 – Present",
            location: "Kochi",
            description: [
                "Sole frontend engineer for MetroMind’s Hospital Management System and Clinical Decision Support platform; set up both codebases from scratch with a modular, role-based architecture.",
                "Delivered the frontend for the hospital’s core departments — front desk, communication, psychology, psychiatry, inpatient and outpatient care, nursing stations and pharmacy — moving daily hospital operations off paper.",
                "Built the psychiatrist’s consultation workspace for diagnosis, prescriptions and treatment planning, bringing assessments and reports into one view for faster treatment decisions.",
                "Shipped AI-assisted case taking: Sarvam AI transcribes psychologist–patient sessions and the transcript auto-fills assessment forms, cutting manual data entry.",
                "Designed a custom real-time event layer using Server-Sent Events, with ticket-based auth against a separate ASGI backend, keeping departments in sync as patients move between them.",
                "Worked directly with the founding psychiatrist, system architects and hospital staff to turn clinical workflows into product requirements, iterating on user feedback.",
                "Designed and built the hospital’s public website, metromindhospitals.com."
            ],
            techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "TanStack Query", "Zustand", "Server-Sent Events", "Sarvam AI", "DigitalOcean"],
            link: "https://www.metromindhospitals.com/"
        },
        {
            company: "Finnest Technologies",
            role: "Software Developer (Frontend)",
            duration: "May 2024 – Feb 2026",
            location: "Kochi",
            description: [
                "Key frontend contributor to Dinero, a large-scale enterprise fintech platform used by money exchange businesses for remittance processing, AML compliance, treasury operations and accounting.",
                "Engineered data-heavy dashboards, operational workflows and transaction systems for live financial operations.",
                "Designed multi-step financial transaction flows with draft persistence, keeping critical operations reliable and recoverable.",
                "Developed AML compliance dashboards and implemented secure Maker–Checker workflows with role-based access control (RBAC) for sensitive financial actions.",
                "Defined data contracts, API integration patterns and edge-case handling together with backend teams, and introduced reusable components and shared form modules to improve performance and delivery speed.",
                "Represented the frontend team on a client visit to Qatar, presenting product demonstrations to the client."
            ],
            techStack: ["React 18", "TypeScript", "Zustand", "TanStack Query", "REST APIs", "RBAC"],
            link: "https://www.linkedin.com/company/finnest-technologies/posts/?feedView=all"
        },
        {
            company: "Brototype",
            role: "MERN Stack Developer Intern",
            duration: "Jan 2023 – Feb 2024",
            location: "Kochi",
            description: [
                "Developed a full-stack e-commerce platform end to end, from product catalog to checkout.",
                "Implemented cart, checkout and payment workflows including online payment gateway integration.",
                "Built secure authentication and OTP verification systems, and designed backend APIs and database queries for the platform."
            ],
            techStack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
            link: "https://www.linkedin.com/company/brototype/"
        }
    ],
    projects: [
        {
            title: "MetroMind",
            tagline: "Hospital Management & Clinical Decision Support Platform",
            company: "Utharam Health Tech",
            description: "A multi-department hospital platform covering the full patient journey — front desk through assessment, consultation and treatment — with role-based workspaces for every team. Its Clinical Decision Support layer unifies psychologist assessments, psychometric scales, qEEG brain-mapping and genetic reports into one patient profile, so clinicians converge on a data-driven treatment plan. AI-assisted case taking (Sarvam AI) and real-time department hand-offs over Server-Sent Events. The clinical platform is internal; the public hospital site linked here is part of the same build.",
            techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "TanStack Query", "Zustand", "SSE", "Sarvam AI"],
            image: "/projects/metromind.webp",
            link: "https://www.metromindhospitals.com/"
        },
        {
            title: "Dinero",
            tagline: "Enterprise Financial Operations Platform",
            company: "Finnest Technologies",
            description: "A large-scale fintech system spanning 90+ modules across treasury, accounting, AML compliance, reporting and transaction processing. Built critical teller, onboarding and compliance features, and designed frontend systems for high-volume financial data and real-time workflows — optimized through code splitting, lazy loading, memoization, virtualization and efficient state management.",
            techStack: ["React 18", "TypeScript", "Zustand", "TanStack Query", "REST APIs"],
            image: "https://res.cloudinary.com/dtgwrj1md/image/upload/v1772624060/cust-dash_zjjuuz.png",
            link: "https://www.linkedin.com/company/finnest-technologies/posts/?feedView=all",
            isConfidential: true
        },
        {
            title: "SynConnect",
            tagline: "NFC Digital Business Card Platform",
            company: "Founder · Feb 2024 – Present",
            description: "Founded and built a production NFC digital business card platform with 250+ active users — customizable profiles, profile sharing, analytics tracking, lead capture and a management dashboard. I own the product end to end, from the Next.js frontend and Node.js/Express APIs to deployment on DigitalOcean.",
            techStack: ["Next.js", "Redux Toolkit", "TanStack Query", "Node.js", "Express", "MongoDB", "DigitalOcean"],
            image: "https://res.cloudinary.com/dtgwrj1md/image/upload/v1772569866/Screenshot_From_2026-03-04_01-58-14_rl24sb.png",
            link: "https://synconnect.in"
        },
        {
            title: "Carewell",
            tagline: "Clinic Management Platform with AI-Drafted Notes",
            company: "Client Project",
            description: "Built with a BHMS doctor in Calicut to replace her pen-and-paper consultations: structured case-taking forms, a homeopathic assessment flow and a prescription tool designed around how she actually works. The Node.js/Express backend calls Gemini to draft medical notes that the doctor reviews and edits before saving.",
            techStack: ["Next.js 15", "Node.js", "Express.js", "MongoDB", "Gemini API", "Tailwind CSS"],
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
        languages: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
        frontend: ["React.js", "Next.js", "TanStack Query", "Zustand", "Redux Toolkit", "Tailwind CSS"],
        engineering: ["Frontend Architecture", "RBAC", "Real-time UIs (SSE)", "REST API Integration", "Performance Optimization"],
        "AI in product & workflow": ["LLM Integration (Gemini)", "Speech-to-Text (Sarvam AI)", "AI-assisted Development", "Claude Code"],
        "backend & tools": ["Node.js", "Express.js", "MongoDB", "Git", "GitHub Actions", "CI/CD", "DigitalOcean", "Vercel"]
    },
    education: [
        {
            degree: "Full-Stack Web Development (MERN)",
            institution: "Brototype, Kochi — self-paced, project-based bootcamp with weekly technical reviews",
            period: "2023 – 2024"
        },
        {
            degree: "B.Sc. Chemistry",
            institution: "Zamorin’s Guruvayurappan College, Calicut University",
            period: "2019 – 2022"
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
