
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function POST(req) {
  const body = await req.json();
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const { nom, prenom, employeur, poste, dateEmbauche, dateDemission, contrat, raison, aide } = body;

  const text = `Objet : Démission\n\n${prenom} ${nom}\nPoste : ${poste}\nEntreprise : ${employeur}\n\nMadame, Monsieur,\n\nJe vous informe de ma décision de quitter mon poste au sein de votre entreprise.\n\nConformément à mon contrat de travail (${contrat}), je respecterai un préavis courant jusqu’au ${dateDemission}.\n\nDate d’embauche : ${dateEmbauche}\n${raison ? '\nMotif : ' + raison : ''}\n\nVeuillez recevoir, Madame, Monsieur, l’assurance de ma considération distinguée.\n\n${aide ? 'Demande d’accompagnement complet par QuitterSansStress.' : ''}`;

  page.drawText(text, { x: 50, y: 700, size: 11, font, color: rgb(0, 0, 0) });

  const pdfBytes = await pdfDoc.save();
  return new Response(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=lettre-demission.pdf'
    }
  });
}
