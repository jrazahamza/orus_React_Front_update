import React, { useState } from 'react';

const QuestionRecommendation = () => {
  const [answers, setAnswers] = useState({});
  const [suggestion, setSuggestion] = useState(null);

 
  const questions = [
    {
      id: 1,
      question: 'What type of destination do you prefer?',
      options: ['Beach', 'Mountains', 'City', 'Countryside'],
    },
    {
      id: 2,
      question: 'What activities do you enjoy?',
      options: ['Adventure Sports', 'Cultural Tours', 'Relaxation', 'Nightlife'],
    },
    {
      id: 3,
      question: 'What is your preferred budget?',
      options: ['Economy', 'Mid-range', 'Luxury'],
    },
    {
      id: 4,
      question: 'What is your preferred climate?',
      options: ['Hot', 'Cold', 'Moderate'],
    },
    {
      id: 5,
      question: 'Who are you traveling with?',
      options: ['Solo', 'Family', 'Friends', 'Partner'],
    },
  ];

  
  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { 1: destination, 2: activity, 3: budget, 4: climate, 5: companion } =
      answers;

    let suggestionText = `Based on your preferences, we recommend visiting a `;
    if (destination) suggestionText += `${destination.toLowerCase()} destination `;
    if (activity) suggestionText += `for ${activity.toLowerCase()} activities `;
    if (budget) suggestionText += `on a ${budget.toLowerCase()} budget `;
    if (climate) suggestionText += `in a ${climate.toLowerCase()} climate `;
    if (companion) suggestionText += `with your ${companion.toLowerCase()}.`;

    setSuggestion(suggestionText);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        Travel Recommendation Quiz
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        {questions.map((q) => (
          <div key={q.id} className="space-y-2">
            <p className="text-lg font-semibold text-gray-700">{q.question}</p>
            <div className="flex flex-wrap gap-3">
              {q.options.map((option) => (
                <label
                  key={option}
                  className={`px-4 py-2 rounded-lg border cursor-pointer ${
                    answers[q.id] === option
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={() => handleAnswer(q.id, option)}
                    className="hidden"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Get Recommendation
        </button>
      </form>
      {suggestion && (
        <div className="mt-8 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow">
          <p className="text-lg">{suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionRecommendation;
