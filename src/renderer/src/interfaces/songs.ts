export interface songs {
    rtUrls: [],
    ar: [
        {
            id: number,
            name: string,
            alia: string[

            ]
        }
    ],
    al: {
        id: number,
        name: string,
        picUrl: string,
        pic_str: string,
        pic: number
    },
    st: number,
    noCopyrightRcmd: null,
    songJumpInfo: null,
    alia: [],
    pop: number,
    rt: string,
    mst: number,
    cp: number,
    crbt: null,
    cf: string,
    dt: number,
    rtUrl: null,
    ftype: number,
    rurl: null,
    pst: number,
    rtype: number,
    fee: number,
    djId: number,
    no: number,
    mv: number,
    t: number,
    v: number,
    h: {
        br: number,
        fid: number,
        size: number,
        vd: number,
        sr: number
    },
    l: {
        br: number,
        fid: number,
        size: number,
        vd: number,
        sr: number
    },
    sq: {
        br: number,
        fid: number,
        size: number,
        vd: number,
        sr: number
    },
    hr: null,
    cd: string,
    a: null,
    m: {
        br: number,
        fid: number,
        size: number,
        vd: number,
        sr: number
    },
    name: string,
    id: number,
    privilege: {
        id: number,
        fee: number,
        payed: number,
        st: number,
        pl: number,
        dl: number,
        sp: number,
        cp: number,
        subp: number,
        cs: boolean,
        maxbr: number,
        fl: number,
        toast: boolean,
        flag: number,
        preSell: boolean,
        playMaxbr: number,
        downloadMaxbr: number,
        maxBrLevel: string,
        playMaxBrLevel: string,
        downloadMaxBrLevel: string,
        plLevel: string,
        dlLevel: string,
        flLevel: string,
        rscl: null,
        freeTrialPrivilege: {
            resConsumable: boolean,
            userConsumable: boolean,
            listenType: null
        },
        chargeInfoList: [
            {
                rate: number,
                chargeUrl: null,
                chargeMessage: null,
                chargeType: number
            }
        ]
    }
}
export interface album {
    songs: [],
    paid: boolean,
    onSale: boolean,
    mark: number,
    awardTags: null,
    companyId: number,
    blurPicUrl: string,
    alias: [],
    artists: [
        {
            img1v1Id: number,
            topicPerson: number,
            followed: boolean,
            alias: [],
            picId: number,
            trans: string,
            briefDesc: string,
            musicSize: number,
            albumSize: number,
            picUrl: string,
            img1v1Url: string,
            name: string,
            id: number,
            img1v1Id_str: string
        }
    ],
    copyrightId: number,
    picId: number,
    artist: {
        img1v1Id: number,
        topicPerson: number,
        followed: boolean,
        alias: string[

        ],
        picId: number,
        trans: string,
        briefDesc: string,
        musicSize: number,
        albumSize: number,
        picUrl: string,
        img1v1Url: string,
        name: string,
        id: number,
        picId_str: 109951166115915081,
        img1v1Id_str: 109951166115911716
    },
    company: string,
    briefDesc: string,
    publishTime: number,
    picUrl: string,
    commentThreadId: string,
    pic: number,
    tags: string,
    status: 1,
    subType: string,
    description: string,
    name: string,
    id: number,
    type: string,
    size: string,
    picId_str: string,
    info: {
        commentThread: {
            id: string,
            resourceInfo: {
                id: number,
                userId: string,
                name: string,
                imgUrl: string,
                creator: null,
                encodedId: null,
                subTitle: null,
                webUrl: null
            },
            resourceType: number,
            commentCount: number,
            likedCount: number,
            shareCount: number,
            hotCount: number,
            latestLikedUsers: null,
            resourceOwnerId: number,
            resourceTitle: string,
            resourceId: number
        },
        latestLikedUsers: null,
        liked: boolean,
        comments: null,
        resourceType: number,
        resourceId: number,
        commentCount: number,
        likedCount: number,
        shareCount: number,
        threadId: string
    }
}