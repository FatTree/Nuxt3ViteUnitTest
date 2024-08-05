import { describe, it, expect } from "vitest";
import type { TicketModel } from "~/models/apiModel";

const {
    getSameKeyModel,
    getPartyColorModel,
    generateModel,
} = useTicket();

const _mockModel = [
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
        "is_vice": " "
    },
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
        "cand_id": 203250,
        "cand_name": "吳欣盈",
        "cand_sex": "2",
        "cand_birthyear": "1978",
        "cand_edu": "碩士",
        "party_code": 350,
        "party_name": "台灣民眾黨",
        "is_current": "N",
        "is_vice": "Y"
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
        "is_vice": " "
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
        "is_victor": " ",
        "ris_prv_code": "63",
        "ris_city_code": "000",
        "ris_area_code": "00",
        "ris_dept_code": "000",
        "area_name": "臺北市",
        "cand_id": 203252,
        "cand_name": "蕭美琴",
        "cand_sex": "2",
        "cand_birthyear": "1971",
        "cand_edu": "碩士",
        "party_code": 16,
        "party_name": "民主進步黨",
        "is_current": "N",
        "is_vice": "Y"
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
        "is_vice": " "
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
        "cand_id": 203254,
        "cand_name": "趙少康",
        "cand_sex": "1",
        "cand_birthyear": "1950",
        "cand_edu": "碩士",
        "party_code": 1,
        "party_name": "中國國民黨",
        "is_current": "N",
        "is_vice": "Y"
    }
];

const _colorMockModel = [
    {
        "party_code": "1",
        "party_name": "中國國民黨",
        "color_code": "6B6BE4"
    },
    {
        "party_code": "2",
        "party_name": "中國青年黨",
        "color_code": "CDCDCD"
    },
    {
        "party_code": "10",
        "party_name": "中國民眾黨",
        "color_code": "CDCDCD"
    },
    {
        "party_code": "350",
        "party_name": "台灣民眾黨",
        "color_code": "80CED4"
    },
];

const _colorMockModel2 = [
    {
        "party_code": "1",
        "party_name": "中國國民黨",
        "color_code": "6B6BE4"
    }
];
const KEY = "cand_no";
const _getSameKeyModel = getSameKeyModel("1", KEY, _mockModel);

const _getPartyColorModel = getPartyColorModel(_getSameKeyModel, _colorMockModel);
const _getPartyColorModel2 = getPartyColorModel(_getSameKeyModel, _colorMockModel2);

const _generateModel = generateModel(_getSameKeyModel, _getPartyColorModel);
// getSameKeyModel:
describe('composables > useTicket: getSameKeyModel', () => {
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
            "is_vice": " "
        },
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
            "cand_id": 203250,
            "cand_name": "吳欣盈",
            "cand_sex": "2",
            "cand_birthyear": "1978",
            "cand_edu": "碩士",
            "party_code": 350,
            "party_name": "台灣民眾黨",
            "is_current": "N",
            "is_vice": "Y"
        },
    ];

    it('Model matched', () => {
        expect(_getSameKeyModel).toMatchObject(_expectedTicketModel);
    });

    it('The length to be 2', () => {
        expect(_getSameKeyModel.length).toBe(2);
    });
    
    it('The "cand_no" of these arr to be the same', () => {
        const objectsEqual = (o1: TicketModel, o2: TicketModel) =>
            Object.keys(o1).every(p => o1[KEY] === o2[KEY]);
        expect(objectsEqual(_getSameKeyModel[0], _getSameKeyModel[1])).toBe(true);
    });

    it('One of isVice of it is "Y", the other is " "', () => {
        const isTrue = (_getSameKeyModel[0].is_vice.trim() === "Y" && _getSameKeyModel[1].is_vice.trim() === "") ||
                            (_getSameKeyModel[0].is_vice.trim() === "" && _getSameKeyModel[1].is_vice.trim() === "Y");
        expect(isTrue).toBe(true);
    });

});

// getPartyColorModel
describe('composables > useTicket: getPartyColorModel', () => {
    const _expectedColorModel = {
        color_code: "80CED4",
        party_code: "350",
        party_name: "台灣民眾黨",
    }

    it('Find the mapping party color', () => {
        expect(_getPartyColorModel.party_code).toBe("350");
    });
    
    it('Can\'t find the mapping party color', () => {
        expect(_getPartyColorModel2.color_code).toBe("CDCDCD");
    });

    it('Model matched', () => {
        expect(_getPartyColorModel).toMatchObject(_expectedColorModel);
    });
});

describe('composables > useTicket: generateModel', () => {
    const _expectedGeneratedModel = {
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
        };
    
    it('Model matched', () => {
        expect(_generateModel).toMatchObject(_expectedGeneratedModel);
    });
});