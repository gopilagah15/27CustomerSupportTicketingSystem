// TicketSubmission.js
import React, { useState } from 'react';

const TicketSubmission = ({ addTicket }) => {
  const [issue, setIssue] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTicket({ issue, details, status: 'Open', createdAt: new Date() });
    alert('Ticket Submitted Successfully!');
    setIssue('');
    setDetails('');
  };

  return (
    <div>
      <h2>Submit a Support Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={issue}
          placeholder="Issue"
          onChange={(e) => setIssue(e.target.value)}
          required
        />
        <textarea
          value={details}
          placeholder="Describe your issue"
          onChange={(e) => setDetails(e.target.value)}
          required
        />
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
};

export default TicketSubmission;
