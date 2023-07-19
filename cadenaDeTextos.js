const nombre = "Martin";

const apellido = "Olmos";

const estudiante = `${nombre} ${apellido}`;

const estudianteMayus = estudiante.toUpperCase();

const estudianteMinus = estudiante.toLowerCase();

const longitudEstudiante = estudiante.length;

const primeraLetraNombre = nombre.charAt(0);

const ultimaLetraApellido = apellido.charAt(apellido.length - 1);

const estudianteSinEspacios = estudiante.replace(/\s/g, "");

const nombreContenido = estudiante.includes(nombre);

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Estudiante:", estudiante);
console.log("Estudiante en mayúsculas:", estudianteMayus);
console.log("Estudiante en minúsculas:", estudianteMinus);
console.log("Longitud de Estudiante:", longitudEstudiante);
console.log("Primera letra del Nombre:", primeraLetraNombre);
console.log("Última letra del Apellido:", ultimaLetraApellido);
console.log("Estudiante sin espacios:", estudianteSinEspacios);
console.log("¿El Nombre está contenido en Estudiante?", nombreContenido);
