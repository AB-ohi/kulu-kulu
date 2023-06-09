import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassCaet = ({ cls }) => {
    console.log(cls)
    const {name,image,instructor, price, _id} = cls
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handelAddToCard = classes =>{
        console.log(classes)
        if(user && user.email){
            const addClass = {classId:_id, name, image, instructor, price}
            fetch('http://localhost:5000/classSelect',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(addClass)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Your class has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Pls Login!!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login' ,{state: {from: location}})
                }
              })
        }
    } 

    return (
        <div>
            <figure><img className="rounded" src={cls.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {cls.name}</h2>
                <p>Instructor: {cls.instructor}</p>
                <p>price: {cls.price}$</p>
                <div className="card-actions justify-end">
                     <button onClick={handelAddToCard} className="btn btn-primary">Buy Now</button>
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default ClassCaet;