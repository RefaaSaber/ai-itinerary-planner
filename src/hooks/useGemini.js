import axios from "axios";

export async function generateItinerary(destination, budget, interests, days) {
  const prompt = `Create a ${days}-day travel itinerary for ${destination}.
Budget: $${budget}. Interests: ${interests.join(", ")}.
For each day include morning activity, lunch recommendation,
afternoon activity, dinner recommendation, and estimated costs.
Format it clearly with Day 1, Day 2, etc.`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    }
  );

  return response.data.candidates[0].content.parts[0].text;
}
