<?php

    use Database\Connection;

    class Contact
    {
        private $id;
        private $id_user;
        private $name;
        private $company;
        private $email;
        private $phone;
        private $phone_company;
        private $observations;

        public function create()
        {
            try 
            {
                $conn = Connection::openConnection();

                $sql = "INSERT INTO contatos (id_usuario, nome, empresa, email, tel_celular, tel_empresa, observacoes) VALUES (".$this->getId_user().", '".$this->getName()."', '".$this->getCompany()."', '".$this->getEmail()."', '".$this->getPhone()."', '".$this->getPhonecompany()."', '".$this->getObservations()."')";
                $result = pg_query($conn, $sql);

                $last_id = pg_fetch_array(pg_query("SELECT CURRVAL('contatos_id_seq')"));
                $this->setId($last_id[0]);

                if (!$result) return ;
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
                    "nome" => $this->getName(),
                    "empresa" => $this->getCompany(),
                    "email" => $this->getEmail(),
                    "tel_celular" => $this->getPhone(),
                    "tel_empresa" => $this->getPhonecompany(),
                    "observacoes" => $this->getObservations()
                );
                $result = pg_update($conn, "contatos", $query_params, ["id" => $this->getId()]);

                if (!$result) return;
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

                if ($this->getId_user()) {
                    $name = $this->getName()."%";
                    $query_params = "SELECT * FROM contatos WHERE id_usuario = ".$this->getId_user()." AND nome LIKE '".$name."' ";
                    
                    $resultName = pg_exec($conn, $query_params);
                    $dataName = pg_fetch_all($resultName);

                    if ($resultName && $dataName) return $dataName;
                    else if ($this->getId_user() && $this->getCompany()) {
                        $company = $this->getCompany()."%";
                        $query_params = "SELECT * FROM contatos WHERE id_usuario = ".$this->getId_user()." AND empresa LIKE '".$company."' ";

                        $resultCompany = pg_exec($conn, $query_params);
                        $dataCompany = pg_fetch_all($resultCompany);

                        if ($resultCompany && $dataCompany) return $dataCompany;
                        else {
                            $query_params = array(
                                "id_usuario" => number_format($this->getId_user())
                            );
                            $result = pg_select($conn, "contatos", $query_params);

                            if (!$result) return ;
                            return $result;
                        }
                    }
                }
                
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

                $query_params = array("id" => number_format($this->getId()));
                $result = pg_select($conn, "contatos", $query_params);

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

                $query_params = array("id" => $this->id);
                $result = pg_delete($conn, "contatos", $query_params);

                if (!$result) return;
                return $result;
            } catch (\Throwable $th) 
            {
                $conn = Connection::exitConnection();
                return $th;
            }
        }

        /**
         * 
         */

        public function getId()
        {
            return $this->id;
        }
        public function setId($id)
        {
            $this->id = $id;
        }

        public function getId_user()
        {
            return $this->id_user;
        }
        public function setId_user($id_user)
        {
            $this->id_user = $id_user;
        }

        public function getName()
        {
            return $this->name;
        }
        public function setName($name)
        {
            $this->name = $name;
        }

        public function getCompany()
        {
            return $this->company;
        }
        public function setCompany($company)
        {
            $this->company = $company;
        }

        public function getEmail()
        {
            return $this->email;
        }
        public function setEmail($email)
        {
            $this->email = $email;
        }

        public function getPhone()
        {
            return $this->phone;
        }
        public function setPhone($phone)
        {
            $this->phone = $phone;
        }

        public function getPhonecompany()
        {
            return $this->phone_company;
        }
        public function setPhonecompany($phone_company)
        {
            $this->phone_company = $phone_company;
        }

        public function getObservations()
        {
            return $this->observations;
        }
        public function setObservations($obs)
        {
            $this->observations = $obs;
        }
    }
?>