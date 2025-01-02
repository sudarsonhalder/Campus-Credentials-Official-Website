import React, { useState } from "react";

const FeedbackForm = () => {
  const [stars, setStars] = useState(0);
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStarClick = (rating) => {
    setStars(rating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stars) {
      alert("Please select a star rating.");
      return;
    }

    setIsSubmitting(true);

    const feedback = {
      stars,
      comments,
    };

    try {
      const response = await fetch(
       "https://script.google.com/macros/s/AKfycbwJme-w2uzuywmyQ886ioKIK1mvwSWNWpI-oVe_k1m8j-RN4DUkokiug815zU0AeUSV/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedback),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        alert(
          stars <= 3
            ? "Thank you for your feedback! We will work on improving."
            : "Thanks for your positive feedback! Redirecting to Google..."
        );

        if (stars > 3) {
          window.location.href =
            "https://www.google.com/maps/place/Your-Business-Name";
        }
      } else {
        alert("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Failed to connect to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Background Blur */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10"></div>

      {/* Feedback Form */}
      <div className="fixed inset-0 flex items-center justify-center z-20">
        <div className="bg-[#1F1F1F] text-white rounded-xl p-8 max-w-4xl w-full shadow-2xl mx-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Rate Your Experience
          </h2>
          <div className="flex justify-center mb-8 space-x-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                className={`text-6xl ${
                  stars >= star ? "text-yellow-400" : "text-gray-500"
                } hover:text-yellow-400`}
              >
                ★
              </button>
            ))}
          </div>
          <textarea
            placeholder="Share details of your experience"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="5"
            className="w-full px-6 py-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 text-lg mb-6"
          />
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => {
                setStars(0);
                setComments("");
              }}
              className="text-gray-400 hover:text-gray-200 text-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
