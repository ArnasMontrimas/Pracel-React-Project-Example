import { useState, useEffect } from "react";

// react component that fetches data from a remote API
export default function Data(): JSX.Element {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
