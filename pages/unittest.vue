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
    <button @click="gggggg">getData</button>
    <p>isLoading: {{ ticketListIsLoading }}</p>
    <p v-if="ticketList.length">地區：{{ ticketList[0].area_name }}</p>
    <div class="top" v-for="(item, k) in ticketList" :key="k">
      <p>{{ item.cand_no }}. {{ item.party_name }} <label v-if="item.is_victor.trim()==='*'">當選</label></p>
      <p>{{ item.cand_name }} | {{ item.vice_name }}</p>
      <p>{{ item.ticket_num.toLocaleString('en') }} 票 ({{ item.ticket_percent }} %)</p>
      <p></p>
    </div>
  </div>
</template>

<style scoped>
.top {
  padding-bottom: 1em;
}
</style>
