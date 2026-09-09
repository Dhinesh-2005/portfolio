import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/mockData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 4 seconds
      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profileData.email,
      href: `mailto:${profileData.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profileData.phone,
      href: `tel:${profileData.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profileData.location,
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: profileData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: profileData.social.instagram, label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 mx-auto rounded-full shadow-sm shadow-red-600/50 mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-sm shadow-red-600" />
              Contact Information
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#141414] border border-white/[0.08] hover:border-red-600/40 transition-all duration-300 shadow-xl shadow-black/30 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 group-hover:scale-105 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-gray-400 text-xs font-medium block uppercase tracking-wider mb-0.5">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-red-400 font-semibold text-sm sm:text-base transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-semibold text-sm sm:text-base block">
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/[0.08] shadow-xl shadow-black/30">
              <h4 className="text-white font-semibold text-sm mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.94 }}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:border-red-600/50 hover:bg-red-600/10 transition-all shadow-md flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#141414] border border-white/[0.08] shadow-xl shadow-black/30"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-sm shadow-red-600" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Smith"
                  className="w-full bg-[#0e0e10] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className="w-full bg-[#0e0e10] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={4}
                  className="w-full bg-[#0e0e10] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.01, y: -1 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-red-950/40 hover:shadow-red-800/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 text-sm">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-red-600/10 border border-red-600/30 text-red-400 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 text-center"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

