async function scanURL() {
     const url = document.getElementById('urlInput').value;
     const resultElem = document.getElementById('result');
     resultElem.textContent = '🔎 Scanning...';
   
     try {
       const response = await fetch('http://localhost:3000/scan', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ url })
       });
   
       const data = await response.json();
   
       if (data.safe) {
         resultElem.textContent = '✅ This website is safe.';
       } else {
         resultElem.textContent = '❌ Warning: This website may be dangerous!';
       }
   
     } catch (error) {
       console.error(error);
       resultElem.textContent = '⚠️ Error checking the URL. Please try again.';
     }
   }
   