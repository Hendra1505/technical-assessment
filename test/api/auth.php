<?php

session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

if (isset($_POST) && !empty($_POST)) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == 'admin123' && $password == 'admin123') {
        $_SESSION['user'] = 'admin';
?>
        {
        "success": true,
        "secret": "Halaman ini hanya diperuntukan untuk Admin"
        }
    <?php
    } else {
    ?>
        {
        "success": false,
        "message": "Invalid Credentials"
        }
    <?php
    }
} else {
    //var_dump($_POST)
    ?>
    {
    "success": false,
    "message": "POST access not accepted"
    }
<?php
}

?>