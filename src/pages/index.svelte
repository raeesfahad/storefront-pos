<script>
  // @ts-nocheck

  import Categorybox from "../lib/components/dashboard/categorybox.svelte";
  import Item from "../lib/components/dashboard/item.svelte";
  import Purchased from "../lib/components/dashboard/purchased.svelte";
  import Topbar from "../lib/components/dashboard/Topbar.svelte";
  import { sold_items, sold_item_price } from "../store/sold_items";
  import { onMount } from "svelte";
  import { resetItemPrice } from "../store/item_count";
  import PaymentModal from "../lib/components/payment-modal.svelte";
  import {
    categories_global,
    getCategories,
    nextPage,
    prevPage,
  } from "../store/categories";
  import {
    loading_state,
    error_state,
    error_message,
  } from "../store/loading-eroor";
  
  import Loading from "../lib/components/loading.svelte";
  import ErrorPage from "../lib/components/error-page.svelte";

  let modalOpen;
  let cust_name;
  let items_products = [];
  $: sold_items_here = [];

  let currentProductPage = 0;
  let itemsPerProductPage = 6; // Change this to 6
  let paginatedItems = [];

  $: {
    paginatedItems = items_products.slice(
      currentProductPage * itemsPerProductPage,
      (currentProductPage + 1) * itemsPerProductPage
    );
  }

  function nextProductPage() {
    if (
      (currentProductPage + 1) * itemsPerProductPage <
      items_products.length
    ) {
      currentProductPage += 1;
    }
  }

  function prevProductPage() {
    if (currentProductPage > 0) {
      currentProductPage -= 1;
    }
  }

  async function refreshData() {
    $categories_global.length === 0 && getCategories();
  }

  categories_global.subscribe(refreshData);

  $: {
    let total = 0;
    for (let item of sold_items_here) {
      total += Number(item.item_count) * Number(item.item_price);
    }
    $sold_item_price = total; // update the store
  }

  sold_items.subscribe((values) => {
    sold_items_here = [...values];
  });

  let category_name = null;

  let categories = [];

  categories_global.subscribe((values) => {
    categories = [...values];
  });

  let active_cat = null;

  let errorLoading;

  error_state.subscribe((value) => {
    errorLoading = value;
  });

  onMount(async () => {
    //await isAuthenticated();
    await getCategories();
  });

  const handleClickCategory = async (id) => {
    active_cat = id;
    resetItemPrice();

    const category = categories.find((cat) => cat.id === id);
    items_products = category.products;
    category_name = category.category_name;
  };

  let totalCost;
  $: totalCost = $sold_item_price;

  let totalAmount = 0;
  $: {
    if (typeof totalCost === "number") {
      let charge = Math.round((7 / 100) * totalCost * 100) / 100;
      totalAmount = totalCost + charge;
    } else {
      totalAmount = 0;
    }
  }
</script>

 {#if $categories_global.length === 0}
  
<ErrorPage />


{:else}

{#if modalOpen}
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-50 flex flex-col justify-end"
  >
    <div class="flex justify-center mt-[10px]">
      <button
        class="rounded-full size-[30px] bg-[#2f2f2f] text-white"
        on:click={() => {
          modalOpen = !modalOpen;
        }}>x</button
      >
    </div>

    <div class="relative w-full h-full flex justify-center items-center">
      <PaymentModal
        total_price={totalCost}
        payable={totalAmount}
        customer_name={cust_name}
      />
    </div>
  </div>
{/if}

{#if $loading_state}
    <Loading />
{:else if !$loading_state}
  <div class="w-screen mt-[30px] mx-[] w-[750px]">
    <Topbar />
    <div class="m-[20px] flex flex-row gap-1">
      <div
        class="flex flex-row rounded-full text-[#ffffff] hover:bg-[#ffffff] hover:text-[#111315] {categories.length === 0 ? "is-hidden" : ""}"
      >
        <button
          on:click={async () => {
            await prevPage();
          }}>{"<"}</button
        >
      </div>

      {#each categories as category}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="w-[180px]"
          on:click={() => {
            handleClickCategory(category.id);
          }}
        >
          <Categorybox
            category_name={category.category_name}
            item_count={category.id}
            active={active_cat === category.id}
          />
        </div>
      {/each}

      <div
        class="flex flex-row rounded-full text-[#ffffff] hover:bg-[#ffffff] hover:text-[#111315] {categories.length === 0 ? "is-hidden" : ""}"
      >
        <button
          on:click={async () => {
            await nextPage();
          }}>{">"}</button
        >
      </div>
    </div>

    <!--here-->

    <div class="h-[370px] max-w-[800px] mt-[5px]">
      <span class="ml-[30px] mt-[20px] text-xl font-semibold"
        >{category_name ? `Items in ${category_name}` : ""}</span
      >
      <div class="flex flex-row flex-wrap gap-1 m-[20px] w-full h-[200px]">
        {#each paginatedItems as product}
          {#if product.product_units !== 0}
          <Item
            item_name={product.product_name}
            item_price={product.product_price}
          />
          {/if}
        {/each}

        {#if paginatedItems && paginatedItems.length !== 0}
          <div class="m-[20px] flex flex-row justify-between w-[700px]">
            <button
              on:click={prevProductPage}
              class="px-[20px] py-[10px] rounded-full bg-[#2f2f2f] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#111315]"
              >Prev</button
            >
            <button
              on:click={nextProductPage}
              class="px-[20px] py-[10px] rounded-full bg-[#2f2f2f] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#111315]"
              >Next</button
            >
          </div>
        {/if}

        {#if items_products.length === 0}
          <div>
            <p class="text-center mt-[100px] mx-[180px]">No Products to Show</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <!--sidebar 2-->
  <div class="h-screen w-full">
    <div class="mt-[30px]"><span class="text-xl">Inovice Section</span></div>
    <div
      class="p-[8px] mt-[25px] h-[45px] w-[250px] bg-[#2d2d2d] rounded-md text-gray-300 flex flex-row gap-1"
    >
      <input
        bind:value={cust_name}
        class="bg-inherit focus:outline-none"
        type="text"
        placeholder="Customer Name"
      />
    </div>
    <div class="mt-[30px] flex flex-col gap-1 overflow-y-auto h-[250px]">
      {#each sold_items_here as sold}
        <Purchased
          item_name={sold.item_name}
          item_quant={sold.item_count}
          item_price={sold.item_price}
          product_id={sold.id}
        />
      {/each}
    </div>

    {#if sold_items_here.length > 0}
      <div class=" w-[250px] h-[245px] bg-[#2d2d2d] rounded-lg mt-[10px]">
        <div class="flex flex-row justify-between w-[230px] text-sm font-bold">
          <span class="m-[15px]">Subtotal</span>
          <span class="m-[15px]">Rs {totalCost}</span>
        </div>

        <div
          class=" mt-[0px] flex flex-row justify-between w-[230px] text-sm font-bold"
        >
          <span class=" mx-[15px]">Tax</span>
          <span class=" mx-[15px]">{totalCost < 3000 ? "0%" : "7%"}</span>
        </div>

        <div class="border-t border-dotted w-full mt-[10px]"></div>
        <div class="flex flex-row justify-between">
          <span class=" mx-[15px]">Total</span>
          <span class=" mx-[15px]"
            >PKR {totalCost < 3000 ? totalCost : totalAmount}</span
          >
        </div>

        <div class="flex flex-col mt-[80px] justify-center">
          <button
            on:click={() => {
              modalOpen = !modalOpen;
            }}
            class="bg-[#111315] mx-[30px] rounded-full p-[10px] w-[180px] text-md hover:bg-[#ffffff] hover:text-[#111315]"
          >
            Procced to Pay</button
          >
        </div>
      </div>
    {/if}
  </div>
{:else if errorLoading}
  <h1>{error_message}</h1>
{/if}

{/if}
