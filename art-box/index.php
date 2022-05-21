<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="shortcut icon" href="./view/assets/icon-new.png" type="image/x-icon">
    <link rel="stylesheet" href="./view/styles/main.css">
    <link rel="stylesheet" href="./view/styles/index.css">
      <title>ArtBox</title>
</head>
<body>
    <section id="main">
        <div class="container">
            <!-- video -->
          <video class="video" autoplay muted loop>
            <source src="./view/assets/videos/video.mp4">
         </video>
        </div>
        <navbar class="navbar">
          <h1>ArtBox</h1>
          <ul>
            <li>
              <a href="./index.php">Inicio</a>
              <a href="#container">Saber mas</a>
              <a href="mailto:rusty3031@gmail.com">Contacto</a>
            </li>
          </ul>
        </navbar>
        <div class="page-content">
          <h1 class="small-text ">Comparte, conoce, expresa</h1>
          <h3>
          <span>ArtBox</span>
          </h3>
        </div>
      </section>
      <main class="main__container" id="container">
      <h1 class="conoce_container-title">Comparte</h1>
      <div class="comparte__small-text">
        </div>
        <div class="main__comparte-container">
          <img class="img" src="./view/assets/galery_icon.png" alt="">
          <p class="main__container-comparte-small">Un lugar donde podrás compartir tus gustos con los demás, ademas de poder conocer lo gustos de los otros usuarios</p>
        </div><br><br><br><br><br><br>

        <h1 class="conoce_container-title">Conoce</h1>
        <div class="main__comparte-container">
          <img src="./view/assets/idea.png" alt="" class="img">
          <p class="conoce_container-small">Para coincidir con alguien, una forma es conociendo primero sus gustos</p>
        </div><br><br><br><br><br><br>

        <h1 class="conoce_container-title">Expresa</h1>
        <div class="main__comparte-container">
          <img src="./view/assets/expresa.png" alt="" class="img">
          <p class="conoce_container-small">Para coincidir con alguien, una forma es conociendo primero sus gustos</p>
        </div>
      </main>
      <div class="span-content">
        <span>BETA ya disponible</span>
        <span style="font-size: 20px; position: relative; top: 20px">Versión oficial muy pronto.</span>
      </div>

      <style>
        .span-content{
          display: flex;
          margin-bottom: 30px;
          justify-content: center;
          align-items: center;
          font-size: 30px;
          flex-direction: column;
        }
        .span-content .span-2{
          font-size: 20px;
          position: relative;
          top: 5px;
          }
      </style>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="./model/animation.js"></script>
</body>
</html>