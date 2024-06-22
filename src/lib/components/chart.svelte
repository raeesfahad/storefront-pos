<script>
    import { onMount, onDestroy } from 'svelte';
    import * as echarts from 'echarts';


    export let data ;
  
    let chartDom;
    let dark = true
  
    onMount(() => {
      const chart = echarts.init(chartDom);
      const option = {
        title: {
         
        },
        tooltip: {},
        xAxis: {
          data: data.map( (data)=> data.day)
        },
        yAxis: {},
        series: [{
          name: 'Sales',
          type: 'bar',
          data: data.map( (data)=> data.sales),
          itemStyle: {
          color:  dark ? '#ffffff' : '#2f2f2f'
        }
        }]
      };
      chart.setOption(option);
    });

  </script>
  
    <div bind:this={chartDom} class="h-[300px]"></div>

  