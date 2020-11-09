export const appRoutes = {
  home: "/",
  results: "/results/:suggestionName",
};

export const getHomeRoute = () => {
  return appRoutes.home;
};

export const getResultRoute = (suggestionName) => {
  return appRoutes.results.replace(":suggestionName", suggestionName);
};
