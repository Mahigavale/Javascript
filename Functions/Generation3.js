let data1 = [];

function* demo() {
    // Yield the Promise with fetch and parse it if the response is valid
    data1 = fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });

    yield data1; // Yield the Promise itself
}

const d = demo();

// Start the generator and handle the Promise that is yielded
d.next().value
    .then((data) => {
        console.log("Fetched Data:", data); // Log the fetched data
        data1 = data; // Store the data in data1 if you need to reuse it
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });
