import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Certificado() {
    const { token } = useParams();
    const [expirado, setExpirado] = useState(false);

useEffect(() => {
    if (!token) {
    setExpirado(true);
    return;
    }

    const tempoCriado = parseInt(token.slice(-4), 36) || 0;
    const tempoAgora = Date.now() % 100000;
    if (tempoAgora - tempoCriado > 5000) {
    setExpirado(true);
    }
}, [token]);


    if (expirado) {
    return <div style={{ padding: "2rem", textAlign: "center" }}><h2>Token expirado</h2></div>;
    }

    return (
    <div className="form-box centro">
        <form>
        <h2>Confirmação de Presença</h2>
        <label>Nome</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>CPF</label>
        <input type="text" required />
        <button type="submit">Confirmar</button>
        </form>
    </div>
    );
}
