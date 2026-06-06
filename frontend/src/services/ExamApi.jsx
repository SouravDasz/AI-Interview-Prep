const BASE_URL = "http://127.0.0.1:8000";

export const getQuestions = async (subject) => {
  try {
    const response = await fetch(
      `${BASE_URL}/question/${subject}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};