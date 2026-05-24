import { useState } from 'react'

const STRAPI_URL = 'https://stunning-talent-67322a5e5f.strapiapp.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${STRAPI_URL}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: form }),
      })
      if (response.ok) {
        setSent(true)
      } else {
        setError('A apărut o eroare. Încearcă din nou.')
      }
    } catch (err) {
      setError('Nu ne putem conecta la server.')
    }
    setLoading(false)
  }

  return (
    <div className="animate-fade-in">
      <section className="relative h-56 md:h-64 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=1200&q=80"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <span className="font-accent text-2xl text-primary block mb-2">Hai să vorbim</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Contact</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Scrie-ne!</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ai o întrebare despre una din destinațiile noastre? Vrei să colaborăm?
              Suntem aici pentru tine!
            </p>
            <div className="space-y-5">
              {[
                { icon: '📧', label: 'Email', value: 'wanderlust@travel.ro' },
                { icon: '📍', label: 'Locație', value: 'Timișoara, România' },
                { icon: '🕐', label: 'Program răspuns', value: 'Lun–Vin, 9:00–18:00' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{item.label}</div>
                    <div className="text-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="text-6xl mb-4">✉️</div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Mesaj trimis!</h3>
                <p className="text-muted-foreground mb-6">Îți mulțumim! Te vom contacta în cel mai scurt timp.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }} className="btn-outline">
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">Trimite-ne un mesaj</h3>
                {error && <p className="text-destructive text-sm">{error}</p>}
                {[
                  { name: 'name', label: 'Numele tău', type: 'text', placeholder: 'Ana Ionescu' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'ana@email.ro' },
                  { name: 'subject', label: 'Subiect', type: 'text', placeholder: 'Vreau să știu mai mult despre Bali...' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="text-sm font-semibold text-muted-foreground block mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-semibold text-muted-foreground block mb-1.5">Mesajul tău</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Scrie-ne orice..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
                  {loading ? 'Se trimite...' : '✈️ Trimite mesajul'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}