import { describe, it, expect } from "vitest";
import { ticketFormatter } from "~/formatters/ticketFormatter";
import { COLOR_MOCK_ARR, INIT_TICKET_MOCK_ARR } from "../constant";

const _expectedTicketModel = [
    {
        "prv_code": "63",
        "city_code": "000",
        "area_code": "00",
        "dept_code": "000",
        "li_code": "0000",
        "tbox_no": "0000",
        "cand_no": 1,
        "ticket_num": 366854,
        "ticket_percent": 23.79,
        "is_victor": " ",
        "ris_prv_code": "63",
        "ris_city_code": "000",
        "ris_area_code": "00",
        "ris_dept_code": "000",
        "area_name": "臺北市",
        "cand_id": 203249,
        "cand_name": "柯文哲",
        "cand_sex": "1",
        "cand_birthyear": "1959",
        "cand_edu": "博士",
        "party_code": 350,
        "party_name": "台灣民眾黨",
        "is_current": "N",
        "is_vice": " ",
        "vice_name": "吳欣盈",
        "party_color": "350"
    },
    {
        "prv_code": "63",
        "city_code": "000",
        "area_code": "00",
        "dept_code": "000",
        "li_code": "0000",
        "tbox_no": "0000",
        "cand_no": 2,
        "ticket_num": 587899,
        "ticket_percent": 38.13,
        "is_victor": "*",
        "ris_prv_code": "63",
        "ris_city_code": "000",
        "ris_area_code": "00",
        "ris_dept_code": "000",
        "area_name": "臺北市",
        "cand_id": 203251,
        "cand_name": "賴清德",
        "cand_sex": "1",
        "cand_birthyear": "1959",
        "cand_edu": "碩士",
        "party_code": 16,
        "party_name": "民主進步黨",
        "is_current": "Y",
        "is_vice": " ",
        "vice_name": "蕭美琴",
        "party_color": "16"
    },
    {
        "prv_code": "63",
        "city_code": "000",
        "area_code": "00",
        "dept_code": "000",
        "li_code": "0000",
        "tbox_no": "0000",
        "cand_no": 3,
        "ticket_num": 587258,
        "ticket_percent": 38.08,
        "is_victor": " ",
        "ris_prv_code": "63",
        "ris_city_code": "000",
        "ris_area_code": "00",
        "ris_dept_code": "000",
        "area_name": "臺北市",
        "cand_id": 203253,
        "cand_name": "侯友宜",
        "cand_sex": "1",
        "cand_birthyear": "1957",
        "cand_edu": "博士",
        "party_code": 1,
        "party_name": "中國國民黨",
        "is_current": "N",
        "is_vice": " ",
        "vice_name": "趙少康",
        "party_color": "1"
    }
];

const _ticketFormatter = ticketFormatter(INIT_TICKET_MOCK_ARR, COLOR_MOCK_ARR);

// ticketFormatter
describe('formatters > ticketFormatter: ticketFormatter', () => {
    it('Model matched', () => {
        expect(_ticketFormatter).toMatchObject(_expectedTicketModel);
    });
    
    it('Result length tobe 3', () => {
        expect(_ticketFormatter).toHaveLength(3);
    });
});