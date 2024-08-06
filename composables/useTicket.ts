import type { TicketModel, PartyColorModel } from "~/models/apiModel";
import type { TicketViewModel } from "~/models/viewModel";
import { usePartyColor } from "~/stores/usePartyColor";
export default function useTicket() {
    /**
     * Generate a list of the cand model with the same cand_no: 
     * [{}, ...] => [{..., cand_no: 1, isVice: " "}}, {..., cand_no: 1, isVice: "Y"}]
     * @param _no the value of "cand_no"
     * @param _k key: "cand_no"
     * @param _arr TicketModel[], the list of all candidates that in the same area
     * @returns TicketModel[], the length would be 2
     */
    const getSameKeyModel = (_no: string, _k: keyof TicketModel = "cand_no", _arr: TicketModel[]): TicketModel[] => {
        const modelArr: TicketModel[] = _arr.reduce((acc: TicketModel[], crr: TicketModel) => {
            if (crr[_k].toString() === _no) {
                acc.push(crr);
            }
            return acc;
        }, []);
        return modelArr;
    }

    /**
     * Get the Party Color Model of the candidate
     * @param _mArr TicketModel[] generated from "getSameKeyModel"
     * @param _colorArr PartyColorModel[] get from color API
     * @returns PartyColorModel
     */
    const getPartyColorModel = (_mArr: TicketModel[], _colorArr: PartyColorModel[]): PartyColorModel => {
        const _ticket = _mArr[0]
        const _partyName = _ticket.party_name.toString();
        const _partyCode = _ticket.party_code.toString();
        
        // get the colorModel belonging to the party
        let colorModel = _colorArr.find( (_c: PartyColorModel) => ( _partyCode === _c.party_code));
        
        // in undefined case
        if (colorModel === undefined) {
            colorModel = {
                party_code: _partyCode,
                party_name: _partyName,
                color_code: "CDCDCD"
            }
        }

        return colorModel;
    }

    /**
     * Generate the model with the same cand_no into TicketViewModel
     * @param _arr the array from getSameKeyModel
     * @param _cModel the model from getPartyColorModel
     * @returns TicketViewModel
     */
    const generateModel = (_arr: TicketModel[], _cModel: PartyColorModel): TicketViewModel => {
        let _vice: TicketModel = {} as TicketModel;
        let _cand: TicketModel = {} as TicketModel;
        _arr.forEach( (_e) => {
            if(_e.is_vice.trim().toUpperCase() === "Y") {
                _vice = _e;
            } else {
                _cand = _e;
            }
        });
        return {..._cand, vice_name: _vice.cand_name, party_color: _cModel.party_code};
    }

    // onBeforeMount(async () => {
    //     // get party color table list
    //     await getColorList();
    // });
    
    return {
        getSameKeyModel,
        getPartyColorModel,
        generateModel,
    }
}