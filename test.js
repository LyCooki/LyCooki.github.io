// // 模拟一个分页接口
// async function fetchData(page) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ data: [`Page ${page} Item 1`, `Page ${page} Item 2`], nextPage: page + 1 });
//     }, 2000); // 模拟异步请求
//   });
// }

// // 定义一个异步生成器，逐步获取所有分页数据
async function* fetchAllData() {
  let page = 1;
  while (page<10) {
    const result = await fetchData(page);
    yield result.data; // 返回当前页的数据
    if (!result.nextPage) break; // 如果没有下一页，结束循环
    page = result.nextPage;
  }
}
console.log(fetchAllData.toString());

// // 使用 for await...of 遍历所有数据
// (async () => {
//   for await (const data of fetchAllData()) {
//     console.log(data); // 输出每一页的数据
//   }
// })();
// 模拟一组异步任务
const tasks = [
  new Promise((resolve) => setTimeout(() => resolve('Task 1 Done'), 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Task 2 Done'), 500)),
  new Promise((resolve) => setTimeout(() => resolve('Task 3 Done'), 800)),
];

// 使用 for await...of 按顺序处理任务
(async () => {
  for await (const result of tasks) {
    console.log(result); // 按顺序输出任务结果
  }
})();