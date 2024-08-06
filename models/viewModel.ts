import type { TicketModel } from "~/models/apiModel";

export type TicketViewModel = TicketModel & {
    vice_name: string,
    party_color: string,
}

export type colorTicketModel = {
    color: string,
    name: string,
    var?: string
}