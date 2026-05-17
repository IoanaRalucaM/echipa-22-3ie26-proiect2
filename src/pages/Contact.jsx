import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
  }

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="relative h-56 md:h-64 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=1200&q=80"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <span className="font-accent text-2xl text-primary-300 block mb-2">Hai să vorbim</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Contact</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Info */}
          <div>
            <h2 className="section-title">Scrie-ne!</h2>
            <p className="font-body text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Ai o întrebare despre una din destinațiile noastre? Vrei să colaborăm?
              Sau pur și simplu vrei să împărtășești și tu o poveste de călătorie?
              Suntem aici pentru tine!
            </p>

            <div className="space-y-5">
              {[
                { icon: '📧', label: 'Email', value: 'wanderlust@travel.ro' },
                { icon: '📍', label: 'Locație', value: 'Timișoara, România' },
                { icon: '🕐', label: 'Program răspuns', value: 'Lun–Vin, 9:00–18:00' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wide">{item.label}</div>
                    <div className="font-body text-gray-700 dark:text-gray-200">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-sand-100 dark:bg-gray-800 rounded-2xl">
              <p className="font-accent text-xl text-primary-500 mb-1">Urmărește-ne</p>
              <div className="flex gap-4 mt-2">
                {['📸 Instagram', '📘 Facebook', '📌 Pinterest'].map(s => (
                  <a key={s} href="#" className="font-body text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="text-6xl mb-4">✉️</div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Mesaj trimis!
                </h3>
                <p className="font-body text-gray-500 dark:text-gray-400 mb-6">
                  Îți mulțumim! Te vom contacta în cel mai scurt timp.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="btn-outline"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-xl font-bold text-gray-800 dark:text-white mb-6">
                  Trimite-ne un mesaj
                </h3>

                {[
                  { name: 'name', label: 'Numele tău', type: 'text', placeholder: 'Ana Ionescu' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'ana@email.ro' },
                  { name: 'subject', label: 'Subiect', type: 'text', placeholder: 'Vreau să știu mai mult despre Bali...' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="font-body text-sm font-semibold text-gray-600 dark:text-gray-300 block mb-1.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-sand-50 dark:bg-gray-900 font-body text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-body text-sm font-semibold text-gray-600 dark:text-gray-300 block mb-1.5">
                    Mesajul tău
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Scrie-ne orice..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-sand-50 dark:bg-gray-900 font-body text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      Se trimite...
                    </>
                  ) : (
                    '✈️ Trimite mesajul'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}