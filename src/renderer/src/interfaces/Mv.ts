export interface Mv {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: true;
  trackNumberUpdateTime: null;
  duration: number;
  playCount: number;
  subed: false;
  artists: [
    {
      id: number;
      name: string;
    }
  ];
  artistName: string;
  artistId: number;
  alg: string;
}
