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

export default { requestDataAnydeskStore, requestUpdateServerStore, requestDeleteServerStore };