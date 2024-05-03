import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FetchDatas() {
  const [images, setImages] = useState([]);

  function getApi() {
    fetch("http://blackfarm.in/react/view_filims.php")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        console.log("fetch data:", data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }

  useEffect(() => {
    // Fetch the first 10 data items from the API
    getApi();
  }, []);
  return (
    <div>
      <h1>Fetch Datas</h1>

      {/* <div style={{ backgroundColor: "red" }}>
        {images.map((data) => (
          <div style={{ backgroundColor: "white" }} key={data.id}>
            <h4>Title: {data.name}</h4>
            <p>Description :{data.description}</p>
            <img src={data.image} alt={data.title} />
          </div>
        ))}
      </div> */}

<Card style={{ width: '18rem' }}>
  {images.map((data)=>(
    <div>
 <Card.Img variant="top" src={data.image}/>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
      {data.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </div>
  ))}
     
    </Card>
  



    </div>
  );
}
