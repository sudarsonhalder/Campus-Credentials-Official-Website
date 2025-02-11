import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import NavLink from '../NavLink'

const Navbar = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  // Refs for the mobile menu and hamburger button
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)

  // For Cal.com embed
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '15min' })
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#ffffff' } },
        hideEventTypeDetails: true,
        layout: 'month_view'
      })
    })()
  }, [])

  // Close the banner
  const closeBanner = () => {
    setIsBannerVisible(false)
  }

  // Close menu if user clicks outside of both the menu and hamburger button
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Navigation data
  const navigation = [
    {
      name: 'Placements',
      dropdown: true,
      links: [
        { name: 'Free Resources', href: 'https://resource.prepcrazy.com' },
        { name: 'Job Opportunities', href: '/jobs' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Certification Courses', href: '/certifications' }
      ]
    },
    { name: 'Companies', href: '/companies' }
  ]

  return (
    <header className="relative shadow-lg z-50">
      {/* Top Banner */}
      {isBannerVisible && (
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

      {/* Main Navbar Container */}
      <div className="custom-screen flex items-center justify-between py-3 relative">
        {/* Left Section (Brand Logo) */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/CAMPUS.png"
              alt="Brand Logo"
              className="h-auto w-[180px] cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          ref={hamburgerRef}
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L12
                   11.586l6.293-6.293a1 1 0 011.414 1.414L13.414
                   13l6.293 6.293a1 1 0 01-1.414 1.414L12
                   14.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586
                   13 4.293 6.707a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110
                   2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav Links (hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-6 text-base font-semibold">
          {navigation.map((item, idx) => {
            if (item.dropdown) {
              return (
                <div key={idx} className="relative group">
                  <button className="flex items-center focus:outline-none hover:text-gray-700 transition-colors duration-200">
                    {item.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06-.02L10
                           10.168l3.71-3a.75.75 0 011.04 1.08l-4.5
                           4.25a.75.75 0 01-1.06 0l-4.5-4.25a.75.75 0
                           01-.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Dropdown Items */}
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-1 w-48 z-50">
                    {item.links.map((link, lidx) => (
                      <Link
                        key={lidx}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            } else {
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="hover:text-gray-700 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            }
          })}

          {/* Schedule a Meeting Button (Desktop) */}
          <NavLink
            href="#"
            className="flex items-center gap-x-1 text-white font-medium bg-red-500 hover:bg-red-600 active:bg-red-700 px-3 py-2 rounded-md transition-colors duration-200"
            data-cal-namespace="15min"
            data-cal-link="campuscredentials/15min"
            data-cal-config='{"layout":"month_view","theme":"light"}'
          >
            <i className="fa fa-calendar" aria-hidden="true" />
            Schedule a Meeting
            <button
              data-cal-namespace="15min"
              data-cal-link="campuscredentials/15min"
              data-cal-config='{"layout":"month_view","theme":"light"}'
              style={{ display: 'none' }}
            >
              Hidden Button
            </button>
          </NavLink>
        </nav>

        {/* Mobile Menu (dropdown box on the right) */}
        {/* Always rendered so its open/close transitions can be animated */}
        <div
          ref={menuRef}
          className={`md:hidden absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-md py-4 px-4 transform transition-all duration-300 ease-in-out
            ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        >
          <nav className="space-y-4 text-base font-semibold text-gray-700">
            {navigation.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <div key={idx} className="relative">
                    <details className="group">
                      <summary className="cursor-pointer list-none flex items-center justify-between">
                        {item.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 ml-1 transform transition-transform duration-200 group-open:rotate-180"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06-.02L10
                               10.168l3.71-3a.75.75 0 011.04 1.08l-4.5
                               4.25a.75.75 0 01-1.06 0l-4.5-4.25a.75.75 0
                               01-.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </summary>
                      <ul className="mt-2 ml-4 space-y-2 border-l border-gray-300 pl-2">
                        {item.links.map((link, lidx) => (
                          <li key={lidx}>
                            <Link
                              href={link.href}
                              className="hover:text-gray-900 transition-colors duration-200"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                )
              } else {
                return (
                  <div key={idx}>
                    <Link
                      href={item.href}
                      className="hover:text-gray-900 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </div>
                )
              }
            })}

            {/* Schedule a Meeting Button (Mobile) */}
            <div>
              <NavLink
                href="#"
                className="inline-flex items-center gap-x-1 text-white font-medium bg-red-500 hover:bg-red-600 active:bg-red-700 px-3 py-2 rounded-md transition-colors duration-200"
                data-cal-namespace="15min"
                data-cal-link="campuscredentials/15min"
                data-cal-config='{"layout":"month_view","theme":"light"}'
              >
                <i className="fa fa-calendar" aria-hidden="true" />
                Schedule a Meeting
                <button
                  data-cal-namespace="15min"
                  data-cal-link="campuscredentials/15min"
                  data-cal-config='{"layout":"month_view","theme":"light"}'
                  style={{ display: 'none' }}
                >
                  Hidden Button
                </button>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
