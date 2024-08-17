import React, { useEffect, useState } from 'react';
import Cards from "./Cards";
import axios from "axios"
import { Link } from "react-router-dom";


function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    }, [])

    return (
        <>

            <div className=" bg-white max-w-screen-2xl container mx-auto md:px-20px px-4">
                <div className="mt-28 items-center justify-start text-center">
                    <h1 className="text-2xl font-semibold md:text-4xl text-black">We're delighted to have you here  {" "}<span className="text-pink-500">:)</span></h1>

                    <p className="mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas non quaerat inventore ipsa dicta expedita officia distinctio ut ab ad suscipit, atque sint deserunt iure harum laboriosam sequi itaque fuga natus accusamus, et voluptatibus cum quo? Tempora, cum nostrum quae impedit illo adipisci recusandae ipsum iste similique quibusdam iusto perferendis qui ut voluptate corporis blanditiis id voluptatibus hic. Inventore molestias dolorum, ipsa laborum maiores ea quos consectetur earum debitis nobis possimus provident veritatis deserunt enim. Consectetur alias velit eaque nam distinctio libero rerum quas placeat voluptatum aspernatur?</p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800  duration-300">back home</button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>

        </>
    )




}

export default Course
