import React, { useState } from 'react';

function SeatPlan() {
  // Données des groupes SVG
  const data = [
    { 
      seatId:"452366",
      seatdisponible:0,
      seatprice:15000,
      seatNumber:17,
      seatName:"F17",
      textTransform: { x: 37.564, y: 45.1557 },
      seatCategorie:"Standard",
      groupe:
      (<g>
        <path className="st0" d="M32.66,33.84l-4.88-4.54l-3.18,4c-0.44,0.55-0.67,1.23-0.67,1.93v18.71c0,0.97,0.45,1.88,1.22,2.46l2.73,2.09
          l4.78-4.57C32.66,53.92,32.66,33.84,32.66,33.84z"/>
        <path className="st0" d="M63.24,33.3l-3.11-3.86l-4.74,4.41v20.09L60,58.35l2.68-2.01c0.78-0.59,1.24-1.51,1.24-2.48V35.25
          C63.92,34.54,63.68,33.85,63.24,33.3z"/>
        <path className="st0" d="M55.38,53.93V33.84l4.74-4.41L56,24.32c-0.59-0.73-1.48-1.16-2.42-1.16H34.16c-0.95,0-1.84,0.43-2.43,1.17
          l-3.95,4.97l3.86,3.59c0.65,0.61,1.02,1.46,1.02,2.35v18.69l-0.08,0.08h22.89L55.38,53.93z"/>
        <path className="st0" d="M32.58,54.01l-4.7,4.5l3.95,3.02c0.54,0.41,1.2,0.64,1.88,0.64h20.17c0.67,0,1.32-0.22,1.86-0.62l4.26-3.2
          l-4.54-4.34H32.58z"/>
        <text transform={`matrix(1 0 0 1 ${37.564} ${45.1557})`} className="st1 st2 st3"></text>
      </g>)
    },
    { 
      seatId:"43121532",
      seatdisponible:1,
      seatNumber:44,
      seatName:"F23",
      textTransform: { x: 99.974, y: 45.1557 },
      seatprice:14000,
      seatCategorie:"VIP",
      groupe: (<g>
        <path className="st0" d="M95.07,33.84l-4.88-4.54l-3.18,4c-0.44,0.55-0.67,1.23-0.67,1.93v18.71c0,0.97,0.45,1.88,1.22,2.46l2.73,2.09
          l4.78-4.57C95.07,53.92,95.07,33.84,95.07,33.84z"/>
        <path className="st0" d="M125.65,33.3l-3.11-3.86l-4.74,4.41v20.09l4.61,4.41l2.68-2.01c0.78-0.59,1.24-1.51,1.24-2.48V35.25
          C126.33,34.54,126.09,33.85,125.65,33.3z"/>
        <path className="st0" d="M117.79,53.93V33.84l4.74-4.41l-4.12-5.11c-0.59-0.73-1.48-1.16-2.42-1.16H96.57c-0.95,0-1.84,0.43-2.43,1.17
          l-3.95,4.97l3.86,3.59c0.65,0.61,1.02,1.46,1.02,2.35v18.69l-0.08,0.08h22.89L117.79,53.93z"/>
        <path className="st0" d="M94.99,54.01l-4.7,4.5l3.95,3.02c0.54,0.41,1.2,0.64,1.88,0.64h20.17c0.67,0,1.32-0.22,1.86-0.62l4.26-3.2
          l-4.54-4.34H94.99z"/>
        <text transform={`matrix(1 0 0 1 ${99.974} ${45.1557})`} className="st1 st2 st3"></text>
        <circle className={`circle first-circle point state `} cx = "50%" cy = "50%" r = "5px"></circle>
                  <circle class = "pulse" cx = "50%" cy = "50%" r = "10px"></circle>
      </g>)
    }
  ];

  // Styles communs à tous les groupes SVG
  const commonStyles = `
    .st0 {
      fill: #191F3A;
      stroke: #ff9900;
      stroke-miterlimit: 10;
    }
    svg g:hover{
      cursor:pointer;
    }

    svg .active .st0{
      fill: #ff9900; /* Changez cette couleur pour la classe active */
      stroke: #fff;
      stroke-miterlimit: 1;
    }

    svg text {
      font-size: 10px;
      fill: #fff;
    }

    .custom-tooltip {
      font-size: 16px;
      background-color: #333;
      color: #fff;
      padding: 8px;
      border-radius: 4px;
      position: absolute;
      z-index: 999;
    }

    .seat-select-info p{
      font-size:9px;
    }
  `;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId, seatName, seatprice, seatdisponible,seatCategorie) => {

    if (seatdisponible === 0) {
      // Ne rien faire si la place n'est pas disponible
      return;
    }

    const index = selectedSeats.findIndex(seat => seat.seatId === seatId);
    if (index === -1) {
      const updatedSeats = [...selectedSeats, { seatId, seatName, seatprice, seatdisponible, seatCategorie }];
      setSelectedSeats(updatedSeats);
    } else {
      const updatedSeats = [...selectedSeats.slice(0, index), ...selectedSeats.slice(index + 1)];
      setSelectedSeats(updatedSeats);
    }
  };

  const totalAmount = selectedSeats.reduce((acc, seat) => acc + seat.seatprice, 0);

  // Tableau d'objets JSON des places sélectionnées
  const selectedSeatsJSON = selectedSeats.map(seat => ({
    seatId: seat.seatId,
    seatName: seat.seatName,
    seatprice: seat.seatprice,
    seatdisponible: seat.seatdisponible,
    seatCategorie : seat.seatCategorie
  }));

  console.log(selectedSeatsJSON);

  // Passer ce tableau en paramètre d'une API
  const sendDataToAPI = () => {
    // Envoyer les données à votre API
    console.log(selectedSeatsJSON);
  };

  return (
    <>

    <div class="proceed-book bg_img" data-background="assets/images/movie/movie-bg-proceed.jpg">
          <div class="proceed-to-book">
              <div class="book-item">
                  <span>You have Choosed Seat</span>
                  <ul className='d-flex'> 
                  <li><h3 class="title d-block">-&nbsp;</h3></li>
                    {selectedSeats.map(seat => (
                      <li key={seat.seatId}>
                        <div className='d-block seat-select-info aligns-items-center justify-content-center'>
                          <h3 class="title d-block  mb-0"> {seat.seatName} ,&nbsp;</h3>
                          <p class=""> {seat.seatCategorie}</p>
                        </div>
                        {/* Siège {seat.seatName} - Prix: {seat.seatprice} - Disponibilité: {seat.seatdisponible} */}
                      </li>
                      
                    ))}
                  </ul>
                  {/* <h3 class="title">d9, d10</h3> */}
              </div>
              <div class="book-item">
                  <span>total price</span>
                  <h3 class="title">{totalAmount} FCFA</h3>
              </div>
              <div class="book-item">
                  <button onClick={sendDataToAPI} class="custom-button">proceed</button>
              </div>
          </div>
    </div>
    <div className="cart">
        <h2>Mon Panier <span>{selectedSeats.length}</span> - <span>{totalAmount}</span></h2>

        <ul>
          {selectedSeats.map(seat => (
            <li key={seat.seatId}>
              Siège {seat.seatName} - Prix: {seat.seatprice} - Disponibilité: {seat.seatdisponible}
            </li>
          ))}
        </ul>
    </div>
    <svg viewBox="0 0 519.85 352.73">
      <style type="text/css">
           {commonStyles}
     </style>
      {data.map(({ seatId, groupe, seatNumber, textTransform, seatdisponible, seatprice, seatName,seatCategorie }, index) => (
        <g
          data-seatid={seatId}
          key={index + 1}
          onClick={() => handleSeatClick(seatId, seatName, seatprice, seatdisponible,seatCategorie)}
          data-seatname={seatName}
          data-seatprice={seatprice}
          data-seatdisponible={seatdisponible}
          data-seatcategorie ={seatCategorie}
          className={`circle first-circle point  ${selectedSeats.find(seat => seat.seatId === seatId) ? 'active' : '' } ${seatdisponible === 0 ? 'disabled' : ''}`}

        >
                
                  
               
               {/* <circle className={`circle first-circle point state `}  cx = {textTransform.x} cy = {textTransform.y} r = "5px"></circle>
               <circle class = "pulse" cx = {textTransform.x} cy = {textTransform.y} r = "10px"></circle> */}

          {groupe}
          {/* Remplacer la valeur du texte par seatNumber */}
          <text transform={`matrix(1 0 0 1 ${textTransform.x} ${textTransform.y})`} className="st1 st2 st3">{seatNumber}</text>
          {/* <title className="custom-tooltip">{`Siège: ${seatName}<br/>Prix: ${seatprice} FCFA<br/>Disponibilité: ${seatdisponible}`}</title> */}
          <title className='custom-tooltip'  >{`Siège: ${seatName}\nPrix: ${seatprice} FCFA\nDisponibilité: ${seatdisponible}`}</title>

        </g>
      ))}
      
    </svg>
    </>

  );
}

export default SeatPlan;
