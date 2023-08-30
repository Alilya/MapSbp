const db = require("../db");

class ActivityController {
  async createActivity(req, res) {
    const { id, type_activity} = req.body;
    const newActivity = await db.query(
      `INSERT INTO activity(id, type_activity) values ($1, $2) RETURNING *`,
      [id, type_activity]
    );
    res.json(newActivity.rows[0]);
  }
  async getActivity(req, res) {
    const activity = await db.query(
        `SELECT * FROM activity`);
      res.json(activity.rows);
  }
  async deleteActivity(req, res) {
    const id = req.query.id;
    const activity = await db.query(
      `DELETE FROM activity where id=$1`, [id]);
    res.json(activity.rows[0]);
  }
}

module.exports = new ActivityController();
