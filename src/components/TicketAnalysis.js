// TicketAnalysis.js
import React from 'react';

const TicketAnalysis = ({ tickets }) => {
  const totalTickets = tickets.length;
  const openTickets = tickets.filter((ticket) => ticket.status === 'Open').length;
  const resolvedTickets = tickets.filter((ticket) => ticket.status === 'Resolved').length;

  return (
    <div>
      <h2>Monthly Ticket Analysis</h2>
      <p>Total Tickets: {totalTickets}</p>
      <p>Open Tickets: {openTickets}</p>
      <p>Resolved Tickets: {resolvedTickets}</p>
    </div>
  );
};

export default TicketAnalysis;
