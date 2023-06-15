import queryString from "query-string";

const strapiEndpoint = import.meta.env.VITE_STRAPI_ENDPOINT;

const getAllNews = async (params) => {
  const query = queryString.stringify(params);
  try {
    let response = await fetch(strapiEndpoint + "/api/news-updates?" + query, {
      method: "GET",
    });
    return response.json();
  } catch (err) {
    console.log(err);
    let error = {
      error: err,
    };
    return error;
  }
};

const getFeatureNews = async (params) => {
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

export { getAllNews, getFeatureNews };
