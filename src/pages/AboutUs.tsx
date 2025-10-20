import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Target, Award } from "lucide-react";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import ceo from "../images/1.webp";
import pic1 from "../images/57.webp";
import pic2 from "../images/58.jpg";
import pic3 from "../images/59.jpg";
import pic4 from "../images/60.webp";
import pic5 from "../images/62.jpg";
import pic6 from "../images/63.jpg";
import pic7 from "../images/61.webp";

const AboutUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us - Twelve In Twelve LBG | Healthcare for Underserved
          Communities
        </title>
        <meta
          name="description"
          content="Learn about Twelve In Twelve LBG's mission to ensure universal access to standardised healthcare services in underserved communities all over Ghana."
        />
      </Helmet>

      {/* Hero Section */}

      {/* Hero Section */}
      <section className="relative bg-gray-50 dark:bg-neutral-800 h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-snug md:leading-snug lg:leading-none mb-4">
              Transforming Health <br />
              <span className="text-[#987543]">One Citizen at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Founded on 1st January 2023 by Dr. Delasy Gbekor, Twelve In Twelve
              LBG is dedicated to ensuring universal access to standardised
              healthcare services in underserved communities all over Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 0.98 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-xl w-fit mb-6">
                  <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To ensure universal access to standardised healthcare services
                  in underserved communities all over Ghana.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 0.98 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-xl w-fit mb-6">
                  <Heart className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transforming the health of our nation (Ghana), one citizen at
                  a time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Story */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-6">
                  Our Story
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                    Twelve In Twelve LBG was founded on 1st January 2023 by Dr.
                    Delasy Gbekor, a General Practitioner passionate about
                    addressing healthcare disparities in Ghana. The name 'Twelve
                    In Twelve' was derived from the NGO's visits to a different
                    region every month within a span of 12 months.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                    We have successfully visited all the regions in Ghana and
                    have embarked on numerous health projects to assist people
                    in deprived communities. Our team consists of health
                    professionals (doctors and nurses), media personnel, project
                    managers, advertising specialists, and other administrative
                    staff.
                  </p>
                </div>
              </div>

              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={ceo}
                  alt="Twelve In Twelve LBG team members working with patients in a rural community"
                  className="rounded-2xl shadow-xl w-full h-74 object-cover"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Goals */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-4">
                Our Goals and Objectives
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Working towards sustainable development goal 3 (SDG 3) and
                beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Provide CHPS compounds or health posts with basic medical equipment and materials for delivering standard healthcare",
                "Align with SDG 3 to reduce maternal and child mortality",
                "Promote reproductive health amongst the adolescent age group",
                "Implement measures to curb malnutrition amongst pregnant women and children",
                "Create awareness on mental health related disorders",
                "Champion the cause of environmental sustainability",
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-lg">
                    <div className="w-6 h-6 text-primary-600 dark:text-primary-400 font-bold text-center">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{goal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section id="team" className="py-20 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Experienced professionals passionate about transforming
                healthcare in Ghana.
              </p>
            </div>

            {/* CEO Section */}
            <div className="flex justify-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg text-center overflow-hidden max-w-sm"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#987543]/20">
                  <img
                    src={ceo}
                    alt="Dr. Delasy Gbekor - Founder & General Practitioner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Dr. Delasy Gbekor
                </h3>
                <div className="text-[#987543] font-medium mb-3">
                  Founder & General Practitioner
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Medical doctor with extensive experience in community
                  healthcare and a passion for addressing healthcare disparities
                  in underserved communities.
                </p>
              </motion.div>
            </div>

            {/* Other Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Nathaniel Ato Eduah",
                  role: "Chief Finance Officer",
                  bio: "A strategic finance expert with strong analytical skills and a keen eye for fiscal responsibility. He oversees financial planning and ensures transparency and sustainability across all organizational operations.",
                  image: pic1,
                },
                {
                  name: "Ameenah Rashid",
                  role: "Program Manager",
                  bio: "A results-driven professional who designs and manages impactful healthcare programs. She ensures effective coordination between stakeholders to achieve measurable community outcomes.",
                  image: pic5,
                },
                {
                  name: "Karen Naa Oyoe Quartey",
                  role: "Communications Officer",
                  bio: "A dynamic communicator with a background in public relations and storytelling. She crafts powerful messages that strengthen the organization’s voice and visibility across digital and traditional media.",
                  image: pic2,
                },
                {
                  name: "Dorcas Brown",
                  role: "Project Assistant",
                  bio: "A detail-oriented and dedicated team member who provides strong administrative and logistical support for ongoing health initiatives and field projects.",
                  image: pic3,
                },
                {
                  name: "Prince Kwame Adiyiah",
                  role: "Media Team",
                  bio: "A creative visual storyteller passionate about digital media production. He specializes in capturing compelling visuals that highlight the impact of the organization’s work.",
                  image: pic4,
                },
                {
                  name: "Sarah Hammond",
                  role: "Media Personnel",
                  bio: "A talented content creator with expertise in visual communication and social engagement. She plays a vital role in documenting field activities and promoting awareness campaigns.",
                  image: pic6,
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg text-center overflow-hidden"
                >
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#987543]/20">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role} at Twelve In Twelve LBG`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-[#987543] font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Recognition & Awards */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-4">
                Recognition & Awards
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Honoring our milestones and commitment to transforming
                healthcare in Ghana.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  award: "People's Choice Award",
                  year: "2024",
                  description:
                    "Recognized by the Forty Under 40 Awards for outstanding community service and impact-driven healthcare initiatives across Ghana. This award celebrates our dedication to improving healthcare access for underserved communities.",
                  image: pic7,
                },
                {
                  award: "Philanthropy and Charity Award",
                  year: "2025",
                  description:
                    "Honored for exceptional leadership in philanthropic healthcare outreach, providing vital medical services and support to vulnerable populations nationwide.",
                  image: ceo,
                },
              ].map((recognition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 bg-gray-100 dark:bg-neutral-800 flex items-center justify-center p-4">
                    <img
                      src={recognition.image}
                      alt={`${recognition.award} image`}
                      className="w-full h-auto max-h-96 object-contain rounded-xl"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-full md:w-1/2 p-8 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-3">
                      <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-xl">
                        <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <span className="ml-3 text-primary-600 dark:text-primary-400 font-medium text-sm">
                        {recognition.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#987543] mb-4">
                      {recognition.award}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                      {recognition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default AboutUs;
