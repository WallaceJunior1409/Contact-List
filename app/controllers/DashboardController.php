<?php
    class DashboardController
    {

        public function index()
        {
            include_once "./app/views/dashboard/index.php";
        }
        public function createServer()
        {
            include_once "./app/views/dashboard/page_new_server.php";
        }

        public function javascript()
        {
            include_once "./app/views/dashboard/js/index.js";
        }
    }
?>