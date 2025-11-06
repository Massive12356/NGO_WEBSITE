import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  donationAmount?: number;
  reference?: string;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ 
  isOpen, 
  onClose,
  donationAmount,
  reference
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white dark:bg-neutral-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Heart icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-[#987543] p-4 rounded-full">
                <Heart className="w-12 h-12 text-white" fill="white" />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Thank You!
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Your generosity makes a real difference in our healthcare mission.
              </p>
              
              {donationAmount && (
                <p className="text-xl font-semibold text-[#987543] mb-2">
                  Donation: ₵{donationAmount}
                </p>
              )}
              
              {reference && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Reference: {reference}
                </p>
              )}
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your contribution will help us continue providing essential healthcare services to communities in need across Ghana.
              </p>
              
              <button
                onClick={onClose}
                className="bg-[#987543] text-white py-3 px-6 rounded-lg w-full hover:opacity-90 transition-opacity"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouModal;