import { ArrowRight, Code, Layout, Palette, Zap, Star, CheckCircle, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 animate-slide-up">
                Crafting Seamless <span className="text-primary-600">WordPress</span> Experiences
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Delivering modern, fast, and user-focused websites that convert visitors into customers. Expert in WordPress development and front-end technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Link to="/portfolio" className="btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn-outline">
                  Let's Talk
                </Link>
              </div>
              <div className="mt-10 flex items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex -space-x-4">
                <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Client" 
                    className="w-10 h-10 object-cover rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Client" 
                    className="w-10 h-10 object-cover rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Client" 
                    className="w-10 h-10 object-cover rounded-full border-2 border-white"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Trusted by 30+ clients worldwide</p>
                </div>
             </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional Web Developer" 
                className="rounded-lg shadow-xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="WHAT I DO"
            title="Expert Services That Drive Results"
            description="I specialize in WordPress development and front-end solutions that help businesses grow and succeed online."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Layout className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">WordPress Development</h3>
              <p className="text-gray-600 mb-4">
                Custom WordPress websites with powerful features and seamless functionality.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="card p-8">
              <div className="bg-secondary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-secondary-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Front-End Development</h3>
              <p className="text-gray-600 mb-4">
                Modern front-end development using React, HTML5, CSS3, and JavaScript.
              </p>
              <Link to="/services" className="inline-flex items-center text-secondary-600 font-medium hover:text-secondary-700">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="card p-8">
              <div className="bg-accent-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Palette className="text-accent-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
              <p className="text-gray-600 mb-4">
                Search engine optimization to improve your website's visibility and rankings.
              </p>
              <Link to="/services" className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="FEATURED WORK"
            title="Recent Projects I'm Proud Of"
            description="Take a look at some of my recent WordPress and front-end development projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card overflow-hidden">
              <div className="relative overflow-hidden group">
                <img 
                  src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="WordPress E-commerce Website" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <Link to="/portfolio" className="btn bg-white hover:bg-gray-100 text-primary-600 text-sm py-2">
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary-600">WordPress</span>
                <h3 className="text-xl font-bold mt-1 mb-2">E-commerce Website</h3>
                <p className="text-gray-600">
                  A fully responsive WordPress e-commerce site with custom features and optimized performance.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="relative overflow-hidden group">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="React Web Application" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <Link to="/portfolio" className="btn bg-white hover:bg-gray-100 text-primary-600 text-sm py-2">
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-secondary-600">React.js</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Web Application</h3>
                <p className="text-gray-600">
                  A modern React.js web application with responsive design and seamless user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-outline">
              Browse All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional at work" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-primary-600 font-semibold mb-2">WHY CHOOSE ME</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Me Apart?</h2>
              <p className="text-gray-700 mb-8">
                With expertise in WordPress development and front-end technologies, I bring a unique combination of technical skills and creative problem-solving to every project.
              </p>

              <div className="space-y-4">
                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">WordPress Expertise</h3>
                    <p className="text-gray-600">
                      Deep understanding of WordPress development, custom themes, and plugins.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Front-End Skills</h3>
                    <p className="text-gray-600">
                      Proficient in modern front-end technologies including React, HTML5, and CSS3.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">SEO Optimization</h3>
                    <p className="text-gray-600">
                      Ensuring your website ranks well in search engines and attracts organic traffic.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Reliable Support</h3>
                    <p className="text-gray-600">
                      Dedicated support and maintenance to keep your website running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="card p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="card p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="card p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="card p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;