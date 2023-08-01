export interface Ranking {
  searchWord: string;
  score: number;
  content: string;
  source: number;
  iconType: number;
  iconUrl: string;
  url: string;
  alg: string;
}
export interface Rankingdetails {
  albums: [
    {
      id: number;
      name: string;
      artist: {
        id: number;
        name: string;
        picUrl: string;
        alias: string[];
        albumSize: number;
        picId: number;
        fansGroup: null;
        img1v1Url: string;
        img1v1: number;
        alia: string[];
        trans: null;
      };
      publishTime: number;
      size: number;
      copyrightId: number;
      status: number;
      picId: number;
      alia: string[];
      mark: number;
    }
  ];
  artists: [
    {
      id: number;
      name: string;
      picUrl: string;
      alias: string[];
      albumSize: number;
      picId: number;
      fansGroup: null;
      img1v1Url: string;
      img1v1: number;
      alia: string[];
      trans: null;
    }
  ];
  songs: [
    {
      id: number;
      name: string;
      artists: [
        {
          id: number;
          name: string;
          picUrl: null;
          alias: [];
          albumSize: number;
          picId: number;
          fansGroup: null;
          img1v1Url: string;
          img1v1: number;
          trans: null;
        }
      ];
      album: {
        id: number;
        name: string;
        artist: {
          id: number;
          name: string;
          picUrl: null;
          alias: [];
          albumSize: number;
          picId: number;
          fansGroup: null;
          img1v1Url: string;
          img1v1: number;
          trans: null;
        };
        publishTime: number;
        size: number;
        copyrightId: number;
        status: number;
        picId: number;
        alia: string[];
        mark: number;
      };
      duration: number;
      copyrightId: number;
      status: number;
      alias: [];
      rtype: number;
      ftype: number;
      mvid: number;
      fee: number;
      rUrl: null;
      mark: number;
    }
  ];
  playlists: [
    {
      id: number;
      name: string;
      coverImgUrl: string;
      creator: null;
      subscribed: boolean;
      trackCount: number;
      userId: number;
      playCount: number;
      bookCount: number;
      specialType: number;
      officialTags: null;
      action: null;
      actionType: null;
      recommendText: null;
      score: null;
      description: string;
      highQuality: boolean;
    }
  ];
  order: string[];
}
