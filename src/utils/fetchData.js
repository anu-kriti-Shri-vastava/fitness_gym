export const exerciseOption = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'e3967d28aamsh7666a0215e00700p18cd29jsn740536a8a13c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOption ={
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'X-RapidAPI-Key': 'e3967d28aamsh7666a0215e00700p18cd29jsn740536a8a13c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};