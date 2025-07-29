"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Code,
  Database,
  Smartphone,
  Github,
  ExternalLink,
  Mail,
  Facebook,
  Download,
  Cpu,
  Globe,
  Server,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "Java", icon: Code, category: "Backend" },
    { name: "Spring Boot", icon: Server, category: "Backend" },
    { name: "React.js", icon: Globe, category: "Frontend" },
    { name: "JavaScript", icon: Code, category: "Frontend" },
    { name: "HTML/CSS", icon: Globe, category: "Frontend" },
    { name: "PHP", icon: Code, category: "Backend" },
    { name: "C# MVC", icon: Code, category: "Backend" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "MySQL", icon: Database, category: "Database" },
    { name: "Arduino Uno", icon: Cpu, category: "IoT" },
    { name: "IoT", icon: Smartphone, category: "IoT" },
  ]

  const projects = [
    {
      title: "Student Management API",
      description:
        "A comprehensive REST API built with Spring Boot for managing student records, courses, and academic data with full CRUD operations.",
      tech: ["Spring Boot", "Java", "PostgreSQL"],
      icon: Database,
      github: "#",
      demo: "#",
    },
    {
      title: "Fire Detection System",
      description:
        "IoT-based fire detection system using Arduino Uno with sensors for real-time monitoring and alert notifications.",
      tech: ["Arduino", "C++", "IoT"],
      icon: Cpu,
      github: "#",
      demo: "#",
    },
    {
      title: "Fullstack Task Manager",
      description:
        "Modern task management application with React frontend and Spring Boot backend, featuring user authentication and real-time updates.",
      tech: ["React.js", "Spring Boot", "MySQL"],
      icon: Globe,
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
>
  {/* 🔹 Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-[1]"
  
  >
    <source src="/background.mp4" type="video/mp  4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark overlay*/}
  
  <div className="absolute inset-0 bg-black/40 z-[2]"></div>

  {/* 🔹 Optional Gradient Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40 z-[-1]"></div>

  {/* 🔹 Foreground Content */}
  <div
    className={`relative z-[3] text-center px-4 transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent tracking-tight">
      Alexander A. Estares
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
      Fullstack Developer | Spring Boot | React.js | Arduino Enthusiast
    </p>
    <Button
      size="lg"
      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
      aria-label="Download Alexander's resume"
    >
      <Download className="mr-2 h-5 w-5" />
      Download Resume
    </Button>
  </div>

  {/* 🔹 Bottom Gradient */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
</section>


      {/* About Me Section */}
      <section className="py-20 px-4 bg-black" id="about">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" duration={800}>
            <Card className="bg-gray-900/50 border-gray-800 rounded-3xl shadow-xl backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full">
                    <User className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">About Me</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                  I'm a 22-year-old passionate student developer with a strong foundation in fullstack development.
                  Currently specializing in modern web technologies like Spring Boot and React.js, while exploring the
                  exciting world of IoT with Arduino. I love creating efficient, scalable solutions and turning
                  innovative ideas into reality through code.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900" id="skills">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
              <p className="text-gray-400 text-lg">Technologies I work with</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <ScrollReveal key={skill.name} direction="up" delay={index * 100} duration={600}>
                  <Card className="bg-gray-800/50 border-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 backdrop-blur-sm group">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-gray-600">
                        {skill.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-900" id="projects">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-gray-400 text-lg">Some of my recent work</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <ScrollReveal key={project.title} direction="up" delay={index * 200} duration={700}>
                  <Card className="bg-gray-800/50 border-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-white text-center mb-2">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 mb-4 text-center leading-relaxed">
                        {project.description}
                      </CardDescription>

                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-gray-600">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3 justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 bg-transparent"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" duration={600}>
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-gray-400 text-lg mb-12">Ready to bring your ideas to life? Let's work together!</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} duration={800}>
            <Card className="bg-gray-900/50 border-gray-800 rounded-3xl shadow-xl backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <a
                    href="mailto:alexander@example.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    aria-label="Send email to Alexander"
                  >
                    <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">alexander@example.com</span>
                  </a>

                  <a
                    href="https://github.com/alexander"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    aria-label="Visit Alexander's GitHub profile"
                  >
                    <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">GitHub</span>
                  </a>

                  <a
                    href="https://facebook.com/alexander"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    aria-label="Visit Alexander's Facebook profile"
                  >
                    <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                      <Facebook className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">Facebook</span>
                  </a>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                  aria-label="Hire Alexander for your project"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Hire Me
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Alexander A. Estares. Built with Next.js & TailwindCSS.</p>
        </div>
      </footer>
    </div>
  )
}
