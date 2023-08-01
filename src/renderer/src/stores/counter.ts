import { defineStore } from "pinia";
import { useMp3, useVideoTitle, useLyric } from "../utils/api";
import { extractBrackets } from '../utils/extractBrackets';

// 全局使用的传id接收音乐数据方法
export const useMusic = defineStore("useMusic", {
  state: () => {
    return {
      index: 0,
      id: 0,
      mp3: "",
      time: 0,
      videoTitle: { img: "", name: "", title: "" },
      // 设置一个播放队列
      mp3List: <any[]>[],
      lyric: <any>[],
      quality: 'standard'
    };
  },
  actions: {
    async getmp3(id: number, isgetAll: boolean = true) {
      // console.log(id);
      // let a = this.mp3List.some(item => item.id == id);
      // if (a) {
      // if (this.mp3List.filter(item => item.id == id).length == 0) {
      // this.videoTitle.img = "";
      // this.videoTitle.title = "";
      // this.videoTitle.name = "";
      // this.mp3 = "";
      // this.time = 0;
      const data = await useMp3(id,this.quality);
      const song = await useVideoTitle(id);
      let lyrics:any = await useLyric(id)
      this.mp3 = data.url;
      this.time = data.time;
      this.id = id
      if (song != undefined) {
        this.videoTitle.img = song.al.picUrl;
        this.videoTitle.title = song.name;
        this.videoTitle.name = song.ar[0].name;
      }
      // 添加播放列表后续可能需要更改
      if (isgetAll) {
        this.mp3List.push({ ...this.videoTitle, id: id, time: this.time })
        this.mp3List.pop()
      }

      // let { times, lyric } = extractBrackets(this.lyric.lrc.lyric)
      this.lyric = extractBrackets(lyrics.lrc.lyric)
      // console.log(this.lyric);
    },
    async loop(index: number) {
      // console.log(this.id);
      if (index < this.mp3List.length) {
        // const data = await useMp3(this.id);
        // this.mp3 = await data.url;
        // console.log(this.mp3, this.time, this.id);
        this.videoTitle.img = this.mp3List[index + 1].img
        this.videoTitle.title = this.mp3List[index + 1].title
        this.videoTitle.name = this.mp3List[index + 1].name
        // this.mp3 = this.mp3List[index + 1].mp3
        this.time = this.mp3List[index + 1].time
        this.id = this.mp3List[index + 1].id
        this.index = index + 1
      }
      // console.log(this.mp3List);
    },
    async bottom(index: number) {
      this.videoTitle.img = this.mp3List[index + 1].img
      this.videoTitle.title = this.mp3List[index + 1].title
      this.videoTitle.name = this.mp3List[index + 1].name
      // this.mp3 = this.mp3List[index + 1].mp3
      this.time = this.mp3List[index + 1].time
      this.id = this.mp3List[index + 1].id
      this.index = index
    },
    async top(index: number) {
      // console.log(index);
      this.videoTitle.img = this.mp3List[index - 1].img
      this.videoTitle.title = this.mp3List[index - 1].title
      this.videoTitle.name = this.mp3List[index - 1].name
      // this.mp3 = this.mp3List[index - 1].mp3
      this.time = this.mp3List[index - 1].time
      this.id = this.mp3List[index - 1].id
      this.index = index
    },
    playAll(songs: any) {
      this.mp3List = <any[]>[]
      for (let i = 0; i < songs.length; i++) {
        this.mp3List.push({ id: songs[i].id, time: songs[i].dt, img: songs[i].al.picUrl, name: songs[i].al.name, title: songs[i].name })
      }
      this.getmp3(this.mp3List[0].id)
    }
  }
});
