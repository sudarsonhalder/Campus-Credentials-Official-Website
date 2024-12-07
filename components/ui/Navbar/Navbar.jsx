import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import NavHeader from '../NavHeader'
import NavLink from '../NavLink'

const Navbar = () => {
    useEffect(()=>{
        (async function () {
            const cal = await getCalApi({"namespace":"15min"});
            cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#ffffff"}},"hideEventTypeDetails":true,"layout":"month_view"});
        })();
    }, [])

    const [isVisible, setIsVisible] = useState(true);
    const closeBanner = () => {
        setIsVisible(false);
    };

    const [state, setState] = useState(false)
    const menuBtnEl = useRef()

    const navigation = [
        {
            name: "Placements",
            dropdown: true,
            links: [
                { name: "Free Resources", href: "https://resource.prepcrazy.com" },
                { name: "Job Opportunities", href: "/jobs" },
                { name: "News & Updates", href: "/news" },
            ]
        },
        { name: "Companies", href: "/companies" },
        { name: "Blogs", href: "/blogs" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!menuBtnEl.current.contains(target)) setState(false);
        };
    }, [])

    return (
        <header className="relative shadow-lg z-50">
            {isVisible && (
               <div className="px-2 py-2 relative flex items-center justify-center animate-gradient">
                 <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0">
                   <div className="flex items-center space-x-2">
                     <img
                       src="https://ik.imagekit.io/99djpd8k3/CC/referal.4822d099%20(1).svg?updatedAt=1731239516352"
                       alt="Referral Icon"
                       className="w-6 h-6 object-contain hidden md:block"
                     />
                     <p className="text-sm sm:text-md font-bold text-black">
                       Get a CC course with a Scholarship of 100%
                     </p>
                   </div>
                   <div className="sm:ml-4">
                     <a
                       href="#tally-open=wA6Ray&tally-layout=modal&tally-width=600&tally-align-left=1&tally-emoji-text=👉&tally-emoji-animation=head-shake&tally-auto-close=5000"
                       className="px-3 py-1.5 text-white bg-red-500 rounded-md text-sm font-semibold hover:bg-red-600 transition-colors duration-200"
                     >
                       APPLY NOW
                     </a>
                   </div>
                 </div>
                 <button
                   onClick={closeBanner}
                   className="absolute top-2 right-2 text-black focus:outline-none"
                   aria-label="Close banner"
                 >
                   ✕
                 </button>
               </div>
            )}
            <div className="custom-screen md:hidden">
                <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
            </div>
            <nav className={`md:text-sm md:static md:block ${state ? "bg-gray-100 absolute z-20 top-0 inset-x-0 shadow-xl md:bg-gray-900" : "hidden"} shadow-lg transition-all duration-200 py-0`}>
                <div className="custom-screen items-center md:flex md:justify-between">
                    <NavHeader state={state} onClick={() => setState(!state)} />
                    <div className={`flex-1 items-center mt-2 text-gray-800 md:font-medium md:mt-0 md:flex md:justify-end ${state ? 'block' : 'hidden'}`}>
                        <ul className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
                            {navigation.map((item, idx) => {
                                if (item.dropdown) {
                                    return (
                                        <li 
                                          key={idx} 
                                          className="relative group text-base font-semibold transition-colors duration-200"
                                        >
                                            <button className="flex items-center focus:outline-none hover:text-gray-900 transition-colors duration-200">
                                                {item.name}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180"
                                                >
                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.168l3.71-3.0a.75.75 0 011.04 1.08l-4.5 4.25a.75.75 0 01-1.06 0l-4.5-4.25a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-1 w-48 z-50">
                                                {item.links.map((link, lidx) => (
                                                    <li key={lidx}>
                                                        <Link 
                                                          href={link.href} 
                                                          className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={idx} className="hover:text-gray-900 text-base font-semibold transition-colors duration-200">
                                            <Link href={item.href} className="block">
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                        <div className="ml-6">
                            <NavLink
                              href="#"
                              className="flex items-center gap-x-1 text-base text-white font-medium bg-red-500 hover:bg-red-600 active:bg-red-700 px-3 py-2 rounded-md transition-colors duration-200"
                              data-cal-namespace="15min"
                              data-cal-link="campuscredentials/15min"
                              data-cal-config='{"layout":"month_view","theme":"light"}'
                            >
                              <i className="fa fa-calendar" aria-hidden="true"></i>
                              Schedule a Meeting
                              <button
                                data-cal-namespace="15min"
                                data-cal-link="campuscredentials/15min"
                                data-cal-config='{"layout":"month_view","theme":"light"}'
                                style={{ display: "none" }}
                              >
                                Hidden Button
                              </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
