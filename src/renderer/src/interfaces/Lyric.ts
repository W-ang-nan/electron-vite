export interface Lyric {
    sgc: boolean,
    sfy: boolean,
    qfy: boolean,
    lyricUser: {
        id: number,
        status: number,
        demand: number,
        userid: number,
        nickname: string,
        uptime: number
    },
    lrc: {
        version: number,
        lyric: string
    },
    klyric: {
        version: number,
        lyric: string
    },
    tlyric: {
        version: number,
        lyric: string
    },
    romalrc: {
        version: number,
        lyric: string
    },
    code: number
}