
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  type: "ai" | "user" | "system";
  content: string;
}

const VoiceInterview = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "system", content: "Interview ready. Press the microphone button to start speaking." },
    { type: "ai", content: "Hello! I'm your AI interviewer. Let's start with: Tell me about yourself." }
  ]);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const { toast } = useToast();

  const toggleListening = () => {
    if (isListening) {
      // Stop listening
      setIsListening(false);
      setMessages(prev => [...prev, { type: "system", content: "Processing your response..." }]);
      
      // Simulate processing delay
      setTimeout(() => {
        // Add fake user response
        setMessages(prev => [...prev, { 
          type: "user", 
          content: "I have 5 years of experience in software development, specializing in frontend technologies like React and Vue. I've worked on several large-scale projects including an e-commerce platform and a financial dashboard application." 
        }]);
        
        // Begin AI response after a delay
        setTimeout(() => {
          setAiSpeaking(true);
          const aiResponse = "That's impressive experience. Can you tell me about a challenging project you worked on and how you handled any obstacles that came up?";
          setMessages(prev => [...prev, { type: "ai", content: aiResponse }]);
          
          // Simulate AI speaking time
          setTimeout(() => {
            setAiSpeaking(false);
          }, 4000);
        }, 1000);
      }, 2000);
    } else {
      // Start listening
      setIsListening(true);
      setMessages(prev => [...prev, { type: "system", content: "Listening..." }]);
      
      toast({
        title: "Microphone Active",
        description: "Please speak clearly into your microphone.",
      });
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-16rem)]">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <Card 
            key={index}
            className={`
              ${message.type === "user" ? "bg-secondary ml-8" : ""} 
              ${message.type === "system" ? "border-dashed bg-muted" : ""}
              ${message.type === "ai" ? "mr-8" : ""}
            `}
          >
            <CardContent className="py-3 px-4">
              {message.type === "ai" && aiSpeaking && index === messages.length - 1 && (
                <div className="flex items-center gap-2 mb-2">
                  <Volume2 size={16} className="text-purple-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Speaking...</span>
                </div>
              )}
              <p className={`text-sm ${message.type === "system" ? "text-muted-foreground italic" : ""}`}>
                {message.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          className={`rounded-full p-6 ${isListening ? "bg-red-500 hover:bg-red-600" : ""}`}
          onClick={toggleListening}
          disabled={aiSpeaking}
        >
          {isListening ? <MicOff size={24} /> : <Mic size={24} />}
        </Button>
      </div>
    </div>
  );
};

export default VoiceInterview;
