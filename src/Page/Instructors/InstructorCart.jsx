const InstructorCart = ({instructor}) => {
  return (
    <div>
      <div className="card-body text-center">
        <h2 className="font-bold text-lg">Name: {instructor.name}</h2>
        <p>Gmail: {instructor.email}</p>
      </div>
      <figure>
        <img
        className="w-[400px] rounded-2xl"
          src={instructor.image}
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default InstructorCart;
