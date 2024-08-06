export type CodeModel = {
    prv_code: string,
    city_code: string,
    area_code: string,
    dept_code: string,
    li_code: string,
}

export type TicketModel = CodeModel & {
    tbox_no:string,
    cand_no: number,
    ticket_num: number | string,
    ticket_percent: number,
    is_victor:string,
    ris_prv_code:string,
    ris_city_code:string,
    ris_area_code:string,
    ris_dept_code:string,
    area_name:string,
    cand_id: number,
    cand_name:string,
    cand_sex:string,
    cand_birthyear:string,
    cand_edu:string,
    party_code: number,
    party_name:string,
    is_current:string,
    is_vice:string
}

export type PartyColorModel = {
    party_code: string,
    party_name: string,
    color_code: string
}