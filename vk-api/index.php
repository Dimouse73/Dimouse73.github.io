<?php

    if (!isset($_REQUEST)) {
    return;
    }
    
    //Строка для подтверждения адреса сервера из настроек Callback API
    $confirmation_token = '88106745';
    
    //Ключ доступа сообщества
    $token = "71e536b0e8bb926c72af5eabb7aa10a076c3b33f42e1ddec433deb5285cca5827a9ed9d54876bb55bbda2"    
    
    //Получаем и декодируем уведомление
    $data = json_decode(file_get_contents('php://input'));
    
    //Проверяем, что находится в поле "type"
    switch ($data->type) {
    //Если это уведомление для подтверждения адреса...
    case 'confirmation':
    //...отправляем строку для подтверждения
    echo $confirmation_token;
    break;

?>    