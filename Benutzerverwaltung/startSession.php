<?php

/**
 * Initialisiert eine neue Session
 * @param int $userID
 * @return bool
 */
function startSession($UserID): bool
{
    try {
        session_start();
        $_SESSION['UserID'] = $UserID;
        $_SESSION['timestamp'] = time();
        return true;
    } catch (ErrorException $e) {
        return false;
    }
}