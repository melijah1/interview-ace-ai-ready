
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, BarChart3, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userName = "Alex"; // This would come from user state in a real app
  
  return (
    <div className="p-6 pt-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-interview-dark-gray">
            Welcome back, {userName}!
          </h1>
          <p className="text-gray-600">Ready to ace your next interview?</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-interview-dark-gray font-medium">{userName[0]}</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <Card className="border-2 border-interview-blue/10 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center mr-4">
                <MessageSquare size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Start New Mock Interview</h3>
                <p className="text-gray-600 text-sm">Practice with AI interviewer</p>
              </div>
            </div>
            <div className="mt-4">
              <Button 
                onClick={() => navigate("/mock-interview")}
                className="w-full rounded-xl bg-interview-blue hover:bg-interview-blue/90"
              >
                Start Interview
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-interview-light-blue flex items-center justify-center mr-3">
                  <BarChart3 size={20} className="text-interview-blue" />
                </div>
                <div>
                  <h3 className="font-semibold">Review My Scores</h3>
                  <p className="text-gray-600 text-sm">Track your progress</p>
                </div>
              </div>
              <div className="mt-3">
                <Button 
                  variant="outline" 
                  className="w-full border-interview-blue/30 text-interview-blue hover:bg-interview-blue/5"
                >
                  View Scores
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-interview-light-blue flex items-center justify-center mr-3">
                  <Mic size={20} className="text-interview-blue" />
                </div>
                <div>
                  <h3 className="font-semibold">Practice Elevator Pitch</h3>
                  <p className="text-gray-600 text-sm">Perfect your intro</p>
                </div>
              </div>
              <div className="mt-3">
                <Button 
                  variant="outline" 
                  className="w-full border-interview-blue/30 text-interview-blue hover:bg-interview-blue/5"
                >
                  Start Practice
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
        <Card className="border border-gray-200">
          <CardContent className="p-4 text-center py-8">
            <p className="text-gray-500">No recent activities yet</p>
            <p className="text-sm text-gray-400 mt-1">Complete your first mock interview to see results</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
