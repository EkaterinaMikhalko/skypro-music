const ApiUrl = "https://webdev-music-003b5b991590.herokuapp.com";
const ApiUrlCategoryPlaylist =
  "https://webdev-music-003b5b991590.herokuapp.com/selection/";
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTcxMjcxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4YzQ5NDNmOWNmNTRlZjI5NmFmNTMyOWUwODM4YWQ5IiwidXNlcl9pZCI6NzkyfQ.5n8YHTjsgAnYnc4gioyV1wPnxM2D16PS6c9kNhC-JoE";
export async function getTracks() {
  const res = await fetch(ApiUrl);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}

export async function getCategoryTracks(id: string) {
  const res = await fetch(ApiUrlCategoryPlaylist + id);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const data = await res.json();
  return data.items;
}

export async function fetchFavouriteTracks(access: string) {
  const response = await fetch(ApiUrl + `/catalog/track/favorite/all/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка получения данных");
  }
  return response.json();
}
