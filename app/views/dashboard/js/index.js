const root = document.getElementById('root');

const btnNavContacts = document.getElementById("btn-nav-contact");
const btnNavNewContacts = document.getElementById("btn-nav-newContact");
const cardContact = document.getElementById('cardContact');

const addPageContact = () => {
    const xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open("GET", "../routes/routeTableContact");
    xmlHttpRequest.onreadystatechange = () => {
        if (xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (xmlHttpRequest.status === 0 || (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 400)) {
                root.innerHTML += xmlHttpRequest.responseText;
            } else {
                cardCreateContacts.innerHTML += `Error : ${xmlHttpRequest.status}`;
                console.log(`Status : ${xmlHttpRequest.status}`);
            }
        }
    }
    xmlHttpRequest.send();
}
addPageContact()

const addPageCreateContacts = () => {
    const xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open("GET", "../routes/routeCreateContact");
    xmlHttpRequest.onreadystatechange = () => {
        if (xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (xmlHttpRequest.status === 0 || (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 400)) {
                root.innerHTML += xmlHttpRequest.responseText;
            } else {
                cardCreateContacts.innerHTML += `Error : ${xmlHttpRequest.status}`;
                console.log(`Status : ${xmlHttpRequest.status}`);
            }
        }
    }
    xmlHttpRequest.send();
}

const addPageCreateServer = () => {
    const amountServer = prompt("Digite a quantidade de servidor a  ser criado:");
    console.log(amountServer);
}

const viewContact = (id) => {
    const xmlHttpRequest = new XMLHttpRequest();

    root.innerHTML = "";
    xmlHttpRequest.open("GET", "../routes/routeViewContact");
    xmlHttpRequest.onreadystatechange = () => {
        if (xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (xmlHttpRequest.status === 0 || (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 400)) {
                root.innerHTML += xmlHttpRequest.responseText;

                console.log(id);
                requestDataContact(id);
                requestDataAnydeskServer(id);
                requestDataAnydeskStore(id);
            } else {
                cardCreateContacts.innerHTML += `Error : ${xmlHttpRequest.status}`;
                console.log(`Status : ${xmlHttpRequest.status}`);
            }
        }
    }
    xmlHttpRequest.send();
}

const refreshPageViewContact = () => {
    var id = document.getElementById('id_contact').value;
    viewContact(id)
}

const requestDataContact = async(id) => {
    let response = await fetch(`../contacts/showContactJson/${id}`);

    if (response.ok) {
        let data = await response.json();
        console.log(data);
        document.getElementById('id_contact').value = data[0].id ? data[0].id : "";
        document.getElementById('name').value = data[0].nome ? data[0].nome : "";
        document.getElementById('company').value = data[0].empresa ? data[0].empresa : "";
        document.getElementById('email').value = data[0].email ? data[0].email : "";
        document.getElementById('phone').value = data[0].tel_celular ? data[0].tel_celular : "";
        document.getElementById('phone_company').value = data[0].tel_empresa ? data[0].tel_empresa : "";
        document.getElementById('observations').value = data[0].observacoes ? data[0].observacoes : "";
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

const requestDeleteContact = async() => {
    const id = document.getElementById('id_contact').value;
    window.open(`http://localhost:90/Projetos/Contatos/contacts/deleteContact/${id}`);
    on()
    window.close();
}

const newPopup = () => {
    text = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <style>
    .card-new-server {
        position: relative;
        transition-duration: .2s;
        background: #f8f8f8;
    }
    .card-new-server:hover {
        background: white;
        box-shadow: 0 0 .5rem rgb(10 10 10 / 25%);
    }
    .card-new-server input::placeholder{
        color: #c9c9c9;
    }
    input{
        border-radius: 60px;
        transition-duration: .1s;
        cursor: pointer;
    }

    label{
        font-size: 14px;
        font-weight: 500;
    }
    .btn {
        width: 334px;
        margin-top: 10px;
        cursor: pointer;
        color: white;
        background: #8E0E00;
        background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
        background: linear-gradient(to right, #1F1C18, #8E0E00);

        transition: .3s;
    }
    .btn:hover{
        color: white;
        box-shadow: 1px 1px 4px #8E0E00;
    }
    </style>
    <title>Servidores</title>
    
    <div class="container-fluid" style="margin-top: 20px;">
        <div class="card card-new-server">
            <div class="card-body">
                <form action="../contacts/newServer" method="get">
                <input type="hidden" name="id_contact" value="${document.getElementById('id_contact').value}">
                    <label class="form-label">Servidor Principal</label>
                    <input type="text" class="form-control" name="adk_server" id="adk_server" placeholder="Servidor do prime" >

                    <label class="form-label">Servidor Loja</label>
                    <input type="text" class="form-control" name="adk_store_server" id="adk_store_server" placeholder="Servidor da loja">

                    <label class="form-label">Servidor PDV</label>
                    <input type="text" class="form-control" name="adk_store_pdv" id="adk_store_pdv" placeholder="Servidor do PDV">

                    <button class="btn" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    </div>
    `

    const varWindow = window.open(
        '',
        '',
        "width=400, height=350, top=100, left=500, scroll=no");
    varWindow.document.write(text);
}

const requestDataAnydeskServer = async(id) => {
    document.getElementById('rowCardServer').innerHTML = "";
    let response = await fetch(`../contacts/showAnydeskServerJson/${id}`);

    if (response.ok) {
        let data = await response.json();
        console.log(data);
        data.map((elem) => {
                let text = `
                <div class="col-4 server">
                    <div class="card card-new-contact ">
                        <div class="card-header">
                            <h3>Servidor</h3>
                        </div>
                        <div class="card-body">
                            <label for="adk_server">Servidor</label>
                            <input type="text" id="adk_server" name="adk_server"
                                placeholder="AnyDesk do Servidor" class="form-control" value="${elem.adk_servidor ?? ""}" disabled>
                            
                            <input type="hidden" id="id_server" name="id_server" value="${elem.id ?? ""}">
                            <input type="hidden" id="id_contact" name="id_contact" value="${elem.id_contato ?? ""}">
                            <input type="hidden" id="id_user" name="id_user" value="${elem.id_usuario ?? ""}">
                            
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn-server" onclick="requestDeleteServer(${elem.id ?? ""}, ${elem.id_contato ?? ""})">Excluir</button>
                                </div>
                                <div class="col-6">
                                    <button class="btn-server" onclick="requestUpdateServer(${elem.id ?? ""}, ${elem.id_contato ?? ""})">Atualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
                document.getElementById('rowCardServer').innerHTML += text;
                console.log(elem);
            })
            //document.getElementById('adk_server').value = data[0].adk_servidor ? data[0].adk_servidor : "";
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

const requestDataAnydeskStore = async(id) => {
    document.getElementById('rowCardPDV').innerHTML = "";
    let response = await fetch(`../contacts/showAnydeskStoreJson/${id}`);

    if (response.ok) {
        let data = await response.json();
        console.log(data);
        data.map((elem) => {
            let text = `
            <div class="col-4 server-store">
                <div class="card card-new-contact">
                    <div class="card-header">
                        <h3>Servidor Loja</h3>
                    </div>
                    <div class="card-body">
                        <label for="adk_server_store">Servidor</label>
                        <input type="text" id="adk_server_store" name="adk_server_store"
                            placeholder="Servidor Loja" class="form-control" value="${elem.adk_servidor ?? ""}" disabled>
                    
                        <label for="adk_store_pdv">Servidor PDV</label>
                        <input type="text" id="adk_store_pdv" name="adk_store_pdv"
                            placeholder="Servidor PDV" class="form-control" value="${elem.adk_pdv ?? ""}" disabled>

                        <input type="hidden" id="id_store" name="id_store" value="${elem.id ?? ""}">
                        <input type="hidden" id="id_contact" name="id_contact" value="${elem.id_contato ?? ""}">
                        <input type="hidden" id="id_user" name="id_user" value="${elem.id_usuario ?? ""}">
                        <div class="row">
                            <div class="col-6">
                                <button class="btn-server" onclick="requestDeleteServerStore(${elem.id ?? ""}, ${elem.id_contato ?? ""})">Excluir</button>
                            </div>
                            <div class="col-6">
                                    <button class="btn-server" onclick="requestUpdateServerStore(${elem.id ?? ""}, ${elem.id_contato ?? ""})">Atualizar</button>
                            </div>
                        <div> 
                    </div>
                </div>
            </div>`;
            document.getElementById('rowCardPDV').innerHTML += text;
            console.log(elem);
        });
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

const requestUpdateServer = (id, idContact) => {
    text = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <style>
    .card-new-server {
        position: relative;
        transition-duration: .2s;
        background: #f8f8f8;
    }
    .card-new-server:hover {
        background: white;
        box-shadow: 0 0 .5rem rgb(10 10 10 / 25%);
    }
    .card-new-server input::placeholder{
        color: #c9c9c9;
    }
    input{
        width: 100%;
        height:35px;
        padding: 0 10px;
        border-radius: 60px;
        border: 1px solid #c9c9c9;
        transition-duration: .1s;
        cursor: pointer;
    }

    label{
        font-size: 14px;
        font-weight: 500;
    }
    .btn {
        width: 334px;
        margin-top: 10px;
        cursor: pointer;
        color: white;
        background: #8E0E00;
        background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
        background: linear-gradient(to right, #1F1C18, #8E0E00);

        transition: .3s;
    }
    .btn:hover{
        color: white;
        box-shadow: 1px 1px 4px #8E0E00;
    }
    </style>
    <title>Servidores</title>
    
    <div class="container-fluid" style="margin-top: 20px;">
        <div class="card card-new-server">
            <div class="card-body">
                <form action="../contacts/updateContactServer" method="get">
                
                    <label class="form-label">Servidor</label>
                    <input type="text" name="adk_server">

                    <input type="hidden" name="id_server" value="${id}" >
                    <input type="hidden" name="id_contact" value="${idContact}" >

                    <button class="btn" type="submit">Atualizar</button>
                </form>
            </div>
        </div>
    </div>
    `

    const varWindow = window.open(
        '',
        '',
        "width=400, height=350, top=100, left=500, scroll=no");
    varWindow.document.write(text);
}

const requestUpdateServerStore = (id, idContact) => {
    text = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <style>
    .card-new-server {
        position: relative;
        transition-duration: .2s;
        background: #f8f8f8;
    }
    .card-new-server:hover {
        background: white;
        box-shadow: 0 0 .5rem rgb(10 10 10 / 25%);
    }
    .card-new-server input::placeholder{
        color: #c9c9c9;
    }
    input{
        width: 100%;
        height:35px;
        padding: 0 10px;
        border-radius: 60px;
        border: 1px solid #c9c9c9;
        transition-duration: .1s;
        cursor: pointer;
    }

    label{
        font-size: 14px;
        font-weight: 500;
    }
    .btn {
        width: 334px;
        margin-top: 10px;
        cursor: pointer;
        color: white;
        background: #8E0E00;
        background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
        background: linear-gradient(to right, #1F1C18, #8E0E00);

        transition: .3s;
    }
    .btn:hover{
        color: white;
        box-shadow: 1px 1px 4px #8E0E00;
    }
    </style>
    <title>Servidores</title>
    
    <div class="container-fluid" style="margin-top: 20px;">
        <div class="card card-new-server">
            <div class="card-body">
                <form action="../contacts/updateContactServer" method="get">
                
                    <label class="form-label">Servidor Loja</label>
                    <input type="text" name="adk_store_server">

                    <label class="form-label">Servidor PDV</label>
                    <input type="text" name="adk_store_pdv">

                    <input type="hidden" name="id_store" value="${id}" >
                    <input type="hidden" name="id_contact" value="${idContact}" >

                    <button class="btn" type="submit">Atualizar</button>
                </form>
            </div>
        </div>
    </div>
    `

    const varWindow = window.open(
        '',
        '',
        "width=400, height=350, top=100, left=500, scroll=no");
    varWindow.document.write(text);
}

const requestUpdateContact = () => {
    text = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <style>
    body {
        background: #f9f9f9;
    }
    .card-new-server {
        position: relative;
        transition-duration: .2s;
        background: #f8f8f8;
    }
    .card-new-server:hover {
        background: white;
        box-shadow: 0 0 .5rem rgb(10 10 10 / 25%);
    }
    input[type="text"], input[type="tel"], input[type="email"]{
        height: 35px;
        padding: 0 10px;
        border-radius: 60px;
        border: 1px solid #c9c9c9;
        transition-duration: .1s;
        cursor: pointer;
    }
    label{
        font-size: 14px;
        font-weight: 500;
        margin: 5px 0;
    }
    .btn {
        width: 100%;
        margin-top: 10px;
        cursor: pointer;
        color: white;
        background: #8E0E00;
        background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
        background: linear-gradient(to right, #1F1C18, #8E0E00);

        transition: .3s;
    }
    .btn:hover{
        color: white;
        box-shadow: 1px 1px 4px #8E0E00;
    }
    </style>
    <title>Atualizar Contato</title>
    
    <div class="container-fluid" style="margin-top: 20px;">
        <div class="card card-new-server">
            <div class="card-body">
                <form action="../contacts/updateContact" method="post">
                    <div class="row">
                        <input type="hidden" name="id_contact" id="id_contact" value="${document.getElementById('id_contact').value}">

                        <div class="col-4">
                            <label for="name">Nome</label>
                            <input type="text" name="name" id="name" placeholder="Nome do Gerente" class="form-control" value="${document.getElementById('name').value}">

                            <label for="company">Empresa</label>
                            <input type="text" name="company" id="company" placeholder="Empresa" class="form-control" value="${document.getElementById('company').value}">
                        </div>

                        <div class="col-4">
                            <label for="phone">Telefone Cel.</label>
                            <input type="tel" name="phone" id="phone" placeholder="Telefone cel." class="form-control" value="${document.getElementById('phone').value}">

                            <label for="phone_company">Telefone Emp.</label>
                            <input type="tel" name="phone_company" id="phone_company" placeholder="Telefone emp."
                                class="form-control" value="${document.getElementById('phone_company').value}">
                        </div>

                        <div class="col-4">
                            <label for="email">E-mail</label>
                            <input type="email" name="email" id="email" placeholder="E-mail" class="form-control" value="${document.getElementById('email').value}">

                            <label for="observations">Observações</label>
                            <textarea name="observations" id="observations" placeholder="Observações"
                                class="form-control">${document.getElementById('observations').value}</textarea>
                            <button class="btn" type="submit">Atualizar</button>
                        
                        </div>
                    </div>
               </form>
            </div>
        </div>
    </div>
    `

    const varWindow = window.open(
        '',
        '',
        "width=800, height=350, top=100, left=300");
    varWindow.document.write(text);
}

const requestDeleteServer = (id, idContact) => {
    text = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <style>
    .card-new-server {
        position: relative;
        transition-duration: .2s;
        background: #f8f8f8;
    }
    .card-new-server:hover {
        background: white;
        box-shadow: 0 0 .5rem rgb(10 10 10 / 25%);
    }
    .card-new-server input::placeholder{
        color: #c9c9c9;
    }
    input{
        width: 100%;
        padding: 0 10px;
        border-radius: 60px;
        border: 1px solid #c9c9c9;
        transition-duration: .1s;
        cursor: pointer;
    }

    label{
        font-size: 14px;
        font-weight: 500;
    }
    h5 {
        font-size: 14px;
    }
    .btn {
        width: 334px;
        margin-top: 10px;
        cursor: pointer;
        color: white;
        background: #8E0E00;
        background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
        background: linear-gradient(to right, #1F1C18, #8E0E00);

        transition: .3s;
    }
    .btn:hover{
        color: white;
        box-shadow: 1px 1px 4px #8E0E00;
    }
    </style>
    <title>Servidores</title>
    
    <div class="container-fluid" style="margin-top: 20px;">
        <div class="card card-new-server">
            <div class="card-body">
                <form action="../contacts/deleteServer" method="post">

                    <h5 class='text-center'>${document.getElementById('name').value ?? document.getElementById('company').value}</h5>

                    <label class="form-label">Id</label>
                    <input type="text" name="id_server" value="${id}" >

                    <label class="form-label">Id Contato</label>
                    <input type="text" name="id_contact" value="${idContact}" >

                    <button class="btn" type="submit">Excluir</button>
                </form>
            </div>
        </div>
    </div>
    `

    const varWindow = window.open(
        '',
        '',
        "width=400, height=350, top=100, left=500, scroll=no");
    varWindow.document.write(text);
}

const requestDeleteServerStore = (id, idContact) => {
    text = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <style>
    .card-new-server {
        position: relative;
        transition-duration: .2s;
        background: #f8f8f8;
    }
    .card-new-server:hover {
        background: white;
        box-shadow: 0 0 .5rem rgb(10 10 10 / 25%);
    }
    .card-new-server input::placeholder{
        color: #c9c9c9;
    }
    input{
        width: 100%;
        padding: 0 10px;
        border-radius: 60px;
        border: 1px solid #c9c9c9;
        transition-duration: .1s;
        cursor: pointer;
    }

    label{
        font-size: 14px;
        font-weight: 500;
    }
    .btn {
        width: 334px;
        margin-top: 10px;
        cursor: pointer;
        color: white;
        background: #8E0E00;
        background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
        background: linear-gradient(to right, #1F1C18, #8E0E00);

        transition: .3s;
    }
    .btn:hover{
        color: white;
        box-shadow: 1px 1px 4px #8E0E00;
    }
    </style>
    <title>Servidores</title>
    
    <div class="container-fluid" style="margin-top: 20px;">
        <div class="card card-new-server">
            <div class="card-body">
                <form action="../contacts/deleteServerStore" method="post">
                
                    <label class="form-label">Id</label>
                    <input type="text" name="id_store" value="${id}" >

                    <label class="form-label">Id Contato</label>
                    <input type="text" name="id_contact" value="${idContact}" >

                    <button class="btn" type="submit">Excluir</button>
                </form>
            </div>
        </div>
    </div>
    `

    const varWindow = window.open(
        '',
        '',
        "width=400, height=350, top=100, left=500, scroll=no");
    varWindow.document.write(text);
}

btnNavContacts.addEventListener("click", () => {
    btnNavContacts.className = "nav-item active";
    btnNavNewContacts.className = "nav-item";

    root.innerHTML = "";
    addPageContact();
});

btnNavNewContacts.addEventListener("click", () => {
    btnNavNewContacts.className = "nav-item active";
    btnNavContacts.className = "nav-item";

    root.innerHTML = "";
    addPageCreateContacts();
});