<?php
    use Database\Connection;

    class AnydeskServer
    {
        private $id_adk_server;
        private $id_user;
        private $id_contact;
        private $adk_server;

        public function create()
        {
            try 
            {
                $conn = Connection::openConnection();
                $query_params = array(
                    "id_usuario" => $this->getId_user(),
                    "id_contato" => $this->getId_contact(),
                    "adk_servidor" => $this->getAdk_server()
                );
                $result = pg_insert($conn, "anydesk_servidor",$query_params);

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
                $query_params = array(
                    "adk_servidor" => $this->getAdk_server()
                );
                $result = pg_update($conn, "anydesk_servidor",$query_params, ["id_contato" => $this->getId_contact()]);

                if (!$result) return false;
                return $result;
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

                $result = pg_select($conn, "anydesk_servidor", []);

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
                $result = pg_select($conn, "anydesk_servidor", $query_params);

                if (!$result || $result == []) return;
                return $result;
            } catch (\Throwable $th) 
            {
                return $th;
            }
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
         * Get the value of adk_server
         */ 
        public function getAdk_server()
        {
                return $this->adk_server;
        }

        /**
         * Set the value of adk_server
         *
         * @return  self
         */ 
        public function setAdk_server($adk_server)
        {
                $this->adk_server = $adk_server;

                return $this;
        }
    }
?>