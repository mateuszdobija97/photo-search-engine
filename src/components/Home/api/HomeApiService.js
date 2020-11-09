class HomeApiService {
  getSuggestions(query) {
    // const requestUrl = '/url';

    // return axios.get()

    const allSuggestions = [
      "cat",
      "dog",
      "island",
      "islands",
      "islands of coast of krabi",
      "islands of thailand",
      "islands of greece",
      "tropical",
      "sea",
      "ocean",
      "nature",
    ];
    return new Promise((resolve) => {
      const validSuggestions = allSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query)
      );

      resolve(validSuggestions);
    });
  }
}

export default new HomeApiService();
