"use client";

import { FaRegCircleUser } from "react-icons/fa6";
import {
  Appointment,
  ChatData,
  chattingInfo,
  IMessage,
} from "../Components/common/chating";
import { useChat } from "../Hooks/ChatContext";
import { MdNotificationsActive } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import PrivateChattingForm from "./privateChattingForm";

export default function PrivateChat() {
  const {
    user,
    onlineUsers,
    outerRoomMessages,
    handleExistingMessage,
    joinRoom,
    setOuterRoomMessages,
  } = useChat();

  const socket: Socket = io("https://medical-backend-server.onrender.com");

//   const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  const [chattingInfo, setChattingInfo] = useState<chattingInfo>();

  
  // Handle room joining on component mount
  useEffect(() => {
    if (chattingInfo) {
      const roomId = [chattingInfo.senderId, chattingInfo.receiverId]
        .sort()
        .join("_"); // Create a unique room ID by sorting
      //   console.log(roomId);
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
    }
  }, [chattingInfo,socket]);

  useEffect(() => {
    const handleExistingChat = (data: ChatData[]) => {
    //   console.log(data);
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

    //   console.log("existingChat", data);
    };

    socket.on("receiveExistingChat", handleExistingChat);

    return () => {
      socket.off("receiveExistingChat", handleExistingChat); // Cleanup listener on unmount
    };
  }, [messages, socket]); // Dependency on messages to handle updates

 

  console.log(messages);
  return (
    <div className="max-w-screen-xl mx-auto px-5 my-20 ">
      <div className="lg:w-2/3  mx-auto grid md:grid-cols-2 gap-5">
        <div className="">
          {user && (
            <div className="h-96 border border-green-500 overflow-y-auto scrollbar-hide p-2 rounded-xl ">
              {user.isDoctor === true ? (
                <>
                  {user?.appointments?.slice().reverse().map(
                    (appointment: Appointment, index: number) => {
                      // Check if the current appointment's doctor has sent any messages
                      const hasNewMessageFromThisDoctor =
                        outerRoomMessages.some(
                          (message) =>
                            message.senderId === appointment?.doctorId?._id &&
                            onlineUsers.includes(message.senderId)
                        );

                      return (
                        <div
                          key={appointment?._id}
                          className={`${
                            index % 2 !== 0
                              ? "bg-secondaryLight"
                              : "bg-primaryLight"
                          } relative flex flex-row gap-2  group py-2 my-1 pl-2 rounded-md cursor-pointer`}
                          onClick={() => {
                            handleExistingMessage(
                              appointment?.doctorId?._id,
                              appointment?.userId?._id
                            );
                            setOuterRoomMessages([]);
                            joinRoom(
                              appointment?.doctorId?._id,
                              appointment?.userId?._id
                            );
                            setChattingInfo({
                              senderName: appointment?.doctorId?.name,
                              senderId: appointment?.doctorId?._id,
                              receiverId: appointment?.userId?._id,
                              receiverName: appointment?.userId?.name,
                            });
                          }}
                        >
                          <div className="relative flex flex-row group">
                            <FaRegCircleUser
                              className={`size-10 border border-black rounded-full my-2 cursor-pointer ${
                                onlineUsers.includes(
                                  appointment?.userId?._id
                                ) && "border-2 border-green-400"
                              }`}
                            />
                          </div>

                          <div>
                            <p className="my-auto text-lg">
                              {appointment?.userId?.name}
                            </p>
                            {onlineUsers.includes(appointment?.userId?._id) ? (
                              <p className="text-xs font-semibold">Active</p>
                            ) : (
                              <p className="text-xs text-textSecondary">
                                Ofline
                              </p>
                            )}
                          </div>
                          {/* Show the notification dot only for the doctor who sent a new message */}
                          {onlineUsers.includes(appointment?.userId?._id) && (
                            <span className="absolute left-6 top-1 z-50 block">
                              <GoDotFill className="text-green-500 text-2xl" />
                            </span>
                          )}

                          {/* Show the notification dot only for the doctor who sent a new message */}
                          {hasNewMessageFromThisDoctor && (
                            <span className="absolute right-6 top-3 z-50 block">
                              <MdNotificationsActive className="text-secondary text-4xl" />
                            </span>
                          )}
                        </div>
                      );
                    }
                  )}
                </>
              ) : (
                <>
                  {user?.appointments?.map(
                    (appointment: Appointment, index: number) => {
                      // Check if the current appointment's doctor has sent any messages
                      const hasNewMessageFromThisDoctor =
                        outerRoomMessages.some(
                          (message) =>
                            message.senderId === appointment?.doctorId?._id &&
                            onlineUsers.includes(message.senderId)
                        );

                      return (
                        <div
                          key={appointment?.doctorId?._id}
                          className={`${
                            index % 2 !== 0
                              ? "bg-secondaryLight"
                              : "bg-primaryLight"
                          } relative flex flex-row gap-2  group py-2 my-1 pl-2 rounded-md cursor-pointer`}
                          onClick={() => {
                            handleExistingMessage(
                              appointment.userId._id,
                              appointment?.doctorId?._id
                            );
                            setOuterRoomMessages([]);
                            joinRoom(
                              appointment?.doctorId?._id,
                              appointment?.userId?._id
                            );
                            setChattingInfo({
                              senderName: appointment.userId.name,
                              senderId: appointment.userId._id,
                              receiverId: appointment?.doctorId?._id,
                              receiverName: appointment?.doctorId?.name,
                            });
                          }}
                        >
                          <Image
                            className={`size-10 my-auto border border-black rounded-full cursor-pointer ${
                              onlineUsers.includes(
                                appointment?.doctorId?._id
                              ) && "border-2 border-green-400"
                            }`}
                            width={300}
                            height={300}
                            src={appointment?.doctorId?.doctorId?.img}
                            alt="profile"
                          />

                          <div>
                            <p className="my-auto text-lg">
                              {appointment?.doctorId?.name}
                            </p>
                            {onlineUsers.includes(
                              appointment?.doctorId?._id
                            ) ? (
                              <p className="text-xs font-semibold">Active</p>
                            ) : (
                              <p className="text-xs text-textSecondary">
                                Ofline
                              </p>
                            )}
                          </div>
                          {/* Show the notification dot only for the doctor who sent a new message */}
                          {onlineUsers.includes(appointment?.doctorId?._id) && (
                            <span className="absolute left-6 top-0 z-50 block">
                              <GoDotFill className="text-green-500 text-2xl" />
                            </span>
                          )}

                          {/* Show the notification dot only for the doctor who sent a new message */}
                          {hasNewMessageFromThisDoctor && (
                            <span className="absolute right-6 top-3 z-50 block">
                              <MdNotificationsActive className="text-secondary text-4xl" />
                            </span>
                          )}
                        </div>
                      );
                    }
                  )}
                </>
              )}
            </div>
          )}
        </div>
        <div>
          {user && chattingInfo ? (
            <PrivateChattingForm
              onlineUsers={onlineUsers}
              user={user}
              chattingInfo={chattingInfo}
            />
          ) : (
            <div className="h-full flex justify-center items-center">
              <p className="text-2xl font-semibold text-secondary">
                Start Chatting...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
