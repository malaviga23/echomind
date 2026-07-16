const db = require("../config/db");

// Get Profile
exports.getProfile = (req, res) => {

    // Temporary user id
    const user_id = 1;

    const sql = `
        SELECT id, name, email, role
        FROM users
        WHERE id = ?
    `;

    db.query(sql, [user_id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(result[0]);

    });

};


// Update Profile
exports.updateProfile = (req, res) => {

    const user_id = 1;

    const { name, email } = req.body;

    const sql = `
        UPDATE users
        SET
        name=?,
        email=?
        WHERE id=?
    `;

    db.query(sql, [name, email, user_id], (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json({
            message: "Profile updated successfully"
        });

    });

};