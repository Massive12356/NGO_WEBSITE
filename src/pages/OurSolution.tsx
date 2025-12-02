import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Baby,
  TestTube,
  Brain,
  Calendar,
  MapPin,
} from "lucide-react";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import maternalDonation from "../images/maternalDonation.jpeg";
import reproHealth from "../images/24.jpeg";
import anemiaDonation from "../images/AnemiaDonation.jpeg";
import diseaseSupport from "../images/diseaseSupport.jpeg";
import elderlyScreening from "../images/elderlyScreening.jpeg";

import anaeProgram from "../images/32.jpeg";
import orphaDonation from "../images/hero1.webp";
import northDonation from "../images/30.jpeg";
import orphaDonation1 from "../images/35.jpeg";
import nasikaImage from "../images/Nasika.jpeg";

const OurProjects: React.FC = () => {
  const completedProjects = [
    {
      icon: Baby,
      title: "Maternal & Child Health Support Initiative",
      description:
        "We visited the CHPS compound in Womenu, Adaklu, to donate vital medical equipment and supplies aimed at enhancing maternal and child healthcare services. This initiative reflects our dedication to supporting safe childbirth, improving neonatal care, and strengthening community health systems in the Volta Region.",
      regions: "Volta Region",
      image: maternalDonation,
    },
    {
      icon: Users,
      title: "Elderly Medical Outreach & Wellness Screening",
      description:
        "Our team visited the alleged 'witch camp' in Gambaga, Northern Region, where elderly women reside in isolation due to cultural stigmas. We organized a full-scale medical screening that addressed various eye and ear conditions, conducted a deworming exercise, and treated cases of typhoid and malaria. Beyond healthcare services, we also distributed clothing to support the physical and emotional well-being of the residents.",
      regions: "Northern Region",
      image: elderlyScreening,
    },
    {
      icon: TestTube,
      title: "Dambai Health Center Donation",
      description:
        "A charitable initiative at Dambai Health Centre in the Oti Region, where we provided essential medical supplies aimed at combating typhoid and malaria. The donation also included vital resources to support maternal and child healthcare, reinforcing our commitment to improving community well-being.",
      regions: "Oti Region",
      image: anemiaDonation,
    },
    {
      icon: Baby,
      title: "Ningo Orphanage Christmas Charity Event",
      description:
        "We visited an orphanage in Ningo, Greater Accra, to host a heartwarming Christmas celebration for the children. The event featured gift donations, fun activities, and a festive party to bring joy and create lasting memories during the holiday season.",
      regions: "Greater Accra",
      image: orphaDonation1,
    },
    {
      icon: TestTube,
      title: "Tolon District Medical Aid",
      description:
        "As part of our commitment to improving community healthcare, we donated essential medical equipment to a CHPS compound in the Tolon District of the Northern Region.",
      regions: "Northern Region",
      image: northDonation,
    },
    {
      icon: TestTube,
      title: "Community Disease Prevention & Treatment Support",
      description:
        "In collaboration with the TBL Kids Ministry in Otsenkorang, we organized a comprehensive health outreach program focused on screening and treating malaria, typhoid, and malnutrition. The initiative aimed to raise health awareness, provide early diagnosis, and support vulnerable children and families in the Central Region.",
      regions: "Central Region",
      image: diseaseSupport,
    },
    {
      icon: Brain,
      title: "Reproductive Health Education Campaign",
      description:
        "We conducted an educational outreach in Ostenkorang, Central Region, centered on raising awareness about reproductive health. The campaign featured interactive sessions and expert-led discussions aimed at equipping participants with essential knowledge on sexual health, hygiene, and preventive care.",
      regions: "Central Region",
      image: reproHealth,
    },
    {
      icon: Brain,
      title: "Orphanage Donation",
      description:
        "A heartfelt outreach program at Angels of Hope Orphanage, where we provided essential provisions, food supplies, and hygiene products to support the well-being and growth of the children. Our aim was to offer hope, care, and a sense of belonging to the young ones who need it most.",
      regions: "Western Region",
      image: orphaDonation,
    },
    {
      icon: Brain,
      title: "Iron Deficiency & Nutrition Education Program",
      description:
        "We held an educational session at the CHPS compound in the Tolon District, Northern Region, focused on creating awareness around iron deficiency anemia. The program provided practical nutrition recommendations, guidance on dietary sources of iron, and tips for preventing anemia, especially among vulnerable groups such as children and pregnant women.",
      regions: "Northern Region",
      image: anaeProgram,
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
                  image: nasikaImage,
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg"
                >
                  {/* Added image for Nsakina Outreach */}
                  {project.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
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
