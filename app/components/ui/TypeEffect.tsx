'use client'; // Needed to use client-side hooks

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  // Create a reference to the DOM element
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize the typing effect
    const typed = new Typed(typedElement.current, {
      strings: ["Go Shopping.", "Call a friend", "No, Coffee", "Read a book", "Plan Dinner", "Pet a Puppy"],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    });

    // Cleanup the typing effect on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={typedElement} className="typing text-blue-600"></span>
    </div>
  );
};

export default TypingEffect;
