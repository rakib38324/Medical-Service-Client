// Function to save token and user info into localStorage
export const saveToLocalStorage = (token: string, userInfo: any) => {
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
      return token
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
