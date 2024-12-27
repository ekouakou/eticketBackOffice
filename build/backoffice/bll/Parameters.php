<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Parameters
 *
 * @author NGBEADEGO Martial
 */
class Parameters {

//    public static $host = "151.80.234.255"; //online db parameters
    public static $host = "localhost"; //online db parameters
    public static $user = "clinic_db";
    public static $pass = "nkmclinic";
    public static $port = "8889";
    public static $onesignal_appid = "0d39b660-bd77-4762-8a4c-4fa258cb827c";
    public static $onesignal_rest_apikey = "OGJhZDU1ZDgtYTk5Mi00MmI5LWE3MjItY2Q1MmMzNGYxOGQ5";

    /* public static $host = "marco.local"; //local db parameters
      public static $user = "root";
      public static $pass = "admin"; */
    public static $db = "eticket_db";
    public static $statut_process = "process";
    public static $statut_enable = "enable";
    public static $statut_closed = "closed";
    public static $statut_delete = "delete";
    public static $Message = "0";
    public static $Detailmessage = "Aucune opération en cours";
    public static $type_activite = "activite";
    public static $type_publication = "publication";
    public static $default_picture = "default.png";
    public static $file_log = "../reports/import/images/publications/mylog.log";
//    public static $rootFolderPictureUser = "http://vps694144.ovh.net/amermoz/reports/import/images/users/";
    // public static $rootFolderRelative = "images/product/";
    public static $rootFolderRelative = "assets/media/eventpicture/";
    public static $rootFolderPictureUser = "http://localhost/cashtracking/images/avatar/";
    public static $rootFolderPicturePublication = "http://vps694144.ovh.net/amermoz/reports/import/images/publications/";
    public static $urlOnesignal = "https://onesignal.com/api/v1/notifications";
    public static $type_customer = "customer";
    public static $P_ALERT_SOUSCRIPTION = "P_ALERT_SOUSCRIPTION";
    public static $PROCESS_FAILED = "0";
    public static $PROCESS_SUCCESS = "1";
    public static $type_system = "system";
    // public static $path_import = "/Applications/MAMP/htdocs/eticketbackend/images/product/";
    public static $path_import = "/Applications/MAMP/htdocs/guineeticketbackend/public/assets/media/eventpicture/";

    public static $typelisteValue = array("ACTIVITE", "CATEGORIE", "EVENTPLACE");
    public static $typelisteKey = array("4", "5", "7");
    public static $currencyDev = "OUV";
    public static $currencyProd = "GNF";
    
    //API Orange Money
    public static $urlOrangemoneyToken = "https://api.orange.com/oauth/v3/token";
    public static $urlOrangemoneyPayment = "https://api.orange.com/orange-money-webpay/dev/v1/webpayment";
    public static $authentificationBasic = "cWNBYmhlNDNzOHdPVHdETXV3THE4QkczM2cyd2VtcEk6UW5meWExSmJYTXN6WXlpcQ==";
    public static $merchantKey = "9e57bf53";
    public static $urlResponseOrangemoney = "http://vps-0a57406f.vps.ovh.net/eticketbackend/backoffice/webservices/PaymentManager.php";
    

    public static function buildErrorMessage($description) {
        Parameters::$Message = "0";
        Parameters::$Detailmessage = $description;
    }

    public static function buildSuccessMessage($description) {
        Parameters::$Message = "1";
        Parameters::$Detailmessage = $description;
    }

    //transforme une chaine en date
    public static function StringToDate($format, $datestring) {
        return date($format, strtotime($datestring));
    }

    public static function StringToDateNew($format, $datestring) {
        $date = DateTime::createFromFormat('d/m/Y', $datestring);
        return $date->format("Y-m-d");
    }

    public static function RevertStringToDateNew($datestring) {
        $date = DateTime::createFromFormat('Y-m-d', $datestring);
        return $date->format("d/m/Y");
    }

    public static function uploadFile($rootPath, $filename = null) {
        $pic = "";
        try {
            // a decommenter en cas de probleme
            if ($_FILES["file"]["size"] > 1000000) { //gère uniquement les fichiers de 1Mo
                Parameters::buildErrorMessage("Echec de chargement de la photo. Vérifiez la taille du fichier");
                return $pic;
            }
            $filename = ($filename != null ? $filename : "") . time() . '-' . $_FILES['file']['name'];
            //            $targetFile = $rootPath . pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION) . "/" . $filename;
            $targetFile = $rootPath . "/" . $filename;
            if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
                $pic = $filename;
            }

            /* $img = $_POST['file'];
              $img = str_replace('data:image/png;base64,', '', $img);
              $img = str_replace(' ', '+', $img);
              $data = base64_decode($img);
              $file = $rootPath . "/" . uniqid() . '.png';
              $pic = file_put_contents($file, $data);
              $path_parts = pathinfo($file);
              $pic = $path_parts['basename']; */
        } catch (Exception $ex) {
            $ex->getMessage();
        }
        return $pic;
    }

    public static function writeLog($filename, $data, $mode) {
        file_put_contents($filename, $data, $mode);
    }

}