import { useState, useEffect } from 'react'
const STRAPI_URL = 'https://stunning-talent-67322a5e5f.strapiapp.com'
const tags = ['Toate', 'Europa', 'Asia', 'America', 'Africa']

export default function Destinations() {
  const [destinations, setDestinations] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState('Toate')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/destinations`)
      .then(res => res.json())
      .then(data => {
        setDestinations(data.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const filtered = destinations.filter(d => {
    const matchTag = activeTag === 'Toate' || d.tag === activeTag
    const matchSearch = d.title.toLowerCase().includes(search.toLowerCase())
    return matchTag && matchSearch
  })

  return (
    <div className="animate-fade-in">
      <section className="relative h-56 md:h-72 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80"
          alt="Destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <span className="font-accent text-2xl text-primary block mb-2">Lumea ne așteaptă</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Destinații</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center">
          <div className="relative flex-grow max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
            <input
              type="text"
              placeholder="Caută o destinație..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTag === tag
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-primary/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4 animate-bounce">✈️</div>
            <p className="text-muted-foreground">Se încarcă destinațiile...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl block mb-4">🔭</span>
            <p className="text-muted-foreground">Nicio destinație găsită.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(dest => (
              <article key={dest.id} className="card group">
                <div className="relative overflow-hidden h-48 bg-muted flex items-center justify-center">
                  <span className="text-6xl">{dest.emoji}</span>
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {dest.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                    {dest.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

