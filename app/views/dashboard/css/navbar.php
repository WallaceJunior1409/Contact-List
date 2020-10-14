<style>
.container-fluid .d-flex .input-search {
    width: 250px;
    border-radius: 25px;
}

.container-fluid .d-flex .btn-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #8E0E00;
    transition: .4s;
}

.container-fluid .d-flex .btn-search:hover {
    color: white;
    border: none;
    background: #8E0E00;
    background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
    background: linear-gradient(to right, #1F1C18, #8E0E00);
    box-shadow: 1px 1px 4px #262626;
}

.container-fluid .d-flex .btn-exit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 25px;
    color: #8E0E00;
    transition: .4s;
}

.container-fluid .d-flex .btn-exit:hover {
    color: white;
    border: none;
    background: #8E0E00;
    background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
    background: linear-gradient(to right, #1F1C18, #8E0E00);
    box-shadow: 1px 1px 4px #262626;
}

.nav-main {
    position: relative;
    padding: 0;
}

.nav-main .nav .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.nav-main .nav .nav-item>a {
    font-weight: 400;
    color: #262626;
}
.nav-main .nav .nav-item:hover {
    background: #e9e9e9;
}

.nav-main .nav .active {
    cursor: pointer;
    background: #8E0E00;
    background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
    background: linear-gradient(to right, #1F1C18, #8E0E00);

    transition: .3s;
}

.nav-main .nav .active:hover {
    background: #8E0E00;
    background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
    background: linear-gradient(to right, #1F1C18, #8E0E00);
    box-shadow: 1px 1px 4px #8E0E00;
}

.nav-main .nav .active a {
    color: white;
}

</style>