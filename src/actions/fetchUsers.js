import axios from 'axios';
import CONFIG from'./config';

  function  getUsers(){
    axios.get(CONFIG.GET_USERS).then((response)=>{
        return response.data
    }).catch((error)=>{
      return error;
    })

}
export default getUsers;