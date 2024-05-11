import { Card, CardHeader, CardTitle } from '../../components/ui/card';
import React from 'react';
import { MoveRight } from 'lucide-react';
import { Youtube } from 'lucide-react';

const Eatmore = () => {
  return (
    <div id='eatmore' className="container mx-auto flex flex-col items-center justify-center h-screen">
        <h1 className='text-4xl font-bold'>&apos;&apos;Doing Deep Work Is Hard; If your a Bitch&apos;&apos;</h1>
        
        <p className='text-lg mb-4'>-Hamza Ahmed</p>

        {/* Wrapper for the cards with flex-row */}
        <div className="flex flex-row justify-center items-center space-x-4">
            <Card className='transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center w-[335px] h-[300px] text-center'>
                <div className='p-4 text-center'>
                    <span className='text-8xl'>🎯</span>
                </div>
                <CardHeader>
                    <h2 className='text-xl font-bold'>🐸 Set a goal 🐸</h2>
                         <p>&apos;&apos;Record Self Help Video&apos;&apos;</p>
                    <p>&apos;Make &apos;&apos;<span className='font-bold'>How to Get Girls</span>&apos;&apos; Courses&apos;</p>
                </CardHeader>
            </Card>
            <MoveRight />
            <Card className='transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center w-[335px] h-[300px] text-center'>
                <div className='p-4 text-center transform scale-x-[-1]'>
                    <span className='text-8xl'>🏃</span>
                </div>
                <CardHeader>
                    <h2 className='text-xl font-bold'> 🐸 Put in the work 🐸</h2>
                    <p>&apos;&apos;Wake up 3am&apos;&apos;</p>
                    <p>&apos;&apos;Eat The Frog&apos;&apos;</p>
                </CardHeader>
            </Card>
            <MoveRight />
            <Card className='transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center w-[335px] h-[300px] text-center'>
                <div className='p-4 text-center transform scale-x-[-1]'>
                    <span className='text-8xl'> 🏆 </span>
                </div>
                <CardHeader>
                    <h2 className='text-xl font-bold'> 🐸 Accomplish It 🐸 </h2>
                    <p className="flex items-center">
                        Upload It to my <span className='text-red-500 ml-1'>Youtube</span><Youtube className='ml-1'/>
                        </p>
                    <p>&apos;&apos;Make <span className='font-bold'>$1K/Month</span>&apos;&apos;</p>
                </CardHeader>
            </Card>
        </div>
    </div>
  );
}

export default Eatmore;
