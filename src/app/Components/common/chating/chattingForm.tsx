import { Tuser } from "@/app/appointment/[id]/page";
import { GoDotFill } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { ChatData, chattingInfo, IMessage } from ".";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import { PiResizeBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

// Define types for props and message structure
interface ChattingFormProps {
  onlineUsers: string[];
  user: Tuser;
  chattingInfo: chattingInfo;
  setSmallPopup: (value: boolean) => void;
  setBigPopup: (value: boolean) => void;
}

const socket: Socket = io("https://medical-backend-server.onrender.com");

export default function ChattingForm({
  onlineUsers,
  user,
  chattingInfo,
  setSmallPopup,
  setBigPopup,
}: ChattingFormProps) {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  const lastMessageRef = useRef<HTMLDivElement | null>(null); // Reference for scrolling to the last message
  const router = useRouter();

  // Handle room joining on component mount
  useEffect(() => {
    const roomId = [chattingInfo.senderId, chattingInfo.receiverId]
      .sort()
      .join("_"); // Create a unique room ID by sorting
    const senderId = chattingInfo.senderId;
    const receiverId = chattingInfo.receiverId;
    socket.emit("joinRoom", { roomId, senderId, receiverId }); // Join the room on socket

    // Listen for incoming messages from the server
    socket.on("receiveMessage", (newMessage: IMessage) => {
      // console.log("new messages", newMessage);
      if (newMessage.roomId === roomId) {
        setMessages((prevMessages) => [...prevMessages, newMessage]); // Append new messages to the state
      }
    });

    return () => {
      socket.off("receiveMessage"); // Clean up the event listener when the component unmounts
    };
  }, [chattingInfo.senderId, chattingInfo.receiverId, message]);

  useEffect(() => {
    const handleExistingChat = (data: ChatData[]) => {
      // data is of type ChatData[]
      if (data?.length && messages.length === 0) {
        const formattedMessages: IMessage[] = data.map((chat: ChatData) => ({
          senderId: chat.senderId,
          receiverId: chat.receiverId,
          message: chat.message,
        }));

        setMessages((prevMessages) => {
          if (prevMessages.length === 0) {
            return [...prevMessages, ...formattedMessages];
          }
          return prevMessages;
        });
      }

      // console.log("existingChat", data);
    };

    socket.on("receiveExistingChat", handleExistingChat);

    return () => {
      socket.off("receiveExistingChat", handleExistingChat); // Cleanup listener on unmount
    };
  }, [messages]); // Dependency on messages to handle updates

  // Handle sending a message
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const roomId = [chattingInfo.senderId, chattingInfo.receiverId]
        .sort()
        .join("_"); // Same unique room ID for sending messages

      socket.emit("sendMessage", {
        roomId,
        senderName: user.name,
        senderId: chattingInfo.senderId,
        receiverId: chattingInfo.receiverId,
        message: message,
      });

      setMessage(""); // Clear the input field after sending
    }
  };

  // Scroll to the last message whenever messages change
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="relative w-80 h-96 rounded-xl border border-primaryLight bg-white dark:bg-paperDark">
      <div className="flex justify-between bg-primaryLight p-3 border-b border-primary rounded-t-lg">
        <div className="flex gap-2">
          <GoDotFill
            className={`my-auto text-xl ${
              onlineUsers.includes(chattingInfo?.receiverId ?? "")
                ? "text-green-500"
                : "text-red-500"
            }`}
          />
          <p>{chattingInfo?.receiverName}</p>
        </div>
        <div className="flex gap-2">
          <PiResizeBold
            onClick={() => {
              router.push("/privatechat");
              setSmallPopup(false);
              setBigPopup(false);
            }}
            className="my-auto text-2xl cursor-pointer"
          />
          <RxCross2
            onClick={() => {
              setSmallPopup(true);
              setBigPopup(false);
            }}
            className="my-auto text-2xl cursor-pointer"
          />
        </div>
      </div>

      <div className="h-72 p-2 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col">
          {messages.length > 0 ? (
            <>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex justify-${
                    msg.senderId === user._id ? "end" : "start"
                  } mb-2`}
                >
                  <p
                    className={`p-2 text-sm rounded-lg ${
                      msg.senderId === user._id
                        ? "bg-gray-300 text-black"
                        : "bg-primary text-white"
                    }`}
                  >
                    {msg.message}
                  </p>
                </div>
              ))}
              <div ref={lastMessageRef} /> {/* Scroll target */}
            </>
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500">No messages yet.</p>
            </div>
          )}
        </div>
      </div>

      <form
        onSubmit={handleSendMessage}
        className="w-11/12 mx-auto absolute left-3 bottom-3 flex justify-between"
      >
        <div className="w-full">
          <input
            type="text"
            className="peer w-full h-full pt-6 text-sm font-normal transition-all bg-transparent border-b-2 border-blue-gray-200 outline-none placeholder-transparent focus:border-primary dark:text-primaryLight"
            placeholder="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <label
            htmlFor="message"
            className="w-full absolute left-0 top-0 text-textSecondary text-base transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-primary peer-focus:text-xs dark:text-primaryLight"
          >
            Type your message
          </label>
        </div>

        <button type="submit" className="bg-primary p-4 rounded-full my-auto">
          <IoMdSend className="m-auto text-lg text-primaryDark" />
        </button>
      </form>
    </div>
  );
}
