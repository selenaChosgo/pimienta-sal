const fs = require("fs");
const path = require("path");
const platillos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/platillos.json"), "utf-8"));

module.exports = {
    index: function(req, res, next) {
        res.render("index", {
            platillos,
        });
    },
    detalle: function(req, res, next) {
        let id = +req.params.id;
        let platillo = platillos.find(platillo => platillo.id == id);
        res.render("detalleMenu", {
            platillo,
        });
    },
}