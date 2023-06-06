import queryString from "query-string";

const strapiEndpoint = import.meta.env.VITE_STRAPI_ENDPOINT;
console.log(import.meta.env.MODE);
console.log(import.meta.env.VITE_STRAPI_ENDPOINT);

const getHomeBanners = async (params) => {
  const query = queryString.stringify(params);
  try {
    let response = await fetch(
      strapiEndpoint + "/api/home-hero-banners?" + query,
      {
        method: "GET",
      }
    );
    return response.json();
  } catch (err) {
    console.log(err);
    let error = {
      error: err,
    };
    return error;
  }
};

const getHomeNews = async (params) => {
  const query = queryString.stringify(params);
  try {
    let response = await fetch(strapiEndpoint + "/api/news-updates?" + query, {
      method: "GET",
    });
    return response.json();
  } catch (err) {
    console.log(err);
    let error = { error: err };
    return error;
  }
};

export { getHomeBanners, getHomeNews };
