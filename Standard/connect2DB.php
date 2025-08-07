<?php
$host_name = 'db5018359339.hosting-data.io';
$database = 'dbs14534822';
$user_name = 'dbu1005693';
$password = '<Geben Sie hier Ihr Passwort ein.>';

$link = new mysqli($host_name, $user_name, $password, $database);

if ($link->connect_error) {
    die('<p>Verbindung zum MySQL Server fehlgeschlagen: ' . $link->connect_error . '</p>');
} else {
    echo '<p>Verbindung zum MySQL Server erfolgreich aufgebaut.</p>';
}
?>