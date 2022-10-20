export type Level2 = {
    imageUrl: string,
    keyword: string,
    keywordId: string,
    ptag: string,
}

export type Category = {
    _id: string,
    cid: string,
    commonUsed: string,
    ptag: string,
    level: number,
    name: string,
    level2words: Level2[]
}

