document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('urlInput');
  const webview = document.getElementById('webview');
  const loading = document.getElementById('loading');
  
  // Load saved URL
  chrome.storage.sync.get(['atlassianUrl'], function(result) {
    if (result.atlassianUrl) {
      urlInput.value = result.atlassianUrl;
      webview.src = result.atlassianUrl;
    }
  });
  
  // Handle URL input changes
  urlInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const url = urlInput.value.trim();
      if (url) {
        // Add https:// if not present
        const fullUrl = url.startsWith('http') ? url : 'https://' + url;
        webview.src = fullUrl;
        
        // Save the URL
        chrome.storage.sync.set({ atlassianUrl: fullUrl });
      }
    }
  });
  
  // Handle webview loading
  webview.addEventListener('loadstart', function() {
    loading.style.display = 'block';
  });
  
  webview.addEventListener('loadstop', function() {
    loading.style.display = 'none';
  });
  
  webview.addEventListener('loaderror', function() {
    loading.textContent = 'Failed to load page';
    loading.style.color = '#bf2600';
  });
});
