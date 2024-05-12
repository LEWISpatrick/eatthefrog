
import XIcon from "@mui/icons-material/X";
import { Youtube } from 'lucide-react';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export const Footer = () => {
    const Links = [
        {
            href: 'https://twitter.com/redpillboy123',
            icon: <XIcon className='h-8 w-8' />
        },
        {
            href: 'https://www.youtube.com/@PatrickHenry69420',
            icon: <Youtube className='h-10 w-10' />
        },
        {
            href: 'mailto:patricklewis2009@gmail.com',
            icon: <EmailIcon className='h-8 w-8' />
        },
        {
            href: 'https://www.linkedin.com/in/patrickxp-lewis-b29289256',
            icon: <LinkedInIcon className='h-10 w-10' />
        },
        {
            href: 'https://instagram.com/redpillboy123',
            icon: <InstagramIcon className='h-10 w-10' />
        },
    ];

    return (
        <div className="text-center pb-8">
            <div className="flex items-center justify-center space-x-4">
                {Links.map((link, index) => (
                    <Link href={link.href} key={index}>
                        <p className='hover:opacity-45 transition duration-300'>
                            {link.icon}
                        </p>
                    </Link>
                ))}
            </div>
            <p className="text-sm text-slate-50">patricklewis2009</p>
            <p className="text-sm text-slate-50">© Patrick. All rights reserved.</p>
        </div>
    );
}

