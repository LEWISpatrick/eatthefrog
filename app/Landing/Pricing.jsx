import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Plus, Equal, Check } from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <h1 className='text-4xl font-bold mb-10 '>Pricing</h1>
        <div className="flex flex-row gap-4 items-center">
            <Card className=" flex flex-row gap-4 items-center h-[250px] w-fit">
                <CardContent>
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-bold mb-7">$0/Month</h1>
                        <p className="text-lg flex items-center"><Check className='text-green-500 mr-2'/> Unlimited Support </p>
                        <p className="text-lg flex items-center"><Check className='text-green-500 mr-2'/> Unlimited Access</p>
                        <p className="text-lg flex items-center"><Check className='text-green-500 mr-2'/> All The Features</p>
                           
            <Link className= "mt-2 bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-green-600 text-white font-bold py-2 px-4 rounded" href={"./sign-up"}>
                    Become a Frog 🐸
                </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Pricing;
