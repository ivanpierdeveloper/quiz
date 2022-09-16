<?php 
    $path = dirname(__FILE__, 2);
    require_once $path.'/layout/navbar.html';
    require_once $path.'/layout/header.html';
    require_once $path.'/quiz.html';
    /*
    (integer) $get = $_GET['domanda'];
    switch($get) {
        case 1: require_once $path.'/quiz.html'; break;
        default: require_once $path.'/quiz.html'; break;
    }// ./switch
    */
    require_once $path.'/layout/footer.html';
?>