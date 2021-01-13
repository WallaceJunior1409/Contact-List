
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

export default { addPageContact, addPageSearchContact, addPageCreateContacts, refreshPageViewContact };

