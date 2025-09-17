<?php
include_once 'connect2ServerNoCheck.php';
include_once 'startSession.php';

// Debug nur für Entwicklung
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/**
 * Prüft, ob es den Nutzer mit $Nutzername gibt und ob das Passwort passt.
 */
function login($Nutzername, $pswd): bool
{
    if ($db = connect2ServerNoCheck()) {
        try {
            $sql = $db->prepare("SELECT NutzerID, PasswortHash FROM Nutzer WHERE Nutzername = ?");
            $sql->bind_param('s', $Nutzername);
            $sql->execute();
            $sql->bind_result($UserID, $pswdHash);

            if ($sql->fetch()) {
                if (password_verify($pswd, $pswdHash)) {
                    startSession($UserID);
                    echo '../Startseite/index.html';
                    return true;
                } else {
                    http_response_code(401); // Unauthorized
                    echo "Falsches Passwort";
                }
            } else {
                http_response_code(404); // Not Found
                echo "Nutzer nicht gefunden";
            }
            $sql->close();
        } catch (Throwable $e) {
            http_response_code(500);
            echo "DB-Fehler: " . $e->getMessage();
            return false;
        }
    }
    return false;
}

// JSON-Daten empfangen
$letter = json_decode(file_get_contents("php://input"));

if ($letter && isset($letter->nutzername, $letter->password)) {
    login($letter->nutzername, $letter->password);
} else {
    http_response_code(400);
    echo "Ungültige Daten";
}