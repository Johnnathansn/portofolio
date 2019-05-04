<?php
error_reporting(E_ALL & ~E_NOTICE);
/*
$method = $_SERVER['REQUEST_METHOD'];
echo $method;
switch($method) {
    case 'PUT':
        //$this->create_contact($name);
        break;

    case 'DELETE':
        //$this->delete_contact($name);
        break;

    case 'GET':
        echo "gettte";
        //$this->display_contact($name);
        break;

  default:
      header('HTTP/1.1 405 Method Not Allowed');
      header('Allow: GET, PUT, DELETE');
      break;
}
die();*/

switch($_GET["r"]) {
    case 0:
        $teste["resp"] = write();
        break;
    case 1:
        $teste["resp"] = read();
        break;
}

function json_validator($data=NULL) {
  if (!empty($data)) {
                @json_decode($data);
                return (json_last_error() === JSON_ERROR_NONE);
        }
        return false;
}

function write() {
    $json = @file_get_contents("data.json");
    if($json) {

        $tempArray = json_decode($json);
        array_push($tempArray, $_POST);
        $send = json_encode($tempArray);
        file_put_contents("data.json", $send);
        return "lines added";
    } else {
        $json = json_encode($_POST);
        //encapsulate in braces
        $json = "[\n$json\n]";
        //we now have valid json which we can use and/or store it for later use
        file_put_contents("data.json", $json);
        return "json created";
    }
}
function read(){
    $json = @file_get_contents("data.json");

    function iterateArray( $array, $index=null ) {
        if(is_array($array))
            foreach( $array as $key => $value ) {
                    $array[$key] = iterateArray($value, $key);
            }
        else {
            if($index != null)
                $array = htmlspecialchars($array);
        }
        return $array;
    }

    if($json) {
        $tempArray = json_decode($json, true);
        echo json_encode(iterateArray($tempArray, 0));
    }

}





?>
