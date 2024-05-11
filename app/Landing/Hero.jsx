"use client"

import Link from 'next/link';
import React from 'react';


const Hero = () => {

    
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <div className="mb-2">
      <img src="/🐸 (2).svg" alt="eatthefrog" className="w-20 h-20 " />
      </div>

        <h1 className="text-4xl font-bold">
         Track Your Frogs & Have Fun Doing It 
        </h1>
        <p className="text-lg">
            <span role="img" aria-label="frog">🐸</span> Welcome to EatTheFrog <span role="img" aria-label="frog">🐸</span>
        </p>
        <div className="flex flex-row gap-4 mt-5">
         
         
            <Link className="bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-green-600 text-white font-bold py-2 px-4 rounded" href={"./sign-up"}>
                    Become a Frog 🐸
                </Link>
         
            <Link  href={'#eatmore'}className="bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Learn More <span role="img" aria-label="frog">🐸</span>
                </Link>

        </div>
    </div>


  );
}

export default Hero;
