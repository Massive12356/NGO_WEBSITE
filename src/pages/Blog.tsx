import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Heart, Award, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';

const NewsEvents: React.FC = () => {
  const newsPosts = [
    {
      id: 1,
      title: "Twelve In Twelve LBG Wins Philanthropy and Charity Award 2025",
      excerpt: "We are honored to receive the Forty Under 40 Awards in the Philanthropy and Charity category for 2025, recognizing our work in healthcare across Ghana.",
      author: "Dr. Delasy Gbekor",
      date: "March 15, 2025",
      category: "Awards",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Successful Medical Outreach in Northern Regions",
      excerpt: "Our team completed a comprehensive medical outreach program in the Northern, Upper East, and Upper West regions, serving over 1,500 patients.",
      author: "Medical Team",
      date: "February 28, 2025",
      category: "Program Update",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Partnership with TBL Kids Ministries Expands",
      excerpt: "Our ongoing partnership with TBL Kids Ministries has now provided free sickle cell screenings to over 500 children in orphanages across Greater Accra.",
      author: "Partnerships Team",
      date: "January 10, 2025",
      category: "Partnerships",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Mental Health Awareness Campaign Launched",
      excerpt: "We launched a nationwide campaign to create awareness about mental health disorders such as depression, anxiety, and substance use disorder.",
      author: "Community Health Team",
      date: "December 5, 2024",
      category: "Health Initiative",
      image: "https://images.pexels.com/photos/8190804/pexels-photo-8190804.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Nutrition Program Shows Positive Results",
      excerpt: "Our nutritional counseling and education program for pregnant women at risk of iron deficiency anemia has shown significant improvements in health outcomes.",
      author: "Nutrition Team",
      date: "November 20, 2024",
      category: "Health Initiative",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Twelve In Twelve LBG Receives People's Choice Award 2024",
      excerpt: "We were recognized with the People's Choice Award at the Forty Under 40 Awards, highlighting community support for our healthcare initiatives.",
      author: "Dr. Delasy Gbekor",
      date: "October 15, 2024",
      category: "Awards",
      image: "https://images.pexels.com/photos/5427656/pexels-photo-5427656.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "3 min read"
    }
  ];

  const categories = ["All", "Awards", "Program Update", "Partnerships", "Health Initiative"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? newsPosts 
    : newsPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>News & Events - Twelve In Twelve LBG | Healthcare Updates in Ghana</title>
        <meta 
          name="description" 
          content="Stay informed with the latest updates on our healthcare programs, community impact, and events at Twelve In Twelve LBG across Ghana." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              News &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Events
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest updates on our healthcare programs, 
              community impact, and upcoming events across Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <ScrollAnimation>
        <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Featured Post */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Story
              </h2>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={newsPosts[0].image}
                    alt={newsPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                    width="600"
                    height="400"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {newsPosts[0].category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {newsPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {newsPosts[0].readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {newsPosts[0].title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {newsPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">{newsPosts[0].author}</span>
                    </div>
                    <Button
                      variant="primary"
                      icon={ArrowRight}
                      iconPosition="right"
                      aria-label={`Read ${newsPosts[0].title}`}
                    >
                      Read Story
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      </ScrollAnimation>

      {/* News Grid */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Latest Updates
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {selectedCategory === "All" 
                  ? "Explore all our latest healthcare updates and community stories"
                  : `Articles in ${selectedCategory}`
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    width="400"
                    height="192"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  No articles found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </ScrollAnimation>

      {/* Upcoming Events */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Join us at our upcoming healthcare initiatives across Ghana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  date: "November 1, 2025",
                  title: "Ahafo and Bono Regions Visit",
                  description: "Donation of items in support of maternal and child welfare.",
                  icon: Users
                },
                {
                  date: "December 20, 2025",
                  title: "Nsakina Outreach",
                  description: "Launch of massive campaign against teenage pregnancy and substance use disorder.",
                  icon: Heart
                }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl flex-shrink-0">
                      <event.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Newsletter Signup */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Connected with Our Healthcare Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and never miss important updates on our community health programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                aria-label="Email address for newsletter subscription"
              />
              <Button
                variant="secondary"
                size="lg"
                icon={Users}
                iconPosition="right"
                aria-label="Subscribe to newsletter"
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default NewsEvents;