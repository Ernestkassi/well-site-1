"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Activity,
  Anchor,
  ArrowRight,
  ArrowUp,
  Award,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Cloud,
  Code,
  Cpu,
  CreditCard,
  Database,
  DollarSign,
  ExternalLink,
  Eye,
  Factory,
  FileText,
  Globe,
  Heart,
  Languages,
  Layers,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Plane,
  Rocket,
  Search,
  Send,
  Shield,
  Ship,
  Smartphone,
  Sun,
  Target,
  TrendingUp,
  Twitter,
  Users,
  X,
  Zap,
} from "lucide-react";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// ==================== TYPES ====================
interface ThemeContextType {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

// ==================== CONTEXT ====================
const ThemeContext = createContext<ThemeContextType | null>(null);
const LanguageContext = createContext<LanguageContextType | null>(null);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

// ==================== TRANSLATIONS ====================
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      solutions: "Solutions",
      industries: "Industries",
      projects: "Projects",
      insights: "Insights",
      careers: "Careers",
      contact: "Contact",
      cta: "Request Meeting",
    },
    hero: {
      badge: "Leading Global Innovation",
      title1: "Transforming",
      title2: "Enterprise Excellence",
      title3: "At Scale",
      subtitle:
        "Pioneering solutions across Fintech, Maritime, and Technology sectors. Trusted by Fortune 500 companies to deliver transformative innovation.",
      cta1: "Explore Our Ecosystem",
      cta2: "Schedule Consultation",
      stats1: "Global Presence",
      stats2: "Enterprise Clients",
      stats3: "Success Rate",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      solutions: "Solutions",
      industries: "Secteurs",
      projects: "Projets",
      insights: "Actualités",
      careers: "Carrières",
      contact: "Contact",
      cta: "Rendez-vous",
    },
    hero: {
      badge: "Leader Mondial de l'Innovation",
      title1: "Transformer",
      title2: "L'Excellence d'Entreprise",
      title3: "À Grande Échelle",
      subtitle:
        "Solutions pionnières dans les secteurs Fintech, Maritime et Technologie. La confiance du Fortune 500.",
      cta1: "Notre Écosystème",
      cta2: "Consultation",
      stats1: "Présence Mondiale",
      stats2: "Clients Entreprise",
      stats3: "Taux de Réussite",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca",
      solutions: "Soluciones",
      industries: "Sectores",
      projects: "Proyectos",
      insights: "Noticias",
      careers: "Carreras",
      contact: "Contacto",
      cta: "Reunión",
    },
    hero: {
      badge: "Líder Global en Innovación",
      title1: "Transformando",
      title2: "Excelencia Empresarial",
      title3: "A Escala",
      subtitle:
        "Soluciones pioneras en Fintech, Marítimo y Tecnología. Confianza Fortune 500.",
      cta1: "Nuestro Ecosistema",
      cta2: "Consultoría",
      stats1: "Presencia Global",
      stats2: "Clientes Empresariales",
      stats3: "Tasa de Éxito",
    },
  },
};

// ==================== ANIMATED BACKGROUND ====================
const AnimatedBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Mesh */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          theme === "dark"
            ? "bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 opacity-90"
            : "bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50 opacity-90"
        }`}
      />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === "dark" ? "bg-blue-500/20" : "bg-blue-400/30"
        }`}
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === "dark" ? "bg-violet-500/20" : "bg-violet-400/30"
        }`}
      />

      {/* Grid Pattern */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          theme === "dark" ? "opacity-20" : "opacity-10"
        }`}
        style={{
          backgroundImage:
            theme === "dark"
              ? "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')"
              : "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')",
        }}
      />
    </div>
  );
};

const AdvancedParticles = () => {
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(59, 130, 246, ${p.opacity}) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -200, 0],
            opacity: [0, p.opacity, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ==================== 3D CARD EFFECT ====================
const Card3D: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`perspective-1000 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

// ==================== THEME PROVIDER ====================
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to dark
    const savedTheme =
      (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ==================== LANGUAGE PROVIDER ====================
const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved language preference
    const savedLang = localStorage.getItem("language") || "en";
    setLanguageState(savedLang);
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations[language as keyof typeof translations];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ==================== NAVBAR ADVANCED ====================
const AdvancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = [
        "home",
        "about",
        "solutions",
        "industries",
        "projects",
        "insights",
        "careers",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: t("nav.home"),
      href: "#home",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      label: t("nav.about"),
      href: "#about",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      label: t("nav.solutions"),
      href: "#solutions",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      label: t("nav.industries"),
      href: "#industries",
      icon: <Factory className="w-4 h-4" />,
    },
    {
      label: t("nav.projects"),
      href: "#projects",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      label: t("nav.insights"),
      href: "#insights",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      label: t("nav.careers"),
      href: "#careers",
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: t("nav.contact"),
      href: "#contact",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo with Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-2xl flex items-center justify-center"
                >
                  <Globe className="w-8 h-8 text-white" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl blur-xl opacity-50" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  NEXUS
                </span>
                <div className="text-xs text-blue-400 font-medium">
                  GLOBAL SOLUTIONS
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden xl:flex items-center space-x-4">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <Search className="w-5 h-5 text-gray-300" />
              </motion.button>

              {/* Language Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors">
                  <Languages className="w-5 h-5" />
                  <span className="text-sm uppercase font-medium">
                    {language}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-40 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {["en", "fr", "es"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`w-full px-4 py-3 text-left text-sm hover:bg-blue-500/10 first:rounded-t-xl last:rounded-b-xl transition-colors ${
                        language === lang
                          ? "text-blue-400 font-semibold"
                          : "text-gray-300"
                      }`}
                    >
                      {lang === "en"
                        ? "🇬🇧 English"
                        : lang === "fr"
                        ? "🇫🇷 Français"
                        : "🇪🇸 Español"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-400" />
                )}
              </motion.button>

              {/* CTA Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 text-white rounded-xl text-sm font-semibold shadow-lg"
              >
                {t("nav.cta")}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-3 rounded-xl hover:bg-white/5 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="xl:hidden fixed inset-y-0 right-0 w-full max-w-md bg-black/95 backdrop-blur-2xl z-40 border-l border-white/10"
          >
            <div className="flex flex-col h-full p-8 pt-32">
              <div className="flex-1 space-y-2 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors text-gray-300 hover:text-white"
                  >
                    {link.icon}
                    <span className="text-lg font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex gap-3">
                  {["en", "fr", "es"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${
                        language === lang
                          ? "bg-blue-500 text-white"
                          : "bg-white/5 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>

                <button
                  onClick={toggleTheme}
                  className="w-full px-6 py-4 border border-white/20 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-colors"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </button>

                <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-xl font-semibold">
                  {t("nav.cta")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ==================== HERO SECTION ULTRA ====================
const UltraHeroSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      <AnimatedBackground />
      <AdvancedParticles />

      {/* Floating 3D Elements */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-[4rem] backdrop-blur-sm border border-white/5 rotate-12"
      />
      <motion.div
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-[5rem] backdrop-blur-sm border border-white/5 -rotate-12"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-400">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-7xl lg:text-8xl font-black mb-6 leading-none">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="block text-white"
              >
                {t("hero.title1")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="block bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 text-transparent bg-clip-text"
              >
                {t("hero.title2")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="block text-white"
              >
                {t("hero.title3")}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 text-white rounded-2xl font-semibold flex items-center gap-3 shadow-xl"
              >
                {t("hero.cta1")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 backdrop-blur-xl text-white rounded-2xl font-semibold hover:bg-white/5 transition-all"
              >
                {t("hero.cta2")}
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10"
            >
              {[
                { value: "80+", label: t("hero.stats1") },
                { value: "500+", label: t("hero.stats2") },
                { value: "99.9%", label: t("hero.stats3") },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-2 border-violet-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border-2 border-purple-500/20 rounded-full"
              />

              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              </div>

              {/* Floating Icons */}
              {[
                {
                  icon: <DollarSign />,
                  pos: "top-0 left-1/2 -translate-x-1/2",
                  delay: 0,
                },
                {
                  icon: <Anchor />,
                  pos: "right-0 top-1/2 -translate-y-1/2",
                  delay: 1,
                },
                {
                  icon: <Smartphone />,
                  pos: "bottom-0 left-1/2 -translate-x-1/2",
                  delay: 2,
                },
                {
                  icon: <Database />,
                  pos: "left-0 top-1/2 -translate-y-1/2",
                  delay: 3,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                  className={`absolute ${item.pos} w-16 h-16 bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white shadow-2xl`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

// ==================== STATS TICKER ====================
const StatsTicker = () => {
  const stats = [
    { icon: <Globe />, value: "80+", label: "Countries" },
    { icon: <Building2 />, value: "500+", label: "Enterprise Clients" },
    { icon: <Users />, value: "10K+", label: "Employees" },
    { icon: <Award />, value: "99.9%", label: "Uptime" },
    { icon: <TrendingUp />, value: "$50B+", label: "Transactions" },
    { icon: <Shield />, value: "100%", label: "Compliance" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/20 via-violet-900/20 to-purple-900/20 border-y border-white/5">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-xl mb-3 text-blue-400">
                {stat.icon}
              </div>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== ABOUT SECTION WITH TIMELINE ====================
const AboutSection = () => {
  const timelineData = [
    {
      year: "1999",
      title: "Foundation",
      desc: "Company founded with vision for global transformation",
      icon: <Rocket />,
    },
    {
      year: "2003",
      title: "First Expansion",
      desc: "Opened offices in 15 countries across 3 continents",
      icon: <Globe />,
    },
    {
      year: "2008",
      title: "Maritime Division",
      desc: "Launched advanced maritime logistics solutions",
      icon: <Anchor />,
    },
    {
      year: "2012",
      title: "Fintech Launch",
      desc: "Introduced revolutionary payment infrastructure",
      icon: <DollarSign />,
    },
    {
      year: "2016",
      title: "Digital Transformation",
      desc: "AI and cloud solutions for Fortune 500",
      icon: <Cloud />,
    },
    {
      year: "2020",
      title: "Global Leader",
      desc: "Recognized as industry leader with 80+ countries",
      icon: <Award />,
    },
    {
      year: "2024",
      title: "Future Ready",
      desc: "Next-gen solutions with quantum computing integration",
      icon: <Cpu />,
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-semibold text-violet-400">
              OUR STORY
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">25 Years of</span>
            <span className="block bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
              Innovation Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From a startup to a global powerhouse, our journey is defined by
            relentless innovation
          </p>
        </motion.div>

        {/* Horizontal Scrolling Timeline */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-violet-500/20 scrollbar-track-transparent"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-80 scroll-snap-align-start"
              >
                <Card3D>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 h-full hover:border-violet-500/50 transition-all duration-500 group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-t-3xl" />

                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>

                    <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text mb-3">
                      {item.year}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>

                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500" />
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-violet-900/20 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower global enterprises with transformative technology
              solutions that drive sustainable growth, operational excellence,
              and competitive advantage across all strategic sectors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the world's most trusted technology partner, pioneering
              innovations that shape the future of global commerce, maritime
              operations, and digital transformation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== SOLUTIONS GRID ADVANCED ====================
const SolutionsGrid = () => {
  const solutions = [
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Fintech Infrastructure",
      desc: "Real-time payment processing at global scale",
      features: [
        "Instant Settlement",
        "Multi-Currency",
        "Fraud Detection",
        "API Integration",
      ],
      color: "from-blue-500 to-cyan-500",
      stats: { transactions: "$2B+/day", countries: "150+", uptime: "99.99%" },
    },
    {
      icon: <Anchor className="w-10 h-10" />,
      title: "Maritime Solutions",
      desc: "AI-powered port and logistics management",
      features: [
        "Fleet Tracking",
        "Route Optimization",
        "Cargo Management",
        "Predictive Maintenance",
      ],
      color: "from-indigo-500 to-blue-500",
      stats: { ports: "200+", vessels: "5K+", efficiency: "+45%" },
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Platforms",
      desc: "Scalable enterprise cloud infrastructure",
      features: [
        "Auto-Scaling",
        "Multi-Region",
        "Disaster Recovery",
        "24/7 Support",
      ],
      color: "from-violet-500 to-purple-500",
      stats: { users: "10M+", regions: "25", sla: "99.9%" },
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Cybersecurity",
      desc: "Enterprise-grade security solutions",
      features: [
        "Threat Detection",
        "Zero Trust",
        "Compliance",
        "Incident Response",
      ],
      color: "from-red-500 to-orange-500",
      stats: { threats: "1B+ blocked", compliance: "100%", response: "<5min" },
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Analytics & BI",
      desc: "Advanced data analytics and insights",
      features: [
        "Real-time Dashboards",
        "Predictive Analytics",
        "Custom Reports",
        "AI Insights",
      ],
      color: "from-green-500 to-emerald-500",
      stats: { data: "500TB+", insights: "1M+/day", accuracy: "98%" },
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "AI & Machine Learning",
      desc: "Next-gen artificial intelligence solutions",
      features: ["Neural Networks", "Computer Vision", "NLP", "AutoML"],
      color: "from-purple-500 to-pink-500",
      stats: { models: "1K+", accuracy: "99.5%", speed: "10ms" },
    },
  ];

  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">
              OUR SOLUTIONS
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">Enterprise-Grade</span>
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
              Technology Stack
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card3D className="h-full">
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 h-full group overflow-hidden hover:border-white/20 transition-all duration-500">
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-2xl`}
                  >
                    {solution.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{solution.desc}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    {Object.entries(solution.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className={`text-lg font-bold bg-gradient-to-r ${solution.color} text-transparent bg-clip-text`}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== INDUSTRIES SHOWCASE ====================
const IndustriesShowcase = () => {
  const industries = [
    {
      name: "Financial Services",
      icon: <CreditCard className="w-12 h-12" />,
      clients: 150,
      projects: 450,
      bg: "from-blue-600 to-cyan-600",
      image: "💳",
    },
    {
      name: "Maritime & Logistics",
      icon: <Ship className="w-12 h-12" />,
      clients: 85,
      projects: 220,
      bg: "from-indigo-600 to-blue-600",
      image: "🚢",
    },
    {
      name: "Technology & SaaS",
      icon: <Code className="w-12 h-12" />,
      clients: 200,
      projects: 680,
      bg: "from-violet-600 to-purple-600",
      image: "💻",
    },
    {
      name: "Healthcare",
      icon: <Activity className="w-12 h-12" />,
      clients: 95,
      projects: 180,
      bg: "from-green-600 to-emerald-600",
      image: "🏥",
    },
    {
      name: "Manufacturing",
      icon: <Factory className="w-12 h-12" />,
      clients: 120,
      projects: 340,
      bg: "from-orange-600 to-red-600",
      image: "🏭",
    },
    {
      name: "Energy & Utilities",
      icon: <Zap className="w-12 h-12" />,
      clients: 75,
      projects: 190,
      bg: "from-yellow-600 to-orange-600",
      image: "⚡",
    },
  ];

  return (
    <section
      id="industries"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Factory className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-400">
              INDUSTRIES WE SERVE
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">Trusted Across</span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Every Sector
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.bg} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Emoji Background */}
                <div className="absolute top-0 right-0 text-9xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {industry.image}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${industry.bg} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}
                >
                  {industry.icon}
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                  {industry.name}
                </h3>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-black text-blue-400">
                      {industry.clients}+
                    </div>
                    <div className="text-sm text-gray-500">Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-violet-400">
                      {industry.projects}+
                    </div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-6 flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Explore Solutions <ChevronRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== PROJECTS GALLERY ====================
const ProjectsGallery = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Global Payment Network",
      category: "fintech",
      client: "Fortune 100 Bank",
      result: "$2B+ daily transactions",
      image: "💰",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Smart Port System",
      category: "maritime",
      client: "International Port Authority",
      result: "40% efficiency increase",
      image: "⚓",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Enterprise Cloud Migration",
      category: "technology",
      client: "Global Retail Chain",
      result: "10M+ users supported",
      image: "☁️",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Fraud Detection AI",
      category: "fintech",
      client: "Payment Processor",
      result: "99.9% accuracy",
      image: "🛡️",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Fleet Optimization",
      category: "maritime",
      client: "Shipping Corporation",
      result: "30% cost reduction",
      image: "🚢",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Data Analytics Platform",
      category: "technology",
      client: "Healthcare Provider",
      result: "500TB data processed",
      image: "📊",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const categories = ["all", "fintech", "maritime", "technology"];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold text-green-400">
              CASE STUDIES
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">Proven</span>
            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
              Success Stories
            </span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`}
                />

                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 overflow-hidden h-full">
                  {/* Large Emoji */}
                  <div className="text-8xl mb-6 group-hover:scale-110 transition-transform">
                    {project.image}
                  </div>

                  {/* Category Badge */}
                  <div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 rounded-full text-xs font-semibold text-white mb-4 capitalize`}
                  >
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Client */}
                  <p className="text-gray-400 mb-4">{project.client}</p>

                  {/* Result */}
                  <div className="flex items-center gap-2 text-green-400 font-semibold mb-6">
                    <TrendingUp className="w-5 h-5" />
                    <span>{project.result}</span>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-semibold text-blue-400"
                  >
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// ==================== INSIGHTS HUB ====================
const InsightsHub = () => {
  const articles = [
    {
      category: "Fintech",
      title: "The Future of Cross-Border Payments in 2026",
      author: "Sarah Chen",
      date: "Feb 4, 2026",
      readTime: "8 min",
      image: "💳",
      featured: true,
    },
    {
      category: "Maritime",
      title: "AI-Driven Port Optimization: A Deep Dive",
      author: "Marcus Liu",
      date: "Feb 3, 2026",
      readTime: "12 min",
      image: "🚢",
      featured: false,
    },
    {
      category: "Technology",
      title: "Quantum Computing in Enterprise Systems",
      author: "Dr. Elena Rodriguez",
      date: "Feb 2, 2026",
      readTime: "15 min",
      image: "⚛️",
      featured: false,
    },
    {
      category: "Security",
      title: "Zero Trust Architecture: Implementation Guide",
      author: "James Park",
      date: "Feb 1, 2026",
      readTime: "10 min",
      image: "🔐",
      featured: false,
    },
  ];

  return (
    <section
      id="insights"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 to-black"
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <FileText className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-orange-400">
              INSIGHTS & RESEARCH
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">Latest</span>
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">
              Industry Insights
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:row-span-2"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl overflow-hidden h-full group hover:border-white/20 transition-all">
              {/* Image */}
              <div className="h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-9xl group-hover:scale-110 transition-transform duration-500">
                {articles[0].image}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-semibold text-orange-400 mb-4">
                  {articles[0].category}
                </div>

                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {articles[0].title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>{articles[0].author}</span>
                  <span>•</span>
                  <span>{articles[0].date}</span>
                  <span>•</span>
                  <span>{articles[0].readTime} read</span>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-orange-400 font-semibold"
                >
                  Read Full Article <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.article>

          {/* Other Articles */}
          <div className="space-y-8">
            {articles.slice(1).map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all">
                  <div className="flex gap-6">
                    <div className="text-6xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {article.image}
                    </div>

                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-gray-400 mb-3">
                        {article.category}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== CAREERS PORTAL ====================
const CareersPortal = () => {
  const positions = [
    {
      title: "Senior Fintech Solutions Architect",
      location: "London, UK",
      type: "Full-time",
      department: "Engineering",
      experience: "8+ years",
      salary: "$180K - $250K",
    },
    {
      title: "Maritime Systems Engineer",
      location: "Singapore",
      type: "Full-time",
      department: "Maritime",
      experience: "5+ years",
      salary: "$120K - $160K",
    },
    {
      title: "Cloud Infrastructure Lead",
      location: "New York, USA",
      type: "Full-time",
      department: "Cloud",
      experience: "7+ years",
      salary: "$160K - $220K",
    },
    {
      title: "Product Manager - Digital Platforms",
      location: "Remote",
      type: "Full-time",
      department: "Product",
      experience: "6+ years",
      salary: "$140K - $190K",
    },
  ];

  return (
    <section id="careers" className="py-32 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-6">
            <Users className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-semibold text-pink-400">
              JOIN OUR TEAM
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">Build the Future</span>
            <span className="block bg-gradient-to-r from-pink-400 to-rose-400 text-transparent bg-clip-text">
              With Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join a team of exceptional people driving global innovation
          </p>
        </motion.div>

        {/* Open Positions */}
        <div className="grid gap-6 mb-16">
          {positions.map((position, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                      {position.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.experience}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">
                        {position.salary}
                      </div>
                      <div className="text-xs text-gray-500">Annual Salary</div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Perks */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart />,
              title: "Health & Wellness",
              desc: "Comprehensive healthcare for you and family",
            },
            {
              icon: <Plane />,
              title: "Global Mobility",
              desc: "Work from anywhere with flexible remote options",
            },
            {
              icon: <TrendingUp />,
              title: "Growth & Learning",
              desc: "Unlimited education budget and mentorship",
            },
          ].map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-white/10 rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                {perk.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {perk.title}
              </h3>
              <p className="text-gray-400">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT CENTER ====================
const ContactCenter = () => {
  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">Let's Transform</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Your Business
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Industry
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:outline-none transition-colors">
                  <option value="">Select your industry</option>
                  <option value="fintech">Financial Services</option>
                  <option value="maritime">Maritime & Logistics</option>
                  <option value="technology">Technology & SaaS</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-lg shadow-2xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Headquarters */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Global Headquarters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="text-gray-300">
                    <p>123 Innovation Drive</p>
                    <p>London EC2N 2DL</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:contact@nexus-global.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@nexus-global.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <a
                    href="tel:+442071234567"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +44 20 7123 4567
                  </a>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Regional Offices
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-400">
                {[
                  "🇺🇸 New York",
                  "🇸🇬 Singapore",
                  "🇦🇪 Dubai",
                  "🇭🇰 Hong Kong",
                  "🇩🇪 Frankfurt",
                  "🇯🇵 Tokyo",
                ].map((office, i) => (
                  <div key={i} className="text-sm">
                    {office}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <Linkedin />, color: "from-blue-600 to-blue-700" },
                { icon: <Twitter />, color: "from-sky-500 to-blue-600" },
                { icon: <Mail />, color: "from-violet-600 to-purple-600" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white shadow-xl`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER MEGA ====================
const MegaFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black border-t border-white/5 pt-20 pb-12">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="text-3xl font-black text-white">NEXUS</div>
                <div className="text-sm text-blue-400 font-semibold">
                  GLOBAL SOLUTIONS
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Empowering global enterprises with transformative technology
              solutions across Fintech, Maritime, and Digital sectors since
              1999.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-xl font-semibold"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold mb-4">Solutions</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "Fintech Infrastructure",
                "Maritime Systems",
                "Cloud Platforms",
                "Cybersecurity",
                "Analytics & BI",
                "AI & ML",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "About Us",
                "Leadership",
                "Careers",
                "Press & Media",
                "Partners",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Security",
                "Compliance",
                "Accessibility",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 NEXUS Global. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              ISO 27001 Certified
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-400" />
              SOC 2 Type II
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-violet-400" />
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==================== SCROLL TO TOP ====================
const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center text-white shadow-2xl"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==================== MAIN APP ====================
export default function UltraCorporateWebsite() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
          <AdvancedNavbar />
          <UltraHeroSection />
          <StatsTicker />
          <AboutSection />
          <SolutionsGrid />
          <IndustriesShowcase />
          <ProjectsGallery />
          <InsightsHub />
          <CareersPortal />
          <ContactCenter />
          <MegaFooter />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
