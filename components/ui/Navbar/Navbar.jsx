import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavHeader from '../NavHeader'
import NavLink from '../NavLink'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const closeBanner = () => {
        setIsVisible(false);
    };
    const [state, setState] = useState(false)
    const menuBtnEl = useRef()

    const navigation = [
        { name: "Courses", href: "/#Courses" },
        { name: "About Us", href: "/about-us" },
        { name: "Test Series", href: "/#Courses" },
        { name: "Free Resources", href: "https://resource.prepcrazy.com" },
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!menuBtnEl.current.contains(target)) setState(false);
        };
    }, [])

    return (
        <header className="relative shadow-lg">
            {isVisible && (
                <div className="bg-amber-300 flex items-center justify-center px-4 py-2">
                    <div className="flex items-center space-x-3">
                        {/* SVG Image */}
                        <img
                            src="https://ik.imagekit.io/99djpd8k3/CC/referal.4822d099%20(1).svg?updatedAt=1731239516352"
                            alt="Referral Icon"
                            className="w-6 h-6 object-contain"
                        />
                        <p className="text-sm sm:text-base font-semibold text-black">
                            Get a CC course with a Scholarship of 100%
                        </p>
                        <a
                            href="#"
                            className="px-2 py-1 text-white bg-red-500 rounded text-sm font-semibold hover:bg-red-600"
                        >
                            APPLY NOW
                        </a>
                    </div>
                    <button
                        onClick={closeBanner}
                        className="absolute top-2 right-3 text-black focus:outline-none text-sm"
                        aria-label="Close banner"
                    >
                        ✕
                    </button>
                </div>
            )}
            <div className="custom-screen md:hidden">
                <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
            </div>
            <nav className={`md:text-sm md:static md:block ${state ? "bg-gray-100 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900" : "hidden"} shadow-lg`}>
                <div className="custom-screen items-center md:flex">
                    <NavHeader state={state} onClick={() => setState(!state)} />
                    <div className={`flex-1 items-center mt-4 text-gray-800 md:font-medium md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                        <ul className="flex-1 justify-center items-center space-y-4 md:flex md:space-x-4 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="hover:text-gray-800 text-base font-semibold">
                                            <Link href={item.href} className="block">
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="gap-x-4 items-center justify-end mt-4 space-y-4 md:flex md:space-y-0 md:mt-0">
                            <Link href="/contact" className="block hover:text-gray-800 text-base font-semibold">
                                Contact Us
                            </Link>
                            <NavLink href="" className="flex items-center justify-center gap-x-1 text-base text-white font-medium bg-red-500 active:bg-gray-900 md:inline-flex">
                                Schedule a Call
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
