"use client";

export const CookieService = {
  get(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      return parts.pop()?.split(";").shift();
    }

    return null;
  },

  set(name: string, value: string, days = 7) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);

    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
  },

  remove(name: string) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
  },
};