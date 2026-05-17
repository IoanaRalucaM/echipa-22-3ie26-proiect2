import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">✈️</span>
              <span className="font-heading text-xl font-bold text-white">Wanderlust</span>
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Un blog de travel despre aventuri, cultură și locuri de vis din întreaga lume.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-3">Pagini</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/destinations', label: 'Destinations' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 font-body text-sm text-gray-400">
              <li>📧 wanderlust@travel.ro</li>
              <li>📍 Timișoara, România</li>
              <li className="flex gap-3 mt-3">
                <a href="#" className="hover:text-primary-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary-400 transition-colors">Facebook</a>
                <a href="#" className="hover:text-primary-400 transition-colors">Pinterest</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-gray-500">
            © {new Date().getFullYear()} Wanderlust. Toate drepturile rezervate.
          </p>
          <p className="font-body text-xs text-gray-500">
            Realizat cu ❤️ de Echipa 22 — 3IE26
          </p>
        </div>
      </div>
    </footer>
  )
}