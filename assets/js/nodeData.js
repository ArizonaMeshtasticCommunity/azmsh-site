async function getNodes() {
  const url = "https://api.azmsh.net/api/nodes";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    
    const json = await response.json();
    displayData(json);
  } catch (error) {
    console.error(error.message);
  }
}

function displayData(json) {
  const totalNodes = document.getElementById('totalNodes');
  totalNodes.textContent = json.length;
  
  // Count nodes that are online
  const now = new Date();
  const THIRTY_MINUTES = 30 * 60 * 1000;
  const TWO_HOURS = 2 * 60 * 60 * 1000;
  const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

  const nodes30min = json.filter(node => now - new Date(node.updated_at) <= THIRTY_MINUTES).length;
  const nodes2hr = json.filter(node => now - new Date(node.updated_at) <= TWO_HOURS).length;
  const nodes24hr = json.filter(node => now - new Date(node.updated_at) <= TWENTY_FOUR_HOURS).length;
  
  document.getElementById('nodes30min').textContent = nodes30min;
  document.getElementById('nodes2hr').textContent = nodes2hr;
  document.getElementById('nodes24hr').textContent = nodes24hr;
}
getNodes();