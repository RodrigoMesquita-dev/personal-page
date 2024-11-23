<script setup>
import TechCard from '../components/TechCard.vue';
</script>

<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <div class="mb-10">Conhecimentos em <span class="text-sky-400">Linguagens</span>, <span class="text-lime-400">frameworks</span> e outras <span class="text-yellow-400">ferramentas</span></div>
    <div class="grid grid-cols-4 gap-12">
      <tech-card title="Node" description="Criação de Interfaces" class="text-lime-400" />
      <tech-card title="Express" description="Criação de APIs e microsserviços em node" class="text-lime-400" />
      <tech-card title="Vue" description="Criação de Interfaces" class="text-lime-400" />
      <tech-card title="Java" description="Criação de Interfaces" class="text-sky-400"/>
      <tech-card title="Typescript" description="Criação de Interfaces" class="text-sky-400" />
      <tech-card title="Golang" description="Criação de Interfaces" class="text-sky-400" />
      <tech-card title="AWS" description="Criação de Interfaces" class="text-yellow-400" />
    </div>
  </div>
</template>



<style>

</style>