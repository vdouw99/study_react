<?php
header("Access-Control-Allow-Origin: *");

require('../../../../index.php');

$arr = array(
    'id' => 123,
    'name' => 'zhangsanfeng'
);
echo json_encode($arr);
