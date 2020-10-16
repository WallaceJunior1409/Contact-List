<style>
.card-new-contact {
    position: relative;
    height: 100%;
    transition-duration: .2s;
    background: #f8f8f8;
}

.card-new-contact:hover {
    background: white;
    box-shadow: 0 0 .5rem rgb(10 10 10 / 25%);
}

.card-new-contact input,
textarea {
    margin: 10px 0;
    border-radius: 60px;
    transition-duration: .1s;
    cursor: pointer;
}

.card-new-contact label{
    font-size: 14px;
    font-weight: 500;
}

.card-new-contact input::placeholder,
.card-new-contact textarea::placeholder {
    color: #c9c9c9;
}

.card-new-contact input:hover,
textarea:hover {
    color: #8E0E00;
}

.card-new-contact .card-header {
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-new-contact .card-header h3 {
    text-align: center;
    font-weight: 300;
    color: #c9c9c9;
}

.card-new-contact:hover>.card-header{
    transition-duration: .3s;
    background: #8E0E00;
    background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
    background: linear-gradient(to right, #1F1C18, #8E0E00);
}
.card-new-contact:hover>.card-header h3 {
    font-weight: 300;
    color: white;
}

.row-btn {
    margin-top: 10px;
}

.row-btn .btn {
    width: 100%;
    height: 40px;
    border: 1px solid #8E0E00;
    color: #8E0E00;
    transition: .5s;
}

.row-btn .btn:hover {
    width: 100%;
    border: none;
    border-radius: 60px;

    background: #8E0E00;
    background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
    background: linear-gradient(to right, #1F1C18, #8E0E00);
    box-shadow: 1px 1px 4px #262626;

    color: white;
}

.server:nth-child(n + 4), .server-store:nth-child(n + 4){
    margin-top: 20px;
}
.btn-server {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: #b9b9b9;
    background: #e9e9e9;
    transition: .3s;
}

.btn-server:hover {
    background: #8E0E00;
    background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
    background: linear-gradient(to right, #1F1C18, #8E0E00);
    box-shadow: 1px 1px 4px #262626;

    color: white;
}


</style>