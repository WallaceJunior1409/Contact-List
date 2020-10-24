<?php
    $contacts = new ContactsController();
    
    $data = $contacts->showAllContacts();
    if ($data) $num = count($data);
    else $num = 0;
?>

<div class="card">
    <div class="card-body">
        <table class="table table-borderless table-hover table-responsive">
            <thead class="table-light">
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Empresa</th>
                </tr >
            </thead>
            <tbody style="color: #4B8EFF;" id="listContacts">
                <?php
                    $td = "";
                    for ($i=0; $i < $num; $i++) { 
                        $td .= "<tr onclick='viewContact(".$data[$i]['id'].")'>";
                        $td .= "<td id='rowTableContact'>".$data[$i]['nome']."</td>";
                        $td .= "<td id='rowTableContact'>".$data[$i]['email']."</td>";
                        $td .= "<td id='rowTableContact'>".$data[$i]['empresa']."</td>";
                        $td .= "</tr id='rowTableContact'>";
                    }
                    echo $td;
                ?>
            </tbody>
        </table>
    </div>
</div>