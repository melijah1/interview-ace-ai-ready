
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating assets loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate("/payment");
  };

  if (loading) {
    return (
      <div className="mobile-container flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 gradient-blue rounded-full flex items-center justify-center animate-pulse">
            <Mic size={48} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold mt-6 text-interview-dark-gray">Interview Ready</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-container flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 gradient-blue rounded-full flex items-center justify-center shadow-lg mb-8 animate-fade-in">
          <Mic size={48} className="text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-interview-dark-gray mb-4 animate-slide-up">
          Interview Ready
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 animate-slide-up" style={{animationDelay: "0.1s"}}>
          Ace your next interview with confidence
        </p>
        
        <ul className="text-left text-gray-700 space-y-4 mb-12 w-full max-w-xs animate-slide-up" style={{animationDelay: "0.2s"}}>
          <li className="flex items-center">
            <div className="w-8 h-8 gradient-blue rounded-full flex items-center justify-center mr-4 shadow-sm flex-shrink-0">
              <span className="text-white font-medium">✓</span>
            </div>
            <span>AI-powered mock interviews</span>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 gradient-blue rounded-full flex items-center justify-center mr-4 shadow-sm flex-shrink-0">
              <span className="text-white font-medium">✓</span>
            </div>
            <span>Personalized interview feedback</span>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 gradient-blue rounded-full flex items-center justify-center mr-4 shadow-sm flex-shrink-0">
              <span className="text-white font-medium">✓</span>
            </div>
            <span>Question bank & elevator pitch coach</span>
          </li>
        </ul>
        
        <div className="w-full max-w-xs animate-slide-up" style={{animationDelay: "0.3s"}}>
          <Button 
            onClick={handleGetStarted} 
            className="w-full h-14 text-lg font-medium rounded-xl gradient-blue shadow-md hover:opacity-95 transition-opacity"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
