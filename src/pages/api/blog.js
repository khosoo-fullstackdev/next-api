export default async function handler(request, response) {
  const highlight = await fetch("https://dev.to/api/articles?top=1&per_page=5");
  const hlData = await highlight.json();

  // const trend = await fetch("https://dev.to/api/articles?top=1&per_page=4");
  // const trendData = await trend.json();

  // const post = await fetch("https://dev.to/api/articles?top=30&per_page=9");
  // const postData = await post.json();

  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(hlData);
  // response.status(200).json(trendData);
  // response.status(200).json(postData);
}
