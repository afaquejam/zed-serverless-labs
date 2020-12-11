function getRandomData() {
  return Math.round(Math.random() * 100);
}

function generateMockData() {
  const mockData = {
    deviceId: 'test-123',
    timestamp: Date.now(),
    temperature: getRandomData(),
    humidity: getRandomData(),
  };

  return mockData;
}

async function generateDataPeriodically(sleepInterval) {
  while (true) {
    console.log(JSON.stringify(generateMockData()));
    await new Promise((r) => setTimeout(r, sleepInterval));
  }
}

generateDataPeriodically(1000)
  .then(() => {})
  .catch((error) => {
    console.log('Failed to generate data!');
  });
