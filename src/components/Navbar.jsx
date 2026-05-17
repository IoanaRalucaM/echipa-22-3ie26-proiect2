import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-md'
          : 'bg-white dark:bg-gray-900'
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <span className="font-heading text-xl font-bold text-primary-600 dark:text-primary-400">
              Wanderlust
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body font-semibold text-sm uppercase tracking-wide transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-primary-500 border-b-2 border-primary-500 pb-0.5'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Dark mode + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-full bg-sand-100 dark:bg-gray-700 flex items-center justify-center text-lg hover:scale-110 transition-transform"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-sand-100 dark:bg-gray-700 flex flex-col items-center justify-center gap-1.5 hover:scale-110 transition-transform"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Offcanvas mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <div className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-20 flex flex-col gap-2">
            <span className="font-accent text-2xl text-primary-500 mb-4">Explorează</span>
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body font-semibold text-lg py-3 px-4 rounded-xl transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-sand-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  )
}