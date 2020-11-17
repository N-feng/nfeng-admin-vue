// import defaultSettings from "@/config";

// const { title, titleReverse, titleSeparator } = defaultSettings;

const title = "N-feng Admin"

/**
 * @author chuzhixin 1204505056@qq.com
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
export default function getPageTitle(pageTitle) {
  let newTitles: any = [];
  if (pageTitle) newTitles.push(pageTitle);
  if (title) newTitles.push(title);
  return newTitles.join(' - ')
  // if (titleReverse) newTitles = newTitles.reverse();
  // return newTitles.join(titleSeparator);
}
