
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Questions = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Question Bank</h1>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input placeholder="Search questions..." className="pl-10" />
      </div>
      
      <div className="space-y-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <h3 className="font-medium">Tell me about yourself</h3>
            <p className="text-sm text-gray-600 mt-1">Common opener question</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <h3 className="font-medium">What are your greatest strengths?</h3>
            <p className="text-sm text-gray-600 mt-1">Self-assessment question</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <h3 className="font-medium">Why should we hire you?</h3>
            <p className="text-sm text-gray-600 mt-1">Value proposition question</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <h3 className="font-medium">Where do you see yourself in 5 years?</h3>
            <p className="text-sm text-gray-600 mt-1">Career planning question</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <h3 className="font-medium">Describe a challenge you've faced at work</h3>
            <p className="text-sm text-gray-600 mt-1">Behavioral question</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Questions;
