<?php

include('functions.php');

// if we're passing in a user key in the GET superglobal, then go get a users

if(isset($_GET["getUsers"])) {
    $users = getUsers($pdo);

    echo json_encode($users);
}

?>