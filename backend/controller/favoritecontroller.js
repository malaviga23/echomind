const db = require("../config/db");

// Get favorite files
exports.getFavorites = (req, res) => {

    const sql = `
        SELECT *
        FROM memory
        WHERE is_favorite = TRUE
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result);

    });

};

// Mark as favorite
exports.addFavorite = (req, res) => {

    const id = req.params.id;

    db.query(
        "UPDATE memory SET is_favorite=TRUE WHERE memory_id=?",
        [id],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Added to favorites"
            });

        }
    );

};

// Remove favorite
exports.removeFavorite = (req, res) => {

    const id = req.params.id;

    db.query(
        "UPDATE memory SET is_favorite=FALSE WHERE memory_id=?",
        [id],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Removed from favorites"
            });

        }
    );

};