import { ah as defineStore, aC as useArtistTitle, aD as useArtistData } from "./index-3d9a4c14.js";
const useArtist = defineStore("useArtist", {
  state: () => {
    return {
      id: 0,
      artistTitle: {},
      artistData: [],
      artist: {}
    };
  },
  getters: {},
  actions: {
    async getArtistTitle(id) {
      this.artistTitle = await useArtistTitle(id);
      this.artist = this.artistTitle.artist;
      this.artistData = await useArtistData(id);
    }
  }
});
export {
  useArtist as u
};
