import { FetchError } from "ofetch";

export default function useAPI() {
  const fetchData: Ref<any> = ref();
  const isLoading: Ref<boolean> = ref(false);
  const errorLog: Ref<string> = ref('');

  const callAPI = async (url: string) => {
    isLoading.value = true;
    try {
        const res = await $fetch(url, { responseType: 'json' });
        fetchData.value = res;
    } catch (error) {
        const FetchError = error as FetchError;
        errorLog.value = FetchError.message;
    } finally {
      isLoading.value = false;
    }
  }

  return { 
    fetchData,
    isLoading,
    errorLog,
    callAPI
  };
}
