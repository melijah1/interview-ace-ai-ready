
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Mic, Send, User } from "lucide-react";

const MockInterview = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{sender: string, text: string}[]>([
    { sender: "ai", text: "Hello! I'll be your interview coach today. What position are you preparing for?" }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      setChatHistory([...chatHistory, { sender: "user", text: message }]);
      
      // Simulate AI response
      setTimeout(() => {
        setChatHistory(prev => [...prev, { 
          sender: "ai", 
          text: "That's great! I'll help you prepare for that role. Let's start with a common interview question: Tell me about yourself." 
        }]);
      }, 1000);
      
      setMessage("");
    }
  };

  return (
    <div className="chat-container p-4">
      <Card className="dark-card h-full flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-purple-400" />
            <span className="text-light">Mock Interview</span>
          </CardTitle>
          <Separator className="bg-gray-700" />
        </CardHeader>
        
        <CardContent className="message-container flex-grow overflow-auto pb-2">
          {chatHistory.map((chat, index) => (
            <div 
              key={index}
              className={`flex items-start gap-3 mb-4 ${chat.sender === "ai" ? "" : "flex-row-reverse"}`}
            >
              <Avatar className="w-8 h-8 mt-1">
                {chat.sender === "ai" ? (
                  <>
                    <AvatarImage src="/ai-avatar.png" />
                    <AvatarFallback className="bg-purple-700 text-white">
                      <Mic size={16} />
                    </AvatarFallback>
                  </>
                ) : (
                  <>
                    <AvatarImage src="/user-avatar.png" />
                    <AvatarFallback className="bg-blue-600 text-white">
                      <User size={16} />
                    </AvatarFallback>
                  </>
                )}
              </Avatar>
              
              <div 
                className={`rounded-lg px-4 py-2 max-w-[75%] ${
                  chat.sender === "ai" 
                    ? "bg-gray-800 text-light" 
                    : "bg-purple-700 text-white ml-auto"
                }`}
              >
                {chat.text}
              </div>
            </div>
          ))}
        </CardContent>
        
        <CardFooter className="message-input border-t border-gray-800 pt-3 gap-2">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your response..."
            className="bg-gray-800 border-gray-700 text-light"
            rows={2}
          />
          <Button 
            onClick={handleSendMessage} 
            className="gradient-blue h-full" 
            size="icon"
          >
            <Send size={18} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MockInterview;
