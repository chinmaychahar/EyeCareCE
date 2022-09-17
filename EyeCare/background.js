chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            // "break",
            {
                type: "basic",
                iconUrl: "EyeCare\icon64.png",
                title: "Time for a 20-20-20 break!",
                message: "Look away at something about 20ft away for 20 seconds",
                silent: false
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "break",
        {
            delayInMinutes: 20,
            periodInMinutes: 20
        }
    );
}