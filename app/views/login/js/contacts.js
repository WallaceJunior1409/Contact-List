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

const requestDeleteContact = async() => {
    if (confirm("Você realmente deseja excluir esse contato?")) {
        const id = document.getElementById('id_contact').value;
        window.open(`http://localhost:90/Projetos/Contatos/contacts/deleteContact/${id}`);
        window.close();
    } else alert("Contato não deletedo!");
}

export default { requestDataContact, createContact, requestUpdateContact, requestDeleteContact};