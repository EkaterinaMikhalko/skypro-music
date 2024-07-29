import { likeTrackFetchType } from "@/components/types";

const apiUrl = "https://webdev-music-003b5b991590.herokuapp.com/catalog/";
const ApiUrlCategoryPlaylist =
"https://skypro-music-api.skyeng.tech/catalog/selection/";
 // "https://webdev-music-003b5b991590.herokuapp.com/catalog/selection/";

export async function getTracks() {
  const res = await fetch(apiUrl + "track/all/");

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const responseData = await res.json();
  return responseData.data;
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
  const response = await fetch(apiUrl + "track/favorite/all/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка получения данных");
  }
  const responseData = await response.json();
  return responseData.data;
}

export async function likeTrackFetch({ access, id }: likeTrackFetchType) {
  const response = await fetch(apiUrl + `track/${id}/favorite/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  if (!response.ok) {
    throw new Error("ошибка при отправке данных");
  }
  const responseData = await response.json();
  return responseData.data;
}

export async function dislikeTrackFetch({ access, id }: likeTrackFetchType) {
  const response = await fetch(apiUrl + `track/${id}/favorite/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  if (!response.ok) {
    throw new Error("ошибка при отправке данных");
  }
  const responseData = await response.json();
  return responseData.data;
}
