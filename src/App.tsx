// src/App.tsx
import React, { useEffect } from 'react'
import {
  TreePine,
  Globe,
  Award,
  Truck,
  Clock,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'

// Types for stats and features
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>

interface Stat {
  icon: IconComponent
  value: string
  label: string
}

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const App: React.FC = () => {
  // Smooth scroll & fade-in observer
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll<HTMLElement>('.section-animate').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[--color-bg] text-[--color-text] w-full">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FeaturesSection />
      <ClientsSection />
      <ValuesSection />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  )
}

export default App

// Hero Section
const HeroSection: React.FC = () => (
  <section className="hero p-8 lg:p-16 bg-amber-900 text-white">
    <div className="flex justify-center items-center gap-4 mb-8">
      <img src="/favicon.ico?height=600&width=500" alt="Logo" className="w-10 h-10 rounded-full" />
      <h1 className="text-6xl font-bold tracking-wide">KHARISMA PERKASA MAKMUR</h1>
    </div>
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
          Crafting Furniture tailored to<br />
          <span className="text-red-500">Global Markets</span>
        </h2>
        <p className="text-lg max-w-2xl opacity-90">
          From sustainable Indonesian wood directly to your business, no matter where you are in the world.
          We provide outstanding quality, competitive pricing, and dependable supply chains for international retailers.
        </p>
        <div className="flex flex-wrap gap-6 pt-4">
          {['SVLK Timber Legality', 'Global Shipping'].map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckIcon />
              <span className="font-medium">{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/1.png?height=600&width=500"
          alt="Premium furniture"
          className="rounded-2xl max-w-full h-auto"
        />
      </div>
    </div>
  </section>
)

// Check icon wrapper
const CheckIcon: React.FC = () => (
  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
    <span className="text-white text-xs">✓</span>
  </div>
)

// Stats Section
const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    { icon: Globe, value: '40+', label: 'Continents Reached' },
    { icon: Award, value: '14+', label: 'Years Experience' },
    { icon: Truck, value: '1,500+', label: 'Containers Delivered' }
  ]

  return (
    <section className="stats section-animate py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center px-8">
        {stats.map(({ icon: Icon, value, label }, idx) => (
          <div key={idx} className="space-y-4">
            <Icon className="w-8 h-8 text-amber-800 mx-auto" />
            <h3 className="text-4xl font-bold text-amber-800">{value}</h3>
            <p className="text-gray-600 font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// About Section
const AboutSection: React.FC = () => (
  <section className="about section-animate py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-12 items-center px-8">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          With over a decade of experience in indoor furniture manufacturing, we deliver high-quality products that meet international standards while maintaining competitive pricing for global markets. As a trusted supplier to several leading retailers, we understand the need for dependable supply, consistent quality, and customer-ready designs that balance style and affordability.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our production facility is equipped with an in-house kiln dry system, which allows us to maintain precise wood moisture levels. This ensures the durability and stability of every piece we craft, from bedroom sets and dining furniture to custom commercial pieces, ready for export worldwide.
        </p>
      </div>
      <div className="flex justify-center mt-8 lg:mt-0 rounded-full">
        <img
          src="/2.png?height=800&width=1600"
          alt="Factory in Jepara, Indonesia"
          className="rounded-full max-w-full h-auto"
        />
      </div>
    </div>
  </section>
)

// Features Section
const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <TreePine className="w-8 h-8 text-amber-800" />,
      title: 'Sustainable Materials',
      description: 'SVLK-certified Indonesian hardwood including teak, mahogany, and mindi wood sourced from managed forests.'
    },
    {
      icon: <Award className="w-8 h-8 text-amber-800" />,
      title: 'Quality Assurance',
      description: 'With extensive industry experience, we guarantee quality through our robust processes.'
    },
    {
      icon: <Globe className="w-8 h-8 text-amber-800" />,
      title: 'Global Logistics',
      description: 'Experienced in international shipping with proper documentation for customs clearance worldwide.'
    }
  ]

  return (
    <section className="features section-animate py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-red-500">Our Furniture</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Local craftsmanship meets international quality standards.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon, title, description }, idx) => (
            <div key={idx} className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition">
              <div className="mb-4 text-center"> {icon} </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Clients Section
const ClientsSection: React.FC = () => {

  return (
    <section className="clients section-animate py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Trusted by Retailers Worldwide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {[3, 4, 5, 6, 7].map((i) => (
            <img
              key={i}
              src={`/${i}.png?height=1800&width=1800`}
              alt={`Retailer logo ${i}`}
              className="rounded-2xl max-w-full h-96 object-contain mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Values Section
const ValuesSection: React.FC = () => (
  <section className="values section-animate py-16 bg-white text-center">
    <div className="max-w-4xl mx-auto px-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
      <p className="text-lg text-gray-600 mb-6">Our aim is to build lasting partnerships across cultures and continents</p>
      <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
      <p className="text-gray-600 leading-relaxed">
        At Kharisma Perkasa Makmur, we believe in the power of collaboration without boundaries. Whether you're a small boutique retailer or a large furniture chain, we welcome partnerships that create mutual growth.
      </p>
    </div>
  </section>
)

// Contact Section
const ContactSection: React.FC = () => (
  <section className="contact section-animate py-12 bg-[#FEFDF9]">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Business Hours Card */}
      <div className="bg-white p-10 rounded-2xl border border-gray-300">
        <h3 className="text-3xl font-semibold mb-8 text-gray-800">Business Hours</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-amber-800 mt-1" />
            <div>
              <p className="font-medium text-gray-800">
                Monday - Friday: 8:00 AM – 5:00 PM
              </p>
              <p className="italic text-gray-500">
                Western Indonesia Time (WIB)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-amber-800 mt-1" />
            <p className="text-gray-700">
              Our facility is located in{' '}
              <span className="font-semibold text-gray-800">
                Gresik, East Java, Indonesia
              </span>
              . For inquiries or to schedule a visit, please contact us. We would
              be delighted to provide you with a tour of our facility.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us Card */}
      <div className="bg-white p-10 rounded-2xl border border-gray-300">
        <h3 className="text-3xl font-semibold mb-8 text-gray-800">Contact Us</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-amber-800 mt-1" />
            <p className="text-gray-700">
              Phone: +62 812-1753-0260 / +61 450 209 661
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-amber-800 mt-1" />
            <p className="text-gray-700">
              Email: kharisma.pm.cv@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Footer
const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <TreePine className="w-8 h-8" />
          <h3 className="text-xl font-bold">Kharisma Perkasa Makmur</h3>
        </div>
        <p className="opacity-80">Premium Indonesian furniture manufacturer serving global markets since 2008.</p>
        <div className="flex gap-4">
          {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
            <Icon key={idx} className="w-6 h-6 hover:text-amber-600 transition cursor-pointer" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {[
          { title: 'Products', links: ['Bedroom Furniture', 'Dining Sets', 'Living Room', 'Office Furniture', 'Custom Orders'] },
          { title: 'Services', links: ['Manufacturing', 'Design Consultation', 'Global Shipping', 'Quality Control', 'Customer Support'] },
          { title: 'Company', links: ['About Us', 'Careers', 'Sustainability', 'Certifications', 'News & Updates'] },
          { title: 'Contact Info', links: ['+62 291 123 4567', 'export@kharismapm.co.id', 'Jepara, Central Java, Indonesia'] }
        ].map((col, i) => (
          <div key={i}>
            <h4 className="font-semibold mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link, j) => (
                <li key={j} className="hover:text-amber-600 cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm opacity-80">
      © 2024 Kharisma Perkasa Makmur. All rights reserved.
    </div>
  </footer>
)
