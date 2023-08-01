import { defineStore } from "pinia";
import { useArtistData, useArtistTitle } from "../utils/api";
import type { ArtistTitle, ArtistData, artist } from "../interfaces/Artist";
export const useArtist = defineStore("useArtist", {
  state: () => {
    return {
      id: 0,
      artistTitle: <ArtistTitle>{},
      artistData: <ArtistData[]>[],
      artist: <artist>{},
    };
  },
  getters: {},
  actions: {
    async getArtistTitle(id: number) {
      this.artistTitle = await useArtistTitle(id);
      this.artist = this.artistTitle.artist
      this.artistData = await useArtistData(id);
    },
  },
});
