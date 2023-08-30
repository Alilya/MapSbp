const db = require("../db");

class ListPlacesController {
  async createPlace(req, res) {
    const { id, address, metro } = req.body;
    const newPlace = await db.query(
      `INSERT INTO listplaces(id,address, metro) values ($1, $2,$3) RETURNING *`,
      [id, address, metro]
    );
    res.json(newPlace.rows[0]);
  }
  async getListPlaces(req, res) {}
  async getOnePlace(req, res) {}
  async updateListPlaces(req, res) {}
  async deletePlace(req, res) {}
}

module.exports = new ListPlacesController();
