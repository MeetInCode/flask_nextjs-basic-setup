"use client";

import { useState } from "react";

export default function Page() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  // Fetch Hello, World on page load
  useState(() => {
    fetch("http://127.0.0.1:5328/api/python")
      .then((response) => response.text())
      .then((text) => setData1(text))
      .catch((error) => console.error("Error fetching API 1:", error));
  }, []);

  // Function to fetch Hello, World 2 on button click
  const handleButtonClick = () => {
    fetch("http://127.0.0.1:5328/api/python2")
      .then((response) => response.text())
      .then((text) => setData2(text))
      .catch((error) => console.error("Error fetching API 2:", error));
  };

  return (
    <div>
      <h1>Flask API Responses</h1>
      <div dangerouslySetInnerHTML={{ __html: data1 }} />
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Fetch Hello, World 2
      </button>
      {data2 && <div dangerouslySetInnerHTML={{ __html: data2 }} />}
    </div>
  );
}
