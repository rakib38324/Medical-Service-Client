import { Tuser } from "@/app/appointment/[id]/page";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

// Function to save token and user info into localStorage
export const saveToLocalStorage = (
  token: string,
  userInfo: { name: string; email: string }
) => {
  try {
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

// Function to retrieve token from localStorage
export const getTokenFromLocalStorage = () => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      return token;
    }

    return null; // Return null if either token or userInfo is missing
  } catch (error) {
    console.error("Error retrieving from localStorage:", error);
    return null;
  }
};

// Function to retrieve  user info from localStorage
export const getUserFromLocalStorage = () => {
  try {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      return {
        userInfo: JSON.parse(userInfo),
      };
    }

    return null; // Return null if either token or userInfo is missing
  } catch (error) {
    console.error("Error retrieving from localStorage:", error);
    return null;
  }
};

// Function to remove user info and token from localStorage
export const removeUserAndToken = (): void => {
  // Remove the token from localStorage
  localStorage.removeItem("token");

  // Remove the user info from localStorage
  localStorage.removeItem("userInfo");

  console.log("User and token have been removed from localStorage.");
};

export const useGetMeFromDataBase = () => {
  const [userInfo, setUserInfo] = useState<Tuser>();

  const token = getTokenFromLocalStorage() as string | null;
  const user = getUserFromLocalStorage();
  useEffect(() => {
    if (user && !userInfo) {
      const fetchMe = async () => {
        try {
          const response: AxiosResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`,

            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`, // Ensure the token format is correct
              },
            }
          );

          if (response.data?.success) {
            setUserInfo(response.data.data);
          } else {
            console.error("Failed to create Appointment:", response.status);
          }
        } catch (error) {
          // Type narrowing for AxiosError
          if (axios.isAxiosError(error)) {
            const errorMessage =
              (error.response?.data as { errorMessage?: string })
                ?.errorMessage || "Oops! Something went wrong. Try again.";

            console.error("Error", errorMessage);
          } else {
            console.error("An unexpected error occurred:", error);
          }
        }
      };

      fetchMe();
    }
  }, [user, userInfo, token]);

  if(userInfo){
    return userInfo;
  }
  else{
    return null
  }
};
