setTimeout(() => {
    Swal.fire({
        title: '¿Desea ver BETA del sitio ahora?',
        text: "En la beta puede visualizar algunas imagenes de arte y descargarlas en su dispositivo de forma instantanea y gratuita",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Ahora no',
        confirmButtonText: 'Ver ahora'
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("./view/beta.html")
        }
      })
}, 5000);
