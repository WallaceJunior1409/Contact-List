<?php
    class ContactsController
    {
        public function newContact()
        {
            if(isset($_POST['company']) && isset($_POST['phone']) && isset($_POST['phone_company'])  && 
            isset($_POST['type_server']) && isset($_POST['obs_server']) && isset($_POST['type_server_store']) && isset($_POST['obs_store']))
            {
                if (($_POST['company'] != "") && ($_POST['phone'] != "" || $_POST['phone_company'] != ""))
                {
                    $anydesk_server = new AnydeskServer();
                    $anydesk_store = new AnydeskStore();
                    $contact = new Contact();

                    //CREATE CONTACT
                    $contact->setId_user($_SESSION['USER']);
                    $contact->setName($_POST['name']);
                    $contact->setCompany($_POST['company']);
                    $contact->setEmail($_POST['email']);
                    $contact->setPhone($_POST['phone']);
                    $contact->setPhoneCompany($_POST['phone_company']);
                    $contact->setObservations($_POST['observations']);

                    $result_contact = $contact->create();
                    //var_dump($result_contact);

                    //CREATE SERVER 
                    $anydesk_server->setId_contact($contact->getId());
                    $anydesk_server->setId_user($_SESSION['USER']);
                    $anydesk_server->setType_server($_POST['type_server']);
                    $anydesk_server->setObs_server($_POST['obs_server']);

                    $result_adk_server = $anydesk_server->create();
                    //var_dump($result_adk_server);

                    //CREATE SERVER STORE
                    $anydesk_store->setId_contact($contact->getId());
                    $anydesk_store->setId_user($_SESSION['USER']);
                    $anydesk_store->setId_adk_server($anydesk_server->getId_server()[0]);
                    $anydesk_store->setType_server($_POST['type_server_store']);
                    $anydesk_store->setObs_store($_POST['obs_store']);

                    $result_adk_store = $anydesk_store->create();
                    //var_dump($result_adk_store);

                    if (!$result_contact) header('Location: ../dashboard/index?status=500');
                   
                } else
                {
                    header("Location: http://localhost:90/Projetos/Contatos/dashboard/index");
                }
            } else{
                header("Location: http://localhost:90/Projetos/Contatos/dashboard/index");
            }
            header("Location: http://localhost:90/Projetos/Contatos/dashboard/index");
        }

        public function updateContact()
        {
            if(isset($_POST['id_contact']) && isset($_POST['name']) && isset($_POST['company']) && isset($_POST['phone']) && isset($_POST['phone_company'])  && isset($_POST['email']) && isset($_POST['observations']))
            {
                $contact = new Contact();

                    $contact->setId($_POST['id_contact']);
                    $contact->setName($_POST['name']);
                    $contact->setCompany($_POST['company']);
                    $contact->setEmail($_POST['email']);
                    $contact->setPhone($_POST['phone']);
                    $contact->setPhoneCompany($_POST['phone_company']);
                    $contact->setObservations($_POST['observations']);

                    $result_contact = $contact->update();
                    //var_dump($result_contact);

                    if (!$result_contact) die("<script>alert('Erro ao atualizar o contato!')</script>");
                
            } else 
            ;
            die("<script>window.close()</script>");
        }

        public function updateContactServer()
        {
            if(( (isset($_POST['id_server']) && $_POST['id_server'] != "") || (isset($_POST['id_store'])) && $_POST['id_store'] != "") && isset($_POST['id_contact']))
            {
                if ($_POST['id_contact'] != "")
                {
                    if ((isset($_POST['type_server']) && $_POST['type_server'] != "") || (isset($_POST['obs_server']) && $_POST['obs_server'] != "")) {
                        $anydesk_server = new AnydeskServer();

                        $anydesk_server->setId_server($_POST['id_server']);
                        $anydesk_server->setId_contact($_POST['id_contact']);
                        $anydesk_server->setType_server($_POST['type_server']);
                        $anydesk_server->setObs_server($_POST['obs_server']);
                        
                        $result_adk_server = $anydesk_server->update();
                        //var_dump($result_adk_server);
                    }
                    if ((isset($_POST['type_server_store']) && $_POST['type_server_store'] != "") || (isset($_POST['obs_store']) && $_POST['obs_store'] != "")) {
                        $anydesk_store = new AnydeskStore();

                        $anydesk_store->setId_adk_store($_POST['id_store']);
                        $anydesk_store->setId_contact($_POST['id_contact']);
                        $anydesk_store->setType_server($_POST['type_server_store']);
                        $anydesk_store->setObs_store($_POST['obs_store']);
    
                        $result_adk_store = $anydesk_store->update();
                        //var_dump($result_adk_store);
                    }
                } else echo "Parametros Vazios";
            } else echo "Parametros inezistente";
            die("<script>window.close()</script>");
        }

        public function newServer()
        {
            if(isset($_POST['id_contact']))
            {
                $id_user = $_SESSION['USER'] ?? "";
                //var_dump($id_user);
                if (($id_user != "") && ($_POST['id_contact'] != ""))
                {
                    if ((isset($_POST['type_server']) && $_POST['type_server'] != "") || (isset($_POST['obs_server']) && $_POST['obs_server'] != "")) {
                        $anydesk_server = new AnydeskServer();
                    
                        $anydesk_server->setId_contact($_POST['id_contact']);
                        $anydesk_server->setId_user($id_user);
                        $anydesk_server->setType_server($_POST['type_server']);
                        $anydesk_server->setObs_server($_POST['obs_server']);

                        $result_adk_server = $anydesk_server->create();
                        if (!$result_adk_server) header('Location: ');

                        var_dump($result_adk_server);
                    }
                    if ((isset($_POST['id_adk_server']) && $_POST['id_adk_server'] != "") && (isset($_POST['type_server_store']) && $_POST['type_server_store'] != "") || (isset($_POST['obs_store']) && $_POST['obs_store'] != "")) {
                        $anydesk_store = new AnydeskStore();

                        $anydesk_store->setId_contact($_POST['id_contact']);
                        $anydesk_store->setId_user($id_user);
                        $anydesk_store->setId_adk_server($_POST['id_adk_server']);
                        $anydesk_store->setType_server($_POST['type_server_store']);
                        $anydesk_store->setObs_store($_POST['obs_store']);

                        $result_adk_store = $anydesk_store->create();
                        if (!$result_adk_store) header('Location: ');

                        var_dump($result_adk_store);
                    }                    
                } else
                {
                    die("<script>alert('Parametros de Identificação Vazios')</script>");
                    die("<script>window.close()</script>");
                }
            } else{
                die("<script>alert('Parametro(s) Inezistente(s)')</script>");
                die("<script>window.close()</script>");
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

        public function searchContacts($params = [])
        {
            if (!$_SESSION['USER'] || $_SESSION['USER'] == "") header("Location: http://localhost:90/Projetos/Contatos/login/index");

            $contact = new Contact();

            $contact->setId_user($_SESSION['USER']);
            $contact->setName($params[0]);
            $contact->setCompany($params[0]);
            $result = $contact->showAll();
            
            if (!$result) return ;
            print json_encode($result);
        }

        public function showContactJson($id = [])
        {
            if (!$_SESSION['USER'] || $_SESSION['USER'] == "") header("Location: http://localhost:90/Projetos/Contatos/login/index");

            $contact = new Contact();
            $contact->setId($id[0]);
            $result = $contact->show();
            if (!$result) return ;
            print json_encode($result);
        }

        public function showAnydeskServerJson($id_contact = [])
        {
            if (!$_SESSION['USER'] || $_SESSION['USER'] == "") header("Location: http://localhost:90/Projetos/Contatos/login/index");
            
            $anydesk_server = new AnydeskServer();
            $anydesk_server->setId_contact($id_contact[0]);
            $result = $anydesk_server->show();
            if (!$result) return var_dump($result);
            echo json_encode($result);
        }

        public function showAnydeskStoreJson($id_store = [])
        {
            if (!$_SESSION['USER'] || $_SESSION['USER'] == "") header("Location: http://localhost:90/Projetos/Contatos/login/index");

            $anydesk_store = new AnydeskStore();
            $anydesk_store->setId_contact($id_store[0]);
            $anydesk_store->setId_adk_server($id_store[1]);
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
                if (!$result) die("<script>window.close()</script>");
                //var_dump($params[0]);
            } else die("<script>window.close()</script>");
            die("<script>window.close()</script>");
        }

        public function deleteServer(){
            if(isset($_POST['id_server']) && isset($_POST['id_contact'])) {
                if (($_POST['id_server'] != "") && ($_POST['id_contact'] != "")) {
                    $anydesk_server = new AnydeskServer();

                    $anydesk_server->setId_server($_POST['id_server']);
                    $anydesk_server->setId_user($_SESSION['USER'] ?? 0);
                    $anydesk_server->setId_contact($_POST['id_contact']);

                    $result = $anydesk_server->delete();
                    if (!$result) echo "<script>window.close();</script>";
                    var_dump($result);
                }
                echo "<script>window.close();</script>";
            } else echo "<script>window.close();</script>";
            echo "<script>window.close();</script>";
        }

        public function deleteServerStore()
        {
            if(isset($_POST['id_store']) && isset($_POST['id_contact'])) {
                if (($_POST['id_store'] != "") && ($_POST['id_contact'] != "")) {
                    $anydesk_store = new AnydeskStore();

                    $anydesk_store->setId_adk_store($_POST['id_store']);
                    $anydesk_store->setId_user($_SESSION['USER'] ?? 0);
                    $anydesk_store->setId_contact($_POST['id_contact']);

                    $result = $anydesk_store->delete();
                    if (!$result) die("<script>window.close()</script>");
                    var_dump($result);
                }
                die("<script>window.close()</script>");
            } else die("<script>window.close()</script>");
            die("<script>window.close()</script>");
        }
    }
?>