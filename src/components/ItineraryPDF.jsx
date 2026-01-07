import React from "react";
import { jsPDF } from "jspdf";
import { useCart } from "../context/CartContext";

export default function ItineraryPDF() {
  const { cart } = useCart();

  const handleDownloadPDF = async () => {
    const pdf = new jsPDF("p", "pt", "a4"); // portrait, points, A4
    let y = 40; // start Y position
    const pageWidth = pdf.internal.pageSize.getWidth();

    // Title
    pdf.setFontSize(26);
    pdf.setFont(undefined, "bold");
    pdf.text("My Brussels Itinerary", pageWidth / 2, y, { align: "center" });
    y += 50;

    for (let i = 0; i < cart.length; i++) {
      const place = cart[i];
      const { name, description, gallery } = place.content;

      // Place title
      pdf.setFontSize(18);
      pdf.setFont(undefined, "bold");
      pdf.text(`${i + 1}. ${name}`, 40, y);
      y += 25;

      // Description
      pdf.setFontSize(12);
      pdf.setFont(undefined, "normal");
      const splitText = pdf.splitTextToSize(description, pageWidth - 80); // wrap text
      pdf.text(splitText, 40, y);
      y += splitText.length * 14 + 10;

      // Gallery as a row of images
      if (gallery && gallery.length > 0) {
        const imgMaxHeight = 80; // thumbnail height
        const spacing = 10;
        let x = 40;

        for (let imgUrl of gallery) {
          try {
            const img = await loadImage(imgUrl);
            const ratio = img.width / img.height;
            const width = imgMaxHeight * ratio;
            const height = imgMaxHeight;

            if (x + width > pageWidth - 40) {
              // move to next row
              x = 40;
              y += imgMaxHeight + spacing;
              if (y + imgMaxHeight > 800) {
                pdf.addPage();
                y = 40;
              }
            }

            pdf.addImage(img, "JPEG", x, y, width, height);
            x += width + spacing;
          } catch (err) {
            console.warn("Failed to load image for PDF:", imgUrl);
          }
        }

        y += imgMaxHeight + 20; // space after gallery
      }

      // Divider line
      pdf.setDrawColor(200); // light gray
      pdf.setLineWidth(0.5);
      pdf.line(40, y, pageWidth - 40, y);
      y += 30;

      // Page break if near bottom
      if (y > 750) {
        pdf.addPage();
        y = 40;
      }
    }

    pdf.save("itinerary.pdf");
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="bg-gold text-navy font-semibold px-6 py-3 rounded hover:bg-gold-dark transition"
    >
      Download Itinerary as PDF
    </button>
  );
}

// Helper to load image as HTMLImageElement
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // important for external images
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}
