'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function CarrieresPage() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', sector: '' })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      let cvUrl = ''

      if (file) {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Date.now()}_${Math.random()}.${fileExt}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('cv_files')
          .upload(fileName, file)

        if (uploadError) throw uploadError

        const { data: urlData } = supabase.storage
          .from('cv_files')
          .getPublicUrl(fileName)

        cvUrl = urlData.publicUrl
      }

      const { error: insertError } = await supabase.from('candidates').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          sector: formData.sector,
          cv_url: cvUrl
        }
      ])

      if (insertError) throw insertError

      setMessage('Candidature envoyée avec succès !')
      setFormData({ fullName: '', email: '', phone: '', sector: '' })
      setFile(null)
    } catch (err) {
      setMessage(`Erreur lors de l'envoi : ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ maxWidth: '650px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Rabbouni Business SARL - Carrières</h1>
      <p>Déposez votre candidature spontanée ou postulez à nos offres à Kinshasa.</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nom complet</label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Adresse Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Téléphone</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Secteur d'activité / Poste visé</label>
          <input
            type="text"
            required
            value={formData.sector}
            onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Curriculum Vitae (PDF ou Word, Max 10 Mo)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={(e) => setFile(e.target.files[0])}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px'
          }}
        >
          {loading ? 'Envoi en cours...' : 'Soumettre ma candidature'}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: '20px', fontWeight: 'bold', color: message.includes('succès') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </main>
  )
}
