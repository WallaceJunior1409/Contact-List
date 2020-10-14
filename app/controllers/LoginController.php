<?php
    class LoginController 
    {
        public function index()
        {
            include_once "./app/views/login/index.php";
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

                        if (!$result || $result == '') return header('Location: ../');
                        if (is_string($result)){ 
                            $_SESSION['USER'] = $result;
                            header('Location: ../dashboard/index'); 
                        }
                    } catch (Exception $ex) {
                        print "Erro : ".$ex->getMessage();
                    }
                } else header('Location: ../');
                
            } else header('Location: ../');
        }
    }
?>