import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { useState } from "react";
import "../estilos/Eventoqrcode.css";

export default function Eventoqrcode() {
  const { id } = useParams();
  const [copiado, setCopiado] = useState(false);

  const link = `${window.location.origin}/pages/certificado/${id}`;

  const imprimir = () => {
    window.print();
  };

  const copiarLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      alert("Falha ao copiar o link.");
    }
  };

  const handleClickQr = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div
        className="qrcode-pagina"
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <div
          onClick={handleClickQr}
          style={{ cursor: "pointer", display: "inline-block" }}
        >
          <QRCode value={link} size={256} />
        </div>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <button onClick={imprimir} type="button">
            Imprimir QR Code
          </button>
          <button onClick={copiarLink} type="button" disabled={copiado}>
            {copiado ? "Copiado!" : "Copiar Link"}
          </button>
        </div>
      </div>
    </>
  );
}
