<script setup lang="ts">
import { ticketFormatter } from '~/formatters/ticketFormatter';

const ticketStore = useTicketStore();
const {
  ticketListErrorLog,
  ticketListIsLoading,
  ticketList
} = storeToRefs(ticketStore);

const {
  getTicketList
} = ticketStore;

const gggggg = () => {
  getTicketList();
}
</script>

<template>
  <div>
    Page: Formatter
    <p>Layout: default</p>
    <button @click="gggggg">getData</button>
    <p>isLoad: {{ ticketListIsLoading }}</p>
    <p class="log">fetchData:</p>
    <div class="top" v-for="(item, k) in ticketList" :key="k">
      <p>area_name: {{ item.area_name }}</p>
      <p>cand_id: {{ item.cand_id }}</p>
      <p>cand_name: {{ item.cand_name }}</p>
      <p>vice_name: {{ item.vice_name }}</p>
      <p>party_code: {{ item.party_code }}</p>
      <p>party_name: {{ item.party_name }}</p>
    </div>
  </div>
</template>

<style scoped>
.top {
  padding-bottom: 1em;
}
</style>
