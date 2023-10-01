import React from 'react';

const Donate = (cards) => {
    const card = cards.card
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl" style={{background : card.CategoryBgColor}}>
                <figure><img src={card.Picture}alt="Movie" className='h-full'/></figure>
                <div className="card-body">
                    <p className='font-semibold'> {card.Category} </p>
                    <h2 className="card-title text-2xl font-semibold my-2" style={{color: card.CardBgColor}}>{card.Title}</h2>
                    <p className='font-semibold'>{card.Price} $$</p>
                    <div className="card-actions">
                        <button className="btn btn-error text-white font-semibold my-2">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;

























// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';


// const Donate = () => {

//     const [donate, setDonate] = useState({})
//     const { cardID } = useParams()
//     const data = useLoaderData()
//     console.log(donate)

//     useEffect(() => {
//         if (data) {
//             const addCard = data?.find((card) => card.ID == cardID)
//             console.log(addCard)
//             setDonate(addCard)
//         }

//     }, [cardID, data])


//     // const addDonateArray = [];

//     // const donateItem = localStorage.getItem('donate') ? JSON.parse(localStorage.getItem('donate')) : []

//     // if (!donateItem) {
//     //     addDonateArray.push(donate)
//     //     localStorage.setItem('donate', JSON.stringify(addDonateArray))
//     // } else {
//     //     addDonateArray.push(...donateItem, donate)
//     //     localStorage.setItem('donate', JSON.stringify(addDonateArray))
//     // }



//     return (
//         <div>
//             <div className="card w-80 my-5">
//                 <figure><img src={donate?.Picture} alt="Image" /></figure>
//                 <div className="card-body p-4">
//                     <h6 className="f">{donate?.Category}</h6>
//                     <h2 className="card-title">{donate?.Title}</h2>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Donate;