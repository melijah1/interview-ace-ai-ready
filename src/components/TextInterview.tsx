
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const TextInterview = ({ onBack }: { onBack: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "Hello! I'm your AI interviewer. Let's start with a common question: Tell me about yourself and your background." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's interesting! Can you tell me about a challenging situation at work and how you handled it?",
        "Great background! What would you say are your greatest strengths?",
        "Thanks for sharing. How do you handle pressure or stressful situations?",
        "I see. Can you give me an example of a time when you showed leadership?",
        "Interesting perspective. Where do you see yourself in 5 years?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { sender: "ai", text: randomResponse }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)]">
      <div className="flex items-center mb-4">
        <Button variant="ghost" onClick={onBack} className="p-0 mr-2">
          <ArrowLeft size={24} />
        </Button>
        <h2 className="text-xl font-bold">Text Interview</h2>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <Card key={index} className={`${message.sender === "user" ? "bg-secondary ml-8" : "mr-8"}`}>
            <CardContent className="py-3 px-4">
              <p className="text-sm">{message.text}</p>
            </CardContent>
          </Card>
        ))}
        {loading && (
          <Card className="mr-8">
            <CardContent className="py-3 px-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-interview-blue animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-interview-blue animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-interview-blue animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="flex space-x-2">
        <Textarea 
          placeholder="Type your response..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="flex-1"
        />
        <Button onClick={handleSend} disabled={!input.trim() || loading}>
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
};

export default TextInterview;
