<div class="card card-create" style="padding: 2%;">
    <div class="row">
        <div class="col">
            <div class="card card-new-contact">
                <div class="card-header">
                    <h3>Contato</h3>
                </div>
                <div class="card-body">
                    <div class="row">

                        <div class="col">
                            <label for="name">Nome</label>
                            <input type="text" name="name" id="name" placeholder="Nome do Gerente" class="form-control">

                            <label for="company">Empresa</label>
                            <input type="text" name="company" id="company" placeholder="Empresa" class="form-control">
                        </div>

                        <div class="col">
                            <label for="phone">Telefone Cel.</label>
                            <input type="tel" name="phone" id="phone" placeholder="Telefone cel." class="form-control">

                            <label for="phone_company">Telefone Emp.</label>
                            <input type="tel" name="phone_company" id="phone_company" placeholder="Telefone emp."
                                class="form-control">
                        </div>

                        <div class="col">
                            <label for="email">E-mail</label>
                            <input type="email" name="email" id="email" placeholder="E-mail" class="form-control">

                            <label for="observations">Observações</label>
                            <textarea name="observations" id="observations" placeholder="Observações"
                                class="form-control"></textarea>
                        </div>

                    </div>
                    <input type="hidden" name="id_contact" id="id_contact" value="0">
                    <input type="hidden" name="id_user" value="<?php echo $_SESSION['USER'];?>">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="card card-create" style="padding: 2%; margin-top:20px;">
    <div class="row" id="rowCardServer"></div>
</div>

<div class="card card-create" style="padding: 2%; margin-top:20px;">
    <div class="row" id="rowCardPDV"></div>
</div>

<div class="card card-create" style="padding: 2%;margin-top:20px;">
    <div class="row row-btn">
        <div class="col">
            <button type="submit" class="btn" onclick="requestDeleteContact()">Excluir Contato</button>
        </div>
        <div class="col">
            <button type="submit" class="btn">Atualizar Contato</button>
        </div>
        <div class="col">
            <a class="btn" href="javascript:newPopup()">Novo Server</a>
        </div>
    </div>
</div>