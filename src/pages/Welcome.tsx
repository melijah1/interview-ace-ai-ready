
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
          <h1 className="text-2xl font-bold mt-6 text-white">Interview Ready</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-container flex flex-col">
      {/* Logo and App Name Header */}
      <div className="flex items-center p-4 pb-0">
        <img 
          src="/lovable-uploads/2d912998-a468-49e0-afa5-cdf91dcb4161.png" 
          alt="Interview Ready Logo" 
          className="w-12 h-12 mr-2"
        />
        <h1 className="text-xl font-bold text-white">Interview Ready</h1>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 gradient-blue rounded-full flex items-center justify-center shadow-lg mb-8 animate-fade-in">
          <Mic size={48} className="text-white" />
        </div>
        
        <h1 className="text-4xl font-bold mb-3 animate-slide-up text-shimmer">
          Interview Ready
        </h1>
        
        <p className="text-xl mb-12 animate-slide-up text-purple-200" style={{animationDelay: "0.1s"}}>
          Ace your next interview with confidence
        </p>
        
        <Card className="w-full max-w-xs mb-12 bg-transparent dark-card border-purple-500/20 animate-slide-up" style={{animationDelay: "0.2s"}}>
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-8 h-8 gradient-blue rounded-full flex items-center justify-center mr-4 shadow-sm flex-shrink-0">
                  <span className="text-white font-medium">✓</span>
                </div>
                <span className="text-gray-200">AI-powered mock interviews</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 gradient-blue rounded-full flex items-center justify-center mr-4 shadow-sm flex-shrink-0">
                  <span className="text-white font-medium">✓</span>
                </div>
                <span className="text-gray-200">Personalized interview feedback</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 gradient-blue rounded-full flex items-center justify-center mr-4 shadow-sm flex-shrink-0">
                  <span className="text-white font-medium">✓</span>
                </div>
                <span className="text-gray-200">Question bank & elevator pitch coach</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="w-full max-w-xs animate-slide-up" style={{animationDelay: "0.3s"}}>
          <Button 
            onClick={handleGetStarted} 
            className="w-full h-14 text-lg font-medium rounded-xl gradient-blue shadow-lg hover:opacity-95 transition-opacity border border-purple-500/30 hover:border-purple-400/70"
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
