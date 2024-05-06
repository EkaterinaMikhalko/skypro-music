const ApiUrl = "https://skypro-music-api.skyeng.tech/catalog/track/all/";
export async function getTracks() {
  const res = await fetch(ApiUrl);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}


