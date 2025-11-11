export const getImageUrl = (path) => {
    return new URL(`/ruchi/assets/${path}`, import.meta.url).href;
  };