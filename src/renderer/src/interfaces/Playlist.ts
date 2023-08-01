export interface PlayListTitle {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: number;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description: string;
  tags: string[];
  updateFrequency: null;
  backgroundCoverId: number;
  backgroundCoverUrl: null;
  titleImage: number;
  titleImageUrl: null;
  englishTitle: null;
  officialPlaylistType: null;
  copied: boolean;
  relateResType: null;
  subscribers: [
    {
      defaultAvatar: boolean;
      province: number;
      authStatus: number;
      followed: boolean;
      avatarUrl: string;
      accountStatus: number;
      gender: number;
      city: number;
      birthday: number;
      userId: number;
      userType: number;
      nickname: string;
      signature: string;
      description: string;
      detailDescription: string;
      avatarImgId: number;
      backgroundImgId: number;
      backgroundUrl: string;
      authority: number;
      mutual: boolean;
      expertTags: null;
      experts: null;
      djStatus: number;
      vipType: number;
      remarkName: null;
      authenticationTypes: number;
      avatarDetail: null;
      anchor: boolean;
      avatarImgIdStr: string;
      backgroundImgIdStr: string;
      avatarImgId_str: string;
    }
  ];
  subscribed: boolean;
  creator: {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags: string[];
    experts: {
      string: string;
    };
    djStatus: number;
    vipType: number;
    remarkName: null;
    authenticationTypes: number;
    avatarDetail: {
      userType: number;
      identityLevel: number;
      identityIconUrl: string;
    };
    anchor: boolean;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    avatarImgId_str: string;
  };
  tracks: [
    {
      name: string;
      id: number;
      pst: number;
      t: number;
      ar: [
        {
          id: number;
          name: string;
          tns: [];
          alias: [];
        }
      ];
      alia: string[];
      pop: number;
      st: number;
      rt: string;
      fee: number;
      v: number;
      crbt: null;
      cf: string;
      al: {
        id: number;
        name: string;
        picUrl: string;
        tns: string[];
        pic: number;
      };
      dt: number;
      h: {
        br: number;
        fid: number;
        size: number;
        vd: number;
      };
      m: {
        br: number;
        fid: number;
        size: number;
        vd: number;
      };
      l: {
        br: number;
        fid: number;
        size: number;
        vd: number;
      };
      sq: {
        br: number;
        fid: number;
        size: number;
        vd: number;
      };
      hr: null;
      a: null;
      cd: string;
      no: number;
      rtUrl: null;
      ftype: number;
      rtUrls: [];
      djId: number;
      copyright: number;
      s_id: number;
      mark: number;
      originCoverType: number;
      originSongSimpleData: null;
      tagPicList: null;
      resourceState: boolean;
      version: number;
      songJumpInfo: null;
      entertainmentTags: null;
      single: number;
      noCopyrightRcmd: null;
      rtype: number;
      rurl: null;
      mst: number;
      cp: number;
      mv: number;
      publishTime: number;
      tns: string[];
    }
  ];
  videoIds: null;
  videos: null;
  trackIds: [
    {
      id: number;
      v: number;
      t: number;
      at: number;
      alg: null;
      uid: number;
      rcmdReason: string;
      sc: null;
      f: null;
      sr: null;
    }
  ];
  bannedTrackIds: null;
  shareCount: number;
  commentCount: number;
  remixVideo: null;
  sharedUsers: null;
  historySharedUsers: null;
  gradeStatus: string;
  score: null;
  algTags: string[];
}

export interface PlayList {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: [
    {
      id: number;
      name: string;
      tns: [];
      alias: [];
    }
  ];
  alia: string[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt: null;
  cf: string;
  al: {
    id: number;
    name: string;
    picUrl: string;
    tns: string[];
    pic: number;
  };
  dt: number;
  h: {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  };
  m: {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  };
  l: {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  };
  sq: {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  };
  hr: null;
  a: null;
  cd: string;
  no: number;
  rtUrl: null;
  ftype: number;
  rtUrls: [];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData: null;
  tagPicList: null;
  resourceState: boolean;
  version: number;
  songJumpInfo: null;
  entertainmentTags: null;
  awardTags: null;
  single: number;
  noCopyrightRcmd: null;
  rtype: number;
  rurl: null;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  tns: string[];
}

export interface creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags: string[];
  experts: {
    string: string;
  };
  djStatus: number;
  vipType: number;
  remarkName: null;
  authenticationTypes: number;
  avatarDetail: {
    userType: number;
    identityLevel: number;
    identityIconUrl: string;
  };
  anchor: boolean;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  avatarImgId_str: string;
}

export interface al {
  id: number;
  name: string;
  picUrl: string;
  tns: string[];
  pic: number;
}
