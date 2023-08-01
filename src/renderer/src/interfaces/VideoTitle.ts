export interface VideoTitle {
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
    tns: [];
    pic_str: string;
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
  hr: {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  };
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
}
