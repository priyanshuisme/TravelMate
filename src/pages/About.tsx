import { Shield, Globe, Clock, Users, Mail, Phone, MapPin} from 'lucide-react';

export function About() {
  const stats = [
    { number: '10K+', label: 'Happy Travelers' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' },
    { number: '100%', label: 'Satisfaction' }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Global Reach',
      description: 'Operating in over 50 countries worldwide'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Trusted Service',
      description: 'Licensed and insured travel experiences'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Expert Team',
      description: 'Professional travel consultants'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative h-[400px] bg-cover bg-center"
           style={{backgroundImage: 'url(https://t3.ftcdn.net/jpg/08/65/35/74/360_F_865357483_h8EqLPenbASgFNEdEAE56AxIHZLfhHoW.jpg)'}}>
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About TravelMate
              </h1>
              <p className="text-xl text-white/90">
                Crafting Unforgettable Travel Experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Mission Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At TravelMate, we're dedicated to revolutionizing the way people plan their travels,
              events, and special occasions. Our AI-powered platform combines cutting-edge technology
              with personalized service to create unforgettable experiences.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contact@travelmate.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+91-123-456-78</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>New Delhi,India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}