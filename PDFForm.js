
import { useState } from 'react';

export default function PDFForm() {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', employeur: '', poste: '',
    dateEmbauche: '', dateDemission: '', contrat: 'CDI',
    raison: '', aide: false
  });
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const blob = await res.blob();
    setPdfUrl(URL.createObjectURL(blob));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="prenom" placeholder="Prénom" onChange={handleChange} required className="input" />
      <input name="nom" placeholder="Nom" onChange={handleChange} required className="input" />
      <input name="poste" placeholder="Poste occupé" onChange={handleChange} className="input" />
      <input name="employeur" placeholder="Nom de l'employeur" onChange={handleChange} required className="input" />
      <input type="date" name="dateEmbauche" onChange={handleChange} required className="input" />
      <input type="date" name="dateDemission" onChange={handleChange} required className="input" />
      <select name="contrat" onChange={handleChange} className="input">
        <option value="CDI">CDI</option>
        <option value="CDD">CDD</option>
        <option value="Autre">Autre</option>
      </select>
      <textarea name="raison" placeholder="Raison (facultatif)" onChange={handleChange} className="input" />
      <label className="block">
        <input type="checkbox" name="aide" onChange={handleChange} /> Je souhaite que QuitterSansStress gère tout à ma place
      </label>
      <button type="submit" className="btn">Générer le PDF</button>
      {pdfUrl && <a href={pdfUrl} download="lettre-demission.pdf" className="btn mt-2">📥 Télécharger</a>}
    </form>
  );
}
