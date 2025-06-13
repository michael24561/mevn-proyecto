// app/admin/productos/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

interface Producto {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  categoria: string;
  proveedor: string;
}

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProducto, setCurrentProducto] = useState<Producto | null>(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [formState, setFormState] = useState({
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    imagen: '',
    categoria: '',
    proveedor: ''
  });

  // Obtener productos
  const fetchProductos = async () => {
    try {
      const res = await fetch('/api/productos');
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error('Error fetching productos:', error);
      setSnackbar({ open: true, message: 'Error al cargar productos', severity: 'error' });
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // Manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: name === 'precio' || name === 'stock' ? Number(value) : value
    }));
  };

  // Abrir diálogo para crear/editar
  const handleOpenDialog = (producto: Producto | null) => {
    if (producto) {
      setCurrentProducto(producto);
      setFormState({
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        stock: producto.stock,
        imagen: producto.imagen,
        categoria: producto.categoria,
        proveedor: producto.proveedor
      });
    } else {
      setCurrentProducto(null);
      setFormState({
        nombre: '',
        descripcion: '',
        precio: 0,
        stock: 0,
        imagen: '',
        categoria: '',
        proveedor: ''
      });
    }
    setOpenDialog(true);
  };

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = currentProducto 
        ? `/api/productos/${currentProducto._id}`
        : '/api/productos';
      const method = currentProducto ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error('Error al guardar el producto');

      setSnackbar({ 
        open: true, 
        message: currentProducto ? 'Producto actualizado' : 'Producto creado', 
        severity: 'success' 
      });
      setOpenDialog(false);
      fetchProductos();
    } catch (error) {
      console.error('Error:', error);
      setSnackbar({ open: true, message: 'Error al guardar', severity: 'error' });
    }
  };

  // Eliminar producto
  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este producto?')) return;
    try {
      const res = await fetch(`/api/productos/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar');
      setSnackbar({ open: true, message: 'Producto eliminado', severity: 'success' });
      fetchProductos();
    } catch (error) {
      console.error('Error:', error);
      setSnackbar({ open: true, message: 'Error al eliminar', severity: 'error' });
    }
  };

  // Cerrar Snackbar
  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Productos
      </Typography>

      <Button 
        variant="contained" 
        startIcon={<Add />} 
        onClick={() => handleOpenDialog(null)}
        sx={{ mb: 3 }}
      >
        Nuevo Producto
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((producto) => (
              <TableRow key={producto._id}>
                <TableCell>{producto.nombre}</TableCell>
                <TableCell>{producto.descripcion}</TableCell>
                <TableCell>${producto.precio.toFixed(2)}</TableCell>
                <TableCell>{producto.stock}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(producto)}>
                    <Edit color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(producto._id)}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo para crear/editar */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          {currentProducto ? 'Editar Producto' : 'Nuevo Producto'}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              name="nombre"
              label="Nombre"
              type="text"
              fullWidth
              variant="outlined"
              value={formState.nombre}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              name="descripcion"
              label="Descripción"
              type="text"
              fullWidth
              variant="outlined"
              value={formState.descripcion}
              onChange={handleInputChange}
              multiline
              rows={3}
            />
            <TextField
              margin="dense"
              name="precio"
              label="Precio"
              type="number"
              fullWidth
              variant="outlined"
              value={formState.precio}
              onChange={handleInputChange}
              required
              inputProps={{ min: 0, step: 0.01 }}
            />
            <TextField
              margin="dense"
              name="stock"
              label="Stock"
              type="number"
              fullWidth
              variant="outlined"
              value={formState.stock}
              onChange={handleInputChange}
              required
              inputProps={{ min: 0 }}
            />
            <TextField
              margin="dense"
              name="imagen"
              label="URL de la imagen"
              type="text"
              fullWidth
              variant="outlined"
              value={formState.imagen}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              name="categoria"
              label="Categoría ID"
              type="text"
              fullWidth
              variant="outlined"
              value={formState.categoria}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              name="proveedor"
              label="Proveedor ID"
              type="text"
              fullWidth
              variant="outlined"
              value={formState.proveedor}
              onChange={handleInputChange}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
            <Button type="submit" variant="contained">
              {currentProducto ? 'Actualizar' : 'Crear'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Snackbar para notificaciones */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}