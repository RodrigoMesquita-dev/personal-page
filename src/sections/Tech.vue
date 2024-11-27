<script setup>
import TechCard from '../components/TechCard.vue';
</script>

<template>
  <div class="relative isolate overflow-hidden py-24 sm:py-32  container mx-auto">
    <div class="mb-10">Conhecimentos em <span class="text-sky-400">Linguagens</span>, <span class="text-lime-400">frameworks</span> e outras <span class="text-yellow-400">ferramentas</span></div>
    <div class="grid grid-cols-4 gap-12 max-w-7xl place-content-center">
      <tech-card title="Node" imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" class="text-lime-400" />
      <tech-card title="Nest" imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" class="text-lime-400" />
      <tech-card title="Express" iconClass="devicon-express-original" class="text-lime-400" />
      <tech-card title="Vue" imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" class="text-lime-400" />
      <tech-card title="Java" iconClass="devicon-java-plain" class="text-sky-400"/>
      <tech-card title="Javascript" imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" class="text-sky-400"/>
      <tech-card title="Typescript" imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" class="text-sky-400" />
      <tech-card title="Golang" imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" class="text-sky-400" />
      <tech-card title="AWS" imageSrc="" class="text-yellow-400" />
    </div>
  </div>
</template>



<style>

</style>

