import { useEffect, useState } from 'react';// Importing React hooks for managing state and side effects

function App() {// Main App component for the Story Collab client
  // This component fetches a message from the backend server and displays it.
  // It uses the useEffect hook to perform a side effect (fetching data) when the component mounts.
  // The useState hook is used to manage the state of the message.
  const [message, setMessage] = useState('');//

  useEffect(() => {//
    fetch('http://localhost:5000/')//
      .then((res) => res.text())//
      .then((data) => setMessage(data));//
  }, []);//

  return (//
    <div>
      <h1>Story Collab App</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}
abcd
export default App;
// This is the main App component for the Story Collab client.
// It fetches a message from the backend server and displays it.
// The server is expected to be running on http://localhost:5000/.
// The useEffect hook is used to fetch the message when the component mounts.
// The message is stored in the state using useState and displayed in a paragraph element.
// The component is exported as the default export of the module.
// The App component is the main entry point for the React application.