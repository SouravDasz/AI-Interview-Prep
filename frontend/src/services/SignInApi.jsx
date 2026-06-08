const API_URL = "http://127.0.0.1:8000";

export const saveUser = async (userData) => {
  try {
    const response = await fetch(
      `${API_URL}/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};