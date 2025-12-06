const states = [
    { state_code: "AL", state_name: "Alabama", refund_url: "https://myalabamataxes.alabama.gov/RefundStatus" },
    { state_code: "AK", state_name: "Alaska", refund_url: "https://www.tax.alaska.gov/RefundStatus" },
    { state_code: "AZ", state_name: "Arizona", refund_url: "https://www.azdor.gov/RefundStatus" },
    { state_code: "AR", state_name: "Arkansas", refund_url: "https://www.dfa.arkansas.gov/individual-income-tax/refund-status" },
    { state_code: "CA", state_name: "California", refund_url: "https://www.ftb.ca.gov/Refunds/WhereIsMyRefund.html" },
    { state_code: "NY", state_name: "New York", refund_url: "https://www.tax.ny.gov/pit/file/refund.htm" },
    { state_code: "TX", state_name: "Texas", refund_url: "https://comptroller.texas.gov/taxes/refund-status/" }
    // Add all other states similarly
  ];

  // Populate dropdown
  const select = document.getElementById('stateSelect');
  states.forEach(s => {
    const option = document.createElement('option');
    option.value = s.refund_url;
    option.textContent = s.state_name;
    select.appendChild(option);
  });

  // Open the selected state's refund page
  function openRefundPage() {
    const url = select.value;
    if (!url) {
      alert("Please select a state.");
      return;
    }
    window.open(url, "_blank");
  }