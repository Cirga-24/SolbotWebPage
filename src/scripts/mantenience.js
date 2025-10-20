function toggleTabla(numTabla) {
    if (numTabla === 1) {
        const tabla = document.getElementById("tablaMantenimiento1");
        tabla.style.display = (tabla.style.display === "none" || tabla.style.display === "") ? "block" : "none";
    } else if (numTabla === 2) {
        const tabla = document.getElementById("tablaMantenimiento2");
        tabla.style.display = (tabla.style.display === "none" || tabla.style.display === "") ? "block" : "none";
    } else if (numTabla === 3) {
        const tabla = document.getElementById("tablaMantenimiento3");
        tabla.style.display = (tabla.style.display === "none" || tabla.style.display === "") ? "block" : "none";
    }
  }