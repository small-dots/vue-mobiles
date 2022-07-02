<template>
  <div class="w-full">
    <div class="fenxi   text-center py-3">
      2021年第一季度总成绩分析
    </div>
    <div class="flex w-full flex-nowrap gap-2 justify-between text-white">
      <span class="rounded-2xl px-2 py-1" style="background:#00d89c ;">语文</span>
      <span class="rounded-2xl px-2 py-1" style="background:#ff4a35 ;">英语</span>
      <span class="rounded-2xl px-2 py-1" style="background:#e1fff2 ;color: #009688;">数学</span>
      <span class="rounded-2xl px-2 py-1" style="background:#ffe6e6 ;color: #fd5b43;">物理</span>
      <span class="rounded-2xl px-2 py-1" style="background:#e1fff2 ;color: #009688;">历史</span>
      <span class="rounded-2xl px-2 py-1" style="background:#ffe6e6 ;color: #fd5b43">化学</span>
    </div>
    <div class="w-full grid grid-cols-2 gap-4 mt-5">
      <div class="text-center text-white py-4" :style="{
        background: `url(${imglist[0]}) no-repeat`,
        backgroundSize: '100% 100%',
      }">
        <p>历史最高分</p>
        <p>610分</p>
      </div>
      <div class="text-center text-white py-4" :style="{
        background: `url(${imglist[1]}) no-repeat`,
        backgroundSize: '100% 100%',
      }">
        <p>错题集数量</p>
        <p>120道</p>
      </div>
      <div class="text-center text-white py-4" :style="{
        background: `url(${imglist[2]}) no-repeat`,
        backgroundSize: '100% 100%',
      }">
        <p>累计答题数量</p>
        <p>400道</p>
      </div>
      <div class="text-center text-white py-4" :style="{
        background: `url(${imglist[3]}) no-repeat`,
        backgroundSize: '100% 100%',
      }">
        <p>考试次数</p>
        <p>12次</p>
      </div>
    </div>
    <div id="course_chart" class="w-full h-72" style="height: 250px;"></div>

  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
} from "echarts/components";
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  LegendComponent,
  UniversalTransition,
  CanvasRenderer,
]);
const imglist = ref([
  "src/assets/parent_soure1.png",
  "src/assets/parent_soure2.png",
  "src/assets/parent_soure3.png",
  "src/assets/parent_soure4.png",
])
onMounted(() => {
  const myChart = echarts.init(document.getElementById("course_chart"));
  renderLineChart(myChart);
});
const renderLineChart = (chartDom) => {
  const options = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["语文", "数学", "外语", "物理", "历史"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        name: "(日期)",
        type: "category",
        boundaryGap: false,
        data: ["03/20", "04/07", "04/20", "05/12", "05/25"],
      },
    ],
    yAxis: [
      {
        name: "(分数)",
        type: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          show: true,
        },
      },
    ],
    series: [
      {
        name: "语文",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [89, 66, 45, 87, 90, 110, 110],
      },
      {
        name: "数学",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [84, 67, 45, 87, 90, 100, 89],
      },
      {
        name: "外语",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(55, 162, 255)",
            },
            {
              offset: 1,
              color: "rgb(116, 21, 219)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [89, 66, 45, 87, 70, 10, 110],
      },
      {
        name: "物理",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 0, 135)",
            },
            {
              offset: 1,
              color: "rgb(135, 0, 157)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [81, 67, 41, 81, 91, 111, 100],
      },
      {
        name: "历史",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "rgb(224, 62, 76)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [79, 56, 45, 77, 80, 101, 120],
      },
    ],
  };
  options && chartDom.setOption(options);
};
</script>
<style scoped>
.fenxi::after {
  content: "";
  display: inline-block;
  width: 1.5rem;
  height: 3px;
  background: #009688;
  vertical-align: middle;
  border-radius: 4px;
}

.fenxi::before {
  content: "";
  display: inline-block;
  width: 1.5rem;
  height: 3px;
  background: #009688;
  vertical-align: middle;
  border-radius: 4px;
}
</style>
