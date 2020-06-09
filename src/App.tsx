import React, { useState } from "react";
import "./App.css";
import NewUserForm from "./components/NewUserForm/NewUserForm";

function App() {
  const [state, setState] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent) => {
    setState(true);
  };
  return (
    <div className="welcome">
      {state ? (
        <NewUserForm />
      ) : (
        <>
          <h2>Cypress example</h2>
          <button onClick={handleClick}>Create new user</button>
        </>
      )}
    </div>
  );
}

export default App;
