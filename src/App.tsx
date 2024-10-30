import React, { useState } from 'react';
import { Users, Calendar, Image, Heart, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import EventCard from './components/EventCard';
import TeamMember from './components/TeamMember';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappGroups = [
    { name: 'Accommodation', link: 'https://chat.whatsapp.com/H3GO2GsI9lr8CZF0aO2BKG' },
    { name: 'Arts', link: 'https://chat.whatsapp.com/Krxh9pC330yGokN2youazo' },
    { name: 'Events', link: 'https://chat.whatsapp.com/Gp170pmDzBR3YnAd91G4m7' },
    { name: 'Marketing', link: 'https://chat.whatsapp.com/BavAJoTcBHXDc7FBiNreu3' }
  ];

  const teamMembers = [
    { name: 'Venkat Kasturi', role: 'President' },
    { name: 'Ajay Polampalli', role: 'Vice President' },
    { name: 'Kiran Anugurthi', role: 'Chief Advisor' }
  ];

  const sponsors = [
    { name: 'Tech Company 1', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200' },
    { name: 'Tech Company 2', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200' },
    { name: 'Tech Company 3', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500',
    'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=500',
    'https://images.unsplash.com/photo-1623841675698-8a9b63d61521?w=500',
    'https://images.unsplash.com/photo-1619944823043-c766163de5b1?w=500',
    'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500',
    'https://images.unsplash.com/photo-1615474634824-f45fb12b24a8?w=500'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to Telugu Ireland Yuvatha</h1>
          <p className="text-xl text-gray-600">Connecting Telugu Community in Ireland</p>
        </section>

        <section id="about" className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Users className="mr-2" /> About Us
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">We serve the Telugu community in Ireland through various initiatives and events, fostering networking and cultural exchange. Our mission is to connect Telugu-speaking individuals and families, providing support and resources to help them thrive in Ireland.</p>
              <div className="text-center space-y-2 text-gray-800">
                <p>తెలుగు ఐర్లాండ్ యువత</p>
                <p>తెలుగు వాళ్ళ ఐక్యత కోసం</p>
                <p>తెలుగు సంప్రదాయాల సంరక్షణ కోసం</p>
                <p>తెలుగు జాతి భవిష్యత్తు కోసం</p>
                <p>జై హింద్, జై భారత్</p>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Calendar className="mr-2" /> Upcoming Events
            </h2>
            <div className="space-y-4">
              <EventCard
                title="Ugadi Celebrations 2024"
                description="Join us for traditional celebrations and cultural programs."
                date="2024-04-09"
                time="14:00"
              />
              <EventCard
                title="Summer Networking Meet"
                description="Network with Telugu professionals in Ireland."
                date="2024-06-15"
                time="11:00"
              />
            </div>
          </div>
        </section>

        <section id="gallery" className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Image className="mr-2" /> Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="rounded-lg shadow-md hover:shadow-xl transition duration-300 w-full h-64 object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Users className="mr-2" /> Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="donate" className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Heart className="mr-2" /> Support Our Community
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Bank Details</h3>
                <div className="space-y-2">
                  <p><strong>Bank Name:</strong> Bank of Ireland</p>
                  <p><strong>Account Name:</strong> Telugu Ireland Yuvatha</p>
                  <p><strong>IBAN:</strong> IE29BOFI90535236987456</p>
                  <p><strong>BIC:</strong> BOFIIE2D</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Sponsors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sponsors.map((sponsor, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-16 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="whatsapp" className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Join Our WhatsApp Groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whatsappGroups.map((group, index) => (
                <a
                  key={index}
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span>{group.name}</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;