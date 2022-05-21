<?php
    include("./conex.php");

    $id = $_REQUEST['id'];
    $query = "DELETE FROM tabla_imagen WHERE id='$id'"; //insertamos datos en la bd
    $result = $conex->query($query);

    if($result){
        header("Location:../view/index.php");
    }else{
        echo "Error";
    }
?>