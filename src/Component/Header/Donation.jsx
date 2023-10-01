import React, { useEffect, useState } from 'react';
import Donate from '../ErrorPage/Donate/Donate';

const Donation = () => {

    const [donateData, setDonateData] = useState([])
    const [noData, setNoData] = useState(false)
    const [btnClick, setBtnClick] = useState(false)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const donateItem = JSON.parse(localStorage.getItem('donate'))
        if (donateItem) {
            setDonateData(donateItem)
            const totalValue = donateItem.reduce((preValue, currentItem) => {
                if (typeof currentItem.Price === 'number') {
                    return preValue + currentItem.Price;
                } else {
                    console.log('Invalid price:', currentItem.Price);
                    return preValue;
                }
            }, 0);

            console.log(totalValue);
        }
        else {
            
            setNoData("No Donation Yet!")
        }
    }, []);

    return (
        <div>
            {
                noData ? <p className="flex items-center justify-center h-[80vh] text-black font-semibold text-4xl">{noData}</p>
                    :
                    <div>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 my-10">
                            {
                                btnClick ? donateData.map(card => <Donate key={card.ID} card={card}></Donate>)
                                    :
                                    donateData.slice(0, 4).map(card => <Donate key={card.ID} card={card}></Donate>)
                            }
                        </div>
                        <div className="flex justify-center items-center">
                            {
                                donateData.length > 4 && (<button onClick={() => setBtnClick(!btnClick)} className='btn-error btn text-white font-semibold'>{btnClick ? "See Less" : "See More"}</button>)
                            }
                        </div>
                    </div>

            }
        </div>
    );
};

export default Donation;