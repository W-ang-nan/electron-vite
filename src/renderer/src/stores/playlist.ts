import { defineStore } from 'pinia'
import { usePlayListTitle, usePlayList } from '../utils/api'
import type { PlayListTitle, PlayList, creator, al } from '../interfaces/Playlist'

export const useGetPlayList = defineStore("useGetPlayList", {
	state: () => {
		return {
			id: '',
			title: <PlayListTitle>{},
			creator: <creator>{},
			list: <PlayList>{},
			al: <al>{}
		}
	},
	actions: {
		async getPlayList(id: number) {
			this.title = <PlayListTitle>{},
				this.creator = <creator>{},
				this.list = <PlayList>{},
				this.al = <al>{}
			const a = await usePlayListTitle(id)
			this.title = a
			this.creator = a.creator
			const b = await usePlayList(id)
			this.list = b
			this.al = b.al
		}
	}
})