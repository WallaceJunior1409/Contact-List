<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">

    <!-- Style CSS -->
    <?php
        include_once "./app/views/login/css/style.php";
    ?>

    <!-- SVG Icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    <!-- Font Roboto -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    <title>Login</title>
</head>

<body>
    <div class="container-fluid">
        <div class="card card-container">
            <div class="card-body">
                <div class="row">

                    <div class="col-lg-7 ">
                        <div class="card-sign_in">
                            <h3>Sign In</h3>
                            <form action="../Contatos/login/sign_in" method="post">
                                <input type="text" name="user" id="user" class="form-control" placeholder="Usuario">
                                <input type="password" name="password" id="password" class="form-control" placeholder="Senha">
                                <button type="submit" class="btn">Login</button>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="card-sign_up">
                            <h3>Sign Up</h3>
                            <p>Crie uma nova conta na satus contatos.</p>
                            <button type="submit" class="btn">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- Popper.js first, then Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
</body>

</html>