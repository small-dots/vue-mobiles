<template>
  <div class="h-full overflow-auto py-4 px-2">
    <div class="flex flex-nowrap gap-3 justify-center">
      <span class="p-3 bg-slate-100 rounded-md transition-all" :class="{ actived: currentindex === '1' }"
        @click="currentindex = '1'">他的奖励</span>
      <span class="p-3 bg-slate-100 rounded-md transition-all" :class="{ actived: currentindex === '2' }"
        @click="currentindex = '2'">他的惩罚</span>
    </div>
    <div class="" v-show="currentindex === '1'">
      <p class="flex items-center justify-center mt-8">
        <svg t="1656595354158" class="h-6 w-6 inline-block mr-2" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="14909" data-spm-anchor-id="a313x.7781069.0.i37">
          <path
            d="M233.322667 706.858667c64.106667 55.594667 144.725333 92.373333 233.152 101.546666l-111.232 208.298667a26.709333 26.709333 0 0 1-17.557334 7.082667c-3.52 0-3.52 0 0 0-10.538667 0-17.557333-7.082667-21.077333-14.186667l-35.136-127.530667-126.464 35.434667c-7.04 3.541333-17.557333 0-21.077333-7.082667-3.52-7.082667-7.04-14.165333-3.52-21.248l102.912-182.314666z m345.258666 98.282666c86.869333-14.186667 164.906667-54.848 225.941334-113.130666l109.290666 193.621333c3.52 7.082667 3.52 17.706667-3.498666 21.248-3.52 7.082667-14.058667 10.624-21.077334 7.082667l-126.485333-35.413334-35.114667 127.509334c3.498667 10.645333-3.52 17.706667-14.058666 17.706666a19.306667 19.306667 0 0 1-17.557334-10.624l-117.44-208zM510.293333 768C300.202667 768 128 595.029333 128 384S300.202667 0 510.293333 0C720.341333 0 896 169.514667 896 380.544 896 591.573333 723.797333 768 510.293333 768z m-103.189333-192h3.904l97.130667-48.512L605.226667 576c7.765333 0 15.552 0 23.317333-4.053333 3.882667-4.032 7.765333-12.117333 7.765333-20.202667l-11.648-109.141333 73.813334-80.853334c3.904-8.064 7.786667-16.149333 3.904-24.234666 0-8.085333-7.786667-16.170667-15.552-16.170667l-104.917334-20.202667-50.496-97.024c-7.786667-16.149333-31.082667-16.149333-38.869333 0l-50.496 97.024-104.917333 20.202667c-7.765333 4.053333-11.648 8.106667-15.552 16.170667-3.882667 8.085333 0 16.170667 3.904 24.256l73.813333 80.853333-11.648 109.12c-3.882667 8.106667 0 16.170667 7.765333 20.224 3.882667 4.032 7.765333 4.032 11.648 4.032z"
            fill="#239f92" p-id="14910" data-spm-anchor-id="a313x.7781069.0.i34" class="selected"></path>
        </svg>
        <span style="color: #239f92;" class="text-xl font-bold">他的奖励荣誉</span>
      </p>
      <div class="mt-1 flex justify-center">
        <img src="../../../assets/bg.png" />
      </div>

      <div class="relative flex flex-col gap-5 mt-5">
        <div class="longline h-96 left-8"></div>
        <div v-for="(item, index) in rewardPunishment" :key="index"
          class="timeline_item relative flex flex-nowrap justify-stsrt gap-6">
          <div class="dost h-16 w-16" :style="{
            background: colorList[item.randomIndex]['round'],
          }">
            <div class="sub_dots" :style="{
              'background-image': colorList[item.randomIndex]['cricle'],
            }">
              <div class="labels">{{ item.labels.split("-")[0] }}</div>
              <div class="sub_labels">
                {{ item.labels.split("-")[1] }}-{{ item.labels.split("-")[2] }}
              </div>
            </div>
          </div>
          <div class="flot_info  flex flex-col p-3 justify-center" data-position="left">
            <div class="sub_title">{{ item.subTitle }}</div>
            <div class="content text-xs text-gray-500">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="currentindex === '2'">
      <p class="flex items-center justify-center mt-8">
        <svg t="1656595354158" class="h-6 w-6 inline-block mr-2" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="14909" data-spm-anchor-id="a313x.7781069.0.i37">
          <path
            d="M233.322667 706.858667c64.106667 55.594667 144.725333 92.373333 233.152 101.546666l-111.232 208.298667a26.709333 26.709333 0 0 1-17.557334 7.082667c-3.52 0-3.52 0 0 0-10.538667 0-17.557333-7.082667-21.077333-14.186667l-35.136-127.530667-126.464 35.434667c-7.04 3.541333-17.557333 0-21.077333-7.082667-3.52-7.082667-7.04-14.165333-3.52-21.248l102.912-182.314666z m345.258666 98.282666c86.869333-14.186667 164.906667-54.848 225.941334-113.130666l109.290666 193.621333c3.52 7.082667 3.52 17.706667-3.498666 21.248-3.52 7.082667-14.058667 10.624-21.077334 7.082667l-126.485333-35.413334-35.114667 127.509334c3.498667 10.645333-3.52 17.706667-14.058666 17.706666a19.306667 19.306667 0 0 1-17.557334-10.624l-117.44-208zM510.293333 768C300.202667 768 128 595.029333 128 384S300.202667 0 510.293333 0C720.341333 0 896 169.514667 896 380.544 896 591.573333 723.797333 768 510.293333 768z m-103.189333-192h3.904l97.130667-48.512L605.226667 576c7.765333 0 15.552 0 23.317333-4.053333 3.882667-4.032 7.765333-12.117333 7.765333-20.202667l-11.648-109.141333 73.813334-80.853334c3.904-8.064 7.786667-16.149333 3.904-24.234666 0-8.085333-7.786667-16.170667-15.552-16.170667l-104.917334-20.202667-50.496-97.024c-7.786667-16.149333-31.082667-16.149333-38.869333 0l-50.496 97.024-104.917333 20.202667c-7.765333 4.053333-11.648 8.106667-15.552 16.170667-3.882667 8.085333 0 16.170667 3.904 24.256l73.813333 80.853333-11.648 109.12c-3.882667 8.106667 0 16.170667 7.765333 20.224 3.882667 4.032 7.765333 4.032 11.648 4.032z"
            fill="#239f92" p-id="14910" data-spm-anchor-id="a313x.7781069.0.i34" class="selected"></path>
        </svg>
        <span style="color: #239f92;" class="text-xl font-bold">他的惩罚记录</span>
      </p>
      <div class="mt-1 flex justify-center">
        <img src="../../../assets/bg.png" />
      </div>

      <div class="relative flex flex-col gap-5 mt-5">
        <div class="longline h-96 left-8"></div>
        <div v-for="(item, index) in rewardPunishment1" :key="index"
          class="timeline_item relative flex flex-nowrap justify-start gap-6">
          <div class="dost h-16 w-16" :style="{
            background: colorList[item.randomIndex]['round'],
          }">
            <div class="sub_dots" :style="{
              'background-image': colorList[item.randomIndex]['cricle'],
            }">
              <div class="labels">{{ item.labels.split("-")[0] }}</div>
              <div class="sub_labels">
                {{ item.labels.split("-")[1] }}-{{ item.labels.split("-")[2] }}
              </div>
            </div>
          </div>
          <div class="flot_info   flex flex-col p-3 justify-center" data-position="left">
            <div class="sub_title">{{ item.subTitle }}</div>
            <div class="content text-xs text-gray-500">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
const currentindex = ref('1')
const rewardPunishment = ref([])
const rewardPunishment1 = ref([])

const colorList = ref([
  {
    round: "#d2ecff",
    cricle:
      "linear-gradient(-66deg, #3163fd 0%, #1f9fff 100%), linear-gradient(#000000, #000000)",
  },
  {
    round: "#d0f6f7",
    cricle:
      "linear-gradient(-66deg, #06bed8 0%, #21e6d3 100%), linear-gradient(#000000, #000000)",
  },
  {
    round: "#fde3dd",
    cricle:
      "linear-gradient(-66deg, #feb05c 0%, #fa9862 50%, #f67f68 100%), linear-gradient(#000000, #000000)",
  },
  {
    round: "#5ff6f1",
    cricle: "linear-gradient(25deg, #458041, #4ea372, #51c7a5, #4aecdb)",
  },
]);
const arr = [
  {
    labels: "2020-06-21",
    subTitle: "2020年度上半年田径赛",
    content: "2020年度上半年田径赛2500米冠军获得者",
  },
  {
    labels: "2019-08-01",
    subTitle: "2019年三好学生",
    content: "2019年三好学生获得者",
  },
  {
    labels: "2018-01-10",
    subTitle: "2018年优秀学生",
    content: "2018年优秀学生代表",
  },
  {
    labels: "2017-06-10",
    subTitle: "2017年度奥数比赛",
    content: "2017年度奥数比赛，团队赛亚军",
  },
  {
    labels: "2017-03-10",
    subTitle: "2017年秋季运动会",
    content: "秋季第一季度运动会，400米男子组亚军",
  }, {
    labels: "2017-06-10",
    subTitle: "2017年度奥数比赛",
    content: "2017年度奥数比赛，团队赛亚军",
  },
  {
    labels: "2017-03-10",
    subTitle: "2017年秋季运动会",
    content: "秋季第一季度运动会，400米男子组亚军",
  }, {
    labels: "2017-06-10",
    subTitle: "2017年度奥数比赛",
    content: "2017年度奥数比赛，团队赛亚军",
  },
  {
    labels: "2017-03-10",
    subTitle: "2017年秋季运动会",
    content: "秋季第一季度运动会，400米男子组亚军",
  },
];
arr.map((item) => {
  item["randomIndex"] = Math.floor(Math.random() * 4);
});
rewardPunishment.value = arr;
const arr1 = [
  {
    labels: "2020-06-21",
    subTitle: "未完成化学实验",
    content: "202012月43日 未完成化学实验",
  },
  {
    labels: "2019-08-01",
    subTitle: "打架处罚",
    content: "与张某某发生打架斗殴事件，扣除积分2分",
  },
  {
    labels: "2018-01-10",
    subTitle: "2018年优秀学生",
    content: "2018年优秀学生代表",
  },
  {
    labels: "2017-06-10",
    subTitle: "2017年度奥数比赛",
    content: "2017年度奥数比赛，团队赛亚军",
  },
  {
    labels: "2017-03-10",
    subTitle: "2017年秋季运动会",
    content: "秋季第一季度运动会，400米男子组亚军",
  }, {
    labels: "2017-06-10",
    subTitle: "2017年度奥数比赛",
    content: "2017年度奥数比赛，团队赛亚军",
  },
  {
    labels: "2017-03-10",
    subTitle: "2017年秋季运动会",
    content: "秋季第一季度运动会，400米男子组亚军",
  }, {
    labels: "2017-06-10",
    subTitle: "2017年度奥数比赛",
    content: "2017年度奥数比赛，团队赛亚军",
  },
  {
    labels: "2017-03-10",
    subTitle: "2017年秋季运动会",
    content: "秋季第一季度运动会，400米男子组亚军",
  },
];
arr1.map((item) => {
  item["randomIndex"] = Math.floor(Math.random() * 4);
});
rewardPunishment1.value = arr1;
</script>
<style scoped>
.actived {
  background: #d7f7f4;
  color: #078475;
}

.longline {
  position: absolute;
  width: 1px;
  transform: translateX(-50%);
  background: rgb(220, 144, 63);
  height: calc(100% - 2rem);
}

.timeline_item {}

.timeline_item .dost {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
}

.timeline_item .dost .sub_dots {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeline_item .dost .sub_dots .labels {
  color: #fff;
  font-size: 16px;
}

.timeline_item .dost .sub_dots .sub_labels {
  color: #fff;
  font-size: 12px;
}

.timeline_item .flot_info {
  border: gray;
  background: #f4f4f4;
  border-radius: 15px;
}
</style>
