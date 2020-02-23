<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



require_once 'connect.php';
require_once 'functions.php';



if (isset($_POST['submit'])) {

    $first_name = trim($_POST['first-name']);
    $last_name = trim($_POST['last-name']);
    $email = trim($_POST['email']);
    $age = trim($_POST['age']);

    // still need to create the register function

    // register($first_name, $last_name, $email, $age);

}
?>