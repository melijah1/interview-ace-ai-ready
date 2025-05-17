
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, LogOut, User, Award, BarChart, 
  Bell, HelpCircle 
} from "lucide-react";

const Profile = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center mb-8 pt-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <User size={40} className="text-gray-500" />
        </div>
        <h1 className="text-xl font-semibold">Alex Johnson</h1>
        <p className="text-gray-600">Product Manager</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">Performance</h2>
          <Card>
            <CardContent className="p-0">
              <div className="p-4 border-b border-gray-100 flex items-center">
                <Award size={20} className="mr-3 text-interview-blue" />
                <span>Interview score</span>
                <span className="ml-auto font-medium">82%</span>
              </div>
              <div className="p-4 border-b border-gray-100 flex items-center">
                <BarChart size={20} className="mr-3 text-interview-blue" />
                <span>Interviews completed</span>
                <span className="ml-auto font-medium">3</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">Settings</h2>
          <Card>
            <CardContent className="p-0">
              <button className="w-full p-4 border-b border-gray-100 flex items-center text-left">
                <Settings size={20} className="mr-3 text-interview-blue" />
                <span>Account settings</span>
              </button>
              <button className="w-full p-4 border-b border-gray-100 flex items-center text-left">
                <Bell size={20} className="mr-3 text-interview-blue" />
                <span>Notification preferences</span>
              </button>
              <button className="w-full p-4 flex items-center text-left">
                <HelpCircle size={20} className="mr-3 text-interview-blue" />
                <span>Help & Support</span>
              </button>
            </CardContent>
          </Card>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full border-red-300 text-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-400"
        >
          <LogOut size={18} className="mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
