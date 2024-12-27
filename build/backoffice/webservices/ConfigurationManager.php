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
$OJson = array();
$search_value = "";
$LG_TYLID = "%";
$STR_LSTOTHERVALUE = "%";
$order = "";

$total = 0;
$start = 0;
$length = 25;

$ConfigurationManager = new ConfigurationManager();
$OneSignal = new OneSignal();

$mode = $_REQUEST['mode'];

if (isset($_REQUEST['start'])) {
    $start = $_REQUEST['start'];
}

if (isset($_REQUEST['length'])) {
    $length = $_REQUEST['length'];
}

if (isset($_REQUEST['search_value'])) {
    $search_value = $_REQUEST['search_value'];
}

if (isset($_REQUEST['search_value[value]'])) {
    $search_value = $_REQUEST['search_value[value]'];
}

if (isset($_REQUEST['query'])) {
    $search_value = $_REQUEST['query'];
}

if (isset($_REQUEST['LG_UTIID'])) {
    $LG_UTIID = $_REQUEST['LG_UTIID'];
}

if (isset($_REQUEST['STR_UTITOKEN'])) {
    $STR_UTITOKEN = $_REQUEST['STR_UTITOKEN'];
}

if (isset($_REQUEST['LG_TYLID'])) {
    $LG_TYLID = $_REQUEST['LG_TYLID'];
}

if (isset($_REQUEST['STR_LSTOTHERVALUE'])) {
    $STR_LSTOTHERVALUE = $_REQUEST['STR_LSTOTHERVALUE'];
}

if (isset($_REQUEST['order'])) {
    $order = $_REQUEST['order'];
}

$OUtilisateur = $ConfigurationManager->getUtilisateur($STR_UTITOKEN);

if ($mode == "listTypetransaction") {
    $listTypetransaction = $ConfigurationManager->showAllOrOneTypetransaction($search_value);

    foreach ($listTypetransaction as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["TTRID"] = $value['LG_TTRID'];
        $arrayJson_chidren["TTRDESCRIPTION"] = $value['STR_TTRDESCRIPTION'];
        $arrayJson[] = $arrayJson_chidren;
    }
} else if ($mode == "listProfile") {
    if (isset($_REQUEST['STR_PROTYPE'])) {
        $STR_PROTYPE = $_REQUEST['STR_PROTYPE'];
    }
    $listProfile = $ConfigurationManager->showAllOrOneProfile($search_value, ($STR_PROTYPE == Parameters::$type_system ? "%" : $STR_PROTYPE));

    foreach ($listProfile as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["PROID"] = $value['LG_PROID'];
        $arrayJson_chidren["PRONAME"] = $value['STR_PRONAME'];
        $arrayJson_chidren["PRODESCRIPTION"] = $value['STR_PRODESCRIPTION'];
        $arrayJson_chidren["PROTYPE"] = ($value['STR_PROTYPE'] == Parameters::$type_system ? "Système" : "Standard");
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listOperateur") {
    $listOperateur = $ConfigurationManager->showAllOrOneOperateur($search_value);

    foreach ($listOperateur as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["OPEID"] = $value['LG_OPEID'];
        $arrayJson_chidren["OPENAME"] = $value['STR_OPENAME'];
        $arrayJson_chidren["OPEDESCRIPTION"] = $value['STR_OPEDESCRIPTION'];
        $arrayJson_chidren["OPEPIC"] = Parameters::$rootFolderRelative . "logos/" . $value['STR_OPEPIC'];
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listSociete") {
    $listSociete = $ConfigurationManager->showAllOrOneSocieteLimit($search_value, $start, $length);
    $total = $ConfigurationManager->totalSociete($search_value);
    foreach ($listSociete as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["SOCID"] = $value['LG_SOCID'];
        $arrayJson_chidren["SOCNAME"] = $value['STR_SOCNAME'];
        $arrayJson_chidren["SOCDESCRIPTION"] = $value['STR_SOCDESCRIPTION'];
        $arrayJson_chidren["SOCLOGO"] = Parameters::$rootFolderRelative . "logos/" . $value['STR_SOCLOGO'];
        $arrayJson_chidren["SOCCREATED"] = $value['DT_SOCCREATED'];
        $arrayJson_chidren["SOCADDRESS"] = $value['STR_SOCADDRESS'];
        $arrayJson_chidren["SOCMAIL"] = $value['STR_SOCMAIL'];
        $arrayJson_chidren["SOCPHONE"] = $value['STR_SOCPHONE'];
        $arrayJson_chidren["SOCNOTIFICATION"] = ($value['BOOL_SOCNOTIFICATION'] == Parameters::$PROCESS_FAILED ? false : true);
        $arrayJson_chidren["SOCLASTABONNEMENT"] = ($value['DT_SOCLASTABONNEMENT'] != null ? DateToString($value['DT_SOCLASTABONNEMENT'], 'd/m/Y') : "");
        $arrayJson_chidren["str_ACTION"] = "<span class='text-warning' title='Mise à jour de la société " . $value['STR_SOCDESCRIPTION'] . "'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else if ($mode == "listSocieteUtilisateur") {
    $LG_SOCID = "%";
    if (isset($_REQUEST['LG_SOCID']) && $_REQUEST['LG_SOCID'] != "") {
        $LG_SOCID = $_REQUEST['LG_SOCID'];
    }

    $listSocieteUtilisateur = $ConfigurationManager->showAllOrOneSocieteUtilisateur($search_value, $LG_SOCID, $LG_UTIID);

    foreach ($listSocieteUtilisateur as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["SUTID"] = $value['LG_SUTID'];
        $arrayJson_chidren["SOCNAME"] = $value['STR_SOCNAME'];
        $arrayJson_chidren["SOCDESCRIPTION"] = $value['STR_SOCDESCRIPTION'];
        $arrayJson_chidren["UTIFIRSTLASTNAME"] = $value['STR_UTIFIRSTLASTNAME'];
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listSocieteOperateur") {
    $LG_OPEID = "%";
    if (isset($_REQUEST['LG_OPEID']) && $_REQUEST['LG_OPEID'] != "") {
        $LG_OPEID = $_REQUEST['LG_OPEID'];
    }

    if (isset($_REQUEST['LG_SOCID'])) {
        $LG_SOCID = $_REQUEST['LG_SOCID'];
    }

    $listSocieteOperateur = $ConfigurationManager->showAllOrOneSocieteOperateur($search_value, $LG_SOCID, $LG_OPEID);

    foreach ($listSocieteOperateur as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["SOPID"] = $value['LG_SOPID'];
        $arrayJson_chidren["SOPPHONE"] = $value['STR_SOPPHONE'];
        $arrayJson_chidren["OPENAME"] = $value['STR_OPENAME'];
        $arrayJson_chidren["OPEDESCRIPTION"] = $value['STR_OPEDESCRIPTION'];
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listListe") {
    $listListe = $ConfigurationManager->showAllOrOneListeLimit($search_value, $LG_TYLID, $STR_LSTOTHERVALUE, $order, $start, $length);
    $total = $ConfigurationManager->totalListe($search_value, $LG_TYLID, $STR_LSTOTHERVALUE);
    foreach ($listListe as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_LSTID"] = $value['lg_lstid'];
        $arrayJson_chidren["LG_TYLID"] = $value['str_tyldescription'];
        $arrayJson_chidren["STR_LSTDESCRIPTION"] = $value['str_lstdescription'];
        //$arrayJson_chidren["SOCLOGO"] = Parameters::$rootFolderRelative . "logos/" . $value['STR_SOCLOGO'];
        $arrayJson_chidren["STR_LSTDESCRIPTION_OTHER"] = strlen($value['str_lstdescription']) > 50 ? substr($value['str_lstdescription'], 0, 50) : $value['str_lstdescription'];
        $arrayJson_chidren["STR_LSTVALUE"] = $value['str_lstvalue'];
//        $arrayJson_chidren["STR_LSTVALUE_OTHER"] = $value['STR_LSTVALUE'];
        $arrayJson_chidren["STR_LSTOTHERVALUE"] = $value['str_lstothervalue'];
//        $arrayJson_chidren["STR_LSTOTHERVALUE_OTHER"] = $value['STR_LSTOTHERVALUE'];
        $arrayJson_chidren["STR_LSTOTHERVALUE1"] = $value['str_lstothervalue1'];
        $arrayJson_chidren["STR_LSTOTHERVALUE2"] = $value['str_lstothervalue2'];
        $arrayJson_chidren["STR_LSTOTHERVALUE3"] = $value['str_lstothervalue3'];
//        $arrayJson_chidren["STR_LSTOTHERVALUE2_OTHER"] = $value['STR_LSTOTHERVALUE2'];
        $arrayJson_chidren["str_ACTION"] = "<span class='text-warning' title='Mise à jour de " . $value['str_lstdescription'] . "'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else {
    if (isset($_REQUEST['LG_TTRID'])) {
        $LG_TTRID = $_REQUEST['LG_TTRID'];
    }

    if (isset($_REQUEST['LG_OPEID'])) {
        $LG_OPEID = $_REQUEST['LG_OPEID'];
    }

    if (isset($_REQUEST['LG_SOCID'])) {
        $LG_SOCID = $_REQUEST['LG_SOCID'];
    }

    if (isset($_REQUEST['STR_SOCNAME'])) {
        $STR_SOCNAME = $_REQUEST['STR_SOCNAME'];
    }

    if (isset($_REQUEST['STR_SOCDESCRIPTION'])) {
        $STR_SOCDESCRIPTION = $_REQUEST['STR_SOCDESCRIPTION'];
    }

    if (isset($_REQUEST['STR_SOCADDRESS'])) {
        $STR_SOCADDRESS = $_REQUEST['STR_SOCADDRESS'];
    }

    if (isset($_REQUEST['STR_SOCMAIL'])) {
        $STR_SOCMAIL = $_REQUEST['STR_SOCMAIL'];
    }

    if (isset($_REQUEST['STR_SOCPHONE'])) {
        $STR_SOCPHONE = $_REQUEST['STR_SOCPHONE'];
    }

    if (isset($_REQUEST['BOOL_SOCNOTIFICATION'])) {
        $BOOL_SOCNOTIFICATION = $_REQUEST['BOOL_SOCNOTIFICATION'];
    }

    if (isset($_REQUEST['STR_SOPPHONE'])) {
        $STR_SOPPHONE = $_REQUEST['STR_SOPPHONE'];
    }

    if (isset($_REQUEST['LG_SOPID'])) {
        $LG_SOPID = $_REQUEST['LG_SOPID'];
    }

    if (isset($_REQUEST['STR_SOPSTATUT'])) {
        $STR_SOPSTATUT = $_REQUEST['STR_SOPSTATUT'];
    }

    if (isset($_REQUEST['LG_PROID'])) {
        $LG_PROID = $_REQUEST['LG_PROID'];
    }

    if (isset($_REQUEST['LG_SUTID'])) {
        $LG_SUTID = $_REQUEST['LG_SUTID'];
    }

    if ($mode == "getTypetransaction") {
        $value = $ConfigurationManager->getTypetransaction($LG_TTRID);
        if ($value != null) {
            $arrayJson["TTRNAME"] = $value[0]['STR_TTRNAME'];
            $arrayJson["TTRDESCRIPTION"] = $value[0]['STR_TTRDESCRIPTION'];
        }
    } else if ($mode == "getOperateur") {
        $value = $ConfigurationManager->getOperateur($LG_OPEID);
        if ($value != null) {
            $arrayJson["OPENAME"] = $value[0]['STR_OPENAME'];
            $arrayJson["OPEDESCRIPTION"] = $value[0]['STR_OPEDESCRIPTION'];
            $arrayJson["OPEPIC"] = Parameters::$rootFolderRelative . "logos/" . $value[0]['STR_OPEPIC'];
        }
    } else if ($mode == "getSociete") {
        $value = $ConfigurationManager->getSociete($LG_SOCID);
        if ($value != null) {
            $arrayJson["SOCNAME"] = $value[0]['STR_SOCNAME'];
            $arrayJson["SOCDESCRIPTION"] = $value[0]['STR_SOCDESCRIPTION'];
            $arrayJson["SOCLOGO"] = Parameters::$rootFolderRelative . "logos/" . $value[0]['STR_SOCLOGO'];
            $arrayJson["SOCCREATED"] = $value[0]['DT_SOCCREATED'];
            $arrayJson["SOCADDRESS"] = $value[0]['STR_SOCADDRESS'];
            $arrayJson["SOCMAIL"] = $value[0]['STR_SOCMAIL'];
            $arrayJson["SOCPHONE"] = $value[0]['STR_SOCPHONE'];
            $arrayJson["SOCNOTIFICATION"] = ($value[0]['BOOL_SOCNOTIFICATION'] == Parameters::$PROCESS_FAILED ? false : true);
            $arrayJson["SOCLASTABONNEMENT"] = ($value[0]['DT_SOCLASTABONNEMENT'] != null ? DateToString($value[0]['DT_SOCLASTABONNEMENT'], 'd/m/Y') : "");
        }
    } else if ($mode == "getProfile") {
        $value = $ConfigurationManager->getProfile($LG_PROID);
        if ($value != null) {
            $arrayJson["PRONAME"] = $value[0]['STR_PRONAME'];
            $arrayJson["PRODESCRIPTION"] = $value[0]['STR_PRODESCRIPTION'];
            $arrayJson["PROTYPE"] = ($value[0]['STR_PROTYPE'] == Parameters::$type_system ? "Système" : "Standard");
        }
    } else if ($mode == "getSocieteOperateur") {
        $value = $ConfigurationManager->getSocieteOperateurUnique($LG_SOPID);
        if ($value != null) {
            $arrayJson["SOPPHONE"] = $value[0]['STR_SOPPHONE'];
        }
    } else if ($mode == "createSociete") {
        $STR_SOCLOGO = Parameters::uploadFile(Parameters::$rootFolderRelative . "logos/");
        $ConfigurationManager->createSociete($STR_SOCNAME, $STR_SOCDESCRIPTION, $STR_SOCLOGO, $STR_SOCADDRESS, $STR_SOCMAIL, $STR_SOCPHONE, $BOOL_SOCNOTIFICATION, $OUtilisateur);
    } else if ($mode == "updateSociete") {
        $STR_SOCLOGO = Parameters::uploadFile(Parameters::$rootFolderRelative . "logos/");
        $ConfigurationManager->updateSociete($LG_SOCID, $STR_SOCNAME, $STR_SOCDESCRIPTION, $STR_SOCLOGO, $STR_SOCADDRESS, $STR_SOCMAIL, $STR_SOCPHONE, $BOOL_SOCNOTIFICATION, $OUtilisateur);
    } else if ($mode == "deleteSociete") {
        $ConfigurationManager->deleteSociete($LG_SOCID, $OUtilisateur);
    } else if ($mode == "createSocieteOperateur") {
        $ConfigurationManager->createSocieteOperateur($LG_SOCID, $LG_OPEID, $STR_SOPPHONE, $OUtilisateur);
    } else if ($mode == "updateSocieteOperateur") {
        $ConfigurationManager->updateSocieteOperateur($LG_SOPID, $STR_SOPPHONE, $OUtilisateur);
    } else if ($mode == "deleteSocieteOperateur") {
        $ConfigurationManager->deleteSocieteOperateur($LG_SOPID, $STR_SOPSTATUT, $OUtilisateur);
    } else if ($mode == "createSocieteUtilisateur") {
        $ConfigurationManager->createSocieteUtilisateur($LG_SOCID, $LG_UTIID, $OUtilisateur);
    } else if ($mode == "deleteSocieteUtilisateur") {
        $ConfigurationManager->deleteSocieteUtilisateur($LG_SUTID, $OUtilisateur);
    }

    $arrayJson["code_statut"] = Parameters::$Message;
    $arrayJson["desc_statut"] = Parameters::$Detailmessage;
}

echo json_encode($arrayJson);


