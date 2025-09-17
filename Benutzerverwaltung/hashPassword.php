<?php

/**
 * erstellt einen hash für $pswd
 * @param string $pswd
 * @return string
 */
function hashPassword($pswd): string
{
    $hash = password_hash($pswd, PASSWORD_DEFAULT);
    return $hash;
}

echo hashPassword($_POST['pswd']);