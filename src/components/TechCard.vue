<script setup>
  defineProps({
    title: String,
    imageSrc: String,
    iconClass: String
  })
  defineOptions({
    inheritAttrs: false
  })
</script>

<template>
    <div class="flex flex-row items-center rounded-md p-4 gap-1 shadow-lg shadow-black">
      <div>
        <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="w-6 h-6" />
        <i v-else :class="iconClass" class="text-white text-2xl"></i>
      </div>                
      <div class="text-base/7 font-semibold" v-bind="$attrs">{{title}}</div>
    </div>
</template>

<style>

</style>