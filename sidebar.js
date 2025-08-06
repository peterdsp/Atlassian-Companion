document.addEventListener('DOMContentLoaded', function() {
  const webview = document.getElementById('webview');
  const loading = document.getElementById('loading');
  
  // Handle webview loading states
  webview.addEventListener('loadstart', function() {
    loading.style.display = 'block';
  });
  
  webview.addEventListener('loadstop', function() {
    loading.style.display = 'none';
  });
  
  webview.addEventListener('loaderror', function() {
    loading.textContent = 'Failed to load Atlassian';
    loading.style.color = '#bf2600';
  });
});
