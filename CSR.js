function getStarted() {
    alert("Thank you for getting started! Our team will reach out to you soon.");
    // You can also redirect to a contact page:
    // window.location.href = "contact.html";
  }
<!-- Live Agent Script -->
<script type='text/javascript' src='https://c.la1-c2cs-phx.salesforceliveagent.com/content/g/js/58.0/deployment.js'></script>
<script type='text/javascript'>
  liveagent.init('https://d.la1-c2cs-phx.salesforceliveagent.com/chat', 'YOUR_DEPLOYMENT_ID', 'YOUR_ORG_ID');

  if (!window._laq) { window._laq = []; }
  window._laq.push(function () {
    liveagent.showWhenOnline('YOUR_BUTTON_ID', document.getElementById('liveagent_button_online'));
    liveagent.showWhenOffline('YOUR_BUTTON_ID', document.getElementById('liveagent_button_offline'));
  });

  function startLiveChat() {
    liveagent.startChat('YOUR_BUTTON_ID');
  }
</script>

  
