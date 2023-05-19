const BASE_URL =
  "https://644ab451a8370fb321560b1c.mockapi.io/items";

export const fetchApi = async (path, options = {}) => {
  try {
    const requestOptions = {
      method: options.method || "GET",
      headers: { UserID: "bema", "Content-Type": "application/json" },
    };
    if (requestOptions.method !== "GET") {
      requestOptions.body = JSON.stringify(options.body);
    }

    const response = await fetch(`${BASE_URL}/${path}`, requestOptions);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const result = await response.json();

    return result;
  } catch (error) {
    throw error; 
  }
};
