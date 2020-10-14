<?php
    class ContactsController
    {
        public function newContact()
        {
            if(isset($_POST['id_user']) && isset($_POST['company']) && isset($_POST['phone']) && isset($_POST['phone_company'])  && isset($_POST['adk_server']) && isset($_POST['adk_store_server']) && isset($_POST['adk_store_pdv']))
            {
                if (($_POST['id_user'] != "") && ($_POST['company'] != "") && ($_POST['phone'] != "") && ($_POST['phone_company'] != ""))
                {
                    $anydesk_server = new AnydeskServer();
                    $anydesk_store = new AnydeskStore();
                    $contact = new Contact();

                    $contact->setId_user($_POST['id_user']);
                    $contact->setName($_POST['name']);
                    $contact->setCompany($_POST['company']);
                    $contact->setEmail($_POST['email']);
                    $contact->setPhone($_POST['phone']);
                    $contact->setPhoneCompany($_POST['phone_company']);
                    $contact->setObservations($_POST['observations']);

                    $result_contact = $contact->create();
                    //var_dump($contact->getId());

                    $anydesk_server->setId_contact($contact->getId());
                    $anydesk_server->setId_user($_POST['id_user']);
                    $anydesk_server->setAdk_server($_POST['adk_server'] ?? 0);

                    $result_adk_server = $anydesk_server->create();


                    $anydesk_store->setId_contact($contact->getId());
                    $anydesk_store->setId_user($_POST['id_user']);
                    $anydesk_store->setAdk_store_server($_POST['adk_store_server'] ?? 0);
                    $anydesk_store->setAdk_store_pdv($_POST['adk_store_pdv'] ?? 0);

                    $result_adk_store = $anydesk_store->create();

                    if (!$result_contact) header('Location: ../dashboard/index?status=500');
                    /*
                    var_dump($result_contact);
                    var_dump($result_adk_server);
                    var_dump($result_adk_store);
                    */

                } else
                {
                    header('Location: ../dashboard/index?error');
                }
            } else{
                header('Location: ../dashboard/index?error');
            }
            header('Location: ../dashboard/index');
        }

        public function updateContact()
        {
            if(isset($_POST['id_contact']) && isset($_POST['id_user']) && isset($_POST['company']) && isset($_POST['phone']) && isset($_POST['phone_company'])  && isset($_POST['adk_server']) && isset($_POST['adk_store_server']) && isset($_POST['adk_store_pdv']))
            {
                if (($_POST['id_contact'] != "") && ($_POST['id_user'] != "") && ($_POST['company'] != "") && ($_POST['phone'] != "") && ($_POST['phone_company'] != ""))
                {
                    $anydesk_server = new AnydeskServer();
                    $anydesk_store = new AnydeskStore();
                    $contact = new Contact();

                    $contact->setId($_POST['id_contact']);
                    $contact->setName($_POST['name']);
                    $contact->setCompany($_POST['company']);
                    $contact->setEmail($_POST['email']);
                    $contact->setPhone($_POST['phone']);
                    $contact->setPhoneCompany($_POST['phone_company']);
                    $contact->setObservations($_POST['observations']);

                    $result_contact = $contact->update();
                    //var_dump($contact->getId());

                    $anydesk_server->setId_contact($_POST['id_contact']);
                    $anydesk_server->setAdk_server($_POST['adk_server']);

                    $result_adk_server = $anydesk_server->update();

                    $anydesk_store->setId_contact($_POST['id_contact']);
                    $anydesk_store->setAdk_store_server($_POST['adk_store_server']);
                    $anydesk_store->setAdk_store_pdv($_POST['adk_store_pdv']);

                    $result_adk_store = $anydesk_store->update();

                    if (!$result_contact) header('Location: ../dashboard/index?status=500');
                    
                    var_dump($result_contact);
                    var_dump($result_adk_server);
                    var_dump($result_adk_store);
    
                } else 
                {header('Location: ../dashboard/index?error');
                }
            } else
            {
                header('Location: ../dashboard/index?error');
            }
            header('Location: ../dashboard/index');
        }

        public function newServer()
        {
            if(isset($_GET['id_contact']) && isset($_GET['adk_server']) && isset($_GET['adk_store_server']) && isset($_GET['adk_store_pdv']))
            {
                $id_user = $_SESSION['USER'] ?? "";
                //var_dump($id_user);

                if (($id_user != "") && ($_GET['id_contact'] != ""))
                {
                    if ($_GET['adk_server'] != "") {
                        $anydesk_server = new AnydeskServer();
                    
                        $anydesk_server->setId_contact($_GET['id_contact']);
                        $anydesk_server->setId_user($id_user);
                        $anydesk_server->setAdk_server($_GET['adk_server'] ?? 0);

                        $result_adk_server = $anydesk_server->create();
                        if (!$result_adk_server) header('Location: ');
                        var_dump($result_adk_server);
                    }
                    if (($_GET['adk_store_server'] != "") && ($_GET['adk_store_pdv'] != "")) {
                        $anydesk_store = new AnydeskStore();

                        $anydesk_store->setId_contact($_GET['id_contact']);
                        $anydesk_store->setId_user($id_user);
                        $anydesk_store->setAdk_store_server($_GET['adk_store_server'] ?? 0);
                        $anydesk_store->setAdk_store_pdv($_GET['adk_store_pdv'] ?? 0);

                        $result_adk_store = $anydesk_store->create();
                        if (!$result_adk_store) header('Location: ');
                        var_dump($result_adk_store);
                    }                    
                } else
                {
                    printf("Erro com Usuarios");
                    header('Location: ');
                }
            } else{
                printf("Erro com os parametros");
                header('Location: ');
            }
            die("<script>window.close()</script>");
        }

        public function showAllContacts()
        {
            $contact = new Contact();
            $contact->setId_user($_SESSION['USER']);

            $result = $contact->showAll();
            if (!$result) return ;
            return $result;
        }

        public function showContactJson($id = [])
        {
            $contact = new Contact();
            $contact->setId($id[0]);
            $result = $contact->show();
            if (!$result) return ;
            print json_encode($result);
        }

        public function showAnydeskServerJson($id_contact = [])
        {
            $anydesk_server = new AnydeskServer();
            $anydesk_server->setId_contact($id_contact[0]);
            $result = $anydesk_server->show();
            if (!$result) return ;
            print json_encode($result);
        }

        public function showAnydeskStoreJson($id_contact = [])
        {
            $anydesk_store = new AnydeskStore();
            $anydesk_store->setId_contact($id_contact[0]);
            $result = $anydesk_store->show();
            if (!$result) return ;
            print json_encode($result);
        }

        public function deleteContact($params)
        {
            if (is_array($params) && $params[0] != "") {
                $contact = new Contact();
                $contact->setId($params[0] ?? 0);

                $result = $contact->delete();
                if (!$result) echo "<script>window.close();</script>";;
                //var_dump($params[0]);
            } else
            {
                echo "<script>window.close();</script>";
            }
            echo "<script>window.close();</script>";
        }
    }
?>