import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-white/80 backdrop-blur-s rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 border border-gray-100 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`
      }}
    >
      {/* Kép */}
      <div className="overflow-hidden bg-gray-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      {/* Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'Registration Platform',
      description: 'Full-stack registration website with payment integration, e-mail notification and a simple CRUD dashboard',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: 'https://registrationrunforfreedom.ro',
      image: '/regweb.jpg',
    },
    {
      title: 'CI/CD pipeline',
      description: 'Learning project for experimenting with CI/CD pipelines, containerization, and Kubernetes orchestration.',
      tech: ['Docker', 'K8s', 'Jenkins', 'Python'],
      link: 'https://github.com/yourusername/project2',
      image: './makefile.png',
    },
    {
      title: 'Alerting tool',
      description: 'I made this project to learn about monitoring and alerting.',
      tech: ['Python', 'Grafana', 'Prometheus', 'Docker'],
      link: 'https://github.com/klkkristof/Monalert',
      image: './monitor.png',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* sötétebb overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-blue-40/90 to-white/75"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-white transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
