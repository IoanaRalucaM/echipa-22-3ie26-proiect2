import { useState, useEffect } from 'react'

const STRAPI_URL = 'https://stunning-talent-67322a5e5f.strapiapp.com'

export default function About() {
  const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/about`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAbout(data.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])
  return (
    <div className="animate-fade-in">
      <section className="relative h-64 md:h-80 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
          alt="About travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <span className="font-accent text-2xl text-primary block mb-2">Povestea noastră</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Despre Wanderlust</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4 animate-bounce">✈️</div>
            <p className="text-muted-foreground">Se încarcă...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="section-title">
                  {about?.title || 'Cine suntem noi?'}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {typeof about?.description === 'string' ? about.description : 'Suntem o echipă de 4 studente pasionate de călătorii, cultură și aventură.'}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {typeof about?.mission === 'string' ? about.mission : 'Misiunea noastră este să inspirăm oamenii să exploreze lumea.'}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80"
                  alt="Team travel"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

            <div className="mb-16">
              <h2 className="section-title text-center">Echipa noastră</h2>
              <p className="section-subtitle text-center">Cele 4 aventuriere din spatele blogului</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Raluca', role: 'Web Developer & Travel Writer', emoji: '💻' },
                  { name: 'Sefora', role: 'Designer & Photographer', emoji: '📸' },
                  { name: 'Timeea', role: 'Content Creator', emoji: '✍️' },
                  { name: 'Brianna', role: 'Social Media & SEO', emoji: '📱' },
                ].map(member => (
                  <div key={member.name} className="bg-muted rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
                    <div className="text-4xl mb-3">{member.emoji}</div>
                    <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                    <p className="text-muted-foreground text-xs mt-1 leading-snug">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="section-title text-center">Valorile noastre</h2>
              <p className="section-subtitle text-center">Ce ne ghidează în fiecare aventură</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: '🌍', title: 'Respect cultural', desc: 'Fiecare cultură merită să fie înțeleasă și apreciată, nu doar fotografiată.' },
                  { icon: '♻️', title: 'Travel responsabil', desc: 'Călătorim în mod sustenabil, cu grijă față de mediu și comunitățile locale.' },
                  { icon: '💫', title: 'Autenticitate', desc: 'Povestim experiențe reale, cu bune și cu rele, fără filtre sau exagerări.' },
                ].map(val => (
                  <div key={val.title} className="card p-6 text-center">
                    <div className="text-4xl mb-3">{val.icon}</div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{val.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  )
}
