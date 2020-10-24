<?php

    class Core
    {
        private $user;

        private $url;
        private $controller;
        private $method;
        private $params;

        function __construct()
        {
            $this->user = $_SESSION['USER'] ?? false;
        }

        public function start_core($request)
        {
            if (isset($request['url'])) 
            {
                $this->url = array_filter(explode('/', $request['url']));

                $this->controller = ucfirst($this->url[0]).'Controller';
                array_shift($this->url);

                if (isset($this->url[0]) && $this->url != '') 
                {
                    $this->method = $this->url[0];
                    array_shift($this->url);

                    if (isset($this->url[0]) && $this->url != '') 
                    {
                        $this->params = $this->url;
                    }
                }
            }

            if ($this->user) 
            {
                $view_permission = ["DashboardController", "RoutesController", "ContactsController"];
                if (!isset($this->controller) || !in_array($this->controller, $view_permission)) 
                {
                    $this->controller = "DashboardController";
                    $this->method = "index";
                    header("Location: http://localhost:90/Projetos/Contatos/dashboard/index");
                }
            } else 
            {
                $view_permission = ["LoginController"];
                if (!isset($this->controller) || !in_array($this->controller, $view_permission)) 
                {
                    $this->controller = "LoginController";
                    $this->method = "index";
                    header("Location: http://localhost:90/Projetos/Contatos/login/index");
                }
            }
            return call_user_func(array(new $this->controller, $this->method), $this->params);
        }
    }
?>