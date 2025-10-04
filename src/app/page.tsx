'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Sun, Moon, MapPin, ExternalLink, Briefcase, Code, GraduationCap, Trophy, Github, Chrome, Satellite, FileText, Target, Zap, Star, ChevronDown, ArrowRight } from 'lucide-react';
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

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
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

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 font-sans">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-slate-200 dark:border-slate-800">
          <div className="container flex h-16 items-center justify-between px-4">
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
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="h-9 w-9 hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
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
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              {/* Avatar */}
              <div className="inline-block">
                <Avatar className="h-32 w-32 mx-auto ring-4 ring-slate-200 dark:ring-slate-700">
                  <AvatarImage src="/avatar.jpg" alt="Abhinav Maurya" />
                  <AvatarFallback className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-2xl font-bold">AM</AvatarFallback>
                </Avatar>
              </div>

              {/* Name and Title */}
              <div className="space-y-4">
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
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-700 dark:text-slate-300">Noida, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-2">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-700 dark:text-slate-300">+91 8299142953</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-2">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-700 dark:text-slate-300">abhinavmaurya747@gmail.com</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button
                  size="lg"
                  className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 shadow-sm"
                  onClick={() => scrollToSection('experience')}
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                  onClick={() => window.open('https://linkedin.com/in/acidentlgenius', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <ChevronDown className="h-6 w-6 text-slate-400 dark:text-slate-500 animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        <div className="container px-4 pb-24 space-y-24">
        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="container max-w-6xl mx-auto">
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
                <Card className="relative md:ml-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
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
                        <span>Developing and deploying machine learning models for enterprise applications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Working with large-scale data processing and AI-driven solutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Collaborating with cross-functional teams to implement ML solutions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Tata Consultancy Services - Full Stack Developer */}
                <Card className="relative md:ml-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
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
                        <span>Built and maintained full-stack web applications using modern technologies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Implemented responsive user interfaces with React and backend APIs with Node.js/Flask</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Integrated machine learning models into web applications for enhanced functionality</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Collaborated in agile development teams and participated in code reviews</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* ResoluteAI - ML Intern */}
                <Card className="relative md:ml-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
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
                        <span>Gained hands-on experience in machine learning model development and deployment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Worked on data preprocessing, feature engineering, and model evaluation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Contributed to research projects and learned industry best practices</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Code className="h-4 w-4" />
                Featured Projects
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                What I&apos;ve Built
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A showcase of my technical projects and innovative solutions
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Code Smart Chrome Extension */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-slate-900 dark:bg-slate-100 rounded-lg">
                      <Chrome className="h-6 w-6 text-white dark:text-slate-900" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                        Code Smart Chrome Extension
                      </CardTitle>
                      <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                        Jan 2024 - Dec 2025
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    A powerful Chrome extension designed to enhance coding productivity and learning.
                    Features intelligent code suggestions, debugging assistance, and seamless integration
                    with popular coding platforms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Chrome Extension</Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">JavaScript</Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Productivity</Badge>
                  </div>
                  <Button className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>

              {/* Satellite Imagery Prediction */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-slate-900 dark:bg-slate-100 rounded-lg">
                      <Satellite className="h-6 w-6 text-white dark:text-slate-900" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                        Satellite Imagery Prediction
                      </CardTitle>
                      <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                        July 2020 - Dec 2020
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    An advanced machine learning project focused on analyzing satellite imagery for predictive analytics.
                    Utilizes computer vision and deep learning techniques to extract meaningful insights
                    from geospatial data.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Machine Learning</Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Computer Vision</Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Geospatial</Badge>
                  </div>
                  <Button className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="container max-w-6xl mx-auto">
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
        <section id="education" className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
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
        <section id="achievements" className="py-20 px-4 bg-white dark:bg-slate-950">
          <div className="container max-w-6xl mx-auto">
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
                    Hacker Earth
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
                    AJSE Journal
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Springer Publication
                  </p>
                </CardContent>
              </Card>

              {/* Coding Problems */}
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-white dark:text-slate-900" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Competitive Programming
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
                    Coding Platforms
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        </div>

        {/* Footer */}
        <footer className="border-t bg-muted/50">
          <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built with ❤️ using Next.js and shadcn/ui
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/acidentlgenius" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
