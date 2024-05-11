import { Card, CardContent } from '../../components/ui/card';
import React from 'react';// Assuming your next.config.js supports direct imports
import { Plus, Equal } from 'lucide-react';

const Reviews = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen ">
      <h1 className='text-4xl font-bold mb-10'>What People Have Said</h1>
        
      <Card className="w-[800px] h-[110px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <CardContent>
          {/* Image and name layout */}
          <div className="flex flex-row gap-4 items-center">
            <img src="/hamza.jpg" alt="Hamza Ahmed" className="w-20 h-20 rounded-full" />
            <div>
              <h1 className="text-4xl font-bold">- Hamza Ahmed</h1>
              <p className="text-lg">&apos;&apos;Doing The Hard Work especially when you don&apos;t feel like it is hard; If you&apos;re not using <span className='text-green-500'>EatTheFrog.today</span>&apos;&apos;</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Plus className='mt-5 mb-5 text-2xl'/>
      <Card className="w-[700px] h-[110px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <CardContent>
          {/* Image and name layout */}
          <div className="flex flex-row gap-4 items-center">
            <img src="/davidgogins.jpeg" alt="David Goggins" className="w-20 h-20 rounded-full" />
            <div>
              <h1 className="text-4xl font-bold">- David Goggins</h1>
              <p className="text-lg">&apos;&apos;Who&apos;s going to carry the boats and the logs? It&apos;&apos;s <span className='text-green-500'>EatTheFrog.today</span>&apos;&apos;</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Plus className='mt-5 mb-5 text-2xl'/>
      <Card className="w-[700px] h-[100px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <CardContent>
          {/* Image and name layout */}
          <div className="flex flex-row gap-4 items-center">
            <img src="/andrewtate.jpeg" alt="Andrew Tate" className="w-20 h-20 rounded-full" />
            <div>
              <h1 className="text-4xl font-bold">- Andrew Tate</h1>
              <p className="text-lg">&apos;&apos;You can only be a Top G if you use <span className='text-green-500'>EatTheFrog.today</span>&apos;&apos;</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Equal className="transform rotate-90 mt-5 mb-5 text-2xl" />
      <img src='./5.png' className='transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'></img>
    </div>
  );
}

export default Reviews;
