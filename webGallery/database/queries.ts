const queries = {

    SELECT_ALL_PICTURES : `
        SELECT * FROM pictures;
    `,
    SELECT_PICTURE_BY_ID : `
        SELECT * FROM pictures WHERE id=?
    `,
    INSERT_PICTURE : `
        INSERT INTO pictures (title, description, path, thumbnail_path)
        VALUES (?, ?, ?, ?)
    `
}

export default queries;