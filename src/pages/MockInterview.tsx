
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mic } from "lucide-react";
import TextInterview from "@/components/TextInterview";
import VoiceInterview from "@/components/VoiceInterview";

type InterviewMode = "selection" | "text" | "voice";

const MockInterview = () => {
  const [interviewMode, setInterviewMode] = useState<InterviewMode>("selection");

  if (interviewMode === "text") {
    return <TextInterview onBack={() => setInterviewMode("selection")} />;
  }

  if (interviewMode === "voice") {
    return <VoiceInterview onBack={() => setInterviewMode("selection")} />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mock Interviews</h1>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center mr-4">
                <MessageSquare size={24} className="text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">Text Interview</h2>
                <p className="text-gray-600 text-sm">Chat with an AI interviewer</p>
              </div>
            </div>
            <Button onClick={() => setInterviewMode("text")} className="w-full">Start Text Interview</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center mr-4">
                <Mic size={24} className="text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">Voice Interview</h2>
                <p className="text-gray-600 text-sm">Speak with an AI interviewer</p>
              </div>
            </div>
            <Button onClick={() => setInterviewMode("voice")} className="w-full">Start Voice Interview</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MockInterview;
