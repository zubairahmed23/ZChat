import { useState, useEffect } from "react";
import { json } from "react-router-dom";

function About() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api");
      try{
        if(!response.ok)
        {
          console.log("Something was not ok with the response");
        }
        
        const result = await response.json();
        setData(result);
      }
      catch(error)
      {
        console.error(error);
      }
    };

    fetchData();

  }, []);

  return (
    <>
      <code>Welcome to Z-Chat ABOUT</code>
      <br />
      <code>
        {data ? JSON.stringify(data) : "Loading..."}
      </code>
    </>
  );
}

export default About;
