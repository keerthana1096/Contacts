import axios from 'axios';
import CONFIG from './config';
export default function addContacts(data, id) {
    var dataR;
    axios.get(CONFIG.URL + "/Users/?=" + id).then((response) => {
        dataR = response.data
    })
    axios.patch(CONFIG.URL + "/Users/" + id + "/", {
        contacts: [...dataR.contacts,
        {

            name: data.name,
            email: data.email,
            PhoneNumber: data.PhoneNumber,
            Company: data.Company,
            Address: data.Address
        }]
    })
}