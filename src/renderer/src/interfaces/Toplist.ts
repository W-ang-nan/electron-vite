export interface Toplist{
  subscribers: [];
  subscribed: null;
  creator: null;
  artists: null;
  tracks: [
    {
      first: string;
      second: string;
    },
    {
      first: string;
      second: string;
    },
    {
      first: string;
      second: string;
    }
  ];
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl: null;
  titleImage: number;
  titleImageUrl: null;
  englishTitle: null;
  opRecommend: boolean;
  recommendInfo: null;
  socialPlaylistCover: null;
  subscribedCount: number;
  cloudTrackCount: number;
  trackUpdateTime: number;
  userId: number;
  trackNumberUpdateTime: number;
  adType: number;
  privacy: number;
  updateTime: number;
  trackCount: number;
  commentThreadId: string;
  specialType: number;
  playCount: number;
  totalDuration: number;
  coverImgUrl: string;
  coverImgId: number;
  newImported: boolean;
  anonimous: boolean;
  createTime: number;
  highQuality: boolean;
  ordered: boolean;
  tags: [];
  description: string;
  status: number;
  name: string;
  id: number;
  coverImgId_str: string;
  ToplistType: string;
}
export interface Toplist2 {
  subscribers: [];
  subscribed: null;
  creator: null;
  artists: null;
  tracks: [];
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl: null;
  titleImage: number;
  titleImageUrl: null;
  englishTitle: null;
  opRecommend: boolean;
  recommendInfo: null;
  socialPlaylistCover: null;
  subscribedCount: number;
  cloudTrackCount: number;
  trackUpdateTime: number;
  userId: number;
  trackNumberUpdateTime: number;
  adType: number;
  privacy: number;
  updateTime: number;
  trackCount: number;
  commentThreadId: string;
  specialType: number;
  playCount: number;
  totalDuration: number;
  coverImgUrl: string;
  coverImgId: number;
  newImported: boolean;
  anonimous: boolean;
  createTime: number;
  highQuality: boolean;
  ordered: boolean;
  tags: string[];
  description: string;
  status: number;
  name: string;
  id: number;
  coverImgId_str: string;
}