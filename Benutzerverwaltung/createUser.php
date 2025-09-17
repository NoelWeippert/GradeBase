<?php
include_once 'connect2ServerNoCheck.php';

// Debug einschalten (kannst du später entfernen)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/**
 * Erstellt einen neuen Eintrag für Nutzer
 */
function createAccount($nutzername, $vorname, $nachname, $klassenname, $hash): bool
{
    if ($db = connect2ServerNoCheck()) {
        try {
            $sql = $db->prepare("INSERT INTO Nutzer (Nutzername, Vorname, Nachname, Klassenname, PasswortHash) VALUES (?, ?, ?, ?, ?)");
            $sql->bind_param('sssss', $nutzername, $vorname, $nachname, $klassenname, $hash);
            $sql->execute();
            $sql->close();
            return true;
        } catch (Throwable $e) {
            error_log("DB Error: " . $e->getMessage());
            return false;
        }
    }
    return false;
}

// JSON-Daten empfangen
$rawData = file_get_contents("php://input");
$data = json_decode($rawData);

if ($data && isset($data->nutzername, $data->vorname, $data->nachname, $data->klassenname, $data->hash)) {
    if (createAccount($data->nutzername, $data->vorname, $data->nachname, $data->klassenname, $data->hash)) {
        echo "OK";
    } else {
        http_response_code(500);
        echo "Fehler beim Anlegen";
    }
} else {
    http_response_code(400);
    echo "Ungültige Daten: " . $rawData;
}