<?php

include "../db/db.php";

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$age = $_POST["age"];
$tel = $_POST["tel"];

$db = new DB;
$db->setToPHPAjax($first_name, $last_name, $age, $tel);