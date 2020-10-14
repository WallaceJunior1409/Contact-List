<?php
    class RoutesController
    {

        public function show()
        {
            include_once "./app/views/dashboard/v_show_contact.php";
        }

        public function update()
        {
            include_once "./app/views/dashboard/v_update_contact.php";
        }

        public function exit()
        {
            session_destroy();
            header('Location: ../');
        }

        /**
         *  ROUTES CONTACTS
         */

        public function routeCreateContact()
        {
            include_once "./app/views/dashboard/components/create_contact.php";
        }
        public function routeTableContact()
        {
            include_once "./app/views/dashboard/components/table_contact.php";
        }
        public function routeViewContact()
        {
            include_once "./app/views/dashboard/components/view_contact.php";
        }
    }
?>