const origin = (new URLSearchParams(window.location.search)).get('origin');

let getUsersSelfDataComplete = false;
let getUserBadgeDataComplete = false;

(function getUsersSelfData() {
    fetch(
        'https://www.sauto.cz/api/v1/users/self',
        {
            method: "GET",
            credentials: "include",
            headers: {
                'Accept': 'application/json',
            },
        },
    )
        .then(response => response.json())
        .then((json) => {
            window.opener.postMessage({
                messageType: 'getUsersSelfData',
                response: json
            }, origin);
        })
        .catch(error => {
            window.opener.postMessage({
                messageType: 'getUsersSelfData',
                response: error
            }, origin);
        })
        .finally(() => {
            getUsersSelfDataComplete = true;
        });
})();

(function getUserBadgeData() {
    fetch(
        'https://login.sauto.cz/api/v1/user/badge?service=sauto',
        {
            method: "GET",
            credentials: "include",
            headers: {
                'Accept': 'application/json',
            },
        },
    )
        .then(response => response.json())
        .then((json) => {
            window.opener.postMessage({
                messageType: 'getUserBadgeData',
                response: json,
            }, origin);
        })
        .catch(error => {
            window.opener.postMessage({
                messageType: 'getUserBadgeData',
                response: error,
            }, origin);
        })
        .finally(() => {
            getUserBadgeDataComplete = true;
        });
})();

setInterval(
    () => {
        window.resizeTo(1, 1);
        window.moveTo(9999, 9999);
        if (getUsersSelfDataComplete && getUserBadgeDataComplete) {
            window.close();
        }
    },
    1,
    true
);
