<?php
include 'validateSession.php';

/**
 * Funktion zur Überprüfung der Serververbindung
 * @return bool|mysqli
 */

function connect2Server(): bool|mysqli
{
    if (validateSession()) {
        try {
            $key = 'KEY_EINFÜGEN';
            $ciphertext = 'B8Aa/JhRflfrmEoBQAuu3tu111RR5mMvnG1d8SqOJSlDeCDHEsq567tjCsbI/unYkFpTxZ86waCzuSX0UvoSZXe0H4RUy/gTsMQn/pQ5AubHt2p3QrS0zAGDG8lTY65q';
            $iv = '6191619161916191';

            $decrypted = openssl_decrypt($ciphertext, 'aes-256-cbc', $key, 0, $iv);
            $params = json_decode($decrypted, associative: true);

            $passwort = $params['mysql'][0];
            $benutzer = $params['mysql'][1];
            $host = $params['mysql'][2];
            $datenbank = $params['mysql'][3];

            $link = new mysqli($host, $benutzer, $passwort, $datenbank);

            if ($link->connect_error) {
                return false;
            } else {
                return $link;
            }
        } catch (Error | ErrorException | mysqli_sql_exception $e) {
            return false;
        }
    }
    return false;
}