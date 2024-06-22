 import { isLoggedIn } from "../../store/authStore"

 let userLoggedIn;


 isLoggedIn.subscribe( (store)=>{
    
  userLoggedIn = store
 })

export async function isAuthenticated() {
    
    if(!userLoggedIn){

      return false  


    }

    else return true

}
