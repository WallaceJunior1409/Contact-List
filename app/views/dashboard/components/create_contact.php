<div class="card card-create" style="padding: 2%;">
    <div class="row">

        <div class="col-lg-4 col-md-6">
            <div class="card card-new-contact">
                <div class="card-header">
                    <h3>Contatos</h3>
                </div>
                <div class="card-body">
                    <input type="hidden" name="id">
                    <input type="hidden" name="id_user" value="<?php echo $_SESSION['USER'];?>">

                    <input type="text" name="name" id="name" placeholder="Nome do Gerente" class="form-control">

                    <input type="text" name="company" id="company" placeholder="Empresa" class="form-control">

                    <input type="email" name="email" id="email" placeholder="E-mail" class="form-control">

                    <input type="text" name="phone" id="phone" placeholder="Telefone cel." class="form-control"
                        maxlength="11">

                    <input type="tel" name="phone_company" id="phone_company" placeholder="Telefone emp."
                        class="form-control" maxlength="10">

                    <textarea name="observations" id="observations" placeholder="Observações"
                        class="form-control"></textarea>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card card-new-contact">
                <div class="card-header">
                    <h3>Servidor Loja</h3>
                </div>
                <div class="card-body">
                    <input type="text" name="adk_store_server" id="adk_store_server"
                        placeholder="AnyDesk do Servidor da Loja" class="form-control">
                    <input type="text" name="adk_store_pdv" id="adk_store_pdv" placeholder="AnyDesk do PDV da Loja"
                        class="form-control">
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card card-new-contact">
                <div class="card-header">
                    <h3>Servidor</h3>
                </div>
                <div class="card-body">
                    <input type="text" name="adk_server" id="adk_server" placeholder="AnyDesk do Servidor"
                        class="form-control">
                </div>
            </div>
        </div>

    </div>

    <div class="row row-btn">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col">
            <button class="btn" onclick="createContact()">Criar Contato</button>
        </div>
    </div>
</div>