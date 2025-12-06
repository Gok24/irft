function addDays(date, days) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

function daysBetween(a, b) {
    return Math.ceil((b - a) / (1000 * 60 * 60 * 24));
}

function format(d) {
    return d.toLocaleDateString();
}

function calculate() {
    const filed_date = document.getElementById("filed_date").value;
    const filed_method = document.getElementById("filed_method").value;
    const refund_method = document.getElementById("refund_method").value;

    if (!filed_date) {
        alert("Please select a filing date.");
        return;
    }

    const today = new Date();
    const fd = new Date(filed_date);

    let earliest_check_date;
    let start;
    let end;

    // Logic from pseudocode
    if (filed_method === "efile") {
        earliest_check_date = addDays(fd, 1);
        start = addDays(fd, 7);
        end = addDays(fd, 21);
    } else {
        earliest_check_date = addDays(fd, 28);
        start = addDays(fd, 42);
        end = addDays(fd, 56);
    }

    if (refund_method === "check_mail") {
        start = addDays(start, 5);
        end = addDays(end, 5);
    }

    const days_to_start = daysBetween(today, start);
    const days_to_end = daysBetween(today, end);

    let message = "";
    let progressPercent = 0;

    if (today < earliest_check_date) {
        message = `
        <p>⏳ <strong>Too Early</strong>:  
        <span class="msml">You can start checking “Where’s My Refund?” on</span> <strong>${format(earliest_check_date)}</strong>.</p>`;
        progressPercent = 0;
    } else if (today >= start && today <= end) {
        message = `
        <p>📍 <strong>You are within the typical IRS refund window.</strong><br>
        <span class="msml">Check the IRS tool for updates.</span></p>`;
        progressPercent = Math.min(100, ((today - start) / (end - start)) * 70 + 30);
    } else if (today > end) {
        message = `
        <p>⚠️ <strong>Your refund is taking longer than usual.</strong><br>
        <span class="msml">You should check “Where’s My Refund?” and possibly contact the IRS.</span></p>`;
        progressPercent = 100;
    } else {
        message = `
        <p>⏱ <strong>Your refund is processing.</strong><br>
        <span class="msml">The typical refund window starts in </span><strong>${days_to_start}</strong> days.</p>`;
        progressPercent = Math.min(30, ((today - earliest_check_date) / (start - earliest_check_date)) * 30);
    }

    // Timeline HTML
    const timeline = `
      <div class="timeline">
        <div class="timeline-item"><strong>Filed:</strong> ${format(fd)}</div>
        <div class="timeline-item"><strong>Checkable:</strong> ${format(earliest_check_date)}</div>
        <div class="timeline-item"><strong>Processing Window:</strong> ${format(start)} → ${format(end)}</div>
        <div class="timeline-item"><strong>Delay After:</strong> ${format(end)}</div>
      </div>
    `;

    // Progress bar
    const progressBar = `
      <div class="stage">
        <div class="stage-labels">
          <span>Filed</span>
          <span>Checkable</span>
          <span>Processing</span>
          <span>Refunded</span>
          <span>Late</span>
        </div>
        <input type="range" min="0" max="100" value="${progressPercent}" readonly style="--value:${progressPercent}%">
      </div>
    `;

    document.getElementById("output").innerHTML = `
    ${progressBar}
    ${timeline}
    
    <div class="result">
        ${message}
        <a href="https://www.irs.gov/refunds" target="_blank"><button class="gtibtnx">Go to IRS tool</button></a>
      </div>
      
    `;
}
