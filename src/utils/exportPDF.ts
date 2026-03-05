import jsPDF from "jspdf";
import { slides } from "@/data/slideRegistry";
import { speakerNotes } from "@/data/presentationData";

export const exportPDF = async () => {
  const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const pageW = 297;
  const pageH = 210;

  slides.forEach((slide, i) => {
    if (i > 0) pdf.addPage();

    // Slide title
    pdf.setFillColor(20, 24, 33);
    pdf.rect(0, 0, pageW, pageH, "F");

    pdf.setTextColor(59, 179, 208);
    pdf.setFontSize(10);
    pdf.text(`${String(i + 1).padStart(2, "0")} — ${slide.section}`, 15, 15);

    pdf.setTextColor(230, 235, 245);
    pdf.setFontSize(24);
    pdf.text(slide.title, 15, 30);

    // Speaker notes
    const notes = speakerNotes[slide.id];
    if (notes) {
      pdf.setDrawColor(59, 179, 208);
      pdf.line(15, 45, pageW - 15, 45);

      pdf.setTextColor(180, 185, 195);
      pdf.setFontSize(9);
      pdf.text("NOTAS DO ORADOR:", 15, 55);

      pdf.setFontSize(11);
      pdf.setTextColor(210, 215, 225);
      const lines = pdf.splitTextToSize(notes, pageW - 30);
      pdf.text(lines, 15, 65);
    }

    // Footer
    pdf.setTextColor(100, 110, 130);
    pdf.setFontSize(8);
    pdf.text(`Cloud Migration — Slide ${i + 1}/${slides.length}`, pageW / 2, pageH - 8, { align: "center" });
  });

  pdf.save("cloud-migration-presentation.pdf");
};
