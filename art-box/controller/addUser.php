<?php
    include("conex.php");

    if(isset($_POST['registerBtn'])){
        $name = $_POST['nameUser'];
        $email = $_POST['emailUser'];
        $pass = $_POST['passwordUser'];
        
        $query = "INSERT INTO users(nombre,email,password) VALUES('$name', '$email', '$pass')";
        $result = $conex->query($query);
        if($result){
            header("Location:../view/index.php");
        }else{
            echo "error";
        }
    }
?>