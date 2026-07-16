const db = require("../config/db");

exports.uploadFile = (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            message: "No file uploaded"
        });
    }

    // Change this later after login
    const user_id = 1;

    const title = req.body.title;

    const file_name = req.file.filename;

    const file_path = req.file.path;

    const file_type = req.file.mimetype;

    const sql = `
        INSERT INTO memory
        (user_id, title, file_name, file_path, file_type)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [user_id, title, file_name, file_path, file_type],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(200).json({
                message: "File uploaded successfully",
                memory_id: result.insertId
            });

        }
    );

};