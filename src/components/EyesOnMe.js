import React, { useState } from 'react';

const EyesOnMe = () => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    console.log('Good!');
    setFocused(true);
  };

  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
    setFocused(false);
  };

  return (
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    </div>
  );
};

export default EyesOnMe;