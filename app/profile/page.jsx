'use client'
import React from 'react';
import { useUser, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import ContributionGraph, { staticContributions } from '../../components/profile/contribuition'
import { Separator } from '../../components/ui/separator';

const Page = () => {
    const { user } = useUser();

    if (!user) {
        window.location.href = '/sign-in';
        return <div>Loading...</div>; // Optionally, you can render a loading spinner here
    }

    const hasContributions = staticContributions.length > 0;
    const numContributions = staticContributions.length 
    // User content
    return (
        <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
            
            <h1 className='text-center text-3xl mb-5'>
                <span className='mb-2 font-bold '>Welcome back, frog 🐸 {user.firstName} 🐸 </span>
            </h1>

            <Separator className='mb-5 '/>

            <Card className='w-[500px] text-center '>
                <div className=''>

                    <CardHeader>
                        <CardTitle className=' font-bold '> 
                            <div className="flex justify-center items-center mb-5">
                                <Link  href={"/user-profile"} >
                                    <img src={user.imageUrl || "/default-profile.png"} alt="profile pic" className="rounded-full w-20 h-20 transition-transform transform hover:scale-110" />
                                </Link>
                            </div>
                            <span className='text-center ' > 🐸 {user.firstName} {user.lastName} 🐸 </span> 
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ContributionGraph />    
                    </CardContent>
                </div>

                <CardContent>
                    {!hasContributions ? (
                        <>
                            <p className='text-muted-foreground mt-5'>
                                It seem&apos;s like you have no frogs? 
                            </p>
                
                            <p className='text-muted-foreground text-center'>
                                Log Your First Frog 🐸
                            </p>
                   
                            <Button className="bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full mt-3" asChild>
                                <Link href={"/status"}> Log Your First Frog 🐸</Link>
                            </Button>
                        </>
                    ) : (
                        <>
                        <p className='text-muted-foreground mt-5'>
                                It seem&apos;s like you have only eaten {numContributions} frogs? 
                            </p>
                
                            <p className='text-muted-foreground text-center'>
                                Log Your First Frog 🐸
                            </p>
                   
                            <Button className="bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full mt-3" asChild>
                                <Link href={"/status"}> Log Your one more Frog 🐸</Link>
                            </Button>
                        </>
                    )}
                </CardContent>
            </Card>

        </div>
    );
}

export default Page;
