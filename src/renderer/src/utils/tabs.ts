import { ref } from 'vue'

const area = ref([
  { name: "全部", area: -1 },
  { name: "华语", area: 7 },
  { name: "欧美", area: 96 },
  { name: "日本", area: 8 },
  { name: "韩国", area: 16 },
  { name: "其他", area: 0 },
]);
const type = ref([
  { name: "全部", type: -1 },
  { name: "男歌手", type: 1 },
  { name: "女歌手", type: 2 },
  { name: "乐队组合", type: 3 },
]);
const initial = ref([
  { name: "热门", initial: -1 },
  { name: "A", initial: "a" },
  { name: "B", initial: "b" },
  { name: "C", initial: "c" },
  { name: "D", initial: "d" },
  { name: "E", initial: "e" },
  { name: "F", initial: "f" },
  { name: "G", initial: "g" },
  { name: "H", initial: "h" },
  { name: "I", initial: "i" },
  { name: "J", initial: "j" },
  { name: "K", initial: "k" },
  { name: "L", initial: "l" },
  { name: "M", initial: "m" },
  { name: "N", initial: "n" },
  { name: "O", initial: "o" },
  { name: "P", initial: "p" },
  { name: "Q", initial: "q" },
  { name: "R", initial: "r" },
  { name: "S", initial: "s" },
  { name: "T", initial: "t" },
  { name: "U", initial: "u" },
  { name: "V", initial: "v" },
  { name: "W", initial: "w" },
  { name: "X", initial: "x" },
  { name: "Y", initial: "y" },
  { name: "Z", initial: "z" },
  { name: "#", initial: 0 },
]);
export { initial, type, area };
