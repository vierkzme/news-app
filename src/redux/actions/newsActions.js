import axios from "axios";

export const fetchNews =
  (query = "") =>
  async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`
      );
      dispatch({
        type: "FETCH_NEWS_SUCCESS",
        payload: response.data.response.docs,
      });
    } catch (error) {
      dispatch({ type: "FETCH_NEWS_ERROR", payload: error.message });
    }
  };

export const toggleSaveArticle = (article) => ({
  type: "TOGGLE_SAVE_ARTICLE",
  payload: article,
});
