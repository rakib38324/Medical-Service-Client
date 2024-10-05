"use client";

import { useState } from "react";
import { BsChatRightFill } from "react-icons/bs";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import ChattingForm from "./chattingForm";
import { useChat } from "@/app/Hooks/ChatContext";
import { MdNotificationsActive } from "react-icons/md";

// Define message type
export interface IMessage {
  roomId?: string;
  senderId: string;
  receiverId: string;
  message: string;
}

// Define online/offline user type
export interface OnlineStatus {
  userId: string;
}

export interface chattingInfo {
  senderId: string;
  senderName: string;
  receiverId: string;
  receiverName: string;
}

export interface ChatData {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Doctor {
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

export interface User {
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

export interface Appointment {
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
  const {
    user,
    onlineUsers,
    outerRoomMessages,
    handleExistingMessage,
    joinRoom,
    setOuterRoomMessages,
  } = useChat();

  const [smallPopUp, setSmallPopup] = useState<boolean>(false);
  const [bigPopUp, setBigPopup] = useState<boolean>(false);
  const [chattingInfo, setChattingInfo] = useState<chattingInfo>();

  // console.log("Online user ", onlineUsers);
  // console.log("Outer sms ", outerRoomMessages);

  // Function to check if any outer message is from an online user
  const hasNewMessagesFromOnlineUsers = (): boolean => {
    return outerRoomMessages.some((message) => {
      // Check if the sender or receiver is online
      const isSenderOnline = onlineUsers.includes(message.senderId);
      const isReceiverOnline = onlineUsers.includes(message.receiverId);

      // Return true if either sender or receiver is online
      return isSenderOnline || isReceiverOnline;
    });
  };

  // console.log("Con users", user);
  return (
    <div className="fixed bottom-24 right-10 z-40">
      <div className="">
        {bigPopUp && user && chattingInfo && (
          <ChattingForm
            onlineUsers={onlineUsers}
            user={user}
            chattingInfo={chattingInfo}
            setSmallPopup={setSmallPopup}
            setBigPopup={setBigPopup}
          />
        )}
      </div>

      <div>
        {smallPopUp && user && (
          <div className="h-auto max-h-40 overflow-y-auto scrollbar-hide p-2 rounded-md ">
            {user.isDoctor === true ? (
              <>
                {user?.appointments?.slice()?.reverse()?.map((appointment: Appointment) => {
                  // Check if the current appointment's doctor has sent any messages
                  const hasNewMessageFromThisDoctor = outerRoomMessages.some(
                    (message) =>
                      message.senderId === appointment?.doctorId?._id &&
                      onlineUsers.includes(message.senderId)
                  );

                  return (
                    <div
                      key={appointment?._id}
                      className="relative w-auto max-w-60 flex flex-row justify-end group"
                    >
                      <div className="relative w-60 flex flex-row justify-end group">
                        <FaRegCircleUser
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
                            setBigPopup(!bigPopUp);
                            setSmallPopup(false);
                          }}
                          className={`size-10 border border-black rounded-full my-2 cursor-pointer ${
                            onlineUsers.includes(appointment?.userId?._id) &&
                            "border-2 border-green-400"
                          }`}
                        />
                      </div>
                      {/* Show the notification dot only for the doctor who sent a new message */}
                      {hasNewMessageFromThisDoctor && (
                        <span className="absolute right-6 top-0 z-50 block">
                          <MdNotificationsActive className="text-accent text-2xl" />
                        </span>
                      )}

                      {onlineUsers.includes(appointment?.userId?._id) && (
                        <span className="absolute right-6 bottom-0 z-50 block">
                          <GoDotFill className="text-secondary text-2xl" />
                        </span>
                      )}

                      {/* Doctor's name appears on hover */}
                      <span className="absolute w-28 bottom-2 right-10 bg-black text-white text-center text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                        {appointment?.userId?.name}
                      </span>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {user?.appointments?.map((appointment: Appointment) => {
                  // Check if the current appointment's doctor has sent any messages
                  const hasNewMessageFromThisDoctor = outerRoomMessages.some(
                    (message) =>
                      message.senderId === appointment?.doctorId?._id &&
                      onlineUsers.includes(message.senderId)
                  );

                  return (
                    <div
                      key={appointment?.doctorId?._id}
                      className="relative w-60 flex flex-row justify-end group"
                    >
                      <Image
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

                      {/* Show the notification dot only for the doctor who sent a new message */}
                      {onlineUsers.includes(appointment?.doctorId?._id) && (
                        <span className="absolute right-6 bottom-0 z-50 block">
                          <GoDotFill className="text-green-500 text-2xl" />
                        </span>
                      )}

                      {/* Show the notification dot only for the doctor who sent a new message */}
                      {hasNewMessageFromThisDoctor && (
                        <span className="absolute right-6 top-0 z-50 block">
                          <MdNotificationsActive className="text-accent text-2xl" />
                        </span>
                      )}

                      {/* Doctor's name appears on hover */}
                      <span className="absolute w-28 bottom-2 right-10 bg-black text-white text-center text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                        {appointment?.doctorId?.name}
                      </span>
                    </div>
                  );
                })}
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
          className={`${
            hasNewMessagesFromOnlineUsers() && "border-2 border-primaryDark"
          } fixed right-8 size-16 bg-primary p-4 rounded-full cursor-pointer`}
        >
          {hasNewMessagesFromOnlineUsers() && (
            <span className="absolute right-10 -top-1 z-50 block">
              <MdNotificationsActive className="text-primaryDark text-3xl" />
            </span>
          )}
          <BsChatRightFill className="text-primaryDark text-3xl" />
        </div>
      )}
    </div>
  );
}
