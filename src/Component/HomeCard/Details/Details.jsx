import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Details = () => {
  const [details, setDetails] = useState({})
  const { cardID } = useParams()
  console.log(cardID)
  const data = useLoaderData()
  console.log(data)

  useEffect(() => {
    const findCard = data?.find((card) => card.ID == cardID)
    console.log(findCard)
    setDetails(findCard)
  }, [cardID, data]);
  console.log(details);


  const handleAddDonate = () => {

    const addDonateArray = [];

    const donateItem = localStorage.getItem('donate') ? JSON.parse(localStorage.getItem('donate')) : []

    if (!donateItem) {
      addDonateArray.push(details)
      localStorage.setItem('donate', JSON.stringify(addDonateArray))
      swal("Donated!!!", "Thank YOU for the Donation!", "success");
    } else {

      const isAlready = donateItem.find(item => item.ID == cardID)
      console.log(isAlready)
      if (!isAlready) {
        addDonateArray.push(...donateItem, details)
        localStorage.setItem('donate', JSON.stringify(addDonateArray))
        swal("Donated!!!", "Thank YOU for the Donation!", "success");
      } else {
        swal("Already Donated !!", "Please Choose Another...", "warning");
      }


    }
  };




  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <div className="card md:w-4/12 lg:w-8/12 glass lg:h-[100vh] px-10">
          <figure><img className="w-full" src={details.Picture} alt="car!" /></figure>
          <div className="-my-20 pl-5">
            <button onClick={handleAddDonate} className="bg-red-500 btn">Donate</button>
          </div>
          <div className="card-body my-28">
            <h2 className="card-title font-bold text-black text-2xl ">{details.Title}</h2>
            <p>{details.Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;