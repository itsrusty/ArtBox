<?php
    include('conex.php');

    if(isset($_POST['publish'])){
        //tomamos el comentario
        $comment = $_POST['comentario'];
             //add 
        $query = "INSERT INTO comentarios(comentario) VALUES ('$comment')";
        $resultado = $conex->query($query); 
        if($resultado){
            header("Location:../view/index.php");
        }
        }else{
         echo "error";
     }
    

?>