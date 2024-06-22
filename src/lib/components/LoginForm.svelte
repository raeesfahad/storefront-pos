<script>
  import { pop } from "svelte-spa-router";
  import {
    LoginFunction,
    error_message_auth,
    error_state_auth,
    isLoggedIn,
    loading_state_auth,
  } from "../../store/authStore";

  let formSubmitted = false;
  let e_message;
  let login_success;

  isLoggedIn.subscribe( (store)=>{
     login_success = store
  })


  const postForm = async (event) => {
    event.preventDefault();
    formSubmitted = true;

    const data = new FormData(event.target);

    const username = data.get("username");
    const password = data.get("password");

    await LoginFunction(username, password)

    if(login_success){
      pop()
    }


  };
</script>

<form on:submit={postForm}>
  <div class=" flex flex-col mt-[10px]">
    <label class="mb-[5px]" for="username">Username</label>
    <input
    on:click={ ()=> {error_state_auth.set(false)}}
      class="p-[13px] w-[390px] rounded-md bg-[#2d2d2d]"
      name="username"
      type="text"
    />
  </div>
  <div class=" flex flex-col mt-[10px]">
    <label class="mb-[5px]" for="password">Password</label>
    <input
      class="p-[13px] w-[390px] rounded-md bg-[#2d2d2d]"
      name="password"
      type="password"
    />
  </div>
  <div class="mt-[30px] flex justify-center">
    <button
      class="p-[12px] w-[250px] rounded-full text-xl bg-[#ffffff] text-[#111315]"
      type="submit">{!$loading_state_auth ? "Login" : "Logging In..."}</button
    >
  </div>
  
  {#if $error_state_auth}
  <div class="flex flex-row gap-2 mt-[30px] justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
    
      <p class="text-center rounded-md]  text-[#ffffff]">{$error_message_auth}</p>
    </div>
    
  {/if}


</form>
