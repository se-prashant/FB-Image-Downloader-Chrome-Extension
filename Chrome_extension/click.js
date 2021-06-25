chrome.browserAction.onClicked.addListener(extensionClicked);
function extensionClicked(tab)
{
	chrome.tabs.sendMessage(tab.id, "fetchImages");
}