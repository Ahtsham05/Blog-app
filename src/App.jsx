import { useState } from "react";
import config from "../Config";
function App() {
  const [server, setserver] = useState(config.COLLECTION_ID);
  return (
    <>
      <h1>{server}</h1>
    </>
  );
}

export default App;
