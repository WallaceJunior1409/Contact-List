<?php
    use Database\Connection;

    class Login
    {
        private $id;
        private $user;
        private $password;

        public function validateLogin()
        {
            $conn = Connection::openConnection();
            try 
            {
                $params = array(
                    "usuario" => $this->getUser(),
                    "senha" => $this->getPassword()
                );
                $result = pg_select($conn,'usuarios', $params);

                if (!$result) return;
                return $result[0]['id'];
            } catch (\Exception $th) 
            {
                $conn = Connection::exitConnection();
                throw $th;
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

        public function getUser()
        {
            return $this->user;
        }

        public function setUser($user)
        {
            $this->user = $user;
        }

        public function getPassword()
        {
            return $this->password;
        }

        public function setPassword($password)
        {
            $this->password = $password;
        }
    }
?>