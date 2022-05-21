let btn = document.getElementById("menu");

//open menu
btn.onclick = menuBurguer = ()=>{
    let bigtext = document.getElementById("bigtext");
    let nav = document.getElementById("nav-tool");
    let btnGalery = document.getElementById("btnGalery");
    let span = document.getElementById("span");

    nav.classList.toggle("active");
    bigtext.classList.toggle("hidden-bigtext");
    btnGalery.classList.toggle("hidden-button");
    span.classList.toggle("hidden-span");
}

//extras
function Alerts(){
  Swal.fire({ icon: 'success' })
}
//INFO LIST
let takeListInfo = document.getElementById("info-list");

takeListInfo.onclick = function(){
  Swal.fire({
    icon: 'info',
    title: 'Información',
    text: 'Esta página en particular es una BETA, por lo que no es en sí ArtBox, sino, que solamente tendrás la posibilidad de poder descargar imagenes. ArtBox será un lugar donde podrás compartir y descargar imagenes o en su defecto "Arte".'
  })
}



//control downloads images
let img1 = document.getElementById("img-1"),
    img2 = document.getElementById("img-2"),
    img3 = document.getElementById("img-3"),
    img4 = document.getElementById("img-4"),
    img5 = document.getElementById("img-5"),
    img6 = document.getElementById("img-6"),
    img7 = document.getElementById("img-7"),
    img8 = document.getElementById("img-8"),
    img9 = document.getElementById("img-9"),
    img10 = document.getElementById("img-10"),
    img11 = document.getElementById("img-11"),
    img12 = document.getElementById("img-12"),
    img13 = document.getElementById("img-13"),
    img14 = document.getElementById("img-14"),
    img15 = document.getElementById("img-15"),
    img16 = document.getElementById("img-16"),
    img17 = document.getElementById("img-17"),
    img18 = document.getElementById("img-18"),
    img19 = document.getElementById("img-19"),
    img20 = document.getElementById("img-20"),
    img21 = document.getElementById("img-21"),
    img22 = document.getElementById("img-22"),
    img23 = document.getElementById("img-23"),
    img24 = document.getElementById("img-24"),
    img25 = document.getElementById("img-25"),
    img26 = document.getElementById("img-26"),
    img27 = document.getElementById("img-27");


img1.onclick = downloadImg = ()=>{
      Swal.fire({
        title: '¿Desea descargar imagen?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img.jpeg'>Descargar</a>"
      }).then((result) => {
        if (result.isConfirmed) {
            return Alerts();
        }
      })
    }
    
img2.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img2.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}

img3.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img3.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}

img4.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img4.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}

img5.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img5.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img6.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img6.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img7.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img7.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img8.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img8.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img9.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img9.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img10.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img10.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img11.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img11.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img12.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img12.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img13.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img13.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img14.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img14.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img15.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img15.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img16.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img16.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img17.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img17.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img18.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img18.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img19.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img19.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img20.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img20.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img21.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img21.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img22.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img22.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img23.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img23.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img24.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img24.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img25.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img25.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img26.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img26.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
img27.onclick = downloadImg = ()=>{
  Swal.fire({
    title: '¿Desea descargar imagen?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: "<a download='Imagen' href='../view/assets/local_img/img26.jpeg'>Descargar</a>"
  }).then((result) => {
    if (result.isConfirmed) {
        return Alerts();
    }
  })
}
