require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productoRoutes = require('./routes/productoRoutes');
const carritoRoutes = require('./routes/carritoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const detalleVentaRoutes = require('./routes/detalleVentaRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const historialRoutes = require('./routes/historialPrecioRoutes');
const inventarioRoutes = require('./routes/inventarioRoutes');
const metodoPagoRoutes = require('./routes/metodoPagoRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const sucursalRoutes = require('./routes/sucursalRoutes');
const ventaRoutes = require('./routes/ventaRoutes');

const app = express();
app.use(express.json());

const PORT = 5000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("MongoDB conectado"))
.catch(err => console.error("Error al conectar con MongoDB:", err));

//Usar las rutas
app.use('/api/productos', productoRoutes);
app.use('/api/carritos', carritoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/detalles-venta', detalleVentaRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/historiales', historialRoutes);
app.use('/api/inventarios', inventarioRoutes);
app.use('/api/metodos-pago', metodoPagoRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/sucursales', sucursalRoutes);
app.use('/api/ventas', ventaRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
