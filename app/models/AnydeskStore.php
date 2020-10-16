<?php
    use Database\Connection;

    class AnydeskStore
    {
        private $id_adk_store;
        private $id_user;
        private $id_contact;
        private $adk_store_server;
        private $adk_store_pdv;

        public function create()
        {
            try 
            {
                $conn = Connection::openConnection();
                $query_params = array(
                    "id_usuario" => $this->getId_user(),
                    "id_contato" => $this->getId_contact(),
                    "adk_servidor" => $this->getAdk_store_server(),
                    "adk_pdv" => $this->getAdk_store_pdv()
                );
                $result = pg_insert($conn, "anydesk_loja",$query_params);

                if (!$result) return false;
                return $result;
            } catch (\Throwable $th) 
            {
                return $th;
            }
        }

        public function update()
        {
            try 
            {
                $conn = Connection::openConnection();
                if ($this->getAdk_store_server() && $this->getAdk_store_pdv()) {
                    $query_params = array(
                        "adk_servidor" => $this->getAdk_store_server(),
                        "adk_pdv" => $this->getAdk_store_pdv()
                    );
                    $result = pg_update($conn, "anydesk_loja",$query_params, ["id" => $this->getId_adk_store(),"id_contato" => $this->getId_contact()]);
    
                    if (!$result) return false;
                    return $result;

                } else if ($this->getAdk_store_server()) {
                    $query_params = array(
                        "adk_servidor" => $this->getAdk_store_server()
                    );
                    $result = pg_update($conn, "anydesk_loja",$query_params, ["id" => $this->getId_adk_store(),"id_contato" => $this->getId_contact()]);
    
                    if (!$result) return false;
                    return $result;
                    
                } else if ($this->getAdk_store_pdv()) {
                    $query_params = array(
                        "adk_pdv" => $this->getAdk_store_pdv()
                    );
                    $result = pg_update($conn, "anydesk_loja",$query_params, ["id" => $this->getId_adk_store(),"id_contato" => $this->getId_contact()]);

                    if (!$result) return false;
                    return $result;
                }
            } catch (\Throwable $th) 
            {
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
                return $th;
            }
        }

        public function show()
        {
            try 
            {
                $conn = Connection::openConnection();

                $query_params = array("id_contato" => number_format($this->getId_contact()));
                $result = pg_select($conn, "anydesk_loja", $query_params);

                if (!$result || $result == []) return;
                return $result;
            } catch (\Throwable $th) 
            {
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
         * Get the value of adk_store_server
         */ 
        public function getAdk_store_server()
        {
                return $this->adk_store_server;
        }

        /**
         * Set the value of adk_store_server
         *
         * @return  self
         */ 
        public function setAdk_store_server($adk_store_server)
        {
                $this->adk_store_server = $adk_store_server;

                return $this;
        }

        /**
         * Get the value of adk_store_pdv
         */ 
        public function getAdk_store_pdv()
        {
                return $this->adk_store_pdv;
        }

        /**
         * Set the value of adk_store_pdv
         *
         * @return  self
         */ 
        public function setAdk_store_pdv($adk_store_pdv)
        {
                $this->adk_store_pdv = $adk_store_pdv;

                return $this;
        }
    }
?>