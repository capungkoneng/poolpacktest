const model = require("../model/olimpik.model");
const paggin = require("../../../lib/pagin");
var url = require("url");

const getAllOlimpik = async (req, res, next) => {
  try {
    const hostname = req.headers.host;
    const pathname = url.parse(req.url).pathname;
    const pagination = new paggin(
      req.query.page,
      req.query.perPage,
      hostname,
      pathname
    );

    let olimpik = await model.olympic.findAndCountAll({
      order: [["id", "asc"]],
      limit: pagination.perPage,
      offset: pagination.page,
    });

    res.status(200).json({
      massage: "get all",
      data: olimpik,
      totalData: olimpik.total,
      perPage: pagination.perPage,
      currentPage: pagination.currentPage,
      nextPage: pagination.next(olimpik.total),
      previouspage: pagination.prev(),
    });
  } catch (error) {
    next(error);
  }
};

const addOlimpik = async (req, res, next) => {
  try {
    let olimpik = await model.olympic.create({
      athlete: req.body.athlete,
      age: req.body.age,
      year: req.body.year,
    });
    res.status(201).json({
      massage: `Berhasil tambah data`,
      data: olimpik,
    });
  } catch (error) {
    next(error);
  }
};

const updateOlimpik = async (req, res, next) => {
  try {
    let olimpik = await model.olympic.update(
      {
        athlete: req.body.athlete,
        age: req.body.age,
        year: req.body.year,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(201).json({
      massage: `Berhasil update data`,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOlimpik = async (req, res, next) => {
  try {
    let olimpik = await model.olympic.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({
      massage: `Berhasil hapus data`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllOlimpik,
  addOlimpik,
  updateOlimpik,
  deleteOlimpik,
};
