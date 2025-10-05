'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Sun, Moon, MapPin, Briefcase, Code, GraduationCap, Trophy, Github, Chrome, Satellite, FileText, Target, Zap, Star, ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== 'light') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Intersection Observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to highlight metrics and keywords in text
  const highlightText = (text: string) => {
    // Define important keywords to highlight
    const keywords = [
      'LLM-powered', 'PostgreSQL', 'FastAPI', 'Gemini 2.5 Pro', 'Milvus', 'Google Cloud', 'Redis', 'APScheduler',
      'SQLModel', 'Selenium', 'Pandas', 'GeoJSON', 'TTL', 'CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Azure',
      'GPT-4', 'Firebase', 'Razorpay', 'TypeScript', 'TailwindCSS', 'React', 'Node.js', 'Python', 'Java',
      'Machine Learning', 'AI', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP', 'API',
      'LLM', 'vector database', 'SQL', 'Redshift', 'real-time rendering', 'agentic flow', 'real-time streaming',
      'heartbeat mechanism', 'Ceph', 'OpenStack', 'Nagios', 'DB Compute', 'DNS Provisioning', 'RESTful APIs',
      'multithreading', 'cloud orchestration', 'REST APIs', 'CLI', 'OSM', 'MongoDB', '4g/5g node deployment',
      'Flask', 'gradient boosting', 'R2 score', 'machine learning pipeline', '3D model', '2D photograph',
      'open-source tools', 'Baadal', 'BSNL'
    ];

    // Regex patterns for metrics
    const metricPatterns = [
      // Percentages: 70%, 94%, etc.
      /\b(\d+(?:\.\d+)?)%/g,
      // Numbers with units: 1GB, 150MB, 10k+, 3x, 1k+, etc.
      /\b(\d+(?:\.\d+)?)(GB|MB|KB|TB|ms|min|h|hr|hours?|days?|weeks?|months?|years?|x|\+|k\+|M\+)/gi,
      // Time formats: <200ms, 30min, 6h, etc.
      /(<|>|=)?(\d+(?:\.\d+)?)(ms|min|h|hr|hours?|days?|weeks?|months?|years?)/gi,
      // Large numbers: 10k+, 1M+, 500+, etc.
      /\b(\d+)(k\+|M\+|\+)/g
    ];

    let highlightedText = text;

    // First, highlight metrics with a specific class
    metricPatterns.forEach(pattern => {
      highlightedText = highlightedText.replace(pattern, (match) => {
        return `<span class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded font-semibold">${match}</span>`;
      });
    });

    // Then highlight keywords
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, (match) => {
        return `<span class="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-1 py-0.5 rounded font-medium">${match}</span>`;
      });
    });

    return highlightedText;
  };

  const projects = [
    {
      id: 'live-health-plus',
      icon: Target,
      title: 'Live Health Plus',
      period: 'Jan 2024 - Oct 2025',
      demoUrl: 'https://live-health-plus-frontend.vercel.app/',
      websiteUrl: 'https://live-health-plus-frontend.vercel.app/',
      githubUrl: undefined,
      description: 'An intelligent health platform aggregating global disease outbreak signals from multi-source data (CDC, ECDC, Africa CDC, Google News), extracting structured insights with Gemini 2.5 Pro, and serving interactive maps, charts, and analytics via a FastAPI backend for real-time population health monitoring.',
      keyFeatures: [
        'Re-architected Celery/Redis pipeline to a lean APScheduler-driven ingestion service, reducing operational complexity by 70%, eliminating 5+ dependencies, and cutting peak memory from ~1GB+ to ~150MB on 10k+ articles while boosting ETL throughput by 3x.',
        'Implemented LLM-powered outbreak extraction with Gemini 2.5 Pro function-calling schemas, strict validation, and Milvus vector enrichment for canonical disease metadata, achieving 94% extraction accuracy and reducing false positives from historical/irrelevant content by 65%.',
        'Designed normalized PostgreSQL data model (Disease, Location, News, OutbreakRecord, GlobalPopulationHealthIndex) with SQLModel for idempotent storage, duplicate detection, and flexible multi-tag filtering across 250+ diseases and 10K+ locations.',
        'Built robust content retrieval with Selenium, proxy rotation, and exponential backoff to handle 403/429 errors, boosting successful fetch rates by 40% and processing 1M+ articles with 99.8% uptime over 18 months.',
        'Developed FastAPI endpoints for maps (GeoJSON features), time-series charts, top-K outbreaks/symptoms, and paginated datasets, with thread-safe in-memory caching (TTL 30min) cutting DB load by 60%, p95 latency to <200ms, and supporting 1k+ concurrent queries without degradation.',
        'Automated multi-source scheduling (Google News every 6h, CDC/ECDC weekly) with audit logging, retries, and resume-from-state for resilient ETL in high-variance networks, enabling 100% data freshness within 6-hour windows and zero production data loss incidents.',
        'Deployed on Google Cloud App Engine with Cloud Build CI/CD and Secret Manager, enabling secure, cost-efficient scaling without Redis dependencies—reduced monthly infra costs by 45% while handling 10k+ API requests/month across 500+ unique users.'
      ],
      techStack: ['Python 3', 'FastAPI', 'APScheduler', 'SQLModel', 'PostgreSQL', 'Gemini 2.5 Pro', 'Milvus (Zilliz)', 'Selenium', 'Pandas', 'Google Cloud App Engine'],
      stats: 'Solo project • Processed 50k+ articles, served 10k+ API requests/month, covered 200+ countries and 50+ diseases',
      iframeScale: 1
    },
    {
      id: 'code-smart',
      icon: Chrome,
      title: 'Code Smart Chrome Extension',
      period: 'Jan 2024 - Dec 2025',
      chromeStoreUrl: 'https://chromewebstore.google.com/detail/code-smart-ai-powered-lear/abcdef123456',
      demoUrl: 'https://codesmart-demo.vercel.app',
      websiteUrl: 'https://www.codesmart.in',
      description: 'An online platform offering tailored hints, examples, and solutions for LeetCode questions via a Chrome extension, utilizing GPT-4 and Google Gemini.',
      keyFeatures: [
        'Led a 5-person team and designed the system from scratch.',
        'Integrated Razorpay for payment handling.',
        'Implemented cron jobs for daily credit updates.',
        'Structured codebase using PostgreSQL (services, controllers, DAOs).',
        'Utilized GPT-4 and Google\'s Gemini API for Chrome extension features.',
        'Built frontend with React, TypeScript, TailwindCSS for a responsive UI.',
        'Implemented Firebase authentication.'
      ],
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'GPT-4', 'Gemini API', 'Firebase Auth', 'Chrome Extension'],
      stats: 'Team of 5 • 100+ user logins, 50+ Chrome extension users',
      iframeScale: 1
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <TooltipProvider>
      <motion.div 
        className="min-h-screen bg-white dark:bg-slate-950 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Navigation */}
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8 ring-2 ring-slate-200 dark:ring-slate-700">
                <AvatarImage src="/avatar.jpg" alt="Abhinav Maurya" />
                <AvatarFallback className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold">AM</AvatarFallback>
              </Avatar>
              <span className="font-bold text-lg text-slate-900 dark:text-white">Abhinav Maurya</span>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="space-x-1">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'education', label: 'Education' },
                  { id: 'achievements', label: 'Achievements' }
                ].map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <NavigationMenuLink
                        className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                          activeSection === item.id
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300'
                        }`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleTheme}
                      className="h-9 w-9 hover:bg-slate-50 dark:hover:bg-slate-900"
                    >
                      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>

              {/* Mobile Navigation */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-80">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs">AM</AvatarFallback>
                      </Avatar>
                      Navigation
                    </SheetTitle>
                    <SheetDescription>Navigate through the portfolio</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-3 mt-6">
                    {[
                      { id: 'hero', label: 'Home' },
                      { id: 'experience', label: 'Experience' },
                      { id: 'projects', label: 'Projects' },
                      { id: 'skills', label: 'Skills' },
                      { id: 'education', label: 'Education' },
                      { id: 'achievements', label: 'Achievements' }
                    ].map((item) => (
                      <Button
                        key={item.id}
                        variant={activeSection === item.id ? "default" : "ghost"}
                        onClick={() => scrollToSection(item.id)}
                        className={`justify-start ${
                          activeSection === item.id
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                            : ''
                        }`}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
                {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-4xl w-full text-center">
            <div className="space-y-8">
              {/* Avatar */}
              <motion.div 
                className="inline-block"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <Avatar className="h-32 w-32 mx-auto ring-4 ring-slate-200 dark:ring-slate-700">
                  <AvatarImage src="/avatar.jpg" alt="Abhinav Maurya" />
                  <AvatarFallback className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-2xl font-bold">AM</AvatarFallback>
                </Avatar>
              </motion.div>

              {/* Name and Title */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                  Abhinav Maurya
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                  Machine Learning Engineer & Full Stack Developer
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Passionate about building intelligent systems and scalable web applications.
                  Experienced in machine learning, full-stack development, and cloud technologies.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="flex flex-wrap justify-center gap-4 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700 dark:text-slate-300">Noida, Uttar Pradesh</span>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700 dark:text-slate-300">+91 8299142953</span>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700 dark:text-slate-300">abhinavmaurya747@gmail.com</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 shadow-sm"
                    onClick={() => scrollToSection('experience')}
                  >
                    <Briefcase className="mr-2 h-5 w-5" />
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                    onClick={() => window.open('https://linkedin.com/in/acidentlgenius', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                </motion.div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              >
                <ChevronDown className="h-6 w-6 text-slate-400 dark:text-slate-500 animate-bounce" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-6xl w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Briefcase className="h-4 w-4" />
                Professional Experience
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                My Journey
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A timeline of my professional growth and contributions in machine learning and full-stack development
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 hidden md:block"></div>

              <div className="space-y-8">
                {/* Tata Consultancy Services - ML Engineer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative md:ml-16"
                >
                  <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="absolute -left-4 top-8 w-8 h-8 bg-slate-900 dark:bg-slate-100 rounded-full hidden md:flex items-center justify-center">
                      <Zap className="h-4 w-4 text-white dark:text-slate-900" />
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                            Machine Learning Engineer
                          </CardTitle>
                          <CardDescription className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                            Tata Consultancy Services
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 w-fit">
                          Mar 2025 - Present
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span dangerouslySetInnerHTML={{ __html: highlightText('Implemented real-time streaming with a robust heartbeat mechanism to ensure seamless, uninterrupted performance for extended LLM interactions, enhancing user experience and system reliability.') }}></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span dangerouslySetInnerHTML={{ __html: highlightText('Architected and deployed a vehicle recommendation engine by integrating research-phase algorithms into production databases, seamlessly embedding it into the core LLM chat application to deliver personalized, data-driven suggestions.') }}></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span dangerouslySetInnerHTML={{ __html: highlightText('Developed a file upload feature for chat interactions, leveraging vector database chunking and ranking-based context generation to provide precise, context-aware responses to user queries, boosting engagement and utility.') }}></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span dangerouslySetInnerHTML={{ __html: highlightText('Engineered an advanced agentic flow that decomposes complex user prompts into sub-prompts, processes them in parallel, and synthesizes results for a cohesive final response. Streamed intermediate thoughts, sub-prompt statuses, and results to the user, delivering a transparent and interactive experience.') }}></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span dangerouslySetInnerHTML={{ __html: highlightText('Enhanced chatbot capabilities by implementing prompt-driven data visualization. Automatically analyzed user prompts to identify visualization needs, generated SQL queries to fetch relevant data from Redshift, and streamed graph data to the frontend for real-time rendering, enriching user insights.') }}></span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Tata Consultancy Services - Full Stack Developer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative md:ml-16"
                >
                  <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-slate-900 dark:bg-slate-100 rounded-full hidden md:flex items-center justify-center">
                    <Code className="h-4 w-4 text-white dark:text-slate-900" />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                          Full Stack Developer
                        </CardTitle>
                        <CardDescription className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                          Tata Consultancy Services
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 w-fit">
                        Jul 2022 - Mar 2025
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: highlightText('Contributed to Baadal\'s cloud infrastructure by developing key modules (Ceph, OpenStack, Nagios, DB Compute, DNS Provisioning) that boosted scalability by 30% and supported 10K+ virtual instances; collaborated with stakeholders to align solutions with organizational needs.') }}></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: highlightText('Enhanced these modules by designing robust RESTful APIs, intuitive UIs, and integrating multithreading techniques to improve user experience and system performance under high-load conditions.') }}></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: highlightText('Engineered cloud orchestration features, REST APIs, and CLI commands using Python, Docker, Kubernetes, OSM, MongoDB, and SQL, automating virtual machine management, boosting system reliability by 25% and reducing manual intervention time by 40% across a unified portal.') }}></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: highlightText('Led and designed the implementation of a tool to automate the 4g/5g node deployment process for BSNL, reducing deployment time from 2 hours to just 20 minutes using Python, Flask, Frontend and Backend technologies. Tooling improved the speed and accuracy of deployment, saving the company time and resources.') }}></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                </motion.div>

                {/* ResoluteAI - ML Intern */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative md:ml-16"
                >
                  <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-slate-900 dark:bg-slate-100 rounded-full hidden md:flex items-center justify-center">
                    <Target className="h-4 w-4 text-white dark:text-slate-900" />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                          Machine Learning Engineer Intern
                        </CardTitle>
                        <CardDescription className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                          ResoluteAI.in
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 w-fit">
                        Jul 2021 - Oct 2021
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: highlightText('Build a dashboard for visualization of a data analytic project which boosted the process by 60%. Also, trained model using gradient boosting and added a module for prediction with an R2 score of 99.8%.') }}></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: highlightText('Created a machine learning pipeline that can create a 3D model from a given 2D photograph of a person using open-source tools and demonstrated it.') }}></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Code className="h-5 w-5" />
                Featured Projects
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
                What I&apos;ve Built
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Interactive demos and comprehensive showcases of my technical projects and innovative solutions
              </p>
            </div>

            {/* Project Display */}
            <div className="max-w-7xl mx-auto">
              {(() => {
                const project = projects[currentProject];
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-slate-300 dark:group-hover:border-slate-600">
                      {/* Project Header */}
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-slate-900 dark:bg-slate-100 rounded-lg">
                              <IconComponent className="h-6 w-6 text-white dark:text-slate-900" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                                {project.period}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {project.chromeStoreUrl && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                onClick={() => window.open(project.chromeStoreUrl, '_blank')}
                              >
                                <Chrome className="h-4 w-4 mr-1" />
                                Chrome Store
                              </Button>
                            )}
                            {project.githubUrl && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                onClick={() => window.open(project.githubUrl, '_blank')}
                              >
                                <Github className="h-4 w-4 mr-1" />
                                GitHub
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                              onClick={() => window.open(project.demoUrl, '_blank')}
                            >
                              <IconComponent className="h-4 w-4 mr-1" />
                              Demo
                            </Button>
                          </div>
                        </div>
                      </CardHeader>

                      {/* Side-by-Side Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 pb-6">
                        {/* Left Side - Website Preview */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Live Preview</h4>
                          <div className="relative bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-600 group">
                            <div className="absolute top-2 left-2 z-10 flex gap-1">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="pt-8 pb-2 px-4 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                                  <div className="w-4 h-4 bg-slate-200 dark:bg-slate-600 rounded"></div>
                                  <span className="truncate">{project.websiteUrl}</span>
                                </div>
                                <div className="flex gap-1">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                    onClick={() => window.open(project.websiteUrl, '_blank')}
                                  >
                                    <ArrowRight className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="relative flex justify-center p-4">
                              <div className="relative">
                                {/* Laptop frame */}
                                <div className="bg-gray-800 rounded-t-lg p-1 shadow-lg">
                                  <div className="bg-gray-900 rounded-sm overflow-hidden">
                                    <iframe
                                      src={project.websiteUrl}
                                      className="w-[600px] h-[375px] bg-white dark:bg-slate-900"
                                      title={`${project.title} Demo`}
                                      loading="lazy"
                                      sandbox="allow-scripts allow-same-origin"
                                      style={{
                                        width: '600px',
                                        height: '375px',
                                        transform: `scale(${project.iframeScale})`,
                                        transformOrigin: 'top center'
                                      }}
                                    ></iframe>
                                  </div>
                                </div>
                                {/* Laptop base */}
                                <div className="bg-gray-800 h-2 rounded-b-lg shadow-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Project Details */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">About This Project</h4>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightText(project.description) }}></p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Features</h4>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                              {project.keyFeatures.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span dangerouslySetInnerHTML={{ __html: highlightText(feature) }}></span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, techIndex) => (
                                <motion.div key={techIndex} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                  <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                              {project.stats.split(' • ').map((stat, statIndex) => (
                                <span key={statIndex}>
                                  {statIndex > 0 && ' • '}
                                  <span dangerouslySetInnerHTML={{ __html: highlightText(stat) }}></span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })()}

              {/* Project Navigation */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={prevProject}
                  disabled={currentProject === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span>{currentProject + 1} of {projects.length}</span>
                </div>

                <Button
                  variant="outline"
                  onClick={nextProject}
                  disabled={currentProject === projects.length - 1}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-6xl w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="h-4 w-4" />
                Technical Skills
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Expertise & Technologies
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and proficiency areas
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Programming Languages */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Code className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Python</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">C++</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">JavaScript</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">TypeScript</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">HTML/CSS</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">RDBMS</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies & Frameworks */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Zap className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    Technologies & Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">OpenAI</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Git</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">ReactJS</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Flask</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Docker</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Kubernetes</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Machine Learning</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Other Skills */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Target className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    Core Competencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Data Structures & Algorithms</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Cloud Technologies</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Software Development Life Cycle</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Software Engineering</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">CI/CD</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Full-Stack Python Development</Badge>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Microservices</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <GraduationCap className="h-4 w-4" />
                Education
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Academic Background
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                My educational foundation and academic achievements
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-slate-900 dark:bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-white dark:text-slate-900" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Bachelor of Technology
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                    Computer Science and Engineering
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-slate-700 dark:text-slate-300">
                    <p className="text-lg font-medium">Rajkiya Engineering College, Sonbhadra</p>
                    <p className="text-base text-slate-500 dark:text-slate-400">August 2018 - June 2022</p>
                    <p className="text-base text-slate-500 dark:text-slate-400">Uttar Pradesh, India</p>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-full">
                    <Star className="h-4 w-4" />
                    <span className="font-semibold">CGPA: 7.87/10</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Comprehensive education in computer science fundamentals, software engineering principles,
                    data structures, algorithms, and emerging technologies. Developed strong foundation in
                    both theoretical concepts and practical applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-6xl w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Trophy className="h-4 w-4" />
                Achievements
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Recognition & Milestones
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Key accomplishments and recognitions throughout my journey
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Hackathon Achievement */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-6 w-6 text-white dark:text-slate-900" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Hackathon Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    41st Rank
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Emotion Classification Hackathon
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Hacker Earth organized by Cogito
                  </p>
                </CardContent>
              </Card>

              {/* Research Publication */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-white dark:text-slate-900" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Research Publication
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Published Research Paper
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                    &ldquo;A regularization factor-based approach to anomaly detection using Contrastive Learning&rdquo;
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    AJSE Journal, Springer (Impact Factor: 2.807)
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    onClick={() => window.open('https://link.springer.com/article/10.1007/s13369-023-07959-7', '_blank')}
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    Read Paper
                  </Button>
                </CardContent>
              </Card>

              {/* Coding Problems */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-white dark:text-slate-900" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Data Structures & Algorithms
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    500+
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Problems Solved
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    gfg, hackerrank, leetcode, etc.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/50">
          <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 py-10 px-4 md:h-24 md:flex-row md:py-0">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/in/acidentlgenius" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </footer>
      </motion.div>
    </TooltipProvider>
  );
}
