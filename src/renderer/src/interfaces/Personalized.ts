// interface T{
// 	id: number;
// 	type: number;
// 	name: string;
// 	copywriter: string;
// 	picUrl: string;
// 	canDislike: boolean;
// 	trackNumberUpdateTime: number;
// 	playCount: number;
// 	trackCount: number;
// 	highQuality: boolean;
// 	alg: string;
// }
// export interface Personalized {
// 	category: number,
// 	code: number,
// 	hasTaste: boolean,
//     result: Array<T>
// }
export interface Personalized {
    alg:string
    canDislike:boolean
    copywriter:string
    highQuality:boolean
    id:number
	name:string
	picUrl:string
	playCount:number
	trackCount:number
	trackNumberUpdateTime:number
	type:number
}
