import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import nasikaImage from '../images/COMMUNITY OUTREACH!12a.png';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // Close popup when pressing Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scrolling when popup is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleDonateClick = () => {
    onClose();
    // Navigate to the Get Involved page and scroll to the donation section
    navigate('/get-involved#giving');
    
    // Ensure smooth scrolling to the section after navigation
    // Using a longer timeout to ensure page is fully loaded
    setTimeout(() => {
      const element = document.getElementById('giving');
      if (element) {
        // Scroll to the section with smooth behavior
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Add a small additional delay to ensure the scroll completes
        setTimeout(() => {
          // Optionally, we can focus on the first input field to make it more obvious
          const firstInput = element.querySelector('input[type="email"]') as HTMLInputElement;
          if (firstInput) {
            firstInput.focus();
          }
        }, 300);
      }
    }, 300); // Increased timeout to ensure full page load
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div
        className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold z-10"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="p-6">
          <div className="mb-4">
            <img
              src={nasikaImage}
              alt="Nsakina Outreach Campaign"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold text-[#987543] mb-4 text-center">
          Adidome Maternal Health Outreach
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
          Join us as we visit the Adidome Zongo CHPS Compound in the Volta Region to support maternal healthcare through the donation of essential medical materials and equipment. This initiative is aimed at improving healthcare services for expectant mothers and strengthening community-based maternal care.

Your support through donations will help enhance maternal health outcomes and empower healthcare providers to deliver safer and more effective care for women in the community.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
            Your support through donations will help us reach more young lives
            with crucial education and resources.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleDonateClick}
              className="bg-[#987543] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300"
            >
              Donate Now
            </button>
            <button
              onClick={onClose}
              className="border border-[#987543] text-[#987543] px-6 py-3 rounded-lg font-medium hover:bg-[#987543] hover:text-white transition-colors duration-300"
            >
              Close & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;