"use client"
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Sidebar from "@/components/Sidebar";
import PromptBox from "@/components/PromptBox";
import Message from "@/components/Message";
export default function Home() {


  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        {/* --side bar-- */}
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              alt="menu-icon"
              className="rotate-180"
              src={assets.menu_icon}
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
            />
            <Image
              alt="chat-icon"
              className="opacity-70" s
              rc={assets.chat_icon}
            />
          </div>
          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image
                  src={assets.logo_icon}
                  alt=""
                  className="h-16"
                />
                <p className="text-2xl font-medium">Hi, I&apos;m DeepSeek.</p>
              </div>
              <p className="text-sm mt-2">How Can I help yoou today?</p>
            </>
          ) :
            (<div>
              <Message
                role="user"
                content={"What is NextJs"}
              />
            </div>)
          }
          <PromptBox
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <p className="text-xs absolute bottom-1 text-gray-500">AI-generated,for reference only</p>
        </div>
      </div>
    </div>
  );
}
