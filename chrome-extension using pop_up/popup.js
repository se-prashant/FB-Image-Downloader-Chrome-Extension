function fetchContent() {
  chrome.tabs.executeScript({
    file: 'content.js'
  });

}

document.getElementById('clickme').addEventListener('click', fetchContent)
