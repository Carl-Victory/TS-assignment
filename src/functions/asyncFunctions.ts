// Function that simulates an asynchronous operation
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

// Function that demonstrates how to use async/await
async function displayData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the displayData function to see the result
displayData();
