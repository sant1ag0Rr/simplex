// Datos en memoria (simulando una base de datos)
let requests = [];

const createRequest = (req, res) => {
  const { type, description, category } = req.body;

  // Crear una nueva solicitud
  const newRequest = {
    id: requests.length + 1,
    type,
    description,
    category,
    status: 'pendiente',
    createdAt: new Date(),
  };

  // Agregar la solicitud al arreglo
  requests.push(newRequest);

  res.json({ message: 'Solicitud creada exitosamente', request: newRequest });
};

module.exports = { createRequest };