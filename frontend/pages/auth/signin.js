import { getCsrfToken, signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn({ csrfToken }) {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res.error) {
      setError("Usuario o contraseña incorrecta");
    } else {
      window.location.href = "http://localhost:3000/dashboard"; // Redirige al dashboard
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%", borderColor: '#59ab6e' }}>
        <h2 className="text-center mb-4 text-success">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
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
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <button type="submit" className="btn btn-success w-100">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      csrfToken: csrfToken ?? null,
    },
  };
}
