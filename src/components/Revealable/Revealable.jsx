"use client";

import { useState } from "react";

function Revealable({ children }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return isRevealed ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setIsRevealed(true)}>Reveal Content</button>
    </div>
  );
}

export default Revealable;
