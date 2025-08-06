document.addEventListener('DOMContentLoaded', function() {
  // Get button references
  const atlassianLoginBtn = document.getElementById('atlassianLoginBtn');
  const atlassianStartBtn = document.getElementById('atlassianStartBtn');
  const jiraBtn = document.getElementById('jiraBtn');
  const confluenceBtn = document.getElementById('confluenceBtn');
  const bitbucketBtn = document.getElementById('bitbucketBtn');
  const customInstanceBtn = document.getElementById('customInstanceBtn');
  const customUrlInput = document.getElementById('customUrl');
  
  // Load saved custom URL
  if (chrome.storage) {
    chrome.storage.sync.get(['customAtlassianUrl'], function(result) {
      if (result.customAtlassianUrl) {
        customUrlInput.value = result.customAtlassianUrl;
      }
    });
  }
  
  // Add event listeners
  atlassianLoginBtn.addEventListener('click', function() {
    openUrl('https://id.atlassian.com/login');
  });
  
  atlassianStartBtn.addEventListener('click', function() {
    openUrl('https://start.atlassian.com/');
  });
  
  jiraBtn.addEventListener('click', function() {
    openUrl('https://www.atlassian.com/software/jira');
  });
  
  confluenceBtn.addEventListener('click', function() {
    openUrl('https://www.atlassian.com/software/confluence');
  });
  
  bitbucketBtn.addEventListener('click', function() {
    openUrl('https://bitbucket.org/');
  });
  
  customInstanceBtn.addEventListener('click', function() {
    openCustomUrl();
  });
  
  // Allow Enter key in custom URL input
  customUrlInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      openCustomUrl();
    }
  });
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
