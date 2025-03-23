// Datos en memoria (simulando una base de datos de usuarios)
const users = [];

const login = (req, res) => {
  const { email, password } = req.body;

  // Buscar el usuario en el arreglo
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(400).json({ message: 'Credenciales inválidas' });
  }

  // Simular un token JWT (solo para pruebas)
  const token = 'token_simulado';
  res.json({ token });
};

const register = (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario ya existe
  const userExists = users.some((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }

  // Crear un nuevo usuario
  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);

  res.json({ message: 'Usuario registrado exitosamente', user: newUser });
};

module.exports = { login, register };