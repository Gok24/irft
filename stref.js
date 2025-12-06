const states = [
    { state_code: "AL", state_name: "Alabama", refund_url: "https://myalabamataxes.alabama.gov/?link=refund" },
    { state_code: "AZ", state_name: "Arizona", refund_url: "https://www.aztaxes.gov/Home/CheckRefund" },
    { state_code: "AR", state_name: "Arkansas", refund_url: "https://portal.arkansas.gov/service/wheres-my-refund/" },
    { state_code: "CA", state_name: "California", refund_url: "https://webapp.ftb.ca.gov/refund/login.aspx?Lang=en-US" },
    { state_code: "CO", state_name: "Colorado", refund_url: "https://www.colorado.gov/revenueonline/_/#1" },
    { state_code: "CT", state_name: "Connecticut", refund_url: "https://portal.ct.gov/DRS/individuals/individual-tax-page/status-of-refund" },
    { state_code: "DE", state_name: "Delaware", refund_url: "https://tax.delaware.gov/rptp/portal/individual/checkrefundstatus" },
    { state_code: "GA", state_name: "Georgia", refund_url: "https://gtc.dor.ga.gov/_/?link=Refund" },
    { state_code: "HI", state_name: "Hawaii", refund_url: "https://tax.ehawaii.gov/hoihoi/refund.html" },
    { state_code: "ID", state_name: "Idaho", refund_url: "https://www.accessidaho.org/secure/istc/refund/status.html" },
    { state_code: "IL", state_name: "Illinois", refund_url: "https://mytax.illinois.gov/_/" },
    { state_code: "IN", state_name: "Indiana", refund_url: "https://secure.in.gov/apps/dor/tax/refund/" },
    { state_code: "IA", state_name: "Iowa", refund_url: "https://www.idr.iowa.gov/wheresmyrefund/" },
    { state_code: "KS", state_name: "Kansas", refund_url: "https://www.kdor.ks.gov/apps/kcsc/increfundstatus.aspx" },
    { state_code: "KY", state_name: "Kentucky", refund_url: "https://iitrefundstatus.ky.gov/TRFWeb/" },
    { state_code: "LA", state_name: "Louisiana", refund_url: "https://latap.revenue.louisiana.gov/_/#1" },
    { state_code: "ME", state_name: "Maine", refund_url: "https://portal.maine.gov/refundstatus/refund" },
    { state_code: "MD", state_name: "Maryland", refund_url: "https://interactive.marylandtaxes.com/INDIV/refundstatus/home.aspx" },
    { state_code: "MA", state_name: "Massachusetts", refund_url: "https://www.mass.gov/dor/e-services/masstaxconnect.html" },
    { state_code: "MI", state_name: "Michigan", refund_url: "https://treas-secure.treas.state.mi.us/eservice_enu/start.swe?SWECmd=Start&SWEHo=treas-secure.treas.state.mi.us" },
    { state_code: "MN", state_name: "Minnesota", refund_url: "https://www.mndor.state.mn.us/tp/refund/_/#1" },
    { state_code: "MS", state_name: "Mississippi", refund_url: "https://tap.dor.ms.gov/_/#2" },
    { state_code: "MO", state_name: "Missouri", refund_url: "https://dors.mo.gov/tax/taxinq/welcome.jsp" },
    { state_code: "MT", state_name: "Montana", refund_url: "https://tap.dor.mt.gov/_/#1" },
    { state_code: "NE", state_name: "Nebraska", refund_url: "https://ndr-refundstatus.ne.gov/refundstatus/public/search.faces" },
    { state_code: "NJ", state_name: "New Jersey", refund_url: "https://www16.state.nj.us/TYTR_TGI_INQ/servlet/COMMON/prompt" },
    { state_code: "NM", state_name: "New Mexico", refund_url: "https://tap.state.nm.us/tap/_/#1" },
    { state_code: "NY", state_name: "New York", refund_url: "https://www8.tax.ny.gov/PRIS/prisStart" },
    { state_code: "NC", state_name: "North Carolina", refund_url: "https://eservices.dor.nc.gov/wheresmyrefund/selection.jsp" },
    { state_code: "ND", state_name: "North Dakota", refund_url: "https://secure.apps.state.nd.us/tax/refundstatus/refundstatus.htm" },
    { state_code: "OH", state_name: "Ohio", refund_url: "https://myportal.tax.ohio.gov/tap/_/#1" },
    { state_code: "OK", state_name: "Oklahoma", refund_url: "https://oktap.tax.ok.gov/oktap/web/_/" },
    { state_code: "OR", state_name: "Oregon", refund_url: "https://secure.dor.state.or.us/refund/index.cfm" },
    { state_code: "PA", state_name: "Pennsylvania", refund_url: "https://mypath.pa.gov/_/" },
    { state_code: "RI", state_name: "Rhode Island", refund_url: "https://www.ri.gov/taxation/refund/" },
    { state_code: "SC", state_name: "South Carolina", refund_url: "https://dor.sc.gov/refund" },
    { state_code: "UT", state_name: "Utah", refund_url: "https://tap.tax.utah.gov/TaxExpress/_/" },
    { state_code: "VT", state_name: "Vermont", refund_url: "https://secure.vermont.gov/TAX/refund/" },
    { state_code: "VA", state_name: "Virginia", refund_url: "https://www.individual.tax.virginia.gov/VTOL/IndRefundStatus.seam" },
    { state_code: "WV", state_name: "West Virginia", refund_url: "https://mytaxes.wvtax.gov/?Link=Refund" },
    { state_code: "WI", state_name: "Wisconsin", refund_url: "https://ww2.revenue.wi.gov/RefundInquiry/request.html" },
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

  
