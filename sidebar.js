document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('loginBtn');
  const jiraBtn = document.getElementById('jiraBtn');
  const confluenceBtn = document.getElementById('confluenceBtn');
  const bitbucketBtn = document.getElementById('bitbucketBtn');
  
  // Handle button clicks
  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://id.atlassian.com/login' });
  });
  
  jiraBtn.addEventListener('click', function(e) {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://atlassian.com/software/jira' });
  });
  
  confluenceBtn.addEventListener('click', function(e) {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://atlassian.com/software/confluence' });
  });
  
  bitbucketBtn.addEventListener('click', function(e) {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://bitbucket.org' });
  });
});
