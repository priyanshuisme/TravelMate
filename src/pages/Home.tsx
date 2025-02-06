import { Link } from 'react-router-dom';
import { MapPin, Search, Building2, HeartPulse, Heart, Globe, Users, Star } from 'lucide-react';

export function Home() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: "Travel Tours",
      description: "Explore exciting destinations worldwide",
      link: "/travel-tours"
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-blue-500" />,
      title: "Medical Tourism",
      description: "World-class healthcare at affordable prices",
      link: "/medical-tourism"
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-500" />,
      title: "Corporate Events",
      description: "Professional business event planning",
      link: "/corporate"
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-500" />,
      title: "Wedding Planning",
      description: "Make your special day perfect",
      link: "/wedding"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            Your Journey Begins Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center">
            Discover the perfect travel experience tailored just for you
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-4 rounded-lg mb-8">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where would you like to go?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-black bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                <Search className="w-5 h-5 " />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive travel and event planning solutions for every need
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-blue-600 font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
        </section>
      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: 'Shimla',
            imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          },
          {
            name: 'Goa',
            imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
          },
          {
            name: 'Manali',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Manali_City.jpg/1200px-Manali_City.jpg'
          }
        ].map((destination, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl">
            <img 
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
          <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1000+', label: 'Destinations' },
              { number: '15K+', label: 'Happy Clients' },
              { number: '500+', label: 'Events Organized' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Let us help you plan your perfect experience</p>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                     hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}