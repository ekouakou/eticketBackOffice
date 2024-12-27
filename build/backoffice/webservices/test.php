<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

// Autoriser les méthodes HTTP spécifiées
header("Access-Control-Allow-Methods: POST");

// Autoriser certains en-têtes HTTP
header("Access-Control-Allow-Headers: Content-Type");


    // Vérifiez que l'identifiant de l'événement est fourni
    if (isset($_REQUEST['mode']) && isset($_REQUEST['mode']) === 'getEvenement') {  // Exemple d'ID d'événement pour les tests
        
        $event = [
            'STR_EVEBANNER' => 'https://via.placeholder.com/800x400', // URL d'image de bannière
            'STR_EVENAME' => 'Concert Live',
            'STR_EVEDESCRIPTION' => 'Un concert de musique live incroyable!',
            'DT_EVEBEGIN' => '2024-08-01',
            'HR_EVEBEGIN' => '20:00',
            'HR_EVEEND' => '23:00',
            'STR_EVEANNONCEUR' => 'John Doe'
        ];

        echo json_encode(['data' => [$event]]);
    } else {
        echo json_encode(['data' => []]);
    }
