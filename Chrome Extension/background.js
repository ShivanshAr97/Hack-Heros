// Create a Chrome alarm to run every 1 minute
chrome.alarms.create("sendQuoteAlarm", { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log('Alarm fired:', alarm.name);
  if (alarm.name === "sendQuoteAlarm") {
    chrome.action.openPopup();
  }
});

