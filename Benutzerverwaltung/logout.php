<?php
/**
 * Löscht die Aktuelle Sitzung
 * @return void
 */

session_start();
session_unset();
session_destroy();
echo "../../index.html";