<script setup lang="ts">
const colorStore = usePartyColor();
const { getColorList } = colorStore;

onBeforeMount( async() => {
  await getColorList();
})
</script>

<template>
  <div>
    Layout: default
    <slot />
  </div>
</template>

<style scoped></style>
