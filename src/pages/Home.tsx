import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, Heart, Award, MapPin, Calendar } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import hero from '../images/hero.webp'
import hero1 from '../images/hero1.webp'
import whatWeDo from '../images/whatWeDo.webp'
import nasikaImage from '../images/Nasika.jpeg';
import donation from '../images/COMMUNITY OUTREACH!12a.png'
import AnimatedCount from '../lib/AnimateCount';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';

const slides = [
  {
    id: 1,
    image: hero,
    title: "Healthcare for Underserved Communities",
    highlight: "Underserved Communities",
    description:
      "Twelve In Twelve LBG ensures universal access to standardised healthcare services in underserved communities all over Ghana.",
    buttonText: "Support Our Mission",
    buttonLink: "get-involved",
  },
  {
    id: 2,
    image: hero1,
    title: "Empowering Local Communities",
    highlight: "Local Communities",
    description:
      "We work directly with communities to improve access to essential health services and programs.",
    buttonText: "Learn About Our Work",
    buttonLink: "our-projects",
  },
];


const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [showPopup, setShowPopup] = React.useState(true);

  // Auto-slide every 8 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      
      <Helmet>
        <title>
          Twelve In Twelve LBG - Healthcare for Underserved Communities in Ghana
        </title>
        <meta
          name="description"
          content="Twelve In Twelve LBG ensures universal access to standardised healthcare services in underserved communities all over Ghana. Founded by Dr. Delasy Gbekor."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                  >
                    {slide.title
                      .split(slide.highlight)
                      .map((part, idx, arr) => (
                        <React.Fragment key={idx}>
                          {part}
                          {idx < arr.length - 1 && (
                            <span className="text-[#987543]">
                              <br /> {slide.highlight}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-white mb-8 max-w-2xl"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Link to={slide.buttonLink}>
                      <Button
                        size="lg"
                        icon={Heart}
                        iconPosition="right"
                        className="bg-white font-extrabold text-black hover:bg-gradient-to-r hover:from-black hover:to-[#987543] hover:text-white transition-all duration-300"
                      >
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </section>

      {/* Mission Statement Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-[#987543]">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                To ensure universal access to standardised healthcare services
                in underserved communities all over Ghana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Community Focus",
                  description:
                    "We work directly with local communities to understand their unique healthcare needs and challenges.",
                },
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  description:
                    "Our programs prioritize patient-centered care and holistic health outcomes.",
                },
                {
                  icon: MapPin,
                  title: "Nationwide Reach",
                  description:
                    "We've visited all regions of Ghana to provide healthcare services where they're needed most.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md"
                >
                  <item.icon className="w-12 h-12 text-[#987543] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* What We Do Section */}
      <ScrollAnimation>
        <section className="py-20  dark:bg-neutral-900 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our comprehensive approach addresses key healthcare challenges
                in deprived communities across Ghana.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: "Medical Equipment Donation",
                    description:
                      "Providing CHPS compounds and health posts with basic medical equipment for standard healthcare delivery.",
                  },
                  {
                    title: "Maternal & Child Health",
                    description:
                      "Reducing maternal and child mortality through targeted interventions and support for pregnant women and children.",
                  },
                  {
                    title: "Reproductive Health Education",
                    description:
                      "Promoting reproductive health awareness among adolescents through education and counseling.",
                  },
                  {
                    title: "Nutrition Programs",
                    description:
                      "Addressing malnutrition among pregnant women and children through counseling and education.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-[#987543] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#987543] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative">
                <img
                  src={whatWeDo}
                  alt="Healthcare workers providing maternal care in a rural clinic"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Impact Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold  text-[#987543] mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Making a difference in communities across all regions of Ghana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  stat: "16",
                  label: "Regions of Ghana Visited",
                },
                {
                  stat: "50+",
                  label: "Health Projects Implemented",
                },
                {
                  stat: "10,000+",
                  label: "Patients Served",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-[#987543] mb-2">
                    <AnimatedCount value={item.stat} />
                  </div>

                  <div className="text-lg text-gray-600 dark:text-gray-300">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-[#987543] mr-3" />
                <h3 className="text-xl font-bold text-[#987543]">
                  Community Impact Story
                </h3>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-300 text-center mb-6 italic">
                "Thanks to Twelve In Twelve LBG, our community health post now
                has the equipment needed to provide proper care for pregnant
                women and children. The difference in healthcare access has been
                life-changing for our families."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900 dark:text-white">
                  Community Leader
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  Central Region, Ghana
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Upcoming Events */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Join us in our upcoming healthcare initiatives across Ghana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  date: "January 31st, 2026",
                  title: "Adidome Maternal Health Outreach",
                  description:
                    " A Visit to  Adidome Zongo CHPS Compound in the Volta Region to donate essential materials and medical equipment to improve maternal health services in the community.",
                  image: donation, // Added image for Nsakina Outreach
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg"
                >
                  {/* Added image for Nsakina Outreach */}
                  {event.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center text-[#987543] mb-3">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-neutral-900 to-[#987543] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us in Transforming Healthcare
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your support can help us reach more communities in need across
              Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/about-us"}>
                <Button
                  size="lg"
                  icon={Heart}
                  iconPosition="right"
                  aria-label="Donate to support our mission"
                >
                  Our Story
                </Button>
              </Link>

              <Link to={"/get-involved"}>
                <Button
                  size="lg"
                  variant="primary"
                  aria-label="Learn how to get involved"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default Home;