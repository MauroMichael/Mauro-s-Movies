const { URL_APIKEY } = process.env;
const { Favs } = require("../db.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args)); //dynamic import to import the 'node-fetch' package

const getFavorites = async (req, res) => {
  await Favs.findAll({})
    .then((favs) => {
      const urlApiFavsId = favs.map((f) => `${URL_APIKEY}i=` + f.favId);
      Promise.all(urlApiFavsId.map((f) => fetch(f)))
        .then((values) => Promise.all(values.map((res) => res.json())))
        .then((data) => {
          res.json(data);
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send(error);
    });
};

const getMovies = async (req, res) => {
  const { title } = req.query;

  await fetch(`${URL_APIKEY}s=${title}&type=movie`)
    .then((r) => r.json())
    .then((json) => {
      return res.json(json);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send(error);
    });
};

const getSeries = async (req, res) => {
  const { title } = req.query;

  await fetch(`${URL_APIKEY}s=${title}&type=series`)
    .then((r) => r.json())
    .then((json) => {
      return res.json(json);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send(error);
    });
};

const getDetail = async (req, res) => {
  const { id } = req.params;

  await fetch(`${URL_APIKEY}i=` + id)
    .then((r) => r.json())
    .then((json) => {
      return res.json(json);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send(error);
    });
};

const createFavorite = async (req, res) => {
  const { id, title } = req.params;

  try {
    const favsMovies = await Favs.findAll({});
    if (!favsMovies.find((f) => f.favId === id)) {
      await Favs.create({
        favId: id,
        title: title,
      });
    } else {
      return res.json("already").status(204);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }

  res.json("succeeded!");
};

const deleteFavorite = async (req, res) => {
  const { deleteId } = req.params;

  try {
    const item = await Favs.findByPk(deleteId);
    let data = item.title;
    await item.destroy();
    res.json(`"${data}" was removed from Favorites`);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

module.exports = {
  getFavorites,
  getMovies,
  getSeries,
  getDetail,
  createFavorite,
  deleteFavorite,
};
