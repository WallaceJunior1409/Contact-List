<?php
    use Database\Connection;

    class AnydeskStore
    {
        private $id_adk_store;
        private $id_user;
        private $id_contact;
        private $id_adk_server;
        private $type_server;
        private $obs_store;

        public function create()
        {
            try 
            {
                $conn = Connection::openConnection();
                $query_params = array(
                    "id_usuario" => $this->getId_user(),
                    "id_contato" => $this->getId_contact(),
                    "id_adk_servidor" => $this->getId_adk_server(),
                    "tipo_servidor" => $this->getType_server(),
                    "obs_loja" => $this->getObs_store()
                );
                $result = pg_insert($conn, "anydesk_loja", $query_params);

                if (!$result) return false;
                return $result;
            } catch (\Throwable $th) 
            {
                $conn = Connection::exitConnection();
                return $th;
            }
        }

        public function update()
        {
            try 
            {
                $conn = Connection::openConnection();
                if ($this->getType_server() && $this->getObs_store()) {
                    $query_params = array(
                        "tipo_servidor" => $this->getType_server(),
                        "obs_loja" => $this->getObs_store()
                    );
                    $result = pg_update($conn, "anydesk_loja",$query_params, ["id" => $this->getId_adk_store(),"id_contato" => $this->getId_contact()]);
    
                    if (!$result) return false;
                    return $result;

                } else if ($this->getType_server()) {
                    $query_params = array(
                        "tipo_servidor" => $this->getType_server()
                    );
                    $result = pg_update($conn, "anydesk_loja",$query_params, ["id" => $this->getId_adk_store(),"id_contato" => $this->getId_contact()]);
    
                    if (!$result) return false;
                    return $result;

                } else if ($this->getObs_store()) {
                    $query_params = array(
                        "obs_loja" => $this->getObs_store()
                    );
                    $result = pg_update($conn, "anydesk_loja",$query_params, ["id" => $this->getId_adk_store(),"id_contato" => $this->getId_contact()]);

                    if (!$result) return false;
                    return $result;
                }
            } catch (\Throwable $th) 
            {
                $conn = Connection::exitConnection();
                return $th;
                
            }
        }

        public function showAll()
        {
            try 
            {
                $conn = Connection::openConnection();

                $result = pg_select($conn, "anydesk_loja", []);

                if (!$result) return ;
                return $result;
            } catch (\Throwable $th) 
            {
                $conn = Connection::exitConnection();
                return $th;
            }
        }

        public function show()
        {
            try 
            {
                $conn = Connection::openConnection();

                $query_params = array(
                    "id_contato" => $this->getId_contact(),
                    "id_adk_servidor" => $this->getId_adk_server()
                );
                $result = pg_select($conn, "anydesk_loja", $query_params);

                if (!$result || $result == []) return;
                return $result;
            } catch (\Throwable $th) 
            {
                $conn = Connection::exitConnection();
                return $th;
            }
        }

        public function delete()
        {
            try 
            {
                $conn = Connection::openConnection();

                $query_params = array(
                    "id" => $this->getId_adk_store(), 
                    "id_usuario" => $this->getId_user(),
                    "id_contato" => $this->getId_contact()
                );
                $result = pg_delete($conn, "anydesk_loja", $query_params);

                if (!$result || $result == []) return;
                return $result;
            } catch (\Throwable $th) 
            {
                $conn = Connection::exitConnection();
                return $th;
            }
        }

        /**
         * Get the value of id_adk_store
         */ 
        public function getId_adk_store()
        {
                return $this->id_adk_store;
        }

        /**
         * Set the value of id_adk_store
         *
         * @return  self
         */ 
        public function setId_adk_store($id_adk_store)
        {
                $this->id_adk_store = $id_adk_store;

                return $this;
        }

        /**
         * Get the value of id_user
         */ 
        public function getId_user()
        {
                return $this->id_user;
        }

        /**
         * Set the value of id_user
         *
         * @return  self
         */ 
        public function setId_user($id_user)
        {
                $this->id_user = $id_user;

                return $this;
        }

        /**
         * Get the value of id_contact
         */ 
        public function getId_contact()
        {
                return $this->id_contact;
        }

        /**
         * Set the value of id_contact
         *
         * @return  self
         */ 
        public function setId_contact($id_contact)
        {
                $this->id_contact = $id_contact;

                return $this;
        }

        /**
         * Get the value of type_server
         */ 
        public function getType_server()
        {
                return $this->type_server;
        }

        /**
         * Set the value of type_server
         *
         * @return  self
         */ 
        public function setType_server($type_server)
        {
                $this->type_server = $type_server;

                return $this;
        }

        /**
         * Get the value of obs_store
         */ 
        public function getObs_store()
        {
                return $this->obs_store;
        }

        /**
         * Set the value of obs_store
         *
         * @return  self
         */ 
        public function setObs_store($obs_store)
        {
                $this->obs_store = $obs_store;

                return $this;
        }

        /**
         * Get the value of id_adk_server
         */ 
        public function getId_adk_server()
        {
                return $this->id_adk_server;
        }

        /**
         * Set the value of id_adk_server
         *
         * @return  self
         */ 
        public function setId_adk_server($id_adk_server)
        {
                $this->id_adk_server = $id_adk_server;

                return $this;
        }
    }
?>