// App.js
import React, { useState } from 'react';

const App = () => {
  // State hook to manage a variable
const [greeting, setGreeting] = useState('Hello, React!');

  // Event handler to update the greeting
const updateGreeting = () => {
    setGreeting('Welcome to React World!');
};

return (
    <div>
    <h1>{greeting}</h1>
    <button onClick={updateGreeting}>Update Greeting</button>
    </div>
);
};

export default App;
