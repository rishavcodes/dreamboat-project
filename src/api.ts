export const fetchUserData = async (email: string) => {
    // Simulate an asynchronous API call
    return new Promise((resolve, reject) => {
      // Simulate a successful API response after a short delay
      setTimeout(() => {
        // Check if the email is empty
        if (!email) {
          reject(new Error('Email is required'));
        } else {
          // Simulate a successful API response with user data
          const userData = {
            email,
          };
          resolve(userData);
        }
      }, 1000);
    });
  };
  