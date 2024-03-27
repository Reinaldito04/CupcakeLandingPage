import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
function Scroll() {

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Inicializar ScrollReveal solo si document está disponible (es decir, en el lado del cliente)
      ScrollReveal().reveal('.revelar', {
        delay: 300,
        distance: '20px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-in-out',
        reset: true
      });
      ScrollReveal().reveal('.revelar2', {
        delay: 300,
        distance: '20px',
        origin: 'left',
        duration: 1000,
        easing: 'ease-in-out',
        reset: true
      });
    }
  }, []);
  return (
    <>
        

    </>
  )
}

export default Scroll