import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Alert = withReactContent(Swal);

export const msjConfirmacion =
  "Le solicitamos esperar un momento a que la solicitud termine.";
export const titleConfirmacion =
  "¿Está seguro de realizar la acción solicitada?";
export const msjExito =
  "La actividad solicitada, se ha realizado de manera exitosa.";
export const titleExito = "Acción realizada exitosamente";
export const msjError =
  "No se ha logrado realizar la actividad solicitada, por lo cual le solicitamos contactar a soporte técnico para corregir el problema.";
export const titleError = "Error al realizar la acción";

export default Alert;
