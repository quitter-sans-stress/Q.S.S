
import PDFForm from '../components/PDFForm';

export default function DemissionPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📄 Générer votre lettre de démission</h1>
      <PDFForm />
    </div>
  );
}
