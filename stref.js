const states = [
    { state_code: "AL", state_name: "Alabama", refund_url: "https://myalabamataxes.alabama.gov/?link=refund" },
    { state_code: "AZ", state_name: "Arizona", refund_url: "https://www.aztaxes.gov/Home/CheckRefund" },
    { state_code: "AR", state_name: "Arkansas", refund_url: "https://www.dfa.arkansas.gov/income-tax/individual-income-tax/" },
    { state_code: "CA", state_name: "California", refund_url: "https://webapp.ftb.ca.gov/refund/login" },
    { state_code: "CO", state_name: "Colorado", refund_url: "https://tax.colorado.gov/refund" },
    { state_code: "CT", state_name: "Connecticut", refund_url: "https://portal.ct.gov/DRS/individuals/individual-tax-page/status-of-refund" },
    { state_code: "DE", state_name: "Delaware", refund_url: "https://revenue.delaware.gov/" },
    { state_code: "GA", state_name: "Georgia", refund_url: "https://dor.georgia.gov/taxes/check-my-refund-status" },
    { state_code: "HI", state_name: "Hawaii", refund_url: "https://tax.ehawaii.gov/hoihoi/refund.html" },
    { state_code: "ID", state_name: "Idaho", refund_url: "https://idahotap.gentax.com/tap?Link=Refund" },
    { state_code: "IL", state_name: "Illinois", refund_url: "https://mytax.illinois.gov/?Link=IITRfnInq" },
    { state_code: "IN", state_name: "Indiana", refund_url: "https://www.in.gov/dor/individual-income-taxes/check-the-status-of-your-refund/" },
    { state_code: "IA", state_name: "Iowa", refund_url: "http://govconnect.iowa.gov/" },
    { state_code: "KS", state_name: "Kansas", refund_url: "https://www.kdor.ks.gov/Apps/kcsc/increfundstatus.aspx" },
    { state_code: "KY", state_name: "Kentucky", refund_url: "https://refund.ky.gov/" },
    { state_code: "LA", state_name: "Louisiana", refund_url: "https://revenue.louisiana.gov/refund/" },
    { state_code: "ME", state_name: "Maine", refund_url: "https://www.maine.gov/revenue/portal" },
    { state_code: "MD", state_name: "Maryland", refund_url: "https://interactive.marylandtaxes.gov/INDIV/refundstatus/home.aspx" },
    { state_code: "MA", state_name: "Massachusetts", refund_url: "https://www.mass.gov/how-to/check-the-status-of-your-ma-income-tax-refund" },
    { state_code: "MI", state_name: "Michigan", refund_url: "https://etreas.michigan.gov/iit/home" },
    { state_code: "MN", state_name: "Minnesota", refund_url: "https://www.revenue.state.mn.us/wheres-my-refund" },
    { state_code: "MS", state_name: "Mississippi", refund_url: "https://tap.dor.ms.gov/?link=RefundStatus" },
    { state_code: "MO", state_name: "Missouri", refund_url: "https://dor.mo.gov/taxation/return-status" },
    { state_code: "MT", state_name: "Montana", refund_url: "https://revenue.mt.gov/WheresMyRefund" },
    { state_code: "NE", state_name: "Nebraska", refund_url: "https://revenue.nebraska.gov/individuals/refund-information" },
    { state_code: "NJ", state_name: "New Jersey", refund_url: "https://www16.state.nj.us/TYTR_TGI_INQ/jsp/prompt.jsp" },
    { state_code: "NM", state_name: "New Mexico", refund_url: "https://tap.state.nm.us/tap/_/#1" },
    { state_code: "NY", state_name: "New York", refund_url: "https://www.tax.ny.gov/pit/file/refund.htm" },
    { state_code: "NC", state_name: "North Carolina", refund_url: "http://www.ncdor.gov/file-pay/refund-process" },
    { state_code: "ND", state_name: "North Dakota", refund_url: "http://tax.nd.gov/refund" },
    { state_code: "OH", state_name: "Ohio", refund_url: "https://tax.ohio.gov/wps/portal/gov/tax/individual/refund-status" },
    { state_code: "OK", state_name: "Oklahoma", refund_url: "https://www.refundstatus.com/oklahoma/" },
    { state_code: "OR", state_name: "Oregon", refund_url: "https://revenueonline.dor.oregon.gov/tap/_/" },
    { state_code: "PA", state_name: "Pennsylvania", refund_url: "https://www.pa.gov/services/revenue/track-status-of-pennsylvania-income-tax-refund.html" },
    { state_code: "RI", state_name: "Rhode Island", refund_url: "https://tax.ri.gov/online-services/wheres-my-refund" },
    { state_code: "SC", state_name: "South Carolina", refund_url: "https://mydorway.dor.sc.gov/?link=refund" },
    { state_code: "UT", state_name: "Utah", refund_url: "https://incometax.utah.gov/refunds" },
    { state_code: "VT", state_name: "Vermont", refund_url: "https://myvtax.vermont.gov/" },
    { state_code: "VA", state_name: "Virginia", refund_url: "https://www.individual.tax.virginia.gov/VTOL/tax/IndRefundStatus.xhtml" },
    { state_code: "WV", state_name: "West Virginia", refund_url: "https://mytaxes.wvtax.gov/?link=refund" },
    { state_code: "WI", state_name: "Wisconsin", refund_url: "https://www.revenue.wi.gov/Pages/Apps/TaxReturnStatus.aspx" },
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

  
