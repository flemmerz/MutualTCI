import React, { useState } from "react";

function DataSubmit() {
  const [dataHash, setDataHash] = useState("");

  const handleSubmit = () => {
    fetch("/api/data/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contributor: "user_address", dataHash }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2>Submit Data</h2>
      <input
        type="text"
        value={dataHash}
        onChange={(e) => setDataHash(e.target.value)}
        placeholder="Enter data hash"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default DataSubmit;
