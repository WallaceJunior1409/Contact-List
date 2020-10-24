<?php
    use Database\Connection;

    class AnydeskServer
    {
        private $id_server;
        private $id_user;
        private $id_contact;
        private $type_server;
        private $obs_server;

        public function create()
        {
            try 
            {
                $conn = Connection::openConnection();

                $query_params = "INSERT INTO anydesk_servidor (id_usuario, id_contato, tipo_servidor, obs_servidor) VALUES (".$this->getId_user().", ".$this->getId_contact().", '".$this->getType_server()."', '".$this->getObs_server()."')";
                $result = pg_query($conn,$query_params);
                
                $last_id = pg_fetch_array(pg_query("SELECT CURRVAL('anydesk_servidor_id_seq')"));
                $this->setId_server($last_id);

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
                $query_params = array(
                    "tipo_servidor" => $this->getType_server(),
                    "obs_servidor" => $this->getObs_server()
                );
                $result = pg_update($conn, "anydesk_servidor",$query_params, ["id" => $this->getId_server(), "id_contato" => $this->getId_contact()]);

                if (!$result) return false;
                return $result;
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

                $result = pg_select($conn, "anydesk_servidor", []);

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

                $query_params = array("id_contato" => $this->getId_contact());
                $result = pg_select($conn, "anydesk_servidor", $query_params);

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
                    "id" => $this->getId_server(), 
                    "id_usuario" => $this->getId_user(),
                    "id_contato" => $this->getId_contact()
                );
                $result = pg_delete($conn, "anydesk_servidor", $query_params);

                if (!$result || $result == []) return;
                return $result;
            } catch (\Throwable $th) 
            {
                $conn = Connection::exitConnection();
                return $th;
            }
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
         * Get the value of obs_server
         */ 
        public function getObs_server()
        {
                return $this->obs_server;
        }

        /**
         * Set the value of obs_server
         *
         * @return  self
         */ 
        public function setObs_server($obs_server)
        {
                $this->obs_server = $obs_server;

                return $this;
        }

        /**
         * Get the value of id_server
         */ 
        public function getId_server()
        {
                return $this->id_server;
        }

        /**
         * Set the value of id_server
         *
         * @return  self
         */ 
        public function setId_server($id_server)
        {
                $this->id_server = $id_server;

                return $this;
        }
    }
?>