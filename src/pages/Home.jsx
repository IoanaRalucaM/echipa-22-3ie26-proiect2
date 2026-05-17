import { Link } from 'react-router-dom'

const featuredDestinations = [
  {
    id: 1,
    title: 'Santorini, Grecia',
    description: 'Case albe, apus de soare și Marea Egee — un loc care îți taie respirația.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    tag: 'Europa',
    emoji: '🇬🇷',
  },
  {
    id: 2,
    title: 'Kyoto, Japonia',
    description: 'Temples, ceai matcha și păduri de bambus — tradiția japoneză în toată splendoarea ei.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    tag: 'Asia',
    emoji: '🇯🇵',
  },
  {
    id: 3,
    title: 'Marocco, Marrakech',
    description: 'Culori, mirodenii și labirinturi de pietre — Africa de Nord te cucerește pentru totdeauna.',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80',
    tag: 'Africa',
    emoji: '🇲🇦',
  },
]

const categories = [
  { label: 'Europa', emoji: '🏰', count: '12 destinații' },
  { label: 'Asia', emoji: '🌸', count: '8 destinații' },
  { label: 'America', emoji: '🗽', count: '6 destinații' },
  { label: 'Africa', emoji: '🦁', count: '5 destinații' },
]

export default function Home() {
  return (
    <div className="animate-fade-in">

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80"
          alt="Hero travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <span className="font-accent text-2xl md:text-3xl text-primary-300 block mb-3">
            Bine ai venit la
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Wanderlust
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Poveștile noastre de călătorie din cele mai frumoase colțuri ale lumii.
            Lasă-te inspirat și pornește la drum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destinations" className="btn-primary text-center">
              🗺️ Explorează destinații
            </Link>
            <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-center">
              Despre noi
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Categories strip */}
      <section className="bg-primary-500 dark:bg-primary-700">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.label}
              to="/destinations"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-all duration-200 group"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <div>
                <div className="font-heading text-white font-semibold text-sm">{cat.label}</div>
                <div className="font-body text-white/70 text-xs">{cat.count}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured destinations */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="section-title">Destinații recomandate</h2>
          <p className="section-subtitle">Locurile care ne-au schimbat perspectiva</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((dest, i) => (
            <article
              key={dest.id}
              className="card animate-slide-up group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-body font-bold px-3 py-1 rounded-full">
                  {dest.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {dest.emoji} {dest.title}
                </h3>
                <p className="font-body text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>
                <Link
                  to="/destinations"
                  className="font-body text-primary-500 font-semibold text-sm hover:text-primary-700 transition-colors"
                >
                  Citește mai mult →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/destinations" className="btn-primary inline-block">
            Vezi toate destinațiile
          </Link>
        </div>
      </section>

      {/* Quote banner */}
      <section className="bg-sand-100 dark:bg-gray-800 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <span className="font-accent text-5xl text-primary-400 block mb-4">"</span>
          <p className="font-heading text-2xl md:text-3xl text-gray-800 dark:text-white italic leading-relaxed">
            Lumea este o carte și cei care nu călătoresc citesc doar o pagină.
          </p>
          <span className="font-body text-gray-500 dark:text-gray-400 mt-4 block">— Sfântul Augustin</span>
        </div>
      </section>

    </div>
  )
}