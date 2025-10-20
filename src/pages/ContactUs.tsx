import React, { FormEvent, ReactHTML, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';



const ContactUs: React.FC = () => {
  const BaseUrl = import.meta.env.VITE_BASE_URL;

  const [formData,SetFormData] =useState({
    firstName: "",
    lastName: "",
    email:"",
    organization:"",
    subject:"",
    message:""
  })

  const [loading, setLoading]= useState(false);

  const handleSubmit = async(e:FormEvent)=>{
    e.preventDefault()

    const {firstName, lastName,email,subject,message}=formData

    if(!firstName || !lastName || !email  || !subject || !message){
      toast.error("Kindly fill required fields")
      return;
    }

    try {
      setLoading(true);
      const payload = {...formData}

      const response = await axios.post(`${BaseUrl}/send-email`, payload);
      console.log("Response From Backend:", response.data)
      toast.success(response.data.message)
      SetFormData({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      const err = error as AxiosError<{message?: string}>
      console.log("Error Message:", err.response?.data || err.message)
      toast.error(err.response?.data?.message || "Message Not Sent");
    }finally{
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    SetFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <Helmet>
        <title>Contact Us - Twelve In Twelve LBG | Get in Touch</title>
        <meta
          name="description"
          content="Contact Twelve In Twelve LBG to discuss how you can support our mission to ensure universal access to healthcare in underserved communities across Ghana."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gray-50 dark:bg-neutral-900 h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Get in Touch <span className="text-[#987543]">with Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to support our healthcare mission? Have questions about our
              programs? We're here to help and would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  Let's Start a{" "}
                  <span className="text-[#987543]">Conversation</span>{" "}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Whether you're interested in supporting our mission,
                  volunteering, or simply want to learn more about our work,
                  we'd love to connect with you.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      details: "info@twelveintwelvelbg.org",
                      description: "General inquiries and support",
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      details: "+233 53 879 5542",
                      description: "Monday to Friday, 9AM - 5PM GMT",
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      details: "HNo. C2/11, Sakumono\nTema, Ghana",
                      description: "Our headquarters and main office",
                    },
                    {
                      icon: Clock,
                      title: "Office Hours",
                      details:
                        "Monday - Friday: 9:00 AM - 5:00 PM GMT\nSaturday: 10:00 AM - 2:00 PM GMT",
                      description: "We're here to help during business hours",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl">
                        <contact.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#987543] mb-2">
                          {contact.title}
                        </h3>
                        <div className="text-gray-800 dark:text-gray-200 font-medium mb-1 whitespace-pre-line">
                          {contact.details}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a <span className="text-[#987543]">Message</span>
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors"
                      placeholder="Your organization name (if applicable)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Program Information</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors resize-y"
                      placeholder="Tell us how you'd like to support our healthcare mission..."
                    ></textarea>
                  </div>

                  {/* 3️⃣ Loading state for button */}
                  <Button
                    type="submit"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    className="w-full"
                    aria-label="Send message"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Engagement Options */}
      {/* <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ways to Connect with Our Mission
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Choose how you'd like to get involved with Twelve In Twelve LBG.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Volunteer Opportunities",
                  description:
                    "Join our team of dedicated volunteers making a difference in healthcare",
                  action: "Explore Opportunities",
                  link: "/get-involved",
                },
                {
                  icon: Send,
                  title: "Stay Informed",
                  description:
                    "Subscribe to our newsletter for updates on our healthcare programs",
                  action: "Subscribe",
                  link: "#",
                },
                {
                  icon: Mail,
                  title: "Follow Our Journey",
                  description:
                    "Connect with us on social media to see our work in action",
                  action: "Follow Us",
                  link: "#",
                },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-xl w-fit mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {option.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    aria-label={option.action}
                  >
                    {option.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation> */}

      {/* FAQ Section */}
      <ScrollAnimation>
        <section id='faqs' className="py-20  dark:bg-neutral-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently{" "}
                <span className="text-[#987543]">Asked Questions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Quick answers to common questions about supporting our
                healthcare mission.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How can I make a donation?",
                  answer:
                    "You can make a one-time or monthly donation through our website using mobile money, bank transfer, or credit card. All donations are tax-deductible where applicable and directly support our healthcare programs in underserved communities.",
                },
                {
                  question: "Are there volunteer opportunities available?",
                  answer:
                    "Yes, we offer various volunteer opportunities including medical volunteer programs, skills-based volunteering, and event participation. Visit our Get Involved page to learn more about current opportunities.",
                },
                {
                  question:
                    "How much of my donation goes directly to programs?",
                  answer:
                    "85% of all donations go directly to our healthcare programs, with only 10% allocated to administrative costs and 5% to fundraising. We are committed to transparent financial stewardship.",
                },
                {
                  question: "Can I specify where my donation goes?",
                  answer:
                    "Yes, you can designate your donation to specific programs, regions, or initiatives. We also offer options for unrestricted donations that allow us to allocate funds where they are needed most.",
                },
                {
                  question: "How can I stay updated on your impact?",
                  answer:
                    "Subscribe to our newsletter to receive regular updates on our healthcare programs, patient outcomes, and upcoming initiatives. You can also follow us on social media for real-time updates from our field programs.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-[#987543] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default ContactUs;