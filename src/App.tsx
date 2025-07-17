// src/App.tsx
import React, { useEffect } from 'react';
import {
  TreePine,
  Globe,
  Award,
  Truck,
  Clock,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

// Data definitions
const stats = [
  { icon: Globe, value: '4+', label: 'Continents Reached' },
  { icon: Award, value: '14+', label: 'Years Experience' },
  { icon: Truck, value: '1,500+', label: 'Containers Delivered' },
];

const features = [
  {
    icon: <TreePine className="w-8 h-8 text-amber-800" />,
    title: 'Sustainable Materials',
    description: 'SVLK-certified Indonesian hardwood including teak, mahogany, and mindi wood sourced from managed forests.',
  },
  {
    icon: <Award className="w-8 h-8 text-amber-800" />,
    title: 'Quality Assurance',
    description: 'With extensive industry experience, we guarantee quality through our robust processes.',
  },
  {
    icon: <Globe className="w-8 h-8 text-amber-800" />,
    title: 'Global Logistics',
    description: 'Experienced in international shipping with proper documentation for customs clearance worldwide.',
  },
];

const clientLogos = [3, 4, 5, 6, 7];

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fade-in');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll<HTMLElement>('.section-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[--color-bg] text-[--color-text] w-full">
      <Hero />
      <Stats />
      <About />
      <Features />
      <Clients />
      <Values />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;

// Sections
const Hero: React.FC = () => (
  <section className="hero section-animate p-8 lg:p-16 bg-amber-900 text-white">
    <div className="flex justify-center items-center gap-4 mb-8">
      <img src="/favicon.ico" alt="Logo" className="w-10 h-10 rounded-full" />
      <h1 className="text-5xl lg:text-6xl font-bold tracking-wide">KHARISMA PERKASA MAKMUR</h1>
    </div>
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
          Crafting Furniture tailored to<br />
          <span className="text-red-500">Global Markets</span>
        </h2>
        <p className="text-lg max-w-2xl opacity-90">
          From sustainable Indonesian wood directly to your business, no matter where in the world.
          We provide outstanding quality, competitive pricing, and dependable supply chains for international retailers.
        </p>
        <div className="flex flex-wrap gap-6 pt-4">
          {['SVLK Timber Legality', 'Global Shipping'].map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="font-medium">{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <img src="/1.png" alt="Premium furniture" className="rounded-2xl max-w-full h-auto" />
      </div>
    </div>
  </section>
);

const Stats: React.FC = () => (
  <section className="stats section-animate py-16 bg-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center px-8">
      {stats.map(({ icon: Icon, value, label }, idx) => (
        <div key={idx} className="space-y-4">
          <Icon className="w-8 h-8 text-amber-800 mx-auto" />
          <h3 className="text-3xl lg:text-4xl font-bold text-amber-800">{value}</h3>
          <p className="text-gray-600 font-medium">{label}</p>
        </div>
      ))}
    </div>
  </section>
);

const About: React.FC = () => (
  <section className="about section-animate py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-12 items-center px-8">
      <div className="space-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          With over a decade of experience in indoor furniture manufacturing, we deliver high-quality products that meet international standards while maintaining competitive pricing for global markets.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Our in-house kiln dry system ensures precise wood moisture levels for durable, stable pieces, from bedroom sets to custom commercial furniture, ready for export worldwide.
        </p>
      </div>
      <div className="flex justify-center mt-8 lg:mt-0">
        <img src="/2.png" alt="Factory in Jepara, Indonesia" className="rounded-full max-w-full h-auto" />
      </div>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section className="features section-animate py-16 bg-white">
    <div className="max-w-7xl mx-auto px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
        Why Choose <span className="text-red-500">Our Furniture</span>
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Local craftsmanship meets international quality standards.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }, idx) => (
          <div key={idx} className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="mb-4 text-center">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Clients: React.FC = () => (
  <section className="clients section-animate py-16 bg-amber-50">
    <div className="max-w-7xl mx-auto px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Trusted by Retailers Worldwide</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
        {clientLogos.map(i => (
          <img
            key={i}
            src={`/${i}.png`}
            alt={`Retailer logo ${i}`}
            className="rounded-2xl max-w-full h-48 object-contain mx-auto hover:opacity-90 transition-opacity"
          />
        ))}
      </div>
    </div>
  </section>
);

const Values: React.FC = () => (
  <section className="values section-animate py-16 bg-white text-center">
    <div className="max-w-4xl mx-auto px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
      <p className="text-lg text-gray-600 mb-6">Building lasting partnerships across cultures and continents.</p>
      <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
      <p className="text-gray-600 leading-relaxed text-lg">
        At Kharisma Perkasa Makmur, we believe in collaboration without boundaries, <br/>whether you’re a small boutique or a large chain.
      </p>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section className="contact section-animate py-12 bg-[#FEFDF9]">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-10 rounded-2xl border border-gray-300 hover:shadow-md transition-shadow">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-800">Business Hours</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-amber-800 mt-1" />
            <div>
              <p className="font-medium text-gray-800">Monday - Friday: 8:00 AM – 5:00 PM</p>
              <p className="italic text-gray-500">Western Indonesia Time (WIB)</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-amber-800 mt-1" />
            <p className="text-gray-700">
               Gresik, East Java, Indonesia—reach out to schedule a tour of our facility.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-2xl border border-gray-300 hover:shadow-md transition-shadow">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-800">Contact Us</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-amber-800 mt-1" />
            <p className="text-gray-700">+62 812-1753-0260 / +61 450 209 661</p>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-amber-800 mt-1" />
            <p className="text-gray-700">kharisma.pm.cv@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// const Footer: React.FC = () => (
//   <footer className="bg-gray-900 text-white py-12 section-animate">
//     <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-8">
//       <div className="space-y-4">
//         <div className="flex items-center gap-3">
//           <TreePine className="w-8 h-8" />
//           <h3 className="text-xl font-bold">Kharisma Perkasa Makmur</h3>
//         </div>
//         <p className="opacity-80 text-sm">Premium Indonesian furniture manufacturer since 2008.</p>
//         <div className="flex gap-4 mt-4">
//           {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
//             <Icon key={idx} className="w-6 h-6 hover:text-amber-600 transition cursor-pointer" />
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-8 text-sm">
//         {[
//           { title: 'Products', links: ['Bedroom Furniture', 'Dining Sets', 'Living Room', 'Office Furniture', 'Custom Orders'] },
//           { title: 'Services', links: ['Manufacturing', 'Design Consultation', 'Global Shipping', 'Quality Control', 'Customer Support'] },
//           { title: 'Company', links: ['About Us', 'Careers', 'Sustainability', 'Certifications', 'News & Updates'] },
//           { title: 'Contact Info', links: ['+62 291 123 4567', 'export@kharismapm.co.id', 'Jepara, Central Java, Indonesia'] },
//         ].map((col, i) => (
//           <div key={i}>
//             <h4 className="font-semibold mb-4">{col.title}</h4>
//             <ul className="space-y-2">
//               {col.links.map((link, j) => (
//                 <li key={j} className="hover:text-amber-600 cursor-pointer text-gray-300">{link}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs opacity-60">
//       © 2024 Kharisma Perkasa Makmur. All rights reserved.
//     </div>
//   </footer>
// );
