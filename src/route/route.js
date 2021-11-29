const express = require("express");

const olim = require("../api/olimpik/controller/olimpik.controller");

const router = express.Router();

/************************************
 *             route Poolpack crud
 ************************************/
router.post("/poolpackadd", olim.addOlimpik);
router.put("/poolpackupdate/:id", olim.updateOlimpik);
router.delete("/poolpackdelete/:id", olim.deleteOlimpik);
/************************************
 *             route Poolpack crud
 ************************************/

/************************************
 *             route Poolpack tabel
 ************************************/
router.get("/poolpackall", olim.getAllOlimpik);
/************************************
 *             route Poolpack tabel
 ************************************/

module.exports = router;
