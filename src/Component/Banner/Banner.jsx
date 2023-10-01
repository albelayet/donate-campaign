import React from 'react';

const Banner = () => {
    return (
        <div className="text-center">
            <div className="h-[70vh] bg-[url('https://i.ibb.co/pPGNXyB/fc1f79e18cdc1a12320b9b10ec3e253d.jpg')] bg-cover bg-center text-center items-center justify-center flex">
                <div className="w-full h-full flex justify-center items-center bg-gray-100/90 backdrop-brightness-95 text-center">
                    <div className="text-center">
                        <div>
                            <h3 className="text-black text-4xl text-center font-bold">I Grow By Helping People In Need</h3>
                        </div>
                        <div className="text-center flex justify-center items-center my-5 lg:my-10">
                            <div className="form-control text-center justify-items-center">
                                <div className="input-group text-center items-center">
                                    <input type="text" placeholder="Search…" className="input input-bordered px-3 md:px-5 lg:px-10" />
                                    <button className="btn btn-square bg-red-500 md:px-5 lg:px-16 text-white font-semibold">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;