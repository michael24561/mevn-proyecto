import { useState } from "react";

export default function SignUp() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        setSuccess("Cuenta creada exitosamente. Por favor, inicia sesión.");
        e.target.reset();
      } else {
        const data = await res.json();
        setError(data.message || "Error al crear la cuenta");
      }
    } catch {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%", borderColor: '#59ab6e' }}>
        <h2 className="text-center mb-4 text-success">Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-muted">Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control border-success"
              placeholder="Usuario"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-muted">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control border-success"
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-muted">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control border-success"
              placeholder="Contraseña"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label text-muted">Confirmar contraseña</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-control border-success"
              placeholder="Confirmar contraseña"
              required
            />
          </div>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {success && <div className="alert alert-success" role="alert">{success}</div>}
          <button type="submit" className="btn btn-success w-100">Crear cuenta</button>
        </form>
        <p className="mt-3 text-center">
          ¿Ya tienes una cuenta? <a href="/auth/signin" className="text-success">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}
