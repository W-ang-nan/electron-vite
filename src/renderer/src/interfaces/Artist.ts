export interface Artist {
  accountId: number;
  albumSize: number;
  alias: [];
  briefDesc: string;
  fansCount: number;
  followed: boolean;
  id: number;
  img1v1Id: number;
  img1v1Id_str: string;
  img1v1Url: string;
  musicSize: number;
  name: string;
  picId: number;
  picId_str: string;
  picUrl: string;
  topicPerson: number;
  trans: string;
}
export interface ArtistTitle {
  videoCount: number;
  identify: {
    imageUrl: null;
    imageDesc: string;
    actionUrl: string;
  };
  artist: {
    id: number;
    cover: string;
    name: string;
    transNames: [];
    alias: string[];
    identities: string[];
    identifyTag: null;
    briefDesc: string;
    rank: {
      rank: number;
      type: number;
    };
    albumSize: number;
    musicSize: number;
    mvSize: number;
  };
  blacklist: boolean;
  preferShow: number;
  showPriMsg: boolean;
  secondaryExpertIdentiy: [
    {
      expertIdentiyId: number;
      expertIdentiyName: string;
      expertIdentiyCount: number;
    }
  ];
}
export interface ArtistData {
  rtUrls: [];
  ar: [
    {
      id: number;
      name: string;
    }
  ];
  al: {
    id: number;
    name: string;
    pic_str: string;
    pic: number;
  };
  st: number;
  noCopyrightRcmd: null;
  songJumpInfo: null;
  rtype: number;
  rurl: null;
  pst: number;
  alia: string[];
  pop: number;
  djId: number;
  no: number;
  fee: number;
  mv: number;
  t: number;
  v: number;
  h: {
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
  cd: string;
  rt: null;
  mst: number;
  cp: number;
  crbt: null;
  cf: string;
  dt: number;
  rtUrl: null;
  ftype: number;
  a: null;
  m: {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  };
  name: string;
  id: number;
  privilege: {
    id: number;
    fee: number;
    payed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    toast: boolean;
    flag: number;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    maxBrLevel: string;
    playMaxBrLevel: string;
    downloadMaxBrLevel: string;
    plLevel: string;
    dlLevel: string;
    flLevel: string;
    rscl: null;
    freeTrialPrivilege: {
      resConsumable: boolean;
      userConsumable: boolean;
      listenType: null;
    };
    chargeInfoList: [
      {
        rate: number;
        chargeUrl: null;
        chargeMessage: null;
        chargeType: number;
      }
    ];
  };
}
export interface artist {
  id: number;
  cover: string;
  name: string;
  transNames: [];
  alias: string[];
  identities: string[];
  identifyTag: null;
  briefDesc: string;
  rank: {
    rank: number;
    type: number;
  };
  albumSize: number;
  musicSize: number;
  mvSize: number;
}
