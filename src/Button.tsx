import React from "react";

export function Button(props: { setCounter: any; counter: any }): JSX.Element {
  const { setCounter, counter } = props;

  return (
    <React.Fragment>
      <button onClick={() => setCounter(counter - 1)}>
        Remove 1 from counter
      </button>
      <button onClick={() => setCounter(counter + 1)}>Add 1 to counter</button>
    </React.Fragment>
  );
}
