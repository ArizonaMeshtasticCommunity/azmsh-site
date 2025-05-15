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

    // Count nodes updated in the last 30 minutes
    const now = new Date();
    const THIRTY_MINUTES = 30 * 60 * 1000;
    const recentNodes = json.filter(node => {
      const updatedAt = new Date(node.updated_at);
      return now - updatedAt <= THIRTY_MINUTES;
    });

    const nodesOnline = document.getElementById('nodesOnline');
    nodesOnline.textContent = recentNodes.length;
  }

  getNodes();