import axios from "axios";

export async function generateItinerary(destination, budget, interests, days) {
  const prompt = `Create a ${days}-day travel itinerary for ${destination}.
Budget: $${budget}. Interests: ${interests.join(", ")}.
For each day include morning activity, lunch recommendation,
afternoon activity, dinner recommendation, and estimated costs.
Format it clearly with Day 1, Day 2, etc.`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500,
    },
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
}
