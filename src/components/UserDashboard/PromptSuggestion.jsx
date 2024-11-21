import React, { useState } from 'react';

const PromptSuggestion = () => {
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const exampleData = [
    { id: 1, title: 'Paris Vacation', description: 'Explore the romantic city of Paris with guided tours and gourmet dining.' },
    { id: 2, title: 'Tropical Beaches in Maldives', description: 'Relax on white sand beaches with crystal-clear waters in the Maldives.' },
    { id: 3, title: 'Adventure in New Zealand', description: 'Enjoy bungee jumping, hiking, and stunning landscapes in New Zealand.' },
    { id: 4, title: 'Cultural Experience in Japan', description: 'Dive into Japanese traditions with temple visits, tea ceremonies, and sushi making.' },
    { id: 5, title: 'Road Trip Across the USA', description: 'Experience iconic landmarks and scenic routes across the United States.' },
  ];


  const handlePromptSubmit = (e) => {
    e.preventDefault();
    const filteredSuggestions = exampleData.filter((item) =>
      item.title.toLowerCase().includes(prompt.toLowerCase()) || 
      item.description.toLowerCase().includes(prompt.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600"> Prompt Suggestion</h1>
      <form
        onSubmit={handlePromptSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <label
          htmlFor="prompt"
          className="block text-sm font-medium text-gray-700"
        >
          Enter your prompt:
        </label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your query..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Get Suggestions
        </button>
      </form>

      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Suggestions:</h2>
        {suggestions.length > 0 ? (
          <div className="grid gap-4">
            {suggestions.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-lg font-bold text-indigo-700">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No suggestions available. Try another prompt!</p>
        )}
      </div>
    </div>
  );
};

export default PromptSuggestion;
