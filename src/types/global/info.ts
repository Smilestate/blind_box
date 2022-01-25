export type bannerReq = {
    source: number;
    zh_CN: string
}

export type bannerRes = {
    applicationType: number
    created: string
    id: number
    name: string
    status: number
}

export type dealAmount = {
    amount: number
    cny: number
    favorite: boolean
    fixPrice: any
    high: number
    icon: string
    id: null
    low: number
    ticker: string
}