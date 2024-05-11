'use client'
import Link from 'next/link';
import { useUser, useClerk } from '@clerk/nextjs';
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
    const { user } = useUser();
    const { signOut } = useClerk();



    const handleSignOut = () => {
        signOut();
    };

    return (
        <div className="bg-green-500 text-white p-4 shadow-lg">
            <ul className="flex justify-between items-center container">
                {!user ? (
                    <>
                      <li className="mr-6 cursor-pointer">
                        <Link href='/sign-in' className="text-center text-white font-bold hover:text-green-200 transition duration-150 ease-in-out">
                            Sign In
                        </Link>
                      </li>
                      <li className="mr-6 cursor-pointer">
                        <Link href='/sign-up' className="text-center text-white font-bold hover:text-green-200 transition duration-150 ease-in-out">
                            Sign Up
                        </Link>
                      </li>
                    </>
                ) : (
                    <>
                       <li className="mr-6 cursor-pointer" >
                            <Link href='/' className="">
                            <img src="/🐸 (3).png" alt="eatthefrog" className="w-10 h-10 " />
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link href='/profile' className="text-center text-white font-bold hover:text-green-200 transition duration-150 ease-in-out">
                                Frog Profile
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link href='/status' className="text-center text-white font-bold hover:text-green-200 transition duration-150 ease-in-out">
                                Frog Status
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link href='/statistics' className="text-center text-white font-bold hover:text-green-200 transition duration-150 ease-in-out">
                                Frog Statistics
                            </Link>
                        </li>
                    
                     <div className='flex items-center gap-4'>

                         <UserButton afterSignOutUrl='/sign-in'/>
                     </div>
             
                 
                    </>
                )}
            </ul>
        </div>
    );
}

export default Navbar;
