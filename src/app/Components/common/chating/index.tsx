"use client";

import { useEffect, useState, FormEvent, useRef } from "react";
import { useGetMeFromDataBase } from "../utilis";
import { BsChatRightFill } from "react-icons/bs";
import Image from "next/image";
import { Tuser } from "@/app/appointment/[id]/page";
import { RxCross2 } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import io, { Socket } from "socket.io-client";
import { FaRegCircleUser } from "react-icons/fa6";

// Define message type
interface Message {
  senderId: string;
  receiverId: string;
  message: string;
}

// Define online/offline user type
interface OnlineStatus {
  userId: string;
}

interface chattingInfo {
  senderId: string;
  senderName: string;
  receiverId: string;
  receiverName: string;
}

interface ChatData {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Doctor {
  doctorId: Doctor;
  _id: string;
  name: string;
  specialist: string;
  like: string;
  experience: number;
  img: string;
  amount: number;
  appointments: Appointment[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface User {
  _id: string;
  email: string;
  password: string;
  name: string;
  is_online: string;
  verified: boolean;
  isDoctor: boolean;
  doctorId?: Doctor; // Link to Doctor if user is a doctor
  passwordChangedAt: Date;
  appointments: Appointment[]; // User's appointments (empty array if none)
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface Appointment {
  _id: string;
  doctorId: Doctor;
  userId: User;
  paymentId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

// Create socket instance

export default function Chatting() {
  const [smallPopUp, setSmallPopup] = useState<boolean>(false);
  const [bigPopUp, setBigPopup] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  const [chattingInfo, setChattingInfo] = useState<chattingInfo>();
  // const [oflineUsers, setOflineUsers] = useState<string[]>([]);
  const user: Tuser | null = useGetMeFromDataBase(); // Assuming user type is already defined

  const socket: Socket = io("http://localhost:5000", {
    auth: {
      userId: user?._id,
    },
  }); // Backend URL
  useEffect(() => {
    // User joins the chat and sends an "online" event
    if (user) {
      socket.on("/getOnlineUser", (data: OnlineStatus) => {
        if (data.userId) {
          setOnlineUsers((prev) => {
            // Check if userId already exists in the latest state before updating
            if (!prev.includes(data.userId)) {
              return [...prev, data.userId];
            }
            return prev; // Return the same state if userId is already present
          });
        }
      });

      // Listen for the existing chat messages (frontend)

      socket.on("receiveExistingChat", (data) => {
        // setMessages(chats); // Assuming you want to populate them in the messages

        console.log(data);

        // Assuming data is the array of chat messages
        if (data?.length) {
          const formattedMessages: Message[] = data?.map((chat: ChatData) => ({
            senderId: chat.senderId,
            receiverId: chat.receiverId,
            message: chat.message,
          }));
          // Set the state with the formatted messages
          setMessages((prevMessages) => [
            ...prevMessages,
            ...formattedMessages,
          ]);
        } else {
          setMessages([]);
        }

        console.log("existingChat", data?.existingChats);
      });

      // Listen for offline users
      socket.on("/getOflineUser", (data: OnlineStatus) => {
        setOnlineUsers((prev) => prev.filter((id) => id !== data.userId)); // Remove the offline user from the list
        // console.log("Ofline suer", data.userId);
      });

      // Listen for messages from the server
      socket.on("receiveMessage", (data: Message) => {
        setMessages((prevMessages) => [...prevMessages, data]);
        console.log(message);
      });

      // Clean up when the component is unmounted or when the user logs out
      return () => {
        if (!user) {
          socket.emit("offline");
        }
        socket.off("receiveMessage");
        socket.off("online");
        socket.off("offline");
      };
    }
  }, [user, socket, message]);

  // Handle message sending
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("sendMessage", {
        senderName: user?.name,
        senderId: chattingInfo?.senderId,
        receiverId: chattingInfo?.receiverId,
        text: message,
      });
      setMessage(""); // Clear the input field
    }
  };

  const handleExsistingMessage = (senderId: string, receiverId: string) => {
    console.log("sended");
    socket.emit("existingChat", {
      senderId: senderId,
      receiverId: receiverId,
    });
  };

  // const handleLogout = () => {
  //   if (user) {
  //     socket.emit("offline", { userId: user._id }); // Emit "offline" event on logout
  //   }
  //   // Simulate logout or close the chat window
  //   setBigPopup(false);
  //   setSmallPopup(false);
  //   // Add your logout logic here
  // };

  // console.log("AMi ", user);

  const lastMessageRef = useRef<HTMLDivElement | null>(null); // Reference for the last message

  // Effect to scroll to the last message
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Run this effect whenever messages change

  return (
    <div className="fixed bottom-24 right-10 z-40">
      <div className="">
        {bigPopUp && user && (
          <div className="relative w-80 h-96   rounded-xl border border-primaryLight bg-white dark:bg-paperDark">
            <div className="flex justify-between bg-primaryLight p-3 border-b border-primary rounded-t-lg">
              <div className="flex gap-2">
                <GoDotFill
                  className={`my-auto text-xl ${
                    onlineUsers.includes(user?._id ?? "")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                />
                <p>{chattingInfo?.receiverName}</p>
              </div>
              <RxCross2
                onClick={() => {
                  setSmallPopup(true);
                  setBigPopup(false);
                }}
                className="my-auto text-2xl cursor-pointer"
              />
            </div>

            <div className="h-72 p-2 overflow-y-auto scrollbar-hide">
              <div className="  flex flex-col ">
                {messages && messages.length > 0 ? (
                  <>
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex justify-${
                          msg.senderId === user?._id ? "end" : "start"
                        } mb-2`}
                      >
                        <p
                          className={`p-2 text-sm rounded-lg ${
                            msg.senderId === user?._id
                              ? "bg-gray-300 text-black"
                              : "bg-primary text-white"
                          }`}
                        >
                          {msg.message}
                        </p>
                      </div>
                    ))}
                    <div ref={lastMessageRef} />{" "}
                    {/* Empty div to act as a target for scrolling */}
                  </>
                ) : (
                  <div className="flex justify-center items-center h-64">
                    <p className="text-gray-500">No messages yet.</p>
                  </div>
                )}
                <div ref={lastMessageRef} />{" "}
                {/* Empty div to act as a target for scrolling */}
              </div>
            </div>

            <form
              onSubmit={handleSendMessage}
              className="w-11/12 mx-auto absolute left-3 bottom-3 flex justify-between"
            >
              <div className="w-full">
                <input
                  type="text"
                  className="peer w-full h-full pt-6 text-sm font-normal transition-all bg-transparent border-b-2 border-blue-gray-200  outline-none placeholder-transparent focus:border-primary dark:dark:text-primaryLight"
                  placeholder="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <label
                  htmlFor="message"
                  className="w-full absolute left-0 top-0 text-textSecondary text-base transition-all duration-300 peer-placeholder-shown:top-5  peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-primary peer-focus:text-xs dark:text-primaryLight"
                >
                  Ask something
                </label>
              </div>

              <button
                type="submit"
                className="bg-primary p-2 rounded-full my-auto"
              >
                <IoMdSend className="m-auto text-2xl text-primaryDark" />
              </button>
            </form>
          </div>
        )}
      </div>

      <div>
        {smallPopUp && user && (
          <div className="h-auto max-h-40 overflow-y-auto scrollbar-hide p-2 rounded-md ">
            {user.isDoctor === true ? (
              <>
                {user?.appointments?.map((appointment: Appointment) => (
                  <div
                    key={appointment?._id}
                    className="relative w-auto max-w-60 flex flex-row justify-end group"
                  >
                    <div className="relative w-60 flex flex-row justify-end group">
                      <FaRegCircleUser
                        onClick={() => {
                          handleExsistingMessage(
                            appointment?.doctorId?._id,
                            appointment?.userId?._id
                          );
                          setChattingInfo({
                            senderName: appointment?.doctorId?.name,
                            senderId: appointment?.doctorId?._id,
                            receiverId: appointment?.userId?._id,
                            receiverName: appointment?.userId?.name,
                          });
                          setBigPopup(!bigPopUp);
                          setSmallPopup(false);
                        }}
                        className={`size-10 border border-black rounded-full my-2 cursor-pointer ${
                          onlineUsers.includes(appointment?.userId?._id) &&
                          "border-2 border-green-400"
                        }`}
                      />

                      {/* Doctor's online status indicator */}
                      {onlineUsers.includes(appointment?.userId?._id) && (
                        <span className="absolute -right-1 -top-1 z-50 block">
                          <GoDotFill className="text-green-500 text-xl" />
                        </span>
                      )}

                      {/* Doctor's name appears on hover */}
                      <span className="absolute w-28 bottom-2 right-10 bg-black text-white text-center text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                        {appointment?.userId?.name}
                      </span>
                    </div>
                    {/* Doctor's online status indicator */}
                    {onlineUsers.includes(appointment?.userId?._id) && (
                      <span className="absolute -right-1 -top-1 z-50 block">
                        <GoDotFill className="text-green-500 text-xl" />
                      </span>
                    )}

                    {/* Doctor's name appears on hover */}
                    <span className="absolute w-28 bottom-2 right-10 bg-black text-white text-center text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                      {appointment?.userId?.name}
                    </span>
                  </div>
                ))}
              </>
            ) : (
              <>
                {user?.appointments?.map((appointment: Appointment) => (
                  <div
                    key={appointment?.doctorId?._id}
                    className="relative w-60 flex flex-row justify-end group"
                  >
                    <Image
                      onClick={() => {
                        handleExsistingMessage(
                          appointment.userId._id,
                          appointment?.doctorId?._id
                        );
                        setChattingInfo({
                          senderName: appointment.userId.name,
                          senderId: appointment.userId._id,
                          receiverId: appointment?.doctorId?._id,
                          receiverName: appointment?.doctorId?.name,
                        });
                        setBigPopup(!bigPopUp);
                        setSmallPopup(false);
                      }}
                      className={`size-10 border border-black rounded-full my-2 cursor-pointer ${
                        onlineUsers.includes(appointment?.doctorId?._id) &&
                        "border-2 border-green-400"
                      }`}
                      width={300}
                      height={300}
                      src={appointment?.doctorId?.doctorId?.img}
                      alt="profile"
                    />

                    {/* Doctor's online status indicator */}
                    {onlineUsers.includes(appointment?.doctorId?._id) && (
                      <span className="absolute -right-1 -top-1 z-50 block">
                        <GoDotFill className="text-green-500 text-xl" />
                      </span>
                    )}

                    {/* Doctor's name appears on hover */}
                    <span className="absolute w-28 bottom-2 right-10 bg-black text-white text-center text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                      {appointment?.doctorId?.name}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      {user && (
        <div
          onClick={() => {
            setSmallPopup(!smallPopUp);
            setBigPopup(false);
          }}
          className="fixed right-8 size-16 bg-primary p-4 rounded-full cursor-pointer"
        >
          <BsChatRightFill className="text-primaryDark text-3xl" />
        </div>
      )}
    </div>
  );
}
