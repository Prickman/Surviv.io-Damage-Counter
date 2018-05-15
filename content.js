document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('damage');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
