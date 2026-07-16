const db = require("../config/db");

exports.getDashboard = (req, res) => {

    const sql = `
        SELECT
            COUNT(*) AS totalFiles,

            SUM(CASE WHEN file_type LIKE 'application/pdf%' THEN 1 ELSE 0 END) AS pdfFiles,

            SUM(CASE WHEN file_type LIKE 'image/%' THEN 1 ELSE 0 END) AS imageFiles,

            SUM(CASE WHEN file_type LIKE 'video/%' THEN 1 ELSE 0 END) AS videoFiles,

            SUM(CASE
                WHEN file_type LIKE 'application/msword%'
                OR file_type LIKE 'application/vnd%'
                OR file_type LIKE 'text/%'
                THEN 1
                ELSE 0
            END) AS documentFiles

        FROM memory
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result[0]);

    });

};