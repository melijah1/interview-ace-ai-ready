
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Questions = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Question Bank</h1>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          placeholder="Search questions..." 
          className="pl-10 bg-opacity-20 bg-gray-800 border-purple-500/20 placeholder:text-gray-400 text-white"
        />
      </div>
      
      <div className="space-y-4">
        <QuestionCard 
          title="Tell me about yourself"
          category="Common opener question"
        />
        
        <QuestionCard 
          title="What are your greatest strengths?"
          category="Self-assessment question"
        />
        
        <QuestionCard 
          title="Why should we hire you?"
          category="Value proposition question"
        />
        
        <QuestionCard 
          title="Where do you see yourself in 5 years?"
          category="Career planning question"
        />
        
        <QuestionCard 
          title="Describe a challenge you've faced at work"
          category="Behavioral question"
        />
      </div>
    </div>
  );
};

// Extract question card to a reusable component
const QuestionCard = ({ title, category }: { title: string; category: string }) => {
  return (
    <Card className="dark-card hover:border-purple-500/30 transition-all cursor-pointer">
      <CardContent className="p-4">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{category}</p>
      </CardContent>
    </Card>
  );
};

export default Questions;
