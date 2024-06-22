<script>
  import { push } from "svelte-spa-router";

  let passcode;

  import { islocked } from "../../store/islocked";
  import { onMount } from "svelte";
  let islocked_here ;
  let message = "Enter lock Code";

  islocked.subscribe( (value) => {

       islocked_here = value
  })

  function Unlock() {
    if (passcode === "12345") {
      islocked.set(false);
      push('/dashboard')
    } else if(passcode !== "12345"){
       
       message = "Wrong passcode entered!!"
         
    }
  }


</script>




<div
  class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-50 flex flex-col justify-end"
>
  <div
    class="relative w-full h-full flex flex-col justify-center items-center gap-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-[120px]"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>

    <span>{message}</span>
    <input
      type="password"
      bind:value={passcode}
      placeholder="Passcode"
      class="border border-1 border-inherit bg-inherit p-3 rounded-md w-[300px]"
    />
    <button class="p-2 rounded-full w-[150px] mt-[15px] bg-[#ffffff] text-[#2f2f2f]" on:click={Unlock}>Unlock</button>
  </div>
</div>
