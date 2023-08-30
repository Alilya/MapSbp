const db = require("../db");

class ListPlacesController {
  async createPlace(req, res) {
    const { id, address, metro } = req.body;
    const newPlace = await db.query(
      `INSERT INTO listplaces(id, address, metro) values ($1, $2,$3) RETURNING *`,
      [id, address, metro]
    );
    res.json(newPlace.rows[0]);
  }

  async getListPlaces(req, res) {
    const places = await db.query(
      `SELECT * FROM listplaces`);
    res.json(places.rows);
  }

  async getOnePlace(req, res) {
    const id = req.params.id;
    const place = await db.query(
      `SELECT * FROM listplaces where id=$1`, [id]);
    res.json(place.rows[0]);
  }

  async updateListPlaces(req, res) {
    const { id, address, metro } = req.body;
    const updatePlaces = await db.query(
      `UPDATE listplaces set address=$2, metro =$3 where id=$1 RETURNING *`,
      [id, address, metro]
    );
    res.json(updatePlaces.rows[0]);
  }

  async deletePlace(req, res) {
    const id = req.params.id;
    const place = await db.query(
      `DELETE FROM listplaces where id=$1`, [id]);
    res.json(place.rows[0]);
  }
}

module.exports = new ListPlacesController();
