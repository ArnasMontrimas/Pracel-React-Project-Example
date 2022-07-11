import { useState } from "react";
import { Button } from "./Button";
import Data from "./Data";

export function App(): JSX.Element {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Button setCounter={setCounter} counter={counter} />
      <Data />
    </div>
  );
}
