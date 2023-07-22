<?php
header("Access-Control-Allow-Origin: https://www.sauto.cz");
header('Access-Control-Max-Age: 5');
header('Access-Control-Allow-Headers: Origin, Accept, Content-Type, X-Auth-Token , Authorization, Set-Cookie, Cookie');
header('Access-Control-Allow-Methods: GET,OPTIONS,PATCH,DELETE,POST,PUT');
header('Access-Control-Allow-Credentials: true');

//$ch = curl_init();
//curl_setopt($ch, CURLOPT_URL, 'https://www.sauto.cz/api/v1/users/self');
//curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//curl_setopt($ch, CURLOPT_HEADER, 1);
//$response = curl_exec($ch);
//
//$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
//$headers = substr($response, 0, $header_size);
//$body = substr($response, $header_size);
//header("Content-Type:text/plain; charset=UTF-8");
//echo $headers;

//header("Content-Type: text/plain");
//echo "<pre>";
//print_r(headers_list());
//print_r(file_get_contents('php://input'));
print_r(getallheaders());
//print_r($_SERVER);
print_r($_COOKIE);
//print_r(session_get_cookie_params());

//print_r(get_headers('https://www.sauto.cz/api/v1/users/self', true));