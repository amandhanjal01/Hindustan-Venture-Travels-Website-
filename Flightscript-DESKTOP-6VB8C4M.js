document.getElementById('flight-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const departure = document.getElementById('departure').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;
  
    if (!departure || !destination || !departureDate || !passengers) {
      alert('Please fill out all required fields.');
      return;
    }
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <h3>Search Results</h3>
      <p><strong>From:</strong> ${departure}</p>
      <p><strong>To:</strong> ${destination}</p>
      <p><strong>Departure Date:</strong> ${departureDate}</p>
      ${returnDate ? `<p><strong>Return Date:</strong> ${returnDate}</p>` : ''}
      <p><strong>Passengers:</strong> ${passengers}</p>
      <p><em>Connect this form to an API for real-time flight data.</em></p>
    `;
  });

  ScriptProcessorNode
  
  
