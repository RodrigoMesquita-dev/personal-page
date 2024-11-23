<script setup>
  defineProps({
    title: String,
    description: String
  })
  defineOptions({
    inheritAttrs: false
  })
</script>

<template>
    <div class="flex flex-col gap-1">
      <dt class="text-base/7 font-semibold text-white" v-bind="$attrs">{{title}}</dt>
      <dd class="text-base text-grey">{{description}}</dd>
    </div>
</template>

<style>

</style>