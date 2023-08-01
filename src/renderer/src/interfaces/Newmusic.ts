export interface Newmusic {
  alg: string;
  canDislike: boolean;
  copywriter: null;
  id: number;
  name: string;
  picUrl: string;
  song: {
    artists: [
      {
        name: string;
        id: number;
        picId: number;
        img1v1Id: number;
        briefDesc: string;
        picUrl: string;
        img1v1Url: string;
        albumSize: number;
        alias: [];
        trans: string;
        musicSize: number;
        topicPerson: number;
      }
    ];
  };
  trackNumberUpdateTime: null;
  type: number;
}
