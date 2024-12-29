import React from 'react';
import { Link } from 'react-router-dom';


function Contact() {
    return (
        <>
        <div className="bg-white">
            <div className="text-center mt-8">
                <h1 className="font-bold text-6xl">Contact <span className="text-pink-600">Us</span></h1><br />
                <p className="mb-4 font-bold text-xl">
                    If you have any questions, suggestions, or feedback, feel free to contact us using the form below or through other methods listed.
                </p>
                <Link to="/">
                   <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800  duration-300">back home</button>
                </Link>
            </div>
          <div className="flex justify-between">
            <div className="right w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum adipisci perferendis, quam quod totam quisquam exercitationem suscipit similique eligendi odit. Perspiciatis, adipisci aliquid.
            </div>
            <div className="left w-1/2">left</div>
         </div>
            </div>
        </>

    );
}

export default Contact;
