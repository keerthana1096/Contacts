import axios from 'axios';
import CONFIG from './config'
function patchMessages(userName,sentBy,message){
    var res="";

    axios.get(CONFIG.GET_USERS+"/?Username="+userName).then((response)=>{
     res=response.data;
     console.log(res);
     axios.patch(CONFIG.URL+"/Users/"+res[0].id+"/",{
       
        messages:[
            ...res[0].messages,{
                sentBy:sentBy,
                message:message
            }
        ]
}).then((response)=>{
console.log("update response",response)
})
    })
   
    
}
export default patchMessages;