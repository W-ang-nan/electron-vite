// 封装数字计算方法
export function math(num: number) {
  let company = "";
  if (num < 10000) {
    return num;
  } else {
    if (num >= 10000 && num < 100000) {
      company = "万";
      num /= 10000;
    } else if (num >= 100000 && num < 1000000) {
      company = "十万";
      num /= 100000;
    } else if (num >= 1000000 && num < 10000000) {
      company = "百万";
      num /= 1000000;
    } else if (num >= 10000000 && num < 100000000) {
      company = "千万";
      num /= 10000000;
    } else if (num >= 100000000) {
      company = "亿";
      num /= 100000000;
    } else {
      company = "";
    }
    if(company == "万" || company == "十万" || company == "百万"){
      return num.toFixed(0) + company
    }else{
      return num.toFixed(1) + company;
    }
  }
}
