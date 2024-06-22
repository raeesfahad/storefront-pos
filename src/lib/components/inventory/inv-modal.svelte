<script>
  import { modal_state, isProduct } from "../../../store/inventory-controls";
</script>

<div
  class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-50 flex flex-col justify-end"
>
  <div class="relative w-full h-full flex justify-center items-center">
    <div class="bg-[#131111] p-[8px] rounded-md">
      <div class="flex flex-row justify-between">
        <span></span>
        <h2 class="text-center mt-[15px] mx-[30px] text-3xl font-bold">
          Add {$isProduct ? "Product" : "Category"}
        </h2>
        <button
          class="mx-[15px]"
          on:click={() => {
            modal_state.set(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      <slot name="form" />
    </div>
  </div>
</div>
