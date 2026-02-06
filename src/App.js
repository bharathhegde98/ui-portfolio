import React, { useState, useEffect } from "react";
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Code,
    Palette,
    Database,
    Globe,
    ChevronRight,
    Download,
    Star,
    Menu,
    X,
} from "lucide-react";

const App = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isVisible, setIsVisible] = useState({});
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1 } // Changed from 0.3 to 0.1 for better detection
        );

        document.querySelectorAll("section[id]").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Debug: Log visibility state changes
    useEffect(() => {
        console.log("isVisible state:", isVisible);
    }, [isVisible]);

    const skills = {
        frontend: [
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "jQuery",
            "Responsive Design",
        ],
        frameworks: ["Bootstrap 5", "Tailwind CSS"],
        tools: ["Git", "GitHub", "REST APIs", "AJAX", "Figma", "Adobe XD"],
        backend: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB"],
        cms: ["WordPress", "TYPO3"],
    };

    const projects = [
        {
            title: "ShopMart - E-commerce Frontend",
            image: "shopmart.png",
            description:
                "Built responsive e-commerce frontend with React.js featuring product filtering, shopping cart, and dynamic product pages. Implemented user authentication and database integration.",
            tech: [
                "React.js",
                "Node.js",
                "Express.js",
                "MySQL",
                "Bootstrap",
                "CSS3",
            ],
            features: [
                "Product Filtering",
                "Shopping Cart",
                "User Authentication",
                "Responsive Design",
            ],
            url: "https://bharathhegde98.github.io/shopmart/",
            color: "from-blue-500 to-purple-600",
        },
        {
            title: "Proventis - Frontend Web Application",
            image: "proventis.png",
            description:
                "Developed responsive web application with custom frontend components and multilingual support. Optimized performance achieving excellent Google PageSpeed scores.",
            tech: ["WordPress", "jQuery", "CSS3", "PHP", "ACF"],
            features: [
                "Custom Theme",
                "Multilingual Support",
                "PageSpeed Optimization",
                "ACF Integration",
            ],
            url: "https://proventis.com/",
            color: "from-green-500 to-teal-600",
        },
        {
            title: "Bonafinca - Real Estate Platform",
            image: "bonafinca.png",
            description:
                "Built multilingual real estate platform with OnOffice API integration for dynamic property listings. Developed custom frontend components with advanced filtering.",
            tech: [
                "Typo3",
                "React.js",
                "OnOffice API",
                "CSS3",
                "AJAX",
                "Bootstrap",
            ],
            features: [
                "API Integration",
                "Advanced Filtering",
                "SEO Optimization",
                "Multilingual",
            ],
            url: "https://bonafinca.com/",
            color: "from-orange-500 to-red-600",
        },
        {
            title: "Stockl - WordPress E-Commerce",
            image: "stockl.png",
            description:
                "Developed responsive WordPress e-commerce platform with custom themes and plugins. Implemented WooCommerce integration with advanced product filtering and payment gateways.",
            tech: [
                "WordPress",
                "WooCommerce",
                "PHP",
                "JavaScript",
                "CSS3",
                "MySQL",
                "Elementor",
            ],
            features: [
                "E-commerce Integration",
                "Custom Themes",
                "Payment Gateway",
                "Product Management",
            ],
            url: "https://stoeckl.com/",
            color: "from-orange-500 to-red-600",
        },
        {
            title: "Polyplan - One Page Website",
            image: "polyplan.png",
            description:
                "Created modern single-page website with smooth scrolling animations and responsive design. Optimized for mobile devices with fast loading times and SEO best practices.",
            tech: ["Typo3", "CSS3", "JavaScript", "Responsive Design"],
            features: [
                "Single Page Design",
                "Smooth Animations",
                "Mobile Optimized",
                "Fast Loading",
            ],
            url: "https://polyplangmbh.de/",
            color: "from-orange-500 to-red-600",
        },
    ];

    const experience = {
        company: "Satvam Softwares Private Limited",
        role: "UI Developer",
        duration: "August 2022 – Present",
        location: "Bengaluru, Karnataka",
        achievements: [
            "Developed and maintained 20+ mobile-friendly websites with cross-browser compatibility",
            "Integrated REST APIs including OnOffice API for dynamic content management",
            "Enhanced website performance resulting in 60% improved search rankings",
            "Collaborated directly with clients to implement UI/UX solutions",
        ],
    };

    const ScrollIndicator = () => (
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
            <div className="flex flex-col space-y-4">
                {[
                    "home",
                    "about",
                    "skills",
                    "projects",
                    "experience",
                    "contact",
                ].map((section) => (
                    <button
                        key={section}
                        onClick={() =>
                            document
                                .getElementById(section)
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            activeSection === section
                                ? "bg-blue-500 scale-125"
                                : "bg-gray-400 hover:bg-gray-300"
                        }`}
                        title={
                            section.charAt(0).toUpperCase() + section.slice(1)
                        }
                    />
                ))}
            </div>
        </div>
    );

    const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (isVisible.about) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min(
                        (timestamp - startTimestamp) / duration,
                        1
                    );
                    setCount(Math.floor(progress * end));
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        }, [isVisible.about, end, duration]);

        return (
            <span>
                {count}
                {suffix}
            </span>
        );
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <ScrollIndicator />

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-40 border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <button
                        onClick={() =>
                            document
                                .getElementById("home")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300 cursor-pointer"
                    >
                        Bharath Hegde
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {[
                            "Home",
                            "About",
                            "Skills",
                            "Projects",
                            "Experience",
                            "Contact",
                        ].map((item) => (
                            <button
                                key={item}
                                onClick={() =>
                                    document
                                        .getElementById(item.toLowerCase())
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className={`hover:text-blue-400 transition-colors ${
                                    activeSection === item.toLowerCase()
                                        ? "text-blue-400"
                                        : "text-gray-300"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isMobileMenuOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="px-6 py-4 bg-gray-900/98 border-t border-gray-700">
                        <div className="space-y-4">
                            {[
                                "Home",
                                "About",
                                "Skills",
                                "Projects",
                                "Experience",
                                "Contact",
                            ].map((item, index) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        document
                                            .getElementById(item.toLowerCase())
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`block w-full text-left py-2 transition-all duration-300 transform ${
                                        isMobileMenuOpen
                                            ? "translate-x-0 opacity-100"
                                            : "-translate-x-4 opacity-0"
                                    } ${
                                        activeSection === item.toLowerCase()
                                            ? "text-blue-400"
                                            : "text-gray-300 hover:text-blue-400"
                                    }`}
                                    style={{
                                        transitionDelay: `${index * 50}ms`,
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                <div className="text-center z-10 max-w-4xl mx-auto px-6">
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                            UI Developer
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8">
                            Building responsive, interactive web applications
                            with modern technologies
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30">
                                React.js
                            </span>
                            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30">
                                JavaScript ES6
                            </span>
                            <span className="px-4 py-2 bg-green-500/20 rounded-full text-green-300 border border-green-500/30">
                                Node.js
                            </span>
                            <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 border border-orange-500/30">
                                WordPress
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() =>
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                        >
                            View My Work
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href={`${process.env.PUBLIC_URL}/files/bharath_hegde_frontend_dev.pdf`}
                            download="Bharath_Hegde_Frontend_Developer_Resume.pdf"
                            className="border border-gray-600 px-8 py-3 rounded-full hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 group"
                        >
                            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <button
                        onClick={() =>
                            document
                                .getElementById("about")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="hover:text-blue-400 transition-colors cursor-pointer"
                    >
                        <ChevronRight className="w-8 h-8 rotate-90 text-gray-400" />
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div
                            className={`transition-all duration-1000 ${
                                isVisible.about
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-10"
                            }`}
                        >
                            <p className="text-lg text-gray-300 mb-6">
                                UI Developer with 3+ years of experience
                                building responsive, interactive web
                                applications. I specialize in creating
                                user-focused solutions using modern technologies
                                like React.js, JavaScript ES6, and CSS3
                                frameworks.
                            </p>
                            <p className="text-lg text-gray-300 mb-8">
                                Based in Bengaluru, I've successfully delivered
                                20+ projects with measurable performance
                                improvements, always focusing on clean code,
                                optimal performance, and excellent user
                                experience.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="mailto:bharathhegde98@gmail.com"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <Mail className="w-6 h-6" />
                                </a>
                                <a
                                    href="tel:+918762847698"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <Phone className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/bharath-hegde-138946212/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://github.com/bharathhegde98"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        <div
                            className={`transition-all duration-1000 delay-300 ${
                                isVisible.about
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-10"
                            }`}
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <div className="text-3xl font-bold text-blue-400 mb-2">
                                        <AnimatedCounter end={20} suffix="+" />
                                    </div>
                                    <p className="text-gray-300">
                                        Projects Completed
                                    </p>
                                </div>
                                <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <div className="text-3xl font-bold text-green-400 mb-2">
                                        <AnimatedCounter end={3} suffix="+" />
                                    </div>
                                    <p className="text-gray-300">
                                        Years Experience
                                    </p>
                                </div>
                                <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">
                                        <AnimatedCounter end={60} suffix="%" />
                                    </div>
                                    <p className="text-gray-300">
                                        Performance Boost
                                    </p>
                                </div>
                                <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <div className="text-3xl font-bold text-orange-400 mb-2">
                                        <AnimatedCounter end={95} suffix="%" />
                                    </div>
                                    <p className="text-gray-300">
                                        Client Satisfaction
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 bg-gray-800/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Technical Skills
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(
                            ([category, skillList], idx) => (
                                <div
                                    key={category}
                                    className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 ${
                                        isVisible.skills
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"
                                    }`}
                                    style={{
                                        transitionDelay: `${idx * 100}ms`,
                                    }}
                                >
                                    <div className="flex items-center mb-4">
                                        {category === "frontend" && (
                                            <Code className="w-6 h-6 text-blue-400 mr-3" />
                                        )}
                                        {category === "frameworks" && (
                                            <Palette className="w-6 h-6 text-purple-400 mr-3" />
                                        )}
                                        {category === "tools" && (
                                            <Globe className="w-6 h-6 text-green-400 mr-3" />
                                        )}
                                        {category === "backend" && (
                                            <Database className="w-6 h-6 text-orange-400 mr-3" />
                                        )}
                                        {category === "cms" && (
                                            <Globe className="w-6 h-6 text-pink-400 mr-3" />
                                        )}
                                        <h3 className="text-xl font-semibold capitalize">
                                            {category === "cms"
                                                ? "CMS"
                                                : category === "frontend"
                                                ? "Frontend Technologies"
                                                : category}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map((skill, i) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300 hover:bg-gray-600 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Projects Section - FIXED VERSION */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Featured Projects
                    </h2>
                    <div className="space-y-12">
                        {projects.map((project, idx) => (
                            <div
                                key={project.title}
                                className={`group grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
                                    idx % 2 === 1
                                        ? "md:grid-flow-col-dense"
                                        : ""
                                } opacity-100`} // FORCED VISIBILITY - Remove this after testing
                                style={{ transitionDelay: `${idx * 200}ms` }}
                            >
                                <div
                                    className={`${
                                        idx % 2 === 1 ? "md:col-start-2" : ""
                                    }`}
                                >
                                    <div className="h-64 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/${project.image}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div
                                    className={`${
                                        idx % 2 === 1
                                            ? "md:col-start-1 md:row-start-1"
                                            : ""
                                    }`}
                                >
                                    <h3 className="text-2xl font-bold mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        {project.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-3">
                                            KEY FEATURES
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {project.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-center text-sm text-gray-300"
                                                >
                                                    <Star className="w-3 h-3 text-yellow-400 mr-2" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-3">
                                            TECHNOLOGIES
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs bg-gray-800 border border-gray-700 rounded-full text-gray-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Visit Project
                                        </a>
                                        {project.title ===
                                            "ShopMart - E-commerce Frontend" && (
                                            <a
                                                href="https://github.com/bharathhegde98/shopmart"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6 bg-gray-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Professional Experience
                    </h2>
                    <div
                        className={`bg-gray-800/50 rounded-lg p-8 border border-gray-700 ${
                            isVisible.experience
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">
                                    {experience.role}
                                </h3>
                                <p className="text-xl text-blue-400 mb-2">
                                    {experience.company}
                                </p>
                                <div className="flex items-center text-gray-400">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {experience.location}
                                </div>
                            </div>
                            <div className="text-left md:text-right">
                                <p className="text-gray-400 mt-4 md:mt-0">
                                    {experience.duration}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {experience.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-300">
                                        {achievement}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Ready to bring your ideas to life? Let's discuss your
                        next project.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <a
                            href="mailto:bharathhegde98@gmail.com"
                            className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                        >
                            <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-gray-300 group-hover:text-blue-300 transition-colors">
                                bharathhegde98@gmail.com
                            </p>
                        </a>
                        <a
                            href="tel:+918762847698"
                            className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                        >
                            <Phone className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-semibold mb-2">Phone</h3>
                            <p className="text-gray-300 group-hover:text-green-300 transition-colors">
                                +91 876 284 76 98
                            </p>
                        </a>
                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                            <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">Location</h3>
                            <p className="text-gray-300">
                                Bengaluru, Karnataka
                            </p>
                        </div>
                    </div>

                    <a
                        href="mailto:bharathhegde98@gmail.com"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 cursor-pointer group"
                    >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Get In Touch
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-800">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Bharath Hegde. All rights
                        reserved
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
