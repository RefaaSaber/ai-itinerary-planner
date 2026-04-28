import axios from "axios";

export async function generateItinerary(destination, budget, interests, days) {
  const prompt = `Create a ${days}-day travel itinerary for ${destination}.
Budget: $${budget}. Interests: ${interests.join(", ")}.
Format EXACTLY like this for each day:

Day 1:
- Morning: [activity] - $[cost]
- Lunch: [restaurant] - $[cost]
- Afternoon: [activity] - $[cost]
- Dinner: [restaurant] - $[cost]

Keep it short and simple. No long explanations. Just the schedule.`;

  const response = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,    {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    }
  );

  return response.data.candidates[0].content.parts[0].text;
}
