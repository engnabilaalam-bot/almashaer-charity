import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Assistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'أهلاً بك! أنا "مساعد الخير" الذكي. كيف يمكنني مساعدتك في معرفة المزيد عن جمعية المشاعر؟' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        // Prepare history for context if needed, currently sending single prompt for simplicity
        // with helper function that handles context
        const history = messages.map(m => m.text);
        const responseText = await sendMessageToGemini(userMsg, history);

        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
        setIsLoading(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 left-6 z-40 bg-brand-600 text-white p-4 rounded-full shadow-lg hover:bg-brand-700 transition-all duration-300 transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
                aria-label="Open chat assistant"
            >
                <MessageCircle className="h-6 w-6" />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 left-6 z-50 w-full max-w-[350px] md:max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px]">
                    {/* Header */}
                    <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <Bot className="h-6 w-6" />
                            <div>
                                <h3 className="font-bold text-sm">مساعد الخير</h3>
                                <p className="text-xs text-brand-100">مدعوم بالذكاء الاصطناعي</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:bg-brand-700 p-1 rounded">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${msg.role === 'user'
                                            ? 'bg-slate-200 text-slate-800 rounded-br-none'
                                            : 'bg-brand-600 text-white rounded-bl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-end">
                                <div className="bg-brand-600 text-white p-3 rounded-xl rounded-bl-none flex items-center gap-2">
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    <span className="text-xs">جاري الكتابة...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t bg-white">
                        <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="اكتب سؤالك هنا..."
                                className="flex-1 bg-transparent border-none focus:ring-0 text-sm focus:outline-none"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="text-brand-600 hover:text-brand-800 disabled:opacity-50"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-slate-400 mt-1">
                            الردود تولد بواسطة الذكاء الاصطناعي وقد تحتمل الخطأ
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Assistant;
