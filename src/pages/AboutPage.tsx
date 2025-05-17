import { CheckCircle, Award, Code, Users, Laptop } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import profileImage from '../profileimage.png';
const AboutPage = () => {
  const skills = [
    { name: 'WordPress Development', percentage: 95 },
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript/React', percentage: 85 },
    { name: 'UI/UX Design', percentage: 88 },
    { name: 'Responsive Design', percentage: 95 },
    { name: 'SEO Optimization', percentage: 90 },
    { name: 'Plugin Development', percentage: 85 },
    { name: 'Theme Customization', percentage: 92 },
  ];

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
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
              Crafting exceptional digital experiences through creative design and clean code
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <img 
                src={profileImage} 
                alt="Ali Rizwan" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-3/5">
              <SectionHeading 
                subtitle="MY STORY"
                title="Hi, I'm Ali Rizwan"
                description="WordPress designer and front-end developer with a passion for creating beautiful, functional websites."
                alignment="left"
              />
              <p className="text-gray-700 mb-6">
                I'm a passionate WordPress designer from Pakistan, dedicated to building modern, responsive, and user-friendly websites. With strong skills in SEO, HTML, CSS, JavaScript, and React, I focus on creating fast, SEO-friendly sites that look great and perform even better.
              </p>
              <p className="text-gray-700 mb-6">
                My mission is to help clients build a powerful online presence through clean code and creative design. I approach each project with a focus on delivering websites that not only look stunning but also achieve business objectives through optimized performance and user experience.
              </p>
              <p className="text-gray-700 mb-6">
                Based in Bahawalnagar, Punjab, Pakistan, I work with clients worldwide to create impactful digital experiences that drive results.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://github.com/alirizwan1231" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  GitHub Profile
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="MY EXPERTISE"
            title="Skills & Technologies"
            description="A comprehensive range of technical skills and design expertise to bring your vision to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-gray-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="MY JOURNEY"
            title="Experience & Education"
            description="My professional background and educational qualifications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Work Experience</h3>
              
              <div className="space-y-12">
                <div className="relative pl-10 pb-8 border-l-2 border-primary-200">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary-600 p-2 rounded-full">
                    <Laptop className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      2023 - Present
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">WordPress Web Designer</h4>
                    <p className="text-gray-600 italic">Freelance</p>
                  </div>
                  <p className="text-gray-700">
                    Creating powerful WordPress websites for clients worldwide, focusing on custom solutions and optimal performance.
                  </p>
                </div>
                
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary-600 p-2 rounded-full">
                    <Code className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      2022 - 2024
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">Front-End Developer</h4>
                    <p className="text-gray-600 italic">User-Focused Development</p>
                  </div>
                  <p className="text-gray-700">
                    Developing responsive and user-friendly websites using modern front-end technologies.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Education & Certifications</h3>
              
              <div className="space-y-12">
                <div className="relative pl-10 pb-8 border-l-2 border-secondary-200">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-secondary-600 p-2 rounded-full">
                    <Award className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 text-sm font-medium rounded-full mb-2">
                      2023
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">WordPress Development</h4>
                    <p className="text-gray-600 italic">Udemy</p>
                  </div>
                  <p className="text-gray-700">
                    Comprehensive training in WordPress development, theme customization, and plugin development.
                  </p>
                </div>
                
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-secondary-600 p-2 rounded-full">
                    <Award className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 text-sm font-medium rounded-full mb-2">
                      2022
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">Front-End Web Development</h4>
                    <p className="text-gray-600 italic">Apna College</p>
                  </div>
                  <p className="text-gray-700">
                    Focused on modern front-end development technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Values Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                subtitle="MY VALUES"
                title="What I Believe In"
                description="The core principles that guide my work and client relationships."
                alignment="left"
              />

              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Quality First</h3>
                    <p className="text-gray-600">
                      Delivering the highest quality work with attention to every detail.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Clear Communication</h3>
                    <p className="text-gray-600">
                      Maintaining transparent and regular communication throughout projects.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Client Success</h3>
                    <p className="text-gray-600">
                      Focusing on solutions that drive real business results.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Continuous Learning</h3>
                    <p className="text-gray-600">
                      Staying updated with the latest technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;