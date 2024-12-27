<?php

/**
 * Created by PhpStorm.
 * User: chaar
 * Date: 14/08/2018
 * Time: 11:31
 */
require '../services/scripts/php/core_transaction.php';
include '../services/scripts/php/lib.php';


// Permettre l'accès depuis n'importe quelle origine (CORS)
header("Access-Control-Allow-Origin: *");

// Autoriser les méthodes HTTP spécifiées
header("Access-Control-Allow-Methods: POST");

// Autoriser certains en-têtes HTTP
header("Access-Control-Allow-Headers: Content-Type");

$arrayJson = array();

$ConfigurationManager = new ConfigurationManager();
$OneSignal = new OneSignal();

$mode = $_REQUEST['mode'];


if (isset($_REQUEST['STR_UTILOGIN'])) {
    $STR_UTILOGIN = $_REQUEST['STR_UTILOGIN'];
}

if (isset($_REQUEST['STR_UTIPASSWORD'])) {
    $STR_UTIPASSWORD = $_REQUEST['STR_UTIPASSWORD'];
}

if (isset($_REQUEST['STR_UTILOGIN'])) {
    $STR_UTILOGIN = $_REQUEST['STR_UTILOGIN'];
}

if (isset($_REQUEST['STR_SOCCODE'])) {
    $STR_SOCCODE = $_REQUEST['STR_SOCCODE'];
}

if ($mode == "doConnexion") {
//    $value = $ConfigurationManager->doConnexion($STR_UTILOGIN, $STR_UTIPASSWORD, $STR_SOCCODE); //a decommenter en cas de probleme
    $value = $ConfigurationManager->doConnexion($STR_UTILOGIN, $STR_UTIPASSWORD);
    if ($value != null) {
        //$arrayJson["UTIID"] = $value[0]['LG_UTIID'];
        $arrayJson["UTIFIRSTLASTNAME"] = $value[0]['STR_UTIFIRSTLASTNAME'];
        $arrayJson["UTIPHONE"] = $value[0]['STR_UTIPHONE'];
        $arrayJson["UTIMAIL"] = $value[0]['STR_UTIMAIL'];
        $arrayJson["UTILOGIN"] = $value[0]['STR_UTILOGIN'];
//        $arrayJson["UTIPIC"] = Parameters::$rootFolderPictureUser . $value[0]['STR_UTIPIC'];
        $arrayJson["UTIPIC"] = $value[0]['STR_UTIPIC'];
        $arrayJson["UTITOKEN"] = $value[0]['STR_UTITOKEN'];
        $arrayJson["PRODESCRIPTION"] = $value[0]['STR_PRODESCRIPTION'];
        $arrayJson["PROID"] = $value[0]['LG_PROID'];
        $arrayJson["PROTYPE"] = $value[0]['STR_PROTYPE'];
        $arrayJson["SOCNAME"] = $value[0]['STR_SOCNAME'];
        $arrayJson["SOCDESCRIPTION"] = $value[0]['STR_SOCDESCRIPTION'];
        $arrayJson["SOCLOGO"] = $value[0]['STR_SOCLOGO'];
        $arrayJson["SOCID"] = $value[0]['LG_SOCID'];
    }
} else if ($mode == "doDisConnexion") {
    $ConfigurationManager->doDisConnexion($STR_UTITOKEN);
}
$arrayJson["code_statut"] = Parameters::$Message;
$arrayJson["desc_statut"] = Parameters::$Detailmessage;

echo json_encode($arrayJson);


