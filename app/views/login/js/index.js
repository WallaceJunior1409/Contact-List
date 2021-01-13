const pages = require('pages.js');
const contacts = require('contacts.js');
const adkServer = require('server.js');
const serverStore = require('server_store.js');
const utilities = require('utilities.js');

pages.addPageContact();

const root = document.getElementById('root');

const btnNavContacts = document.getElementById("btn-nav-contact");
const btnNavNewContacts = document.getElementById("btn-nav-newContact");
const cardContact = document.getElementById('cardContact');

const addPageContact =  pages.addPageContact();
const addPageSearchContact = pages.addPageSearchContact(search = "");
const addPageCreateContacts = pages.addPageCreateContacts();
const refreshPageViewContact = pages.refreshPageViewContact();

const requestDataContact = contacts.requestDataContact();
const createContact = contacts.createContact();
const requestUpdateContact = contacts.requestUpdateContact();
const requestDeleteContact = contacts.requestDeleteContact();

const newPopup = adkServer.newPopup(idServer);
const requestDataAnydeskServer = adkServer.requestDataAnydeskServer(id);
const requestUpdateServer = adkServer.requestUpdateServer(id, idContact);
const requestDeleteServer = adkServer.requestDeleteServer(id, idContact);

const requestDataAnydeskStore = serverStore.requestDataAnydeskStore(id, idServer);
const requestUpdateServerStore = serverStore.requestUpdateServerStore(id, idContact);
const requestDeleteServerStore = serverStore.requestDeleteServerStore(id, idContact);

const masks = utilities.masks.phone(phoneNumber);


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