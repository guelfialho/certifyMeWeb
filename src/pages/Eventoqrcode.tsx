//import { useParams, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import "../estilos/Eventoqrcode.css";

export default function Eventoqrcode() {
    //const { id } = useParams<{ id: string }>();
    //const navigate = useNavigate();

    const token = Math.random().toString(36).substring(2, 10); // exemplo simples
    const link = `${window.location.origin}/pages/certificado/${token}`;

    const imprimir = () => {
    window.print();
    };

    const handleClickQr = () => {
    window.open(link, "_blank");
    };

    return (
    <div className="qrcode-pagina">
        <div onClick={handleClickQr} style={{ cursor: "pointer" }}>
        <QRCode value={link} size={256} />
        </div>
        <button onClick={imprimir}>Imprimir QR Code</button>
    </div>
    );
}
