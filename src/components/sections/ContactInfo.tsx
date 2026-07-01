'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { BRAND } from '@/utils/constants';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: BRAND.whatsapp,
      href: `https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`,
      color: 'text-green-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: BRAND.email,
      href: `mailto:${BRAND.email}`,
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: BRAND.phone,
      href: `tel:${BRAND.phone}`,
      color: 'text-gold',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: BRAND.location,
      href: '#',
      color: 'text-red-500',
    },
    {
      icon: Clock,
      label: 'Availability',
      value: BRAND.workingHours,
      href: '#',
      color: 'text-purple-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-charcoal mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Have questions? We're here to help! Choose your preferred way to reach out and we'll get back to you promptly.
        </p>

        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-cream transition-all duration-300 cursor-pointer"
              >
                <Icon size={28} className={`${method.color} flex-shrink-0 mt-1`} />
                <div>
                  <p className="text-sm font-semibold text-gray-600">{method.label}</p>
                  <p className="text-lg font-bold text-charcoal">{method.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-gradient-gold rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <p className="text-white/90 mb-6">Stay updated with our latest campaigns and industry insights</p>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all"
            title="Facebook"
          >
            f
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all"
            title="Instagram"
          >
            📷
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all"
            title="LinkedIn"
          >
            in
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
