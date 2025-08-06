document.addEventListener('DOMContentLoaded', function() {
  // Load saved custom URL
  const customUrlInput = document.getElementById('customUrl');
  if (chrome.storage) {
    chrome.storage.sync.get(['customAtlassianUrl'], function(result) {
      if (result.customAtlassianUrl) {
        customUrlInput.value = result.customAtlassianUrl;
      }
    });
  }
});

function openUrl(url) {
  // Try different approaches for opening URLs in Opera sidebar
  if (typeof chrome !== 'undefined' && chrome.tabs) {
    chrome.tabs.create({ url: url });
  } else if (window.open) {
    window.open(url, '_blank');
  } else {
    // Fallback: try to navigate parent window
    if (window.parent && window.parent !== window) {
      window.parent.location.href = url;
    } else {
      window.location.href = url;
    }
  }
}

function openCustomUrl() {
  const customUrl = document.getElementById('customUrl').value.trim();
  if (!customUrl) {
    alert('Please enter a URL');
    return;
  }
  
  // Add https:// if not present
  let fullUrl = customUrl;
  if (!customUrl.startsWith('http://') && !customUrl.startsWith('https://')) {
    fullUrl = 'https://' + customUrl;
  }
  
  // Save the custom URL
  if (chrome.storage) {
    chrome.storage.sync.set({ customAtlassianUrl: customUrl });
  }
  
  openUrl(fullUrl);
}
