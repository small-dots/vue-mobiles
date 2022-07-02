<template>
  <div class="p-3 h-full overflow-auto flex flex-col justify-start items-center gap-4">
    <div class="flex gap-3">
      <el-date-picker v-model="date" type="date" placeholder="请选择日期" />
      <el-select v-model="xueqi" placeholder="请选择学期考试">
        <el-option v-for="item in [{ name: '高一上学期', value: '1' }]" :key="item.value" :label="item.name"
          :value="item.value" />
      </el-select>
    </div>
    <div class="fenxi">
      2021年上学期总成绩分析
    </div>
    <div class="w-full grid grid-cols-2 gap-4">
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
    <div id="barchart-dsds" class="w-full h-64" style="height:250px"></div>
    <pm />
    <fx />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import pm from "./pm.vue"
import fx from './fx.vue'
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
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
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);
const imglist = ref([
  "src/assets/parent_soure1.png",
  "src/assets/parent_soure2.png",
  "src/assets/parent_soure3.png",
  "src/assets/parent_soure4.png",
])
const date = ref(null)
const xueqi = ref('')
onMounted(() => {
  console.log(document.getElementById("barchart-dsds"))
  const myChart = echarts.init(document.getElementById("barchart-dsds"));
  renderChart(myChart);
});
const renderChart = (myChart) => {
  const option = {
    xAxis: {
      type: "category",
      name: "(日期)",
      data: ["03/20", "04/20", "05/11", "06/21", "07/01", "07/20"],
    },
    yAxis: {
      name: "(分数)",
      splitLine: {
        show: false,
      },
      axisLine: {
        show: true
      },
      type: "value",
    },
    label: {
      show: true,
      position: "top",
      align: "center",
      formatter: ["{a|(模拟考)}", "{b|{c}}"].join("\n"),
      rich: {
        a: {
          color: "gray",
          lineHeight: 20,
        },
        b: {
          color: "#fd5b43",
        },
      },
    },

    series: [
      {
        data: [485, 390, 580, 485, 610, 550],
        type: "bar",
        barWidth: "13px",
        itemStyle: {
          color: "#00d3a0",
          borderRadius: [10, 10, 0, 0],
        },
      },
    ],
  };
  option && myChart.setOption(option);
};
</script>
<style scoped>
.fenxi::after {
  content: "";
  display: inline-block;
  width: 1.5rem;
  height: 4px;
  background: #009688;
  vertical-align: middle;
  border-radius: 4px;
}

.fenxi::before {
  content: "";
  display: inline-block;
  width: 1.5rem;
  height: 4px;
  background: #009688;
  vertical-align: middle;
  border-radius: 4px;
}
</style>
