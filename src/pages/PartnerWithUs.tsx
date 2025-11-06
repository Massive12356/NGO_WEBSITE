import React, { useState,useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Handshake,
  Users,
  Heart,
  ArrowRight,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { Button } from "../components/Button";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import { PaystackButton } from "react-paystack";
import toast from "react-hot-toast";
import proven from "../images/proven.jpeg";
import { Link } from "react-router-dom";
import ThankYouModal from "../components/ThankYouModal";

interface PaystackResponse {
  reference: string;
  trans: string;
  status: string;
  message: string;
  transaction: string;
  trxref: string;
}

const GetInvolved: React.FC = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [donationData, setDonationData] = useState<{amount?: number; reference?: string}>({});

  // ✅ Correctly declare and read your public key from Vite env
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;


  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name: "Twelve In Twelve LBG Supporter",
      custom_fields: [
        {
          display_name: "Purpose",
          variable_name: "donation_purpose",
          value: "Healthcare Support Initiative",
        },
      ],
    },
    publicKey,
    text: "Donate Now",
    currency: "GHS", // ✅ Ghana Cedis
    onSuccess: (response: PaystackResponse | undefined) => {
      if (!response) {
        toast.error("No response received from Paystack");
        return;
      }

      // Show thank you modal instead of toast
      setDonationData({
        amount: amount,
        reference: response.reference
      });
      setShowThankYouModal(true);
      console.log("Payment successful:", response);
    },
    onClose: () => toast("Payment window closed."),
  };

  const handleCustomDonate = () => {
    if (!email.trim() || !amount || amount <= 0) {
      toast.error("Please enter a valid email and donation amount.");
      return;
    }

    const handler = (window as any).PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email,
      amount: amount * 100, // Paystack works in kobo (GHS * 100)
      currency: "GHS",
      callback: (response: any) => {
        console.log("Payment successful", response);
        // Show thank you modal instead of toast
        setDonationData({
          amount: amount,
          reference: response.reference
        });
        setShowThankYouModal(true);
      },
      onClose: () => {
        toast.error("Payment window closed.");
      },
    });

    handler.openIframe(); // Opens the Paystack iframe
  };

  return (
    <>
      <ThankYouModal 
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        donationAmount={donationData.amount}
        reference={donationData.reference}
      />
      <Helmet>
        <title>
          Get Involved - Twelve In Twelve LBG | Join Our Healthcare Mission
        </title>
        <meta
          name="description"
          content="Join Twelve In Twelve LBG to expand healthcare access in Ghana. Opportunities for individuals, organizations, and communities to create lasting health impact."
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
              Join Us in{" "}
              <span className="text-[#987543]">Transforming Healthcare</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our community of supporters working together to ensure
              universal access to standardised healthcare services in
              underserved communities across Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ways to <span className="text-[#987543]">Get Involved </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Multiple ways to support our healthcare mission and create
                meaningful impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Donate",
                  description:
                    "Support our healthcare programs with financial contributions that directly impact communities in need.",
                  benefits: [
                    "Tax deductible",
                    "Direct impact",
                    "Regular updates",
                    "Transparent reporting",
                  ],
                },
                {
                  icon: Users,
                  title: "Volunteer",
                  description:
                    "Contribute your time and skills to support our healthcare programs and community initiatives.",
                  benefits: [
                    "Hands-on impact",
                    "Skill development",
                    "Cultural exchange",
                    "Community connection",
                  ],
                },
                {
                  icon: Handshake,
                  title: "Partner Organizations",
                  description:
                    "Collaborate with NGOs, healthcare institutions, and community organizations.",
                  benefits: [
                    "Expanded reach",
                    "Resource sharing",
                    "Joint programs",
                    "Sustainable impact",
                  ],
                },
              ].map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl w-fit mx-auto mb-4">
                    <opportunity.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold  mb-3 text-[#987543] text-center">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                    {opportunity.description}
                  </p>
                  <div className="space-y-2">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Donation Options */}
      <ScrollAnimation>
        <section id="giving" className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-[#987543] font-bold mb-4">
                Support Our Healthcare Mission
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Your contribution directly supports our healthcare programs and
                creates lasting impact.
              </p>
            </div>

            {/* Custom One-Time Donation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg mb-12 max-w-lg mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                One-Time Donation (Custom Amount)
              </h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg mb-4"
              />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Enter Amount (GHS)"
                className="w-full p-3 border rounded-lg mb-6"
              />
              {/* Custom Pay Button */}
              <button
                onClick={handleCustomDonate}
                className="bg-yellow-900 text-white py-3 px-6 rounded-lg w-full hover:opacity-90"
              >
                Donate ₵{amount || "Now"}
              </button>
            </motion.div>

            {/* Fixed Amount Donation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "₵100 One-Time",
                  amount: "₵100",
                  impact:
                    "Provides basic medical supplies to a community clinic",
                  description: "A simple act of kindness that goes a long way.",
                  type: "one-time",
                },
                {
                  title: "₵50 Monthly Support",
                  amount: "₵50/month",
                  impact: "Supports ongoing maternal health programs",
                  description:
                    "Create sustainable impact with regular contributions.",
                  type: "monthly",
                  planCode: "PLN_qqsrbdkas0mzhsp",
                  popular: true,
                },
                {
                  title: "Major Gift (₵1,000+)",
                  amount: "₵1,000+",
                  impact:
                    "Funds a complete medical package for a rural CHPS compound",
                  description: "Transform an entire healthcare facility.",
                  type: "one-time",
                },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg relative ${
                    option.popular ? "ring-2 ring-[#987543]" : ""
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#987543] text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {option.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4 text-center">
                    {option.amount}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                    {option.impact}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 text-center">
                    {option.description}
                  </p>

                  <div className="w-full flex items-center justify-center">
                    <PaystackButton
                      {...componentProps}
                      className="bg-yellow-900 text-white dark:bg-white dark:text-black shadow-md py-2 px-7 rounded-lg hover:from-black hover:to-[#987543] dark:hover:text-white hover:bg-gradient-to-r hover:shadow-lg"
                      amount={
                        option.type === "one-time"
                          ? parseInt(option.amount.replace(/[^\d]/g, "")) * 100
                          : 0
                      }
                      email={email || "info@twelveintwelvelbg.org"}
                      text="Donate Now"
                      {...(option.type === "monthly"
                        ? { plan: option.planCode, currency: "GHS" }
                        : {})}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Support Us */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#987543] mb-6">
                  Why Support Twelve In Twelve LBG?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  With proven experience, innovative solutions, and a commitment
                  to sustainable impact, we're the ideal organization for
                  supporters serious about transforming healthcare in Ghana.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Proven Track Record",
                      description:
                        "Successfully visited all 16 regions of Ghana with measurable healthcare outcomes",
                    },
                    {
                      title: "Comprehensive Approach",
                      description:
                        "End-to-end healthcare solutions covering equipment, training, and community engagement",
                    },
                    {
                      title: "Local Adaptation",
                      description:
                        "Programs customized to local contexts, languages, and cultural needs across Ghana",
                    },
                    {
                      title: "Sustainable Impact",
                      description:
                        "Long-term programs that create lasting change beyond initial implementation",
                    },
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-secondary-100 dark:bg-secondary-900 p-1 rounded-full mr-4 mt-2">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#987543] mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={proven}
                  alt="Community members working together on a healthcare project"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Supporter Stories */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#987543]  mb-4">
                Supporter Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real stories from our community of supporters making a
                difference in healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  supporter: "Anonymous Donor",
                  role: "Monthly Supporter",
                  impact: "Supports one maternal health program per month",
                  quote:
                    "Knowing that my monthly contribution directly supports maternal health programs in rural communities makes it so meaningful. I can see the impact in the progress reports.",
                  author: "Anonymous Donor, Accra",
                },
                {
                  supporter: "Medical Volunteer Team",
                  role: "Healthcare Professionals",
                  project: "Northern Region Medical Outreach",
                  results:
                    "Provided medical services to 500+ patients in remote communities",
                  quote:
                    "Volunteering with Twelve In Twelve LBG has allowed us to extend our medical expertise to communities that desperately need it. The experience has been incredibly rewarding.",
                  author: "Dr. Samuel Asante, Volunteer Team Leader",
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg"
                >
                  <div className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
                    {story.supporter} - {story.role}
                  </div>
                  <h3 className="text-2xl font-bold text-[#987543] mb-4">
                    {story.project || story.impact}
                  </h3>
                  {story.results && (
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {story.results}
                    </p>
                  )}
                  <blockquote className="text-lg text-gray-700 dark:text-gray-200 italic mb-4">
                    "{story.quote}"
                  </blockquote>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    — {story.author}
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
              Ready to Make a Difference in Healthcare?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our mission to transform healthcare and improve health
              outcomes for communities across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/contact-us"}>
                <Button
                  size="lg"
                  className="border-white text-black hover:bg-white "
                  aria-label="Contact us about volunteering"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default GetInvolved;
