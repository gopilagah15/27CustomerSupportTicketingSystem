// App.js
import React, { useState } from 'react'; 
import TicketSubmission from './components/TicketSubmission';
import TicketList from './components/TicketList';
import TicketAnalysis from './components/TicketAnalysis';

const App = () => {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  const updateTicketStatus = (index, status) => {
    const updatedTickets = tickets.map((ticket, i) =>
      i === index ? { ...ticket, status } : ticket
    );
    setTickets(updatedTickets);
  };

  return (
    <div>
      <h1>Customer Support Ticketing System</h1>
      <TicketSubmission addTicket={addTicket} />
      <TicketList tickets={tickets} updateTicketStatus={updateTicketStatus} />
      <TicketAnalysis tickets={tickets} />
    </div>
  );
};

export default App;
