
// ===== VALIDACIÓN Y LOGIN =====
function validarLogin(event) {
    event.preventDefault();
    
    const cedula = document.getElementById('cedula').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Validaciones básicas
    if (!cedula || !password) {
        alert('Por favor, complete todos los campos');
        return false;
    }
    
    if (!/^\d{10}$/.test(cedula)) {
        alert('La cédula debe tener exactamente 10 dígitos');
        return false;
    }
    
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return false;
    }
    
    // Verificar credenciales
    if (usuarios[cedula] && usuarios[cedula].password === password) {
        // Login exitoso
        const usuario = usuarios[cedula];
        alert(`¡Bienvenido ${usuario.nombre}!`);
        
        // Redirigir al dashboard correspondiente
        window.location.href = usuario.ruta;
    } else {
        alert('Cédula o contraseña incorrectos');
    }
    
    return false;
}

















// ===== CONFIGURACIÓN DE USUARIOS =====
const usuarios = {
    // Administrador
    '1316670239': { 
        password: 'admin123', 
        tipo: 'administrador', 
        nombre: 'Administrador Principal',
        ruta: '../Administrador/Dashboard.html'
    },
    
    // Cliente
    '1316670238': { 
        password: 'cliente123', 
        tipo: 'cliente', 
        nombre: 'Juan Pérez',
        ruta: '../Cliente/cliente_dashboard.html'
    }
};







// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', validarLogin);
    
    console.log('=== CREDENCIALES DE PRUEBA ===');
    console.log('Administrador - Cédula: 1316670239 | Contraseña: admin123');
    console.log('Cliente - Cédula: 1316670238 | Contraseña: cliente123');
});