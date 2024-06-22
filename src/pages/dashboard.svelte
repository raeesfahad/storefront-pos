<script>
  import Dashboardbox from "../lib/components/dashboardbox.svelte";
  import Topbar from "../lib/components/dashboard/Topbar.svelte";
  import Chart from "../lib/components/chart.svelte";
  import Random_Number, { Big_Numbers } from "../lib/functions/random-number";
  import Item from "../lib/item.svelte";
  import FaShoppingBag from 'svelte-icons/fa/FaShoppingBag.svelte'

  import { islocked } from "../store/islocked";
  import { onMount } from "svelte";
  import { isAuthenticated } from "../lib/functions/Authentication";
  import { replace } from "svelte-spa-router";
  let islocked_h;

  islocked.subscribe((value) => {
    islocked_h = value;
  });

  let data = [
    { day: "Sun", sales: Random_Number() },
    { day: "Mon", sales: Random_Number() },
    { day: "Tue", sales: Random_Number() },
    { day: "Wed", sales: Random_Number() },
    { day: "Thu", sales: Random_Number() },
    { day: "Fri", sales: Random_Number() },
    { day: "Sat", sales: Random_Number() },
  ];

  onMount(async () => {
    await isAuthenticated();
  });
</script>

<div class="w-full">
  <div class="mt-[30px]">
    <Topbar />
  </div>

  <div class="flex flex-row justify-between w-[980px]">
    <h1 class="m-[30px] text-2xl font-bold">Dashboard</h1>
    <div
      class="mt-[25px] w-auto h-[38px] bg-[#2f2f2f] rounded-md flex flex-row gap-1"
    >
      <select
        class="bg-inherit text-[#ffffff] m-[10px]"
        name="Select Time"
        id="time"
      >
        <option value="today">Today</option>
        <option value="last-week">Last Week</option>
        <option value="last-month">Last Month</option>
      </select>
    </div>
  </div>

  <div class="flex flex-row ml-[20px] gap-1">
    <Dashboardbox numbers={Big_Numbers()} highlight={"Total Sale"}>
      <svg
        slot="d-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    </Dashboardbox>
    <Dashboardbox numbers={Random_Number()} highlight={"Total Inventory Items"}>
      <svg
        slot="d-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
        />
      </svg>
    </Dashboardbox>
    <Dashboardbox numbers={Random_Number()} highlight={"Low on Stock"}>
      <svg
        slot="d-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
        />
      </svg>
    </Dashboardbox>
    <Dashboardbox numbers={Random_Number()} highlight={"Sold Items"}>

      <svg slot="d-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
      
    
    </Dashboardbox>
  </div>

  <div class="mt-[35px] ml-[10px] flex flex-row gap-3">
    <div class="w-[400px] h-[300px] border border-1 border-[#fffff] rounded-md">
      <div class="flex flex-row justify-between">
        <h3 class="m-[13px] font-semibold">Today's Upsale</h3>
        <button on:click={() => {replace('/inventory')}} class="mx-[15px]">See All</button>
      </div>

      <div class="mt-10px flex flex-col gap-1">
        <Item sold_number={Big_Numbers()} item_name={"Peaches"}>
          <svg slot="item-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </Item>
        <Item sold_number={Big_Numbers()} item_name={"Shower Gel"} > 
          <svg slot="item-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </Item>
        <Item sold_number={Big_Numbers()} item_name={"Instant Ramen"}> 
          <svg slot="item-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </Item>
      </div>
    </div>

    <div
      class="w-[580px] h-[300px] border border-1 border-[#ffffff] rounded-md"
    >
      <div class="flex flex-row justify-between h-[40px]">
        <div class="m-[13px] font-semibold">Accepted Orders</div>
        <div class="mx-[16px] mt-[12px] bg-[#2f2f2f] rounded-md">
          <select
            class="bg-inherit text-[#ffffff] p-[2px] rounded-md"
            name="Select Time"
            id="time"
          >
            <option value="volvo">Week </option>
            <option value="saab">Month</option>
            <option value="audi">Year</option>
          </select>
        </div>
      </div>

      <Chart {data} />
    </div>
  </div>
</div>
