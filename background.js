chrome.runtime.onMessage.addListener(
    function (arg, sender, sendResponse) {
        var args = arg.collection;
        for (let i =0 ;i<args.length;i++) {
            var img_url = args[i];
            file_name = "img_"+i.toString();
            chrome.downloads.download({ 
                filename: file_name,
                conflictAction: 'uniquify',
                url: img_url
            });
        }
    }
);
