export interface playlists {
    name: string,
    id: number,
    trackNumberUpdateTime: number,
    status: number,
    userId: number,
    createTime: number,
    updateTime: number,
    subscribedCount: number,
    trackCount: number,
    cloudTrackCount: number,
    coverImgUrl: string,
    coverImgId: number,
    description: string,
    tags: string[

    ],
    playCount: number,
    trackUpdateTime: number,
    specialType: number,
    totalDuration: number,
    creator: {
        defaultAvatar: boolean,
        province: number,
        authStatus: number,
        followed: boolean,
        avatarUrl: string,
        accountStatus: number,
        gender: number,
        city: number,
        birthday: number,
        userId: number,
        userType: number,
        nickname: string,
        signature: string,
        description: string,
        detailDescription: string,
        avatarImgId: number,
        backgroundImgId: number,
        backgroundUrl: string,
        authority: number,
        mutual: boolean,
        expertTags: string[

        ],
        experts: null,
        djStatus: number,
        vipType: number,
        remarkName: null,
        authenticationTypes: number,
        avatarDetail: {
            userType: number,
            identityLevel: number,
            identityIconUrl: string
        },
        avatarImgIdStr: string,
        backgroundImgIdStr: string,
        anchor: boolean,
        avatarImgId_str: string
    },
    tracks: null,
    subscribers: [
        {
            defaultAvatar: boolean,
            province: number,
            authStatus: number,
            followed: boolean,
            avatarUrl: string,
            accountStatus: number,
            gender: number,
            city: number,
            birthday: number,
            userId: number,
            userType: number,
            nickname: string,
            signature: string,
            description: string,
            detailDescription: string,
            avatarImgId: number,
            backgroundImgId: number,
            backgroundUrl: string,
            authority: number,
            mutual: boolean,
            expertTags: null,
            experts: null,
            djStatus: number,
            vipType: number,
            remarkName: null,
            authenticationTypes: number,
            avatarDetail: null,
            avatarImgIdStr: string,
            backgroundImgIdStr: string,
            anchor: boolean,
            avatarImgId_str: string
        }
    ],
    subscribed: boolean,
    commentThreadId: string,
    newImported: boolean,
    adType: number,
    highQuality: boolean,
    privacy: number,
    ordered: boolean,
    anonimous: boolean,
    coverStatus: number,
    recommendInfo: null,
    shareCount: number,
    coverImgId_str: string,
    commentCount: number,
    copywriter: string,
    tag: string
}