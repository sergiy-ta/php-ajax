<?php 

class DB {
    private $PARAM_host = "localhost";
    private $PARAM_user = "user";
    private $PARAM_password = "user";
    private $PARAM_db = "php_ajax";

    private function conectDB() {
        return new mysqli($this->PARAM_host, $this->PARAM_user, $this->PARAM_password, $this->PARAM_db);
    }

    public function setToPHPAjax($first_name, $last_name, $age, $tel) {
        $this->conectDB()->query("INSERT INTO users (first_name, last_name, age, tel) VALUE('$first_name', '$last_name', '$age', '$tel')");
        $this->conectDB()->close();
    }
}