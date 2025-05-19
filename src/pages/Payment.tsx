
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    
    // Mock payment process
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="mobile-container">
      <div className="p-4 border-b border-gray-200 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold mx-auto pr-10">Unlock Full Access</h1>
      </div>
      
      <div className="p-6 flex flex-col items-center">
        <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="gradient-blue p-6 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">One-time Purchase</h2>
            <p className="opacity-90">Lifetime access to all features</p>
            <div className="mt-4 mb-2">
              <span className="text-4xl font-bold">$14.99</span>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-center">
              <Check size={20} className="text-interview-blue mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">Unlimited AI mock interviews</span>
            </div>
            <div className="flex items-center">
              <Check size={20} className="text-interview-blue mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">Detailed performance analysis</span>
            </div>
            <div className="flex items-center">
              <Check size={20} className="text-interview-blue mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">Question bank for all industries</span>
            </div>
            <div className="flex items-center">
              <Check size={20} className="text-interview-blue mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">Elevator pitch coach & feedback</span>
            </div>
            <div className="flex items-center">
              <Check size={20} className="text-interview-blue mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">Free future updates</span>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handlePayment}
          disabled={processing}
          className="w-full max-w-sm h-14 text-lg font-medium rounded-xl gradient-blue shadow-md hover:opacity-95 transition-opacity"
        >
          {processing ? "Processing..." : "Pay $14.99"}
        </Button>
        
        <p className="text-xs text-gray-500 mt-4 text-center max-w-xs">
          By purchasing, you agree to our Terms of Service and Privacy Policy. No recurring charges.
        </p>
      </div>
    </div>
  );
};

export default Payment;
