chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getCookies') {
    // Sử dụng Promise để lấy danh sách cookies
    new Promise((resolve, reject) => {
      chrome.cookies.getAll({}, (cookies) => {
        console.log(cookies);
        resolve(cookies);
      });
    }).then((cookies) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'cookies', cookies: cookies });
      });
    }).catch((error) => {
      console.error('Error while getting cookies:', error);
    });
  }
});
