
import { useState } from "react"
import "./Home.css";
const Home = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addFlashcard = () => {
    if (question && answer) {
      setFlashcards([...flashcards, { question, answer }]);
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <div className="home">
      <h2>Flashcard Learning</h2>
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={addFlashcard}>Add Flashcard</button>

      <h3>Your Flashcards</h3>
      {flashcards.length === 0 ? (
        <p>No flashcards available.</p>
      ) : (
        <ul>
          {flashcards.map((card, index) => (
            <li key={index}>
              <strong>Q:</strong> {card.question} <br />
              <strong>A:</strong> {card.answer}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;

