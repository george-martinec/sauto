<?php

header("Access-Control-Allow-Origin: https://www.sauto.cz");
header('Access-Control-Max-Age: 5');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Set-Cookie');
header('Access-Control-Allow-Credentials: true');

//header("Content-Type: text/plain");
echo "<pre>";
print_r(getallheaders());