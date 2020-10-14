<style>
    body {
    background: #f9f9f9;
    background-image: url(https://www.satussistemas.com.br/wp-content/uploads/2019/09/Sistema-de-gestão-para-supermercados-mercearias-e-distribuidoras.jpg); 
    background-position: center center; 
    background-repeat: no-repeat; 
    background-size: cover;
}

.container-fluid {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-container {
    position: relative;
    border-radius: 0;
    display: flex;
    align-items: center;
    width: 60%;
    height: 60%;
    background: transparent;
    border: none;
}

.card-body {
    padding: 0;
    width: 100%;
    height: 100%;
}

.row {    
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
}
.row>* {
    position: relative;
    max-width: 100%;
    padding-right: 0;
    padding-left: 0;
}

.col-lg-7 {
    background: white;
}

.card-sign_in {
    position: relative;
    padding: 20%;
    display: block;
    box-shadow: 1px 1px 5px #303030;
}

.card-sign_in h3 {
    font-weight: 400;
    padding-bottom: 15px;
}

.card-sign_in input {
    margin-bottom: 15px;
    border-radius: 20px;
}

.card-sign_in .btn {
    position: relative;
    width: 100%;
    border-radius: 20px;

    color: #f12711;
    font-weight: 400;

    border: 1px solid #f12711;
    transition: .3s;
}
.card-sign_in .btn:hover {
    color: white;
    border: none;
    background: #f12711; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f12711, #f5af19); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f12711, #f5af19);
    box-shadow: 2px 1px 13px #f12711;
}


/*
    Sign Up
*/

.col-lg-5 {
    position: relative;
    height: 80%;
    display: flex;
    align-items: center;
    background: #f12711; 
    opacity: .9;
}

.card-sign_up {
    position: relative;
    width: 100%;
    padding: 10% 6%;
}

.card-sign_up h3 {
    font-weight: 300;
    color: white;
}

.card-sign_up p {
    font-weight: 300;
    color: white;
}
.card-sign_up button {
    position: relative;
    width: 40%;
    border: 1px solid white;
    border-radius: 20px;
    color: white;
    transition: .4;
}

.card-sign_up button:hover {
    position: relative;
    width: 40%;
    color: #262626;
    background: white;
    box-shadow: 1px 1px 6px #f9f9f9;
}

@media (max-width: 800px) {
    .card-container {
        width: 80%;
        height: 85%;
    }
    .card-body {
        padding: 0;
        width: 100%;
        height: 100%;
    }
    .row {    
        height: 100%;
    }
    .col-lg-5 {    
        display: none;
    }
    .col-lg-7 {
        width: 100%;
        opacity: .9;
    }
    .card-sign_in {
        padding: 16%;
    }
}

@media (max-width: 1000px) {
    
    .col-lg-5 {    
        display: none;
    }

    .col-lg-7 {
        width: 100%;
        opacity: .9;
    }
}
</style>