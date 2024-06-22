<script>

  import UsersTable from "../lib/components/users/users-table.svelte";
  // import getStaff, { staff } from "../store/users";
  let data = [
    
     {id : 1, username : "admin", role : "Administator", last_active : "5 Hours Ago"}

  ]

  // onMount( async()=>{
      
  //   await getStaff()
  //   console.log($staff)

  // })

</script>


<div class="w-full mt-[60px]">

    <div class="flex flex-row justify-between w-full">
        <h3 class="text-2xl font-semibold">User Managment</h3>
        <button class="bg-[#ffffff] text-black w-[100px] p-1 rounded-full mx-[190px]">Add User</button>
    </div>


    <div class="flex flex-row space-x-2">

      <UsersTable data={data}/>

</div>




</div>