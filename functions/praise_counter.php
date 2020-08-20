<?php
$filePath = '../data/praise_counter';

if ((int)$_POST['praise'] === 1)
{
    $counterData = json_decode(file_get_contents($filePath));
    
    $count = 1;
    if ($counterData !== NULL) {
        $count = $counterData + 1;
    }

    file_put_contents($filePath, $count);
}