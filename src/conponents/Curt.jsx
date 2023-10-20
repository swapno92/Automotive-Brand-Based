// import React from 'react';

// import { data } from "autoprefixer";
import { AiOutlineStar } from "react-icons/ai";
// import swal from "sweetalert";
import Swal from "sweetalert2";

const Curt = ({ curt }) => {
  // console.log(curt)
  const { _id, img, brand, name, price, rating } = curt;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
        fetch(`http://localhost:5000/curt/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Curt has been deleted.", "success");
            }
          });
          console.log("deleted");
      }
    });
  };

  //   console.log(curt);
  return (
    <div>
      <div className=" py-4 bg-white shadow-lg rounded-md ">
        <div className="flex justify-center items-center">
          <img src={img} alt="" className="w-[90%] h-60 rounded-lg" />
        </div>
        <h2 className="text-center text-2xl font-bold mt-4">
          {brand}
          <span className="font-medium"> &nbsp;{name}</span>
        </h2>
        <div className=" w-[90%] mx-auto flex justify-between px-3 items-center mt-4">
          <h2 className="text-2xl font-semibold">
            Price: $<span>{price}</span>
          </h2>
          <div className="flex items-center">
            <p className="font-semibold text-xl">{rating}&nbsp;</p>
            <AiOutlineStar className="text-xl"></AiOutlineStar>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            onClick={() => handleDelete(_id)}
            className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-red-100 border border-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curt;
