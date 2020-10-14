<?php
    session_start();

    require_once "./app/core/Core.php";
    require_once "./app/database/Connection.php";

    require_once "./app/controllers/RoutesController.php";
    require_once "./app/controllers/LoginController.php";
    require_once "./app/controllers/DashboardController.php";
    require_once "./app/controllers/ContactsController.php";
    require_once "./app/controllers/UsersController.php";

    require_once "./app/models/Login.php";
    require_once "./app/models/Contact.php";
    require_once "./app/models/AnydeskServer.php";
    require_once "./app/models/AnydeskStore.php";

    $core = new Core();
    echo $core->start_core($_GET);
?>