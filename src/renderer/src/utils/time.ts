export function time(num: number) {
	const s = Math.floor(num) % 60

	const i = Math.floor(num / 60)

	const ss = s < 10 ? `0${s}` : s
	const ii = i < 10 ? `0${i}` : i
	return ii + ':' + ss
}
export function dateTime(date: any) {
	var now = new Date(parseInt(date)),
		y = now.getFullYear(),
		m = now.getMonth() + 1,
		d = now.getDate();
	return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
}