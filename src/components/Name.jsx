import { useState } from "react"; // ✅ Import useState

const Name = () => {
  const [name, setName] = useState(""); // Now useState is defined

  return (
    <div>
      <h1>Enter Your Name</h1>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "Guest"}</p>
    </div>
  );
};

export default Name;


