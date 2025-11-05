import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Users, Award, Globe, Heart, Download } from "lucide-react";
import { Button } from "../components/Button";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import screening from "../images/elderlyScreening.jpeg";
import maternalDonation from "../images/maternalDonation.jpeg";
import { Link } from "react-router-dom";
import document1 from '../images/Appreciation .pdf'
import document2 from '../images/DOC-20240705-WA0064_251027_121401.pdf'
import document3 from '../images/LETTER OF APPRECIATION.pdf'
import document4 from '../images/Letter of appreciation (1).pdf'
import document5 from '../images/Testimonial - 12 in 12 NGO.pdf'
import document6 from '../images/appreciation.pdf'

const OurImpact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Impact - Twelve In Twelve LBG | Transforming Healthcare in Ghana
        </title>
        <meta
          name="description"
          content="Discover the measurable impact Twelve In Twelve LBG has made across communities in Ghana - from patients served to healthcare facilities supported."
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
              Measuring Our{" "}
              <span className="text-[#987543]">Community Impact</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real results from our healthcare initiatives across all regions of
              Ghana. See how Twelve In Twelve LBG is transforming lives and
              improving health outcomes in underserved communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  number: "10,000+",
                  label: "Patients Served",
                  description: "Across all 16 regions of Ghana",
                },
                {
                  icon: Award,
                  number: "50+",
                  label: "Health Projects",
                  description: "Implemented in underserved communities",
                },
                {
                  icon: Globe,
                  number: "16",
                  label: "Regions Visited",
                  description: "Comprehensive nationwide coverage",
                },
                {
                  icon: Heart,
                  number: "100%",
                  label: "Of Regions",
                  description: "Reached with healthcare services",
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-xl w-fit mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.number}
                  </div>
                  <div className="text-lg font-semibold text-[#987543] mb-2">
                    {metric.label}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Success Stories */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Stories of{" "}
                <span className="text-[#987543]">Transformation</span>{" "}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real stories from the communities we've served with healthcare
                services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Maternal Health Support in Rural Community",
                  location: "Central Region, Ghana",
                  story:
                    "Through our donation of fetal Dopplers and hemoglobin meters, the local CHPS compound was able to significantly improve antenatal care services. Pregnant women now receive more accurate monitoring of their babies' health and early detection of anemia.",
                  image: maternalDonation,
                  impact: [
                    "Improved antenatal monitoring",
                    "Early detection of health issues",
                    "Increased confidence in maternal care",
                    "Reduced referral cases to distant hospitals",
                  ],
                },
                {
                  title: "Elderly Care in Alleged Witch Camp",
                  location: "Gambaga, Northern Region",
                  story:
                    "Our medical screening initiative in the Gambaga witch camp provided comprehensive health assessments for elderly women who had been ostracized by their communities. Many received treatment for previously undiagnosed conditions.",
                  image: screening,
                  impact: [
                    "Comprehensive health assessments",
                    "Treatment for undiagnosed conditions",
                    "Improved quality of life",
                    "Community awareness about elderly care",
                  ],
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden"
                >
                  <img
                    src={story.image}
                    alt={`${story.title} - healthcare workers serving patients in ${story.location}`}
                    className="w-full h-64 object-cover"
                    width="600"
                    height="256"
                  />
                  <div className="p-8">
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {story.location}
                    </div>
                    <h3 className="text-2xl font-bold  text-[#987543] mb-4">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {story.story}
                    </p>
                    <div className="space-y-2">
                      <div className="font-semibold text-[#987543] mb-2">
                        Key Impact:
                      </div>
                      {story.impact.map((item, impactIndex) => (
                        <div
                          key={impactIndex}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Letters of Appreciation */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Letters of{" "}
                <span className="text-[#987543]">Appreciation</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Recognition and testimonials from our partners and communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Ministry of Health Partnership",
                  description: "Official recognition for collaborative healthcare initiatives",
                  document: document1
                },
                {
                  title: "Community Leaders Testimonial",
                  description: "Heartfelt appreciation from local community representatives",
                  document: document2
                },
                {
                  title: "Regional Director Appreciation",
                  description: "Formal acknowledgment of outstanding service delivery",
                  document: document3
                },
                {
                  title: "Health Facility Partnership",
                  description: "Gratitude letter from collaborating medical centers",
                  document: document4
                },
                {
                  title: "Volunteer Program Recognition",
                  description: "Appreciation for dedicated volunteer contributions",
                  document: document5
                },
                {
                  title: "International NGO Partnership",
                  description: "Testimonial from global health organization partners",
                  document: document6
                }
              ].map((letter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg flex flex-col h-full"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#987543] mb-3">
                      {letter.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {letter.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    icon={Download}
                    iconPosition="left"
                    href={letter.document}
                    target="_blank"
                    aria-label={`Download ${letter.title}`}
                    className="mt-auto"
                  >
                    Read Letter
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Annual Impact Report */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Annual <span className="text-[#987543]">Impact Report</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Download our comprehensive report on the impact of our
                healthcare programs.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#987543] mb-4">
                    Twelve In Twelve LBG Annual Report 2024
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our comprehensive annual report details our healthcare
                    programs, patient outcomes, financial statements, and future
                    goals. See exactly how your support is making a difference
                    in communities across Ghana.
                  </p>
                  <Button
                    variant="outline"
                    icon={Download}
                    iconPosition="left"
                    aria-label="Download Annual Report 2024"
                  >
                    Download Report (PDF)
                  </Button>
                </div>
                <div className="bg-gray-100 dark:bg-neutral-700 rounded-xl p-6 flex items-center justify-center">
                  <div className="bg-white dark:bg-neutral-600 rounded-lg p-4 shadow-md">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        2024
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        Annual Report
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Geographic Impact */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-4">
                Nationwide Reach
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our healthcare initiatives span all regions of Ghana, bringing
                services where they're needed most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  region: "Northern Ghana",
                  communities: "15+ Communities",
                  patients: "2,000+ Patients",
                  focus: "Maternal health, elderly care",
                },
                {
                  region: "Southern Ghana",
                  communities: "20+ Communities",
                  patients: "3,500+ Patients",
                  focus: "Reproductive health, nutrition",
                },
                {
                  region: "Eastern Ghana",
                  communities: "10+ Communities",
                  patients: "1,500+ Patients",
                  focus: "Mental health, child care",
                },
                {
                  region: "Western Ghana",
                  communities: "8+ Communities",
                  patients: "1,200+ Patients",
                  focus: "General healthcare, equipment support",
                },
              ].map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-[#987543] mb-4">
                    {region.region}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Communities:
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {region.communities}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Patients Served:
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {region.patients}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Focus: {region.focus}
                    </div>
                  </div>
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
              Be Part of Our Growing Impact
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our mission to transform healthcare and improve health
              outcomes for communities across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/get-involved#giving"}>
                <Button
                  size="lg"
                  icon={Heart}
                  iconPosition="right"
                  aria-label="Donate to support our mission"
                >
                  Donate Now
                </Button>
              </Link>
              <Button
                size="lg"
                className="border-white text-black hover:bg-white hover:text-primary-600"
                aria-label="Volunteer with us"
              >
                Volunteer with Us
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default OurImpact;
