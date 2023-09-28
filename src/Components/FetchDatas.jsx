import React, { useState, useEffect } from "react";

export default function FetchDatas() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the first 10 data items from the API
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        console.log("fetch data:", data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div>
      <h1>Fetch Datas</h1>
      <div>
        {images.map((data) => (
          <div key={data.id}>
            <p>Title: {data.title}</p>
            <img src={data.url} alt={data.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
