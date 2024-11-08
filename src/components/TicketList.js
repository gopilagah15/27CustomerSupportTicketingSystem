// TicketList.js
import React from 'react';

const TicketList = ({ tickets, updateTicketStatus }) => {
  return (
    <div>
      <h2>Support Tickets</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            <strong>Issue:</strong> {ticket.issue}
            <br />
            <strong>Details:</strong> {ticket.details}
            <br />
            <strong>Status:</strong> {ticket.status}
            <br />
            <button onClick={() => updateTicketStatus(index, 'In Progress')}>
              Mark as In Progress
            </button>
            <button onClick={() => updateTicketStatus(index, 'Resolved')}>
              Mark as Resolved
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
