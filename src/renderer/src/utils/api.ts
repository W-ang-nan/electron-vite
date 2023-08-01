import http from "../utils/http";
// 导入接口
import type { Banner } from "../interfaces/Banner";
import type { Personalized } from "../interfaces/Personalized";
import type { Newmusic } from "../interfaces/Newmusic";
import type { Mv } from "../interfaces/Mv";
import type { Ranking, Rankingdetails } from "../interfaces/Ranking";
import type { Mp3 } from "../interfaces/Mp3";
import type { VideoTitle } from "../interfaces/VideoTitle";
import type { PlayListTitle, PlayList } from "../interfaces/Playlist";
import type { MvDetail } from "../interfaces/MvDetail";
import type { Sole } from "../interfaces/Sole";
import type { Stations } from "../interfaces/Stations";
import type { Toplist, Toplist2 } from "../interfaces/Toplist";
import type { Artist, ArtistTitle, ArtistData } from "../interfaces/Artist";
import type { hotAlbums } from '../interfaces/Album';
import type { mvs } from '../interfaces/mvs';
import type { introduction } from '../interfaces/introduction';
import type { tags } from '../interfaces/tags';
import type { playlists } from '../interfaces/playlists';
import type { songs, album } from '../interfaces/songs';
import type { Lyric } from '../interfaces/Lyric';

export async function useLyric(id: any) {
	const lyric = await http.get<{ lyric: Lyric }>("/lyric", {
		id: id
	});
	return lyric
}

// 推荐
export async function useBanner() {
	const { banners } = await http.get<{ banners: Banner[] }>("/banner", {
		type: 1,
	});
	return banners;
}

// 专属歌单
export async function useSongsheet() {
	const { result } = await http.get<{ result: Personalized[] }>(
		"/personalized"
	);
	return result.slice(0, 10);
}

// 新音乐
export async function useNewmusic() {
	const { result } = await http.get<{ result: Newmusic[] }>(
		"personalized/newsong"
	);
	return result;
}

// 推荐mv
export async function useMv() {
	const { result } = await http.get<{ result: Mv[] }>("personalized/mv");
	return result;
}

// 搜索框推荐
export async function useranking() {
	const { data } = await http.get<{ data: Ranking[] }>("search/hot/detail");
	return data;
}

// 搜索框详情 和 搜索框搜索
export async function userankingdetails(keywords: string) {
	const { result } = await http.get<{ result: Rankingdetails[] }>(
		"search/suggest",
		{
			keywords: keywords,
		}
	);
	return result;
}

// 获取mp3
// export async function useMp3(id: number) {
// 	const { data } = await http.get<{ data: Mp3[] }>("song/url", {
// 		id: id,
// 	});
// 	return data[0];
// }

export async function useMp3(id: number, level: string) {
	const { data } = await http.get<{ data: Mp3[] }>("song/url/v1", {
		id: id,
		level: level
	});
	return data[0];
}
// 获取作者图片等
export async function useVideoTitle(id: number) {
	const { songs } = await http.get<{ songs: VideoTitle[] }>("song/detail", {
		ids: id,
	});
	return songs[0];
}

// playlist  歌单页头和内容
export async function usePlayListTitle(id: number) {
	const { playlist } = await http.get<{ playlist: PlayListTitle }>(
		"playlist/detail",
		{
			id: id,
			s: 8,
		}
	);
	return playlist;
}

export async function usePlayList(id: number) {
	const { songs } = await http.get<{ songs: PlayList }>(
		"playlist/track/all",
		{
			id: id,
		}
	);
	return songs;
}

// Mv
export async function useMvDetail(id: number) {
	const { data } = await http.get<{ data: MvDetail }>("mv/url", {
		id: id,
	});
	return data;
}

// 独家放送组件
export async function useSole() {
	const { result } = await http.get<{ result: Sole[] }>(
		"personalized/privatecontent/list",
		{
			limit: 4,
			offset: 0,
		}
	);
	return result;
}

// 推荐电台组件
export async function useStations() {
	const { result } = await http.get<{ result: Stations[] }>(
		"personalized/djprogram"
	);
	return result;
}

// 排行榜
export async function useToplist() {
	const { list } = await http.get<{ list: Toplist[] | Toplist2[] }>(
		"toplist/detail"
	);
	return list;
}

// 歌手
export async function useArtistapi(area: any, type: any, initial: any, limit: any = 60) {
	const { artists } = await http.get<{ artists: Artist }>("artist/list", {
		limit: limit,
		offset: 0,
		area: area,
		type: type,
		initial: initial,
	});
	return artists;
}

// 获取歌手歌单头部信息
export async function useArtistTitle(id: number) {
	const { data } = await http.get<{ data: ArtistTitle }>("artist/detail", {
		id: id,
	});
	return data;
}

// 获取歌手歌曲
export async function useArtistData(id: number) {
	const { songs } = await http.get<{ songs: ArtistData[] }>("artist/songs", {
		id: id,
		order: "hot",
		limit: 1000,
		offset: 0,
	});
	return songs;
}

//获取歌手专辑
export async function useAlbum(id: any) {
	const { hotAlbums } = await http.get<{ hotAlbums: hotAlbums[] }>("artist/album", {
		id: id,
		limit: 40,
		offset: 0,
	});
	return hotAlbums;
}

// 获取歌手mv
export async function useArtistDetailMv(id: any) {
	const { mvs } = await http.get<{ mvs: mvs[] }>("/artist/mv", {
		id: id,
		limit: 40,
		offset: 0,
	});
	return mvs;
}

// 歌手详情
export async function useArtistDetaildesc(id: any) {
	const { introduction } = await http.get<{ introduction: introduction[] }>("artist/desc", {
		id: id,
	});
	return introduction;
}
// 分类歌单 tag
export async function useTags() {
	const { tags } = await http.get<{ tags: tags[] }>("playlist/highquality/tags")
	return tags
}

// 分类歌单 data
export async function useHigh(cat: string) {
	const { playlists } = await http.get<{ playlists: playlists[] }>("/top/playlist/highquality", {
		limit: 35,
		before: 0,
		cat: cat,
	})
	return playlists
}

// 专辑详情页
export async function useAlbumDetail(id: number) {
	const { album, songs } = await http.get<{ album: album, songs: songs[] }>("album", {
		id: id
	})
	return { album, songs }
}
