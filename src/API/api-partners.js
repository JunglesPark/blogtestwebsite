import queryString from "query-string";

const strapiEndpoint = import.meta.env.VITE_STRAPI_ENDPOINT;

const getAllPartners = async (params) => {
  const query = queryString.stringify(params);
  try {
    let response = await fetch(
      strapiEndpoint + "/api/partners-images?" + query,
      {
        method: "GET",
      }
    );
    return response.json();
  } catch (err) {
    console.log(err);
    let error = { error: err };
    return error;
  }
};

export { getAllPartners };
