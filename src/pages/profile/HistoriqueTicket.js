import React, { useState } from 'react';
import TicketHistory from './TicketHistory';
import Header from '../components/Header';


const tickets = [
  { id: 1, title: 'Concert de Rock', date: '2023-05-01', price: 50, currency: 'FCFA', quantity: 2, image: 'assets/images/event01.jpg' },
  { id: 2, title: 'Festival de Jazz', date: '2023-06-15', price: 70, currency: 'FCFA', quantity: 1, image: 'assets/images/event02.jpg' },
  { id: 3, title: 'Match de Football', date: '2023-07-20', price: 100, currency: 'FCFA', quantity: 3, image: 'assets/images/event05.jpg' },
];

function HistoriqueTicket() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header /> 
      <div className={`mt-5 pt-5 content`}>
        <TicketHistory tickets={tickets} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default HistoriqueTicket;
