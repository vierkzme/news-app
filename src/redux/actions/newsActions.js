import axios from "axios";

export const fetchNews =
  (query = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "FETCH_NEWS_REQUEST" });
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`
      );
      // console.log("Fetched data:", response.data.response.docs);
      dispatch({
        type: "FETCH_NEWS_SUCCESS",
        payload: response.data.response.docs,
      });
    } catch (error) {
      const statusCode = error.response?.status || 500;
      dispatch({
        type: "FETCH_NEWS_ERROR",
        payload: { message: error.message, statusCode },
      });
    }
  };

export const toggleSaveArticle = (article) => ({
  type: "TOGGLE_SAVE_ARTICLE",
  payload: article,
});

export const setSearchKeyword = (keyword) => ({
  type: "SET_SEARCH_KEYWORD",
  payload: keyword,
});

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});
