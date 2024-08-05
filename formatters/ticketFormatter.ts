import useTicket from "~/composables/useTicket";
import type { PartyColorModel, TicketModel } from "~/models/apiModel";

export const ticketFormatter = (modelArr: TicketModel[], colorList: PartyColorModel[] ) => {
    const {
        getSameKeyModel,
        getPartyColorModel,
        generateModel,
    } = useTicket();

    // const colorStore = usePartyColor();
    // const { colorList } = storeToRefs(colorStore);
    
    // get all keys
    const KEY = "cand_no";
    const allNos: string[] = modelArr.map( (_m) => (_m[KEY].toString()));

    // exclude the same keys
    const setNos: string[] = Array.from(new Set(allNos));
    
    // get the model with the same key: [[{}, {}], ...]
    const groupedModelArr = setNos.map( (_no) => {
        return getSameKeyModel(_no, KEY, modelArr);
    });
    // Generated the TicketGeneratedModel array
    // 1. Get the party color model
    // 2. Combine the model with the same cand_no
    // 3. push TicketGeneratedModel to _result: []
    const generatedTicketGeneratedModel = groupedModelArr.map( (_arr) => {
        // get the Party Color Model
        const _cModel = getPartyColorModel(_arr, colorList);
        return generateModel(_arr, _cModel);
    });
    return generatedTicketGeneratedModel;
}