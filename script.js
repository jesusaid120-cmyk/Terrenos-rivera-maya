// Calculadora de Pagos
const priceInput = document.getElementById('priceInput');
const downPaymentPercentage = document.getElementById('downPaymentPercentage');
const monthsInput = document.getElementById('monthsInput');

const downPaymentAmount = document.getElementById('downPaymentAmount');
const remainingAmount = document.getElementById('remainingAmount');
const monthlyPayment = document.getElementById('monthlyPayment');

function calculatePayments() {
  const price = parseFloat(priceInput.value) || 0;
  const downPercent = parseFloat(downPaymentPercentage.value) || 30;
  const months = parseInt(monthsInput.value) || 12;

  const downPayment = (price * downPercent) / 100;
  const remaining = price - downPayment;
  const monthly = remaining / months;

  downPaymentAmount.textContent = `$${downPayment.toLocaleString('es-MX', { maximumFractionDigits: 0 })} MXN`;
  remainingAmount.textContent = `$${remaining.toLocaleString('es-MX', { maximumFractionDigits: 0 })} MXN`;
  monthlyPayment.textContent = `$${monthly.toLocaleString('es-MX', { maximumFractionDigits: 0 })} MXN`;
}

if (priceInput) {
  priceInput.addEventListener('input', calculatePayments);
  downPaymentPercentage.addEventListener('input', calculatePayments);
  monthsInput.addEventListener('input', calculatePayments);
  calculatePayments();
}

// Formulario de Contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const mensaje = formData.get('mensaje');
    
    // Validación básica
    if (!nombre || !email || !mensaje) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    // Aquí puedes enviar los datos a tu servidor
    console.log('Formulario enviado:', { nombre, email, mensaje });
    alert('¡Gracias por tu interés! Nos pondremos en contacto pronto.');
    contactForm.reset();
  });
}

// Hover effects en cards
document.querySelectorAll('.listing-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
  });
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fallback para anclas: asegura que #info haga scroll aunque el navegador no lo haga automáticamente
document.addEventListener('DOMContentLoaded', function () {
  // Si la URL ya contiene #info al cargar la página
  if (location.hash === '#info') {
    const target = document.getElementById('info');
    if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 60);
  }

  // Refuerzo para enlaces internos: evita comportamiento por defecto y usa scrollIntoView + actualizar history
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const sel = this.getAttribute('href');
      const tgt = document.querySelector(sel);
      if (tgt) {
        e.preventDefault();
        tgt.scrollIntoView({ behavior: 'smooth' });
        try { history.pushState(null, '', sel); } catch (err) {}
      }
    });
  });
});
