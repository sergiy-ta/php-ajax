<?php

include "../db/db.php";

$db = new DB;
echo json_encode($db->getToPHPAjax());