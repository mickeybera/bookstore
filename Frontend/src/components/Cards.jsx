import React from 'react'

const Cards = ({ item }) => {
    if(!item) return null;
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card w-92  shadow-xl hover:scale-105 duration-200">
                    <figure><img src={item.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-600 hover:text-white  duration-200">Buynow</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards