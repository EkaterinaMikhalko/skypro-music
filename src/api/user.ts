import { SigninFormType } from "@/components/types";


const apiUrl = "https://webdev-music-003b5b991590.herokuapp.com/user";
export const fetchUser = async ({ email, password }: SigninFormType) => {
  const response = await fetch(apiUrl + `/login/`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 401) {
    throw new Error("Неверный логин или пароль");
  } else {
    if (!response.ok) {
      throw new Error("Заполните поля");
    }
  }
  const responseData = await response.json();
  return responseData;
};

export const fetchTokens = async ({ email, password }: SigninFormType) => {
  const response = await fetch(apiUrl + `/token/`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 401) {
    throw new Error("Неверный логин или пароль");
  } else {
    if (!response.ok) {
      throw new Error("Заполните поля");
    }
  }
  const responseData = await response.json();
  return responseData;
};
