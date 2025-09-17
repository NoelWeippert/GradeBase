<?php
include_once 'connect2ServerNoCheck.php';
include_once 'startSession.php';

session_start();

header('Content-Type: application/json; charset=utf-8');
ob_clean(); // alles vorher löschen


if (!isset($_SESSION['UserID'])) {
    http_response_code(401);
    echo json_encode(["error" => "Nicht eingeloggt"]);
    exit;
}

if ($db = connect2ServerNoCheck()) {
    $sql = $db->prepare("SELECT Vorname, Nachname, Klassenname FROM Nutzer WHERE NutzerID = ?");
    $sql->bind_param("i", $_SESSION['UserID']);
    $sql->execute();
    $sql->bind_result($vorname, $nachname, $klasse);

    if ($sql->fetch()) {
        echo json_encode([
            "name" => $vorname . " " . $nachname,
            "klasse" => $klasse
        ]);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "Nutzer nicht gefunden"]);
    }

    $sql->close();
} else {
    http_response_code(500);
    echo json_encode(["error" => "DB-Verbindung fehlgeschlagen"]);
}