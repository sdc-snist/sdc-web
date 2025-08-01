import { useEffect } from 'react';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';

const TicketSuccess = () => {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('customer_name') || 'Guest';
    const email = queryParams.get('customer_email') || 'N/A';
    const orderId = queryParams.get('order_id') || 'N/A';

    const ticketId = `SDC-${orderId}`;

    QRCode.toDataURL(ticketId, function (err, qrDataUrl) {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('AI AGENT WORKSHOP TICKET', 20, 30);
      doc.setFontSize(12);
      doc.text(`Name: ${name}`, 20, 50);
      doc.text(`Email: ${email}`, 20, 60);
      doc.text(`Ticket ID: ${ticketId}`, 20, 70);
      doc.text(`Venue: Seminar Hall, SNIST`, 20, 90);
      doc.text(`Date: 10th Aug 2025 | Time: 10 AM – 1 PM`, 20, 100);
      doc.text('Show this ticket at the entrance.', 20, 120);
      doc.addImage(qrDataUrl, 'PNG', 20, 130, 50, 50);

      doc.save(`SDC_Ticket_${name}.pdf`);
    });
  }, []);

  return (
    <div className="text-center mt-20">
      <h2 className="text-xl font-bold">Thank you for registering!</h2>
      <p>Your ticket is downloading. Please check your downloads.</p>
    </div>
  );
};

export default TicketSuccess;
