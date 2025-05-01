
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/context/ThemeContext";

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Mock responses for the chatbot
const mockResponses: Record<string, string[]> = {
  greeting: [
    "Hello! Welcome to Sweet Treat Haven. How can I help you today?",
    "Hi there! I'm your Sweet Treat Haven assistant. What dessert are you looking for?"
  ],
  default: [
    "I'm not sure I understand. Could you please rephrase that?",
    "Hmm, I'm not quite sure how to help with that. Would you like to know about our dessert categories?"
  ],
  categories: [
    "We have several dessert categories: Cakes & Pastries, Cookies & Biscuits, Frozen Desserts, Puddings & Custards, Small Bites & Sweets, and Pies & Tarts. Which one interests you?"
  ],
  cake: [
    "Our most popular cakes are Chocolate Truffle Cake, Red Velvet Cake, and Vanilla Berry Cake. Would you like more information on any of these?"
  ],
  cookie: [
    "We have delicious cookies like Chocolate Chip, Double Chocolate, and Macadamia White Chocolate. They're freshly baked daily!"
  ],
  ice_cream: [
    "Our frozen desserts include Classic Vanilla Bean Ice Cream, Chocolate Fudge Brownie Ice Cream, and Strawberry Cheesecake Ice Cream."
  ],
  pudding: [
    "We offer traditional Vanilla Pudding, Chocolate Pudding, and our special Caramel Bread Pudding."
  ],
  chocolate: [
    "We have many chocolate options! Chocolate Cake, Chocolate Cookies, Chocolate Ice Cream, Chocolate Pudding - you name it!"
  ],
  price: [
    "Our dessert prices range from $3.50 for cookies to $35 for specialty cakes. Is there a specific dessert you'd like to know the price of?"
  ],
  order: [
    "To place an order, simply browse our website, add items to your cart, and proceed to checkout. You can choose delivery, takeaway, or online order options."
  ],
  delivery: [
    "We offer delivery within a 10-mile radius. Delivery fee is $5, but free for orders over $30. At checkout, you can select your delivery time slot."
  ],
  payment: [
    "We accept all major credit cards and cash on delivery. Payment is processed securely at checkout."
  ]
};

const getResponse = (message: string): string => {
  message = message.toLowerCase();
  
  if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
    return mockResponses.greeting[Math.floor(Math.random() * mockResponses.greeting.length)];
  } else if (message.includes('category') || message.includes('categories') || message.includes('types')) {
    return mockResponses.categories[0];
  } else if (message.includes('cake') || message.includes('pastry') || message.includes('pastries')) {
    return mockResponses.cake[0];
  } else if (message.includes('cookie') || message.includes('cookies') || message.includes('biscuit')) {
    return mockResponses.cookie[0];
  } else if (message.includes('ice cream') || message.includes('frozen')) {
    return mockResponses.ice_cream[0];
  } else if (message.includes('pudding') || message.includes('custard')) {
    return mockResponses.pudding[0];
  } else if (message.includes('chocolate')) {
    return mockResponses.chocolate[0];
  } else if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
    return mockResponses.price[0];
  } else if (message.includes('order') || message.includes('buy')) {
    return mockResponses.order[0];
  } else if (message.includes('delivery') || message.includes('deliver')) {
    return mockResponses.delivery[0];
  } else if (message.includes('payment') || message.includes('pay') || message.includes('card')) {
    return mockResponses.payment[0];
  } else {
    return mockResponses.default[Math.floor(Math.random() * mockResponses.default.length)];
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [initialGreetingSent, setInitialGreetingSent] = useState(false);
  const { theme } = useTheme();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !initialGreetingSent) {
      setTimeout(() => {
        const greeting = mockResponses.greeting[0];
        setMessages([
          {
            text: greeting,
            sender: 'bot',
            timestamp: new Date()
          }
        ]);
        setInitialGreetingSent(true);
      }, 500);
    }
  }, [isOpen, initialGreetingSent]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newUserMessage: Message = {
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setMessage("");
    
    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        text: getResponse(message),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className={`w-80 sm:w-96 h-96 rounded-lg shadow-xl overflow-hidden flex flex-col ${theme === 'dark' ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
          {/* Chatbot Header */}
          <div className="bg-dessert p-3 text-white flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={20} />
              <h3 className="ml-2 font-medium">Sweet Treat Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-dessert-dark"
            >
              <X size={18} />
            </Button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    msg.sender === 'user'
                      ? 'bg-dessert text-white rounded-br-none'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-white rounded-bl-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-800 flex">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 mr-2"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="dessert-button"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 shadow-lg flex justify-center items-center bg-dessert hover:bg-dessert-dark text-white"
        >
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
