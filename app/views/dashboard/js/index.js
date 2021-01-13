const root = document.getElementById('root');

const btnNavContacts = document.getElementById("btn-nav-contact");
const btnNavNewContacts = document.getElementById("btn-nav-newContact");
const cardContact = document.getElementById('cardContact');

const addPageContact = () => {
    const xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open("GET", `../routes/routeTableContact`);

    xmlHttpRequest.onreadystatechange = () => {
        if (xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (xmlHttpRequest.status === 0 || (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 400)) {
                root.innerHTML += xmlHttpRequest.responseText;
            } else {
                cardCreateContacts.innerHTML += `Error : ${xmlHttpRequest.status}`;
                //console.log(`Status : ${xmlHttpRequest.status}`);
            }
        }
    }
    xmlHttpRequest.send();
}
addPageContact()

const addPageSearchContact = async(params = "") => {
    document.getElementById('listContacts').innerHTML = "";

    let response = await fetch(`../contacts/searchContacts/${params}`);

    if (response.ok) {
        let data = await response.json();
        //console.log(data);

        data.map((elem) => {
            let text = `
            <tr onclick="viewContact(${elem.id})">
                <td id="rowTableContact">${elem.nome}</td>
                <td id="rowTableContact">${elem.email}</td>
                <td id="rowTableContact">${elem.empresa}</td>
            </tr>
            `;
            document.getElementById('listContacts').innerHTML += text;
        });
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

const addPageCreateContacts = () => {
    const xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open("GET", "../routes/routeCreateContact");
    xmlHttpRequest.onreadystatechange = () => {
        if (xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (xmlHttpRequest.status === 0 || (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 400)) {
                root.innerHTML += xmlHttpRequest.responseText;
            } else {
                cardCreateContacts.innerHTML += `Error : ${xmlHttpRequest.status}`;
                //console.log(`Status : ${xmlHttpRequest.status}`);
            }
        }
    }
    xmlHttpRequest.send();
}

const viewContact = (id) => {
    const xmlHttpRequest = new XMLHttpRequest();

    root.innerHTML = "";
    xmlHttpRequest.open("GET", "../routes/routeViewContact");
    xmlHttpRequest.onreadystatechange = () => {
        if (xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (xmlHttpRequest.status === 0 || (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 400)) {
                root.innerHTML += xmlHttpRequest.responseText;

                //console.log(id);
                requestDataContact(id);
                requestDataAnydeskServer(id);

            } else {
                cardCreateContacts.innerHTML += `Error : ${xmlHttpRequest.status}`;
                //console.log(`Status : ${xmlHttpRequest.status}`);
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
        //console.log(data);
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

const createContact = () => {
    const xmlHttpRequest = new XMLHttpRequest();
    const newForm = new FormData();

    newForm.append("name", document.getElementById('name').value ?? "");
    newForm.append("company", document.getElementById('company').value ?? "");
    newForm.append("email", document.getElementById('email').value ?? "");
    newForm.append("phone", masks.phone(document.getElementById('phone').value) ?? "");
    newForm.append("phone_company", masks.phone(document.getElementById('phone_company').value) ?? "");
    newForm.append("observations", document.getElementById('observations').value ?? "");

    newForm.append("type_server", document.getElementById('type_server').value ?? "");
    newForm.append("obs_server", document.getElementById('obs_server').value ?? "");

    newForm.append("type_server_store", document.getElementById('type_server_store').value ?? "");
    newForm.append("obs_store", document.getElementById('obs_store').value ?? "");

    xmlHttpRequest.open("POST", "../contacts/newContact");
    xmlHttpRequest.send(newForm);
    location.reload();
}


const requestDeleteContact = async() => {
    if (confirm("Você realmente deseja excluir esse contato?")) {
        const id = document.getElementById('id_contact').value;
        window.open(`http://localhost:90/Projetos/Contatos/contacts/deleteContact/${id}`);
        window.close();
    } else alert("Contato não deletedo!");
}

const newPopup = (idServer) => {
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
    .card-new-server:hover>.card-header{
        transition-duration: .3s;
        background: #8E0E00;
        background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);
        background: linear-gradient(to right, #1F1C18, #8E0E00);
    }
    .card-header h3 {
        text-align: center;
        font-weight: 300;
        color: #c9c9c9;
    }
    .card-new-server input::placeholder{
        color: #c9c9c9;
    }
    input[type="text"]{
        border-radius: 60px;
        transition-duration: .1s;
        cursor: pointer;
        outline: none;
    }
    input[type="text"]:focus {
        border: 1px solid #8E0E00;
        box-shadow: 
    }
    textarea {
        width: 100%;
        border-radius: 10px;
        border-color: #c9c9c9;
    }
    textarea:focus
    {
        border: 1px solid #8E0E00;
        outline: none;
    }

    label{
        font-size: 14px;
        font-weight: 500;
    }
    .btn {
        position: relative;
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
    <title>Servidores</title>
    
    <div class="container-fluid" style="margin-top: 20px;">
        <div class="card card-new-server">
            <div class="card-header">
                <h3>Servidor</h3>
            </div>
            <div class="card-body">
                <form action="../contacts/newServer" method="post">
                    <input type="hidden" name="id_contact" value="${document.getElementById('id_contact').value}">
                    
                    <label class="form-label">Tipo do Servidor</label>
                    <input type="text" class="form-control" name="type_server" id="type_server" placeholder="Ex. AnyDesk" >

                    <label class="form-label">Dados do Servidor</label>
                    <textarea class="form-label" name="obs_server" id="obs_server"></textarea>

                    <button class="btn" type="submit">Salvar</button>
                </form>
            </div>
        </div>

        <div class="card card-new-server mt-3">
            <div class="card-header">
                <h3>Servidor Loja</h3>
            </div>
            <div class="card-body">
                <form action="../contacts/newServer" method="POST">
                    <input type="hidden" name="id_contact" value="${document.getElementById('id_contact').value}">
                    <input type="hidden" name="id_adk_server" value="${idServer}">
                    
                    <label class="form-label">Tipo do Servidor Loja</label>
                    <input type="text" class="form-control" name="type_server_store" id="type_server_store" placeholder="Ex. AnyDesk" >

                    <label class="form-label">Dados do Server Loja</label>
                    <textarea class="form-label" name="obs_store" id="obs_store"></textarea>

                    <button class="btn" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    </div>
    `;
    const varWindow = window.open(
        '',
        '',
        "width=400, height=350, top=100, left=500");
    varWindow.document.write(text);
}

const requestDataAnydeskServer = async(id) => {
    document.getElementById('serverRoot').innerHTML = "";

    let responseServer = await fetch(`../contacts/showAnydeskServerJson/${id}`);

    if (responseServer.ok) {
        let dataServer = await responseServer.json();
        //console.log(dataServer);

        dataServer.map((elem) => {
            let text = `
            <div class="card card-create" style="margin-top: 20px;padding: 2%;">
                <div class="row">
                    <div class="col-4">
                        <div class="card card-new-contact">
                            <div class="card-header">
                                <h3>Servidor</h3>
                            </div>
                            <div class="card-body">
                            
                                <label>Tipo do Servidor</label>
                                <input type="text" id="type_server" value="${elem.tipo_servidor ?? ""}" class="form-control" disabled>
                                
                                <label>Dados do Servidor</label>
                                <textarea class="form-control" id="obs_server" disabled>${elem.obs_servidor ?? ""}</textarea>
                            
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn-server" onclick="requestDeleteServer(${elem.id}, ${elem.id_contato})">Excluir</button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn-server" onclick="requestUpdateServer(${elem.id}, ${elem.id_contato})">Atualizar</button>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-3" id="rowServer${elem.id}"></div>

                <div class="row">
                    <div class="col">
                        <div class="card card-create" style="padding: 2%;margin-top:20px;">
                            <div class="row row-btn">
                                <div class="col">
                                    <button type="submit" class="btn" onclick="requestDeleteContact()">Excluir Contato</button>
                                </div>
                                <div class="col">
                                    <button type="submit" class="btn" onclick="refreshPageViewContact()">Atualizar Pagina</button>
                                </div>
                                <div class="col">
                                    <a class="btn" href="javascript:newPopup(${elem.id})">Novo Server</a>
                                </div>
                            </div>
                        </div>
                    </div>
                <div>
            </div>`;
            document.getElementById('serverRoot').innerHTML += text;
            //console.log(elem);
            requestDataAnydeskStore(elem.id_contato, elem.id);
        });
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

const requestDataAnydeskStore = async(id, idServer) => {
    document.getElementById(`rowServer${idServer}`).innerHTML = "";

    let responseStore = await fetch(`../contacts/showAnydeskStoreJson/${id}/${idServer}`);
    if (responseStore.ok) {
        let dataStore = await responseStore.json();

        dataStore.map((elem) => {
            if (elem.id_adk_servidor == idServer) {

                let text = `
                <div class="col-4 server-store ">
                    <div class="card card-new-contact">
                        <div class="card-header">
                            <h3>Servidor Loja</h3>
                        </div>
                        <div class="card-body">
                            <label for="adk_server_store">Tipo do Servidor</label>
                            <input type="text" id="adk_server_store" name="adk_server_store"
                                placeholder="Servidor Loja" class="form-control" value="${elem.tipo_servidor ?? ""}" disabled>
                        
                            <label for="adk_store_pdv">Dados do Servidor PDV</label>
                            <textarea class="form-control" disabled>${elem.obs_loja}</textarea>

                            <input type="hidden" id="id_store" name="id_store" value="${elem.id ?? ""}">
                            <input type="hidden" id="id_adk_server" name="id_adk_server" value="${elem.id_adk_server ?? ""}">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn-server" onclick="requestDeleteServerStore(${elem.id}, ${elem.id_contato})">Excluir</button>
                                </div>
                                <div class="col-6">
                                        <button class="btn-server" onclick="requestUpdateServerStore(${elem.id}, ${elem.id_contato})">Atualizar</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>`;
                //console.log(elem);
                document.getElementById(`rowServer${idServer}`).innerHTML += text;
            } else return "";
        });
    } else {
        alert("HTTP-Error: " + response.status);
        return "";
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
    input[type="text"]{
        width: 100%;
        height: 35px;
        padding: 0px 10px;
        border: 1px solid #c9c9c9;
        border-radius: 60px;
        transition-duration: .1s;
        cursor: pointer;
        outline: none;
    }
    input[type="text"]:focus {
        border: 1px solid #8E0E00;
        box-shadow: 
    }
    textarea {
        width: 100%;
        height: 80px;
        padding: 4px 10px;
        border-radius: 10px;
        border-color: #c9c9c9;
        font-size: 16px;
    }
    textarea:focus
    {
        border: 1px solid #8E0E00;
        outline: none;
    }
    .card-new-server textarea::placeholder{
        color: #c9c9c9;
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
                <form action="../contacts/updateContactServer" method="post">
                
                    <label class="form-label">Tipo do Servidor</label>
                    <input type="text" name="type_server" id="type_server" placeholder="Ex. AnyDesk"
                        class="form-control">
                
                    <label class="form-label">Dados do Servidor</label>
                    <textarea name="obs_server" id="obs_server"
                        placeholder="Dados do Servidor"></textarea>

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
    input[type="text"]{
        width: 100%;
        height: 35px;
        padding: 0px 10px;
        border: 1px solid #c9c9c9;
        border-radius: 60px;
        transition-duration: .1s;
        cursor: pointer;
        outline: none;
    }
    input[type="text"]:focus {
        border: 1px solid #8E0E00;
        box-shadow: 
    }
    textarea {
        width: 100%;
        height: 80px;
        padding: 4px 10px;
        border-radius: 10px;
        border-color: #c9c9c9;
        font-size: 16px;
    }
    textarea:focus
    {
        border: 1px solid #8E0E00;
        outline: none;
    }
    .card-new-server textarea::placeholder{
        color: #c9c9c9;
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
    <title>Atualizar Servidor Loja</title>
    
    <div class="container-fluid" style="margin-top: 20px;">
        <div class="card card-new-server">
            <div class="card-body">
                <form action="../contacts/updateContactServer" method="post">
                
                    <label class="form-label">Tipo do Servidor Loja</label>
                    <input type="text" name="type_server_store" placeholder="Ex. AnyDesk">

                    <label class="form-label">Dados do Servidor Loja</label>
                    <textarea name="obs_store" placeholder="Dados do Servidor da Loja"></textarea>

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

    <title>Servidor Prime</title>
    
    <div class="container-fluid" style="margin-top: 20px;">
        <div class="card card-new-server">
            <div class="card-body">
                <form action="../contacts/deleteServer" method="post">

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
    <title>Servidor Loja</title>
    
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
/**
 * Mask
 */
const masks = {
    phone(value) {
        const newPhone = value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1');
        //console.log(newPhone);
        return newPhone;
    }
}