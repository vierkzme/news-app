const initialState = {
  articles: [],
  savedArticles: [],
  loading: false,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS_SUCCESS":
      return { ...state, articles: action.payload, loading: false };
    case "FETCH_NEWS_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "TOGGLE_SAVE_ARTICLE":
      const isSaved = state.savedArticles.some(
        (a) => a.web_url === action.payload.web_url
      );
      return {
        ...state,
        savedArticles: isSaved
          ? state.savedArticles.filter(
              (a) => a.web_url !== action.payload.web_url
            )
          : [...state.savedArticles, action.payload],
      };
    default:
      return state;
  }
};

export default newsReducer;
