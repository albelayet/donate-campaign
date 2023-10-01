import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ cards }) => {


    console.log(cards)


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
            {cards.map(({ ID, CategoryBgColor, Picture, Category, Title, CardBgColor, TextButtonBgColor }) => {
                const { bgColor, textColor } = CategoryBgColor;
                console.log(CategoryBgColor)
                return (
                    <Link key={ID} to={`/cards/${ID}`}>
                        <div className={`card w-80 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`} style={{background : CategoryBgColor}}>
                            <figure>
                                <img src={Picture} alt="Image" className="w-full h-auto" />
                            </figure>
                            <div className="card-body">
                                <h6 className="font-bold text-sm" style={{color : CardBgColor}}>{Category}</h6>
                                <h2 className="text-xl font-semibold" style={{color : TextButtonBgColor}} >{Title}</h2>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default HomeCard;
