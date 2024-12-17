import React, { useEffect, useState } from 'react';

function EventDetails() {
    const [eventId, setEventId] = useState(null);

    useEffect(() => {
        const storedState = sessionStorage.getItem('eventState');
        if (storedState) {
            const { LG_EVEID } = JSON.parse(storedState);
            setEventId(LG_EVEID);
            // Faites quelque chose avec l'eventId
            sessionStorage.removeItem('eventState'); // Optionnel: Supprimer l'état une fois utilisé
        }
    }, []);

    return (
        <div>
            <h1>Event Details</h1>
            <p>ID de l'événement : {eventId}</p>
            {/* Afficher plus de détails sur l'événement */}
        </div>
    );
}

export default EventDetails;
