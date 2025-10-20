import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Users, Baby, TestTube, Brain, Calendar, MapPin } from 'lucide-react';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import maternalDonation from '../images/maternalDonation.jpeg'
import laborDonation from '../images/LaborDonation.jpeg'
import anemiaDonation from '../images/AnemiaDonation.jpeg'
import diseaseSupport from '../images/diseaseSupport.jpeg'
import elderlyScreening from '../images/elderlyScreening.jpeg'
import mentalHealthCampaign from '../images/MentalHealthCampaign.jpeg'
import sickleCellScreening from '../images/sickleCellScreening.jpeg'


const OurProjects: React.FC = () => {
  const completedProjects = [
    {
      icon: Baby,
      title: "Maternal Health Equipment Donation",
      description:
        "Donation of fetal Dopplers (devices for checking the heartbeat of babies) during antenatal visits for pregnant women.",
      regions: "Central, Eastern, Oti, Northern, and Upper East regions",
      image: maternalDonation,
    },
    {
      icon: Users,
      title: "Elderly Medical Screening",
      description:
        "Medical screening for the elderly in the alleged witch camp in Gambaga.",
      regions: "Northern Region",
      image: elderlyScreening,
    },
    {
      icon: TestTube,
      title: "Anemia Prevention Program",
      description:
        "Donation of hemoglobin meters (for checking blood levels) and nutritional counseling for pregnant women at risk of iron deficiency anemia.",
      regions: "Multiple regions",
      image: anemiaDonation,
    },
    {
      icon: Baby,
      title: "Labor Ward Support",
      description:
        "Donation of essential equipment and materials for use in labor wards in the maternity section of CHPS compounds.",
      regions: "Various regions",
      image: laborDonation,
    },
    {
      icon: TestTube,
      title: "Free Sickle Cell Screening",
      description:
        "Partnership with TBL Kids Ministries to conduct annual free sickle cell screenings in orphanages.",
      regions: "Greater Accra region",
      image: sickleCellScreening,
    },
    {
      icon: TestTube,
      title: "Disease Treatment Support",
      description:
        "Donation of test kits and medication for treatment of conditions such as malaria and typhoid fever.",
      regions: "Multiple regions",
      image: diseaseSupport,
    },
    {
      icon: Brain,
      title: "Mental Health Campaign",
      description:
        "Campaign to tackle mental health disorders such as depression, anxiety, and substance use disorder.",
      regions: "Nationwide",
      image: mentalHealthCampaign,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Our Projects - Twelve In Twelve LBG | Healthcare Initiatives in Ghana
        </title>
        <meta
          name="description"
          content="Discover the healthcare projects and initiatives implemented by Twelve In Twelve LBG across all regions of Ghana to improve community health outcomes."
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
              Our Healthcare <span className="text-[#987543]">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the healthcare initiatives we've implemented across all
              regions of Ghana to improve community health outcomes and ensure
              universal access to standardised healthcare services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Completed Projects */}
      <ScrollAnimation>
        <section className="py-20 bg-white dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-4">
                Completed Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Healthcare initiatives that have made a difference in
                communities across Ghana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {completedProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col"
                >
                  <div className="relative w-full h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl flex-shrink-0">
                        <project.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#987543]">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex items-center text-sm text-primary-600 dark:text-primary-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.regions}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
      {/* Upcoming Projects */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-4">
                Upcoming Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Planned healthcare initiatives to further our mission across
                Ghana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  date: "November 1, 2025",
                  title: "Ahafo and Bono Regions Visit",
                  description:
                    "Donation of items in support of maternal and child welfare.",
                  icon: Baby,
                },
                {
                  date: "December 20, 2025",
                  title: "Nsakina Outreach",
                  description:
                    "Launch of massive campaign against teenage pregnancy and substance use disorder.",
                  icon: Users,
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary-100 dark:bg-secondary-900 p-3 rounded-xl flex-shrink-0">
                      <project.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="flex items-center  mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-[#987543]" />
                        <span className="font-medium text-[#987543]">
                          {project.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Regional Impact */}
      <ScrollAnimation>
        <section className="py-20 bg-white dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543]  mb-4">
                Regional Reach
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our commitment to visiting all regions of Ghana to deliver
                healthcare services.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Greater Accra",
                  "Central",
                  "Eastern",
                  "Western",
                  "Ashanti",
                  "Northern",
                  "Upper East",
                  "Upper West",
                  "Volta",
                  "Oti",
                  "North East",
                  "Savannah",
                  "Bono",
                  "Ahafo",
                  "Western North",
                ].map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-center p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
                  >
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {region}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  We have successfully visited all 16 regions of Ghana,
                  delivering healthcare services where they're needed most.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Partnership Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-4">
                Our Partnerships
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Collaborating with organizations to amplify our impact.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-xl">
                  <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-[#987543] mb-4">
                Partnership with TBL Kids Ministries
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Collaborating to conduct annual free sickle cell screenings in
                orphanages in the Greater Accra region.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 text-[#987543]" />
                  <span className="text-[#987543]">Ongoing Partnership</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default OurProjects;