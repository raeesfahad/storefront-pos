import supabase from "./supbase"

export default async function GetCategoryName(id){

    try{

        const { data, error } = await supabase.schema('public').from('product_categories').select().eq('id', id)
        if(error) {

            console.log(error.message)
        }
       
        return data[0].category_name
    }
    catch(err){

        console.log(err.message)
    }


}