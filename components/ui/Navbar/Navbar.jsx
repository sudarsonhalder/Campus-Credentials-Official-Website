import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import NavHeader from '../NavHeader'
import NavLink from '../NavLink'

const Navbar = () => {
	// useEffect(()=>{
    //     (async function () {
    //       const cal = await getCalApi({"namespace":"15min"});
    //       cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#ffffff"}},"hideEventTypeDetails":true,"layout":"month_view"});
    //     })();
    //   }, [])
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
        { name: "Companies", href: "/company" },
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
               <div className="bg-amber-300 py-2 px-2 relative flex items-center justify-center">
               {/* Centered Content */}
               <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                 {/* SVG Image */}
                 <img
                   src="https://ik.imagekit.io/99djpd8k3/CC/referal.4822d099%20(1).svg?updatedAt=1731239516352"
                   alt="Referral Icon"
                   className="w-4 h-4 sm:w-10 sm:h-10 object-contain hidden md:block"
                 />
                 <p className="text-base sm:text-md font-bold text-black">
                   Get a CC course with a Scholarship of 100%
                 </p>
                 <a
                   href="#tally-open=wA6Ray&tally-layout=modal&tally-width=600&tally-align-left=1&tally-emoji-text=👉&tally-emoji-animation=head-shake&tally-auto-close=5000"
                   className="px-2 py-2 text-white bg-red-500 rounded-md text-sm font-semibold hover:bg-red-500"
                 >
                   APPLY NOW
                 </a>
               </div>
             
               {/* Close Button */}
               <button
                 onClick={closeBanner}
                 className="absolute top-4 right-4 text-black focus:outline-none"
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
                            {/* <Link href="/contact" className="block hover:text-gray-800 text-base font-semibold">
                                Contact Us
                            </Link> */}
 <NavLink
  href="#"
  className="flex items-center justify-center gap-x-1 text-base text-white font-medium bg-red-500 active:bg-gray-900 md:inline-flex"
  data-cal-namespace="15min"
  data-cal-link="campuscredentials/15min"
  data-cal-config='{"layout":"month_view","theme":"light"}'
>
  <span style={{ color: "white" }}>👉</span> Schedule 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
  {/* Hidden button for functionality */}
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
