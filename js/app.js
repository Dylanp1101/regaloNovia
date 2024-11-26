  // Fecha de inicio (hoy)
  const startDate = new Date();

  // Fecha de fin (26/11/2025)
  const endDate = new Date('11/26/2025');

  // Función para actualizar el contador
  function updateCounter() {
      const currentDate = new Date();
      const timeDifference = endDate - currentDate;

      if (timeDifference <= 0) {
          document.getElementById('counter').innerHTML = "El contador ha llegado a su fin.";
          return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      document.getElementById('counter').innerHTML = `Quedan:<br>
          ${years} años, ${months % 12} meses, ${days % 30} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos.`;
  }

  // Actualizar cada segundo
  setInterval(updateCounter, 1000);

  // Llamar a la función por primera vez
  updateCounter();