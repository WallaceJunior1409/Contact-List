const root = document.getElementById('root');

const btnNavContacts = document.getElementById("btn-nav-contact");
const btnNavNewContacts = document.getElementById("btn-nav-newContact");
const btnLinkCreateServer = () => {
    const idContact = document.getElementById('id_contact').value;
    sessionStorage.setItem("ID_CONTACT", idContact);
};

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

const requestDataAnydeskServer = async(id) => {
    document.getElementById('rowCardServer').innerHTML = "";
    let response = await fetch(`../contacts/showAnydeskServerJson/${id}`);

    if (response.ok) {
        let data = await response.json();
        console.log(data);
        data.map((elem) => {
                let text = `
                <div class="col-4">
                    <div class="card card-new-contact">
                        <div class="card-header">
                            <h3>Servidor</h3>
                        </div>
                        <div class="card-body">
                            <label for="adk_server">Servidor</label>
                            <input type="number" id="adk_server" name="adk_server"
                                placeholder="AnyDesk do Servidor" class="form-control" value="${elem.adk_servidor ?? ""}">
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
            <div class="col-4">
                <div class="card card-new-contact">
                    <div class="card-header">
                        <h3>Servidor Loja</h3>
                    </div>
                    <div class="card-body">
                        <label for="adk_server_store">Servidor</label>
                        <input type="number" id="adk_server_store" name="adk_server_store"
                            placeholder="AnyDesk do Servidor" class="form-control" value="${elem.adk_servidor ?? ""}">
                    
                        <label for="adk_store_pdv">Servidor PDV</label>
                        <input type="number" id="adk_store_pdv" name="adk_store_pdv"
                            placeholder="AnyDesk do Servidor" class="form-control" value="${elem.adk_pdv ?? ""}">
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

const requestDeleteContact = async() => {
    const id = document.getElementById('id_contact').value;
    window.open(`http://localhost:90/Projetos/Contatos/contacts/deleteContact/${id}`);
    on()
    window.close();
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

function newPopup() {
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
                    <input type="text" class="form-control" name="adk_server" id="adk_server" placeholder="Servidor do prime">

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