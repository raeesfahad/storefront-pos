<script>
  import { number } from "echarts";

  export let active = false;
  export let numbers;
  export let highlight;
  let length = numbers.toString().length;
</script>

<div
  class="w-[240px] h-[150px] {active ? 'bg-[#ffffff]' : 'bg-[#2f2f2f]'} {active
    ? 'text-[#2f2f2f]'
    : 'text-[#ffffff]'} rounded-md"
>
  <div
    class="mt-[10px] ml-[20px] size-[40px] rounded-full bg-[#ffffff] text-[#2f2f2f] text-center"
  >
    <div class="flex justify-center items-center h-full">
      <slot name="d-icon" />
    </div>
  </div>

  <div class="ml-[20px] flex flex-col mt-[40px]">
    <span class="text-xs">{highlight}</span>
    <span class="text-3xl font-semibold">
      {length === 2 ? "" : "PKR"} {numbers.toLocaleString()}</span
    >
  </div>
</div>
