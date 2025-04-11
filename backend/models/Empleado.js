const mongoose = require("mongoose");

const EmpleadoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    telefono: { type: String },
    email: { type: String }
});

module.exports = mongoose.model("Empleado", EmpleadoSchema);
