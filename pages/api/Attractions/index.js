import fetch from 'isomorphic-fetch';
export default async (req, res) => {
  const { page } = req.query;
  console.log('666666');
  const response = await fetch(
    `https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=${page}`
  );
  const data = await response.json();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
};
