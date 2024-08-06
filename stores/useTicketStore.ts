import useAPI from '~/composables/useApi';
import { ticketFormatter } from '~/formatters/ticketFormatter'
import type { TicketModel } from '~/models/apiModel';
import type { TicketViewModel } from '~/models/viewModel';
import { TICKET_URL } from '~/utils/constant';

export const useTicketStore = defineStore('ticket', () => {
    const { callAPI, fetchData, isLoading: ticketListIsLoading, errorLog: ticketListErrorLog } = useAPI();
    const ticketList: Ref<TicketViewModel[]> = ref([]);

    const colorStore = usePartyColor();
    const { colorList } = storeToRefs(colorStore);

    const getTicketList = async () => {
        await callAPI(TICKET_URL);
        let _result :TicketViewModel[] = [];
        
        if(fetchData.value) {
            const _list = fetchData.value['00_000_00_000_0000'];
            _result = _list.filter( (e: TicketModel) => (e.prv_code === '63'));
            ticketList.value = ticketFormatter(_result, colorList.value)
        }
        return _result;
    }
    

    return { 
        ticketListIsLoading,
        ticketListErrorLog,
        ticketList,
        getTicketList,
    }
})