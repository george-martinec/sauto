<?php

ini_set( 'session.cookie_httponly', 1 );
ini_set('session.use_only_cookies',1);

session_start();

header("Access-Control-Allow-Origin: https://www.sauto.cz");
header('Access-Control-Max-Age: 5');
header('Access-Control-Allow-Methods: GET,OPTIONS,PATCH,DELETE,POST,PUT');
header('Access-Control-Allow-Headers: Origin, Accept, Content-Type, X-Auth-Token , Authorization, Set-Cookie');
header('Access-Control-Allow-Credentials: true');

//header("Content-Type: text/plain");
echo "<pre>";
print_r(headers_list());
print_r(file_get_contents('php://input'));
print_r(getallheaders());
print_r($_SERVER);
print_r($_COOKIE);
print_r(session_get_cookie_params());