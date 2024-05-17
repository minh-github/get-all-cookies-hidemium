window.addEventListener('load', () => {
    chrome.runtime.sendMessage({ type: 'getCookies' });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'cookies') {
    document.querySelector('#cookiesTextarea').value = JSON.stringify(message.cookies);
  }
});