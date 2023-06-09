import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ClassCaet = ({cls}) => {
    const {user} = useContext(AuthContext)
    console.log(cls)
    return (
        <div>
            <figure><img className="rounded" src={cls.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {cls.name}</h2>
                <p>Instructor: {cls.instructor}</p>
                <p>price: {cls.price}$</p>
                <div className="card-actions justify-end">
                    {user ? <button className="btn btn-primary">Buy Now</button> : <button className="btn btn-primary" disabled >Please login</button>}
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default ClassCaet;