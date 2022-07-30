const axios = require("axios");

const service = axios.create({
  baseURL: "https://api.themoviedb.org",
});

const getPopularShowsService = () => {
  return service.get(
    `/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
};

const getDetailsShowsService = (apiId) => {
  return service.get(
    `/3/tv/${apiId}?api_key=${process.env.API_KEY}&language=en-US`
  );
};
const getGenreList = (genreId) => {
  return service.get(
    `/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=${genreId}&page=1`
  );
};

const getActors = (showId) => {
  return service.get(`/3/tv/${showId}/credits?api_key=${process.env.API_KEY}&language=en-US
    `);
};

const getActorDetails = (actorId) => {
  return service.get(`/3/person/${actorId}?api_key=${process.env.API_KEY}&append_to_response=credits
    `);
};

const getActorShows = (actorId) => {
  return service.get(`/3/person/${actorId}}/tv_credits?api_key=${process.env.API_KEY}`);
};

module.exports = {
  getPopularShowsService,
  getDetailsShowsService,
  getGenreList,
  getActors,
  getActorDetails,
  getActorShows,
};
