<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="Una red social donde podrás ver arte y descargarlo en tu dispositivo">
    <!-- <meta name="robots"> -->
    <title>ArtBox</title>
    <link rel="shortcut icon" href="./assets/icon-new.png" type="image/x-icon">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="./styles/style.css">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <!-- Icons FontAwesome 4.7.0 -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"  type="text/css" />
</head>
<body>

    <div class="navbar">
        <div class="navbar_menuicon" id="navicon">
            <i class="fa fa-navicon"></i>
        </div>
        <div class="navbar_logo">
            <img src="./assets/icon-new.png" alt="" />
        </div>
        <div class="navbar_user" id="profilemodal" style="cursor:pointer">
            <!-- <img src="./assets/bg.jpg" alt="" /> -->
            <span id="navbar_user_top">User<br><p>Usuario</p></span><i class="fa fa-angle-down"></i></div>
    </div>

    <div class="all">

        <div class="left_row">
            <div class="left_row_profile">
                <div class="left_row_profile">
                    <!-- <img id="profile_pic" src="./assets/bg.jpg" /> -->
                    <span>User<br><p>150k followers / 50 follow</p></span>
                </div>
            </div>
        </div>

        <!-- container comments and add images-->
        <div class="right_row">
            <div class="row">
                <div class="publish">
                    <div class="row_title">
                        <span><i class="fa fa-newspaper-o" aria-hidden="true"></i> Status</span>
                    </div>
                    <!-- section for add comments -->
                    <form method="post" action="../controller/addComments.php">
                        <div class="publish_textarea">
                            <!-- <img class="border-radius-image" src="./assets/bg.jpg" alt="" /> -->
                            <textarea type="text" placeholder="¿Qué piensas?" style="resize: none;" name="comentario"></textarea>
                        </div>
                        <input type="submit" value="Publicar" name="publish">
                    </form>

                    <!-- add images section for user -->
                    <form method="post" action="../controller/add.image.php" enctype="multipart/form-data">
                        <input type="file" name="imagen" accept=".jpg,jpeg,.png,.svg" multiple id="file">
                        <input type="submit" value="Subir imagen" name="btnSubmitImage">
                    </form>
            </div>
            </div>

            <!-- comentarios de usuarios -->
   <div class="row border-radius">
    <div class="feed">
         <?php 
            include("../controller/conex.php");
            //tabla comentarios
            $queryComments = "SELECT * FROM comentarios";
            //comentarios bd
            $result = $conex->query($queryComments);
            while($row = $result->fetch_assoc()){
            ?>

        <!-- users bd -->
        <?php 
            include("../controller/conex.php");
                         //tabla users
            $queryUsers = "SELECT * FROM users";
            $resultado = $conex->query($queryUsers);
            while($row1 = $resultado->fetch_assoc()){        
        ?>

        <div class="feed_title">
            <span style="font-size:18px;"><b><?php echo $row1['nombre'];?>
        </div>
        <div class="feed_content">
        <div class="feed_content_image">
                <!-- comentario del usuario -->
                <p style="font-size: 13px; color:gray;"><?php echo $row['comentario'];?></p>
</div>
        <!-- cierre de llaves  -->
        <?php } ?>
        <?php } ?>
        </div><br><br>

        
        <!-- images here -->
            <div class="row border-radius">
                <div class="feed">
                    <div class="feed_title">
                        <?php 
                              include("../controller/conex.php");
                              //tabla users
                               $queryUsers = "SELECT * FROM users";
                               $resultado = $conex->query($queryUsers);
                               while($row1 = $resultado->fetch_assoc()){        
                        ?>

                        <!-- imagenes -->
                         <?php
                            include("../controller/conex.php");
                            $query = "SELECT * FROM tabla_imagen";
                            $result = $conex->query($query);
                            while($row2 = $result->fetch_assoc()){
                        ?>
                        <span><b><?php echo $row1['nombre']; ?></b> compartió una <a href="#">foto</a><br><p>Marzo 3 a las 6:05pm</p></span>
                    </div>
                    <div class="feed_content">
                        <div class="feed_content_image">
                            <img class="imgUser" src="data:image/jpg;base64,<?php echo base64_encode($row2['imagen']); ?>" alt="img">
                            <a href="../controller/delete.image.php">Eliminar<?php $row2['id']; ?></a>
                            <hr>
                        </div>
                        <!-- cierre de llaves -->
                         <?php } ?>
                         <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>