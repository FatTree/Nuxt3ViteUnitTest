import useAPI  from '~/composables/useApi'
import { PARTY_COLOR } from '~/utils/constant';
export const usePartyColor = defineStore('color', () => {
    const { 
        callAPI, 
        fetchData: colorList, 
        isLoading: colorListIsLoading, 
        errorLog: colorListErrorLog 
    } = useAPI();

    const getColorList = async () => await callAPI(PARTY_COLOR);

    return { 
        colorListIsLoading,
        colorListErrorLog,
        colorList,
        getColorList
    }
});