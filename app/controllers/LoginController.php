<?php
    class LoginController 
    {
        public function index():void
        {
            include_once "./app/views/login/index.php";
        }

        public function javascript_login():void
        {
            include_once "./app/views/login/js/index.js";
        }

        public function sign_in()
        {
            if (isset($_POST['user']) and isset($_POST['password'])) 
            {
                if ($_POST['user'] != '' || $_POST['password'] != '') {
                    $login = new Login();
                    try {
                        $login->setUser($_POST['user']);
                        $login->setPassword($_POST['password']);
                        $result = $login->validateLogin();

                        if (!$result || $result == '') return header("Location: http://localhost:90/Projetos/Contatos/login/index");

                        if (is_string($result)){ 
                            $_SESSION['USER'] = $result;
                            header("Location: http://localhost:90/Projetos/Contatos/dashboard/index"); 
                        }
                    } catch (Exception $ex) {
                        print "Erro : ".$ex->getMessage();
                    }
                } else header("Location: http://localhost:90/Projetos/Contatos/login/index");
                
            } else header("Location: http://localhost:90/Projetos/Contatos/login/index");
        }
    }
?>