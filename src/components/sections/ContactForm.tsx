'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-charcoal mb-6">Send us a Message</h2>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <p className="text-green-700 font-semibold">✓ Thank you! We'll get back to you soon.</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Service Interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            >
              <option value="">Select a service</option>
              <option value="facebook-ads">Facebook Ads</option>
              <option value="instagram-ads">Instagram Ads</option>
              <option value="lead-generation">Lead Generation</option>
              <option value="landing-page">Landing Page Development</option>
              <option value="website">Website Development</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-brown hover:text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
            {!loading && <Send size={20} />}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
