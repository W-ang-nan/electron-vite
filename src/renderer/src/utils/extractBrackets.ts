export function extractBrackets(str: string) {
    const regex = /\[(.*?)\]/g;
    const regex1 = /]\s*([^\[\]]+)/g;
    const times = [] as any[];
    const lyric = [] as any[];
    const lyrics = []as any[]
    let match;
    let match1;

    while ((match = regex.exec(str))) {
        // times.push(match[1].replace(/\.[^/.]+$/, ""));
        times.push(match[1]);
    }
    while ((match1 = regex1.exec(str))) {
        lyric.push(match1[1]);
    }

    for (let i = 0; i < times.length; i++) {
        lyrics.push({ time: timeToSeconds(times[i]), lyric: lyric[i] })
        // lyrics.push({ time: times[i], lyric: lyric[i] })
    }

    // return { times, lyric };
    return lyrics
}

function timeToSeconds(time: any) {
    // const match = time.match(/^(\d{1,2}):(\d{2})\.(\d{2})$/) || time.match(/^(\d{1,2}):(\d{2})\.(\d{3})$/);
    const match = time.match(/^(\d{1,2}):(\d{2})\.(\d{2,3})$/);
    if (match) {
      const minute = parseInt(match[1], 10);
      const second = parseInt(match[2], 10);
      const millisecond = parseInt(match[3], 10);
      const totalMilliseconds = minute * 60 * 1000 + second * 1000 + millisecond * 10;
      const seconds = Math.floor(totalMilliseconds / 1000);
      const milliseconds = totalMilliseconds % 1000;
      return seconds + '.' + milliseconds;
    }
    return null
}