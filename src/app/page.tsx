'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Sun, Moon, MapPin, ExternalLink, Award, Briefcase, Code, GraduationCap, Trophy, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
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
      <div className="min-h-screen bg-background font-sans">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar.jpg" alt="Abhinav Maurya" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <span className="font-bold text-lg">Abhinav Maurya</span>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                    onClick={() => scrollToSection('experience')}
                  >
                    Experience
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                    onClick={() => scrollToSection('projects')}
                  >
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                    onClick={() => scrollToSection('skills')}
                  >
                    Skills
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                    onClick={() => scrollToSection('education')}
                  >
                    Education
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                    onClick={() => scrollToSection('achievements')}
                  >
                    Achievements
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="h-9 w-9"
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
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>Navigate through the portfolio</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-6">
                    <Button variant="ghost" onClick={() => scrollToSection('experience')} className="justify-start">
                      Experience
                    </Button>
                    <Button variant="ghost" onClick={() => scrollToSection('projects')} className="justify-start">
                      Projects
                    </Button>
                    <Button variant="ghost" onClick={() => scrollToSection('skills')} className="justify-start">
                      Skills
                    </Button>
                    <Button variant="ghost" onClick={() => scrollToSection('education')} className="justify-start">
                      Education
                    </Button>
                    <Button variant="ghost" onClick={() => scrollToSection('achievements')} className="justify-start">
                      Achievements
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container px-4 py-24 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/avatar.jpg" alt="Abhinav Maurya" />
              <AvatarFallback className="text-2xl">AM</AvatarFallback>
            </Avatar>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Abhinav Maurya
              </h1>
              <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" />
                Noida, Uttar Pradesh
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Machine Learning Engineer & Full Stack Developer passionate about building scalable solutions
                and pushing the boundaries of technology.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="mailto:abhinavmaurya747@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+918299142953" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/acidentlgenius" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="container px-4 pb-24 space-y-24">
          {/* Experience */}
          <section id="experience" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">Machine Learning Engineer</CardTitle>
                      <CardDescription className="text-base">Tata Consultancy Services • Noida, India</CardDescription>
                    </div>
                    <Badge variant="secondary">Mar 2025 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Implemented real-time streaming with a robust heartbeat mechanism to ensure seamless, uninterrupted performance for extended LLM interactions, enhancing user experience and system reliability.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Architected and deployed a vehicle recommendation engine by integrating research-phase algorithms into production databases, seamlessly embedding it into the core LLM chat application to deliver personalized, data-driven suggestions.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Developed a file upload feature for chat interactions, leveraging vector database chunking and ranking-based context generation to provide precise, context-aware responses to user queries, boosting engagement and utility.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Engineered an advanced agentic flow that decomposes complex user prompts into sub-prompts, processes them in parallel, and synthesizes results for a cohesive final response. Streamed intermediate thoughts, sub-prompt statuses, and results to the user, delivering a transparent and interactive experience.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Enhanced chatbot capabilities by implementing prompt-driven data visualization. Automatically analyzed user prompts to identify visualization needs, generated SQL queries to fetch relevant data from Redshift, and streamed graph data to the frontend for real-time rendering, enriching user insights.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">Full Stack Developer</CardTitle>
                      <CardDescription className="text-base">Tata Consultancy Services • Noida, India</CardDescription>
                    </div>
                    <Badge variant="secondary">Jul 2022 - Mar 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Contributed to Baadal&apos;s cloud infrastructure by developing key modules (Ceph, OpenStack, Nagios, DB Compute, DNS Provisioning) that boosted scalability by 30% and supported 10,000+ virtual instances; collaborated with stakeholders to align solutions with organizational needs.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Enhanced these modules by designing robust RESTful APIs, intuitive UIs, and integrating multithreading techniques to improve user experience and system performance under high-load conditions.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Engineered cloud orchestration features, REST APIs, and CLI commands using Python, Docker, Kubernetes, OSM, MongoDB, and SQL, automating virtual machine management, boosting system reliability by 25% and reducing manual intervention time by 40% across a unified portal.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Led and designed the implementation of a tool to automate the 4G/5G node deployment process for BSNL, reducing deployment time from 2 hours to just 20 minutes using Python, Flask, Frontend and Backend technologies. Tooling improved the speed and accuracy of deployment, saving the company time and resources.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">Machine Learning Engineer Intern</CardTitle>
                      <CardDescription className="text-base">ResoluteAI.in • Remote</CardDescription>
                    </div>
                    <Badge variant="secondary">Jul 2021 - Oct 2021</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Build a dashboard for visualization of a data analytic project which boosted the process by 60%. Also, trained model using gradient boosting and added a module for prediction with an R2 score of 99.8%.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        Created a machine learning pipeline that can create a 3D model from a given 2D photograph of a person using open-source tools and demonstrated it.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-12">
              <Code className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Automated 4G/5G Node Deployment Tool</CardTitle>
                  <CardDescription>Python, Flask, Frontend, Backend</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Led the design and implementation of an automation tool that reduced BSNL&apos;s deployment time from 2 hours to 20 minutes, improving efficiency and accuracy.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">3D Model Generation Pipeline</CardTitle>
                  <CardDescription>Machine Learning, Open Source Tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Created an ML pipeline that generates 3D models from 2D photographs using advanced computer vision techniques.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Data Analytics Dashboard</CardTitle>
                  <CardDescription>Gradient Boosting, R2 Score 99.8%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built a visualization dashboard that improved data analytic processes by 60% with predictive modeling capabilities.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-12">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">SQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Frameworks & Libraries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Flask</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cloud & DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Docker</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">OpenStack</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MongoDB</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Redis</Badge>
                    <Badge variant="secondary">Redshift</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">Bachelor of Technology in Computer Science</CardTitle>
                      <CardDescription className="text-base">Jaypee Institute of Information Technology, Noida</CardDescription>
                    </div>
                    <Badge variant="secondary">2018 - 2022</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Focused on computer science fundamentals, software engineering, and machine learning. Active in various technical clubs and projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Achievements */}
          <section id="achievements" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-12">
              <Trophy className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Achievements</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cloud Infrastructure Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Boosted Baadal&apos;s cloud infrastructure scalability by 30%, supporting 10,000+ virtual instances through optimized module development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deployment Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Reduced BSNL&apos;s 4G/5G node deployment time from 2 hours to 20 minutes through innovative automation tooling.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Machine Learning Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Achieved 99.8% R2 score in predictive modeling and developed advanced 3D model generation pipeline from 2D photographs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">System Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Improved system reliability by 25% and reduced manual intervention by 40% through cloud orchestration and automation features.
                  </p>
                </CardContent>
              </Card>
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
