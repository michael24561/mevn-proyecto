const Producto = require("../models/Producto");

// Crear un nuevo producto
exports.crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el producto", detalle: error.message });
  }
};

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find()
      .populate("categoria", "nombre")
      .populate("proveedor", "nombre");
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

// Obtener un producto por ID
exports.obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id)
      .populate("categoria", "nombre")
      .populate("proveedor", "nombre");
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar el producto" });
  }
};

// Actualizar un producto
exports.actualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate("categoria", "nombre")
      .populate("proveedor", "nombre");
    if (!productoActualizado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el producto", detalle: error.message });
  }
};

// Eliminar un producto
exports.eliminarProducto = async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
