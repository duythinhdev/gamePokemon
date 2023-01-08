<?php 


const INVALID = 'invalid';
const UNDERAGED = 'underaged';
const ALLOWED = 'allowed';
$birthday = !empty($_GET['birthday']) ? $_GET['birthday'] : '';
$date = new DateTime($birthday);
$now = new DateTime();
if (!$birthday || $date > $now) {
    echo INVALID;
    return;
}
$interval = $now->diff($date);
if($interval->y < 18){
    echo UNDERAGED;
} else {
    echo ALLOWED;
}

?>
