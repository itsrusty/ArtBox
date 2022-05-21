<?php
    include("./conex.php");
    
    if(isset($_POST['btnSubmitImage'])){
        $Imagen = addslashes(file_get_contents($_FILES['imagen']['tmp_name']));//tomamos imagen
        $query = "INSERT INTO tabla_imagen(imagen) VALUES('$Imagen')";
        $resultado = $conex->query($query);
        if($resultado){
            header("Location:../view/index.php");
        }else{
            echo "error";
        }
    }
?>