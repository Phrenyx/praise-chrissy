<?php
$filePath = '../data/praise_counter';

$counterData = json_decode(file_get_contents($filePath));

$count = 1;
if ($counterData !== NULL) {
    $count = $counterData;
}

echo $count;