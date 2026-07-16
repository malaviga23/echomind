const db = require("../config/db");
const fs = require("fs");

// Get all memories
exports.getAllMemories = (req, res) => {

    const sql = "SELECT * FROM memory ORDER BY created_at DESC";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result);

    });

};


// Search memory
exports.searchMemory = (req, res) => {

    const keyword = req.query.keyword;

    const sql = `
        SELECT *
        FROM memory
        WHERE
            title LIKE ?
            OR file_name LIKE ?
            OR file_type LIKE ?
        ORDER BY created_at DESC
    `;

    db.query(
        sql,
        [
            `%${keyword}%`,
            `%${keyword}%`,
            `%${keyword}%`
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(200).json(result);

        }
    );

};


// Delete memory
exports.deleteMemory = (req, res) => {

    const id = req.params.id;

    // Get file path
    db.query(
        "SELECT file_path FROM memory WHERE memory_id=?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Memory not found"
                });
            }

            const filePath = result[0].file_path;

            // Delete database record
            db.query(
                "DELETE FROM memory WHERE memory_id=?",
                [id],
                (err) => {

                    if (err) {
                        return res.status(500).json(err);
                    }

                    // Delete uploaded file
                    fs.unlink(filePath, (error) => {
                        if (error) {
                            console.log("File delete error:", error);
                        }
                    });

                    res.status(200).json({
                        message: "Memory deleted successfully"
                    });

                }
            );

        }
    );

};