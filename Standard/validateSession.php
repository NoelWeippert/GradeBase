<?php

/**
 * Funktion zur Validierung der aktuellen Session
 * @return bool
 */

function validateSession(): bool
{
    try {
        //Wenn Session weniger als 5min alt ist
        if (time() - $_SESSION['timestamp'] <= 300) {
            $_SESSION['timestamp'] = time();
            return true;
        } else {
            unsetSession();
            return false;
        }
    } catch (ErrorException $e) {
        if (!$e->getMessage() == 'Undefined array key "timestamp"') {
            return false;
        }
        unsetSession();
        return false;
    }
}

function unsetSession()
{
    session_unset();
    session_destroy();
    setcookie("PHPSESSID", "temp", time() - 3);
    header("HTTP/1.1 205", true, 205);
    echo 'ERROR';
}