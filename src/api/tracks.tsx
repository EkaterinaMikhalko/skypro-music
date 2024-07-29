import { likeTrackFetchType } from "@/components/types";

const apiUrl = 'https://webdev-music-003b5b991590.herokuapp.com/catalog/';

export async function getTracks() {
  const res = await fetch(apiUrl+"track/all/");

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
const responseData = await res.json();
  return responseData.data;
}

export async function getCategoryTracks(id: string) {
  const res = await fetch(apiUrl + "selection/" + id);

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const responseData = await res.json();
  return responseData.items.data;
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

export async function likeTrackFetch({access, id}: likeTrackFetchType) {
  const response = await fetch(apiUrl + `track/${id}/favorite/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
  if (!response.ok) {
    throw new Error("ошибка при отправке данных")  
  }
  const responseData = await response.json();
  return responseData.data;
}

export async function dislikeTrackFetch({access, id}: likeTrackFetchType) {
  const response = await fetch(apiUrl + `track/${id}/favorite/`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
  if (!response.ok) {
    throw new Error("ошибка при отправке данных")  
  }
  const responseData = await response.json();
  return responseData.data;
}
