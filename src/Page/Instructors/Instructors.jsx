import { useEffect, useState } from "react";
import InstructorCart from "./InstructorCart";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Instructors = () => {
  const [instructors, SetInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Instructors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetInstructors(data);
      });
  }, []);
  return (
    <div>
      <div>
        <img src="https://i.ibb.co/r4YQcG2/Mesa-de-trabajo-1-2x.png" alt="" />
      </div>
      <SectionTitle
        Heading= "Instructor"      
      ></SectionTitle>
      
      <div className="card md:grid grid-cols-3 gap-4 justify-center text-center  bg-base-100 shadow-xl my-6">
        {instructors.map((instructor) => (
          <InstructorCart key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
