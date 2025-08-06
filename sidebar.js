document.addEventListener('DOMContentLoaded', function() {
  const iframe = document.getElementById('webview');
  const loading = document.getElementById('loading');
  
  // Handle iframe loading states
  iframe.addEventListener('load', function() {
    loading.style.display = 'none';
  });
  
  iframe.addEventListener('error', function() {
    loading.textContent = 'Failed to load Atlassian';
    loading.style.color = '#bf2600';
  });
  
  // Hide loading after a reasonable timeout if load event doesn't fire
  setTimeout(function() {
    if (loading.style.display !== 'none') {
      loading.style.display = 'none';
    }
  }, 5000);
});
