<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="icon" href="https://www.satussistemas.com.br/wp-content/uploads/2019/07/cropped-18698538_1364800530255738_4495280055020493390_n-32x32.png" sizes="32x32">
    <!-- Style CSS -->
    <?php
      include_once "./app/views/dashboard/css/style.php";
      include_once "./app/views/dashboard/css/navbar.php";
      include_once "./app/views/dashboard/css/contacts.php";
    ?>

    <!-- Font Roboto -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    <title>Satus - Contatos</title>
</head>

<body>

    <head>
        <nav class="navbar navbar-light bg-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="index">
                    <img src="https://www.satussistemas.com.br/wp-content/uploads/2019/08/COLOR.png" width="160"
                        height="45" alt="Satus Sistemas" loading="lazy">
                </a>
                <div class="d-flex">
                    <input class="form-control mr-3 input-search" type="search" placeholder="Search" aria-label="Search" onchange="addPageSearchContact(this.value)">
                    
                </div>
                <form action="../routes/exit" class="d-flex">
                    <button class="btn btn-outline-danger btn-exit" type="submit">
                        <span class="material-icons">exit_to_app</span>
                    </button>
                </form>
            </div>
        </nav>
    </head>

    <main>
        <div class="container container-main">
            <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-12 nav-main">
                    <ul class="nav flex-column">
                        <li class="nav-item active" id="btn-nav-contact">
                            <a class="nav-link">Contatos</a>
                        </li>
                        <li class="nav-item" id="btn-nav-newContact">
                            <a class="nav-link">Novo</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-10 col-md-9 col-sm-12">
                    <div id="root">

                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Optional JavaScript -->
    <!-- Popper.js first, then Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous">
    </script>
    <script src="javascript" defer></script>
    <script>
        
    </script>
</body>

</html>