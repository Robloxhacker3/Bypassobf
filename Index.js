const express = require('express');
const axios = require('axios'); // for handling requests
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint for bypassing
app.get('/apibypass', async (req, res) => {
  const { link } = req.query;
  if (!link) {
    return res.status(400).json({ error: "Please provide a link to bypass." });
  }

  // Function to simulate bypassing logic
  try {
    let modifiedLink = link;

    // Modify the link based on your logic
    if (link.includes("spdmteam.com/key-system-1?hwid=")) {
      modifiedLink = link.replace(
        'https://spdmteam.com/key-system-1?hwid=',
        'https://spdmteam.com/api/keysystem?hwid='
      ).replace('&zone=Europe/Rome', '&zone=Europe/Rome&advertiser=lootlabs&OS=ios');
    } else if (link.includes("spdmteam.com/key-system-2?hwid=")) {
      modifiedLink = "https://loot-link.com/s?mYit";
    } else if (link.includes("spdmteam.com/key-system-3?hwid=")) {
      modifiedLink = "https://loot-link.com/s?qlbU";
    }

    // Here, you could further implement page title checks or additional requests if needed

    // Send the modified URL back as a response
    res.json({ bypassedLink: modifiedLink });
  } catch (error) {
    console.error("Error in bypassing logic:", error);
    res.status(500).json({ error: "An error occurred while bypassing." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
