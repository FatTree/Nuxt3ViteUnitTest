<script setup lang="ts">
const colorStore = usePartyColor();
const { getColorList } = colorStore;

onBeforeMount( async() => {
  await getColorList();
})
</script>

<template>
  <div>
    <h1>Nuxt3ViteUnitTest</h1>
    <slot />
  </div>
</template>

<style scoped></style>
