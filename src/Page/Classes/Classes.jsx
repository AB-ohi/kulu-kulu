import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import ClassCaet from "./ClassCaet";

const Classes = () => {
  const [classes, SetClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetClasses(data);
      });
  }, []);
  return (
    <div>
      <div>
        <img src="https://i.ibb.co/QJkQf93/music-trendy-banner-vector.jpg" alt="" />
      </div>
      <SectionTitle
        Heading="Classes List"
      ></SectionTitle>
      <h1>length {classes.length}</h1>
      <div className="card md:grid grid-cols-3 gap-6 card-compact bg-base-100 shadow-xl">
        
      
        {
          classes.map((cls) => (
            <ClassCaet key={cls._id} cls={cls} />
          ))
        }
      </div>
    </div>
  );
};


export default Classes;