import { writable } from "svelte/store";
import { supabase_auth } from "../lib/functions/supbase";


export const staff = writable()


export default async function getStaff(){
   
    const { data: { users }, error } = await supabase_auth.auth.admin.listUsers()

    if(!error){
        
         staff.set(users);

    }

    if(error){
        console.error(error.message)
    }
    
}

