import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeading from "../components/shared/SectionHeading";


interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  client: string;
  date: string;
  link: string;
  repo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CryptoNex",
    category: "Web App",
    tags: ["Cryptocurrency", "React", "Financial", "Dashboard"],
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A comprehensive cryptocurrency dashboard and tracking application that provides real-time market data, portfolio management, and detailed analytics for crypto investors.",
    client: "Personal Project",
    date: "2023",
    link: "https://crypto-nex-two.vercel.app",
    repo: "https://github.com/alirizwan1231/CryptoNex"
  },
  {
    id: 2,
    title: "Urban Nest",
    category: "Real Estate",
    tags: ["Property Management", "Real Estate", "Web App"],
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A modern real estate platform for property listings, featuring advanced search functionality, property details, agent profiles, and inquiry management for prospective buyers and renters.",
    client: "Urban Properties",
    date: "May 2023",
    link: "https://urban-nest-wheat.vercel.app",
    repo: "https://github.com/alirizwan1231/Property-Dealer"
  },
  {
    id: 3,
    title: "CryptoTrack",
    category: "Finance",
    tags: ["Cryptocurrency", "Tracking", "Financial Tech"],
    image: "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A sleek cryptocurrency tracking application with price alerts, portfolio tracking, and historical data visualization to help users make informed investment decisions.",
    client: "Crypto Enthusiasts",
    date: "May 2023",
    link: "https://cryptotrack-vert.vercel.app",
    repo: "https://github.com/alirizwan1231/Crypto-Site"
  },
  {
    id: 4,
    title: "Prism Blog",
    category: "Blog Platform",
    tags: ["Dark Theme", "Content Management", "Blog"],
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A modern blogging platform with a sleek dark theme, featuring a comprehensive content management system, categorized articles, and an engaging reader experience.",
    client: "Content Creators",
    date: "May 2023",
    link: "https://prismblog.vercel.app",
    repo: "https://github.com/alirizwan1231/Dark-Theme-Blog"
  },
  {
    id: 5,
    title: "BoostMate",
    category: "Mobile App",
    tags: ["Tracking", "Mobile", "Productivity"],
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A comprehensive tracking mobile application designed to help users monitor activities, set goals, and improve productivity with insightful analytics and personalized recommendations.",
    client: "Performance Solutions",
    date: "May 2023",
    link: "https://boostmate.vercel.app",
    repo: "https://github.com/alirizwan1231/Tracking-mobile-app"
  },
  {
    id: 6,
    title: "BoostLab",
    category: "Marketing",
    tags: ["Digital Marketing", "Agency", "Services"],
    image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A professional website for a digital marketing agency showcasing their services, case studies, client testimonials, and results-driven marketing solutions for businesses of all sizes.",
    client: "BoostLab Digital",
    date: "May 2023",
    link: "https://boostlab-xi.vercel.app",
    repo: "https://github.com/alirizwan1231/Digital-Marketing-Agency"
  },
  {
    id: 7,
    title: "SkillUp Academy",
    category: "Education",
    tags: ["E-Learning", "Courses", "Education"],
    image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "An online learning platform featuring a wide range of courses, intuitive navigation, student progress tracking, and interactive learning materials for skill development.",
    client: "Educational Initiatives",
    date: "May 2023",
    link: "https://skillupacademy-blush.vercel.app",
    repo: "https://github.com/alirizwan1231/Courses-website"
  },
  {
    id: 8,
    title: "Graceful Glow",
    category: "Beauty & Wellness",
    tags: ["Salon", "Beauty", "Service Booking"],
    image: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A sophisticated website for a premium salon, featuring service listings, online booking, stylist profiles, and a gallery showcasing beauty transformations and salon ambiance.",
    client: "Graceful Glow Salon",
    date: "May 2023",
    link: "https://gracefulglow-xi.vercel.app",
    repo: "https://github.com/alirizwan1231/Saloon-webiste"
  },
  {
    id: 9,
    title: "Thompson Photo",
    category: "Photography",
    tags: ["Portfolio", "Photography", "Gallery"],
    image: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "An elegant portfolio website for a professional photographer, showcasing their work through beautifully designed galleries, offering services information, and client testimonials.",
    client: "Thompson Photography",
    date: "May 2023",
    link: "https://thompsonphoto.vercel.app",
    repo: "https://github.com/alirizwan1231/Photographer-Portfolio"
  },
  {
    id: 10,
    title: "Vision Core",
    category: "Business",
    tags: ["Corporate", "Business Solutions", "Services"],
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A professional corporate website for a business solutions provider, featuring service offerings, team profiles, case studies, and a streamlined contact system for prospective clients.",
    client: "Vision Core Solutions",
    date: "May 2023",
    link: "https://vision-core-beta.vercel.app",
    repo: "https://github.com/alirizwan1231/VisionCore"
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter
    ? projects.filter(project => project.category === filter)
    : projects;

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Hero Section */}
 <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-80"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary-200 rounded-full opacity-10 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-slide-up">
            My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            A showcase of my recent projects and client work
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="MY WORK"
            title="Recent Projects"
            description="Take a look at some of the projects I've worked on recently."
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category === 'All' ? null : category)}
                className={`px-5 py-2 rounded-full font-medium transition-colors ${
                  (category === 'All' && filter === null) || category === filter
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="card overflow-hidden cursor-pointer group"
                onClick={() => openProjectDetails(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <button className="btn bg-white hover:bg-gray-100 text-primary-600 text-sm py-2">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-sm font-medium text-primary-600">{project.category}</span>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-auto overflow-hidden shadow-xl animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-72 object-cover"
              />
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-900 hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm font-medium text-primary-600 block mb-1">{selectedProject.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                </div>
                <div className="flex gap-3">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 flex items-center"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={selectedProject.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                  <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-500 text-sm">Client</p>
                      <p className="font-medium">{selectedProject.client}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Date</p>
                      <p className="font-medium">{selectedProject.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Category</p>
                      <p className="font-medium">{selectedProject.category}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button 
                  onClick={closeProjectDetails}
                  className="btn bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <p className="text-primary-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">75+</div>
              <p className="text-primary-100">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <p className="text-primary-100">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <p className="text-primary-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="TRUSTED BY"
            title="Clients I've Worked With"
            description="Proud to have collaborated with these amazing businesses."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                <div className="text-center text-lg font-bold text-gray-400">
                  LOGO {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;