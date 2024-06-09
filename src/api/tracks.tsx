const ApiUrl = "https://skypro-music-api.skyeng.tech/catalog/track/all/";
const ApiUrlCategoryPlaylist =
  "https://skypro-music-api.skyeng.tech/catalog/selection/";
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
