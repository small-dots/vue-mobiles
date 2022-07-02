<template>
  <div class="bg lg:px-6 h-full w-full flex flex-col lg:flex-row items-center pt-6 gap-6">
    <div class="bg1 md:bg1 lg:bg1 w-4/5 md:w-3/5 lg:w-1/2 relative rounded-lg" @click="gobase">
      <div class="absolute w-full h-full  flex flex-col gap-9 items-center justify-center">
        <img src="../../assets/student1.png" class="rounded-full w-3/5 mt-3 imgs sm:imgs lg:imgs object-cover" alt="">
        <div class="flex w-full justify-between px-8">
          <div class="flex flex-col">
            <span class="text-gray-200">张丽丽</span>
            <span class="text-bj text-sm">高三（1）班</span>
          </div>
          <div class="flex gap-2">
            <div class="text-center">
              <p class="text-gray-200">关注</p>
              <p class="text-colors">2</p>
            </div>
            <div class="text-center">
              <p class="text-gray-200">粉丝</p>
              <p class="text-colors">19</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg1 md:bg1 lg:bg1 w-4/5 md:w-3/5 lg:w-1/2 relative rounded-lg" @click="gobase">
      <div class="rounded-md w-full h-full absolute flex flex-col gap-9 items-center justify-center">
        <img src="../../assets/avactor.png" class="rounded-full w-3/5  mt-3 imgs sm:imgs lg:imgs object-cover" alt="">
        <div class="flex w-full justify-between px-8">
          <div class="flex flex-col">
            <span class="text-gray-200">张秀秀</span>
            <span class="text-bj text-sm">高二（8）班</span>
          </div>
          <div class="flex gap-2">
            <div class="text-center">
              <p class="text-gray-200">关注</p>
              <p class="text-colors">31</p>
            </div>
            <div class="text-center">
              <p class="text-gray-200">粉丝</p>
              <p class="text-colors">231</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const gobase = () => {
  router.push({ path: '/child/baseinfo' });
}
onMounted(() => {
  document.title = "我的孩子"
})
</script>
<style scoped>
.bg {
  background-color: #111828;

}

.bg1 {
  background-color: #202938;
  padding-bottom: 80%;

}

@media (min-width: 768px) {
  .md\:bg1 {
    padding-bottom: 60%;
  }
}

@media (min-width: 1024px) {
  .lg\:bg1 {
    padding-bottom: 50%;
  }
}

@media (min-width: 375px) {
  .sm\:imgs {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  .lg\:imgs {
    width: 50%;
  }
}

.imgs {
  aspect-ratio: 1/1;
}

.text-colors {
  color: #9ca2ae;
}

.text-bj {
  color: #7983ea;
}
</style>
