import React, { useState, useEffect } from "react";
import axios from "axios";

const DailyMotivationalQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://zenquotes.io/api/random");
      const { q: fetchedQuote } = response.data[0];
      setQuote(fetchedQuote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl mb-4">Daily Motivational Quote</h2>
      <p className="text-lg">{quote}</p>
      <button
        onClick={fetchQuote}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Get New Quote
      </button>
    </div>
  );
};

export default DailyMotivationalQuote;
