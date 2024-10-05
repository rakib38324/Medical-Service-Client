"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import axios, { AxiosResponse } from "axios";
import { Tuser } from "../appointment/[id]/page";
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from "../Components/common/utilis";

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

interface ChatContextType {
  onlineUsers: string[];
  outerRoomMessages: IMessage[];
  setOuterRoomMessages: (messages: IMessage[]) => void;
  user: Tuser | null;
  handleExistingMessage: (senderId: string, receiverId: string) => void;
  fetchMe: () => Promise<void>; // Add fetchMe to the context
  joinRoom: (senderId: string, receiverId: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [outerRoomMessages, setOuterRoomMessages] = useState<IMessage[]>([]);
  const [user, setUser] = useState<Tuser | null>(null);

  const token = getTokenFromLocalStorage();
  const localuser = getUserFromLocalStorage();

  const fetchMe = async () => {
    // Define fetchMe here

    const token = getTokenFromLocalStorage();
    const localuser = getUserFromLocalStorage();
    if (localuser) {
    //   console.log("CalledInside");
      try {
        const response: AxiosResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );

        if (response.data?.success) {
          setUser(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  };

  useEffect(() => {
    fetchMe(); // Call fetchMe on component mount
  }, [localuser, token, fetchMe]);

  const socket: Socket = io("https://medical-backend-server.onrender.com", {
    auth: {
      userId: user?._id,
    },
  }); // Backend URL

  useEffect(() => {
    if (user) {
      socket.on("/getOnlineUser", (data: OnlineStatus) => {
        if (data.userId) {
          // Check if the userId is already in onlineUsers
          setOnlineUsers((prev) => {
            if (!prev.includes(data.userId)) {
              // If not present, add it to the array
              return [...prev, data.userId];
            }
            // If present, return the previous state unchanged
            return prev;
          });
        }
      });

      socket.on("outerRoomReceiveMessage", (newMessage: IMessage) => {
        setOuterRoomMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      socket.on("/getOflineUser", (data: OnlineStatus) => {
        setOnlineUsers((prev) => prev.filter((id) => id !== data.userId));
      });

      return () => {
        socket.off("/getOnlineUser");
        socket.off("outerRoomReceiveMessage");
        socket.off("/getOflineUser");
      };
    }
  }, [user, socket]);

  const handleExistingMessage = (senderId: string, receiverId: string) => {
    socket.emit("existingChat", {
      senderId,
      receiverId,
    });
  };

 

  const joinRoom = (senderId: string, receiverId: string) => {
    const roomId = `${senderId}${receiverId}`;
    socket.emit("joinRoom", { roomId });
  };

  return (
    <ChatContext.Provider
      value={{
        onlineUsers,
        outerRoomMessages,
        setOuterRoomMessages,
        user,
        handleExistingMessage,
        fetchMe, // Include fetchMe in the context value
        joinRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
