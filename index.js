console.log('hi');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log('yes');
    } else if (this.readyState == 4 && this.status == 401) {
        console.log('no');
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