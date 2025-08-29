import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-2xl font-bold mb-2">Sachin Gupta</h1>
        <p className="text-gray-600">Full Stack Developer</p>
      </header>

      {/* About */}
      <section className="mb-16">
        <p className="mb-4 leading-relaxed">
          As an experienced full-stack developer, I specialize in crafting dynamic web applications and robust software solutions. 
          With expertise in JavaScript (JS), TypeScript (TS), Java, and Kotlin, 
          I offer a versatile skill set for tackling challenges across the software development lifecycle.
        </p>
        
        <p className="mb-4 leading-relaxed">
          In my role as an independent consultant, I collaborate with diverse teams and clients, delivering tailored solutions that exceed expectations. 
          My ability to seamlessly integrate frontend and backend technologies ensures cohesive, user-centric applications.
        </p>
        
        <p className="mb-4 leading-relaxed">
          I thrive in fast-paced environments, driven by a passion for innovation and efficiency. 
          By staying updated on emerging technologies and best practices, I deliver cutting-edge solutions that are scalable and future-proof.
        </p>
        
        <p className="leading-relaxed">
          With a commitment to excellence and continuous learning, I empower businesses to thrive in the digital landscape, pushing the boundaries of what is possible in software development.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Skills & Technologies</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">Java</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">Kotlin</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">Spring Boot</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">Spring Framework</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">Microservices</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">REST APIs</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">React</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">Next.js</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">TypeScript</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">JavaScript</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Other</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">Git</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">Database Design</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">System Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Work Experience</h2>
        
        <div className="space-y-6">
          <div>
            <div className="text-sm text-gray-500">Jul 2023 - Present</div>
            <div className="font-medium">NEC</div>
            <div className="text-sm text-gray-600">Lead Software Engineer</div>
            <p className="text-sm text-gray-700 mt-2">
              Spearheading critical software projects for government clients while leading a team of 5 developers. 
              Responsible for architectural decisions, data design, solution architecture, and maintaining code quality through comprehensive reviews. 
              Collaborate closely with business stakeholders to understand complex domain requirements and translate them into scalable technical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Connect</h2>
        
        <p className="mb-6 leading-relaxed">
          If you want to get in touch with me about something or just to say hi,
          reach out on social media or send me an email.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <a 
            href="https://github.com/codebysachin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-600 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          
          <a 
            href="https://www.linkedin.com/in/link-sachin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-700 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          
          <a 
            href="mailto:sachin.gupta@cognisive.co.uk"
            className="flex items-center gap-2 hover:text-red-600 transition-colors"
          >
            <Mail size={16} />
            Email
          </a>
        </div>
      </section>
    </main>
  );
}
