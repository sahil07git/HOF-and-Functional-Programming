// 1.Function to reverse the string
function reverseString(input) {
    return input.split('').reverse().join('');
  }
  
  // Main program
  function reverseAfterDelay(input) {
    // Delay function to reverse the string after 2 seconds
    function reverseWithDelay() {
      const reversedString = reverseString(input);
      console.log("Reversed string:", reversedString);
    }
  
    setTimeout(reverseWithDelay, 2000);
  }
  
  const input = "Hello, World!";
  console.log("Original string:", input);
  reverseAfterDelay(input);

//   2.Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Change 100 to modify the range of random numbers
  }
  
//   3.Function to display progress indication messages
  function displayProgress(remainingTime) {
    console.log(`Generating random number in ${remainingTime} seconds...`);
  }
  
  // Main program
  function generateNumberWithDelay(delay) {
    let remainingTime = delay;
    const interval = setInterval(() => {
      displayProgress(remainingTime);
      remainingTime -= 1;
      if (remainingTime <= 0) {
        clearInterval(interval);
        const randomNumber = generateRandomNumber();
        console.log(`Random number generated: ${randomNumber}`);
      }
    }, 1000);
  }
  
// Test the program with a delay of 3 seconds
  const delayInSeconds = 3;
  generateNumberWithDelay(delayInSeconds);
  

// 4.Store's inventory with prices in US Dollars
const storeInventoryUSD = {
    item1: 25, // USD
    item2: 50, // USD
    item3: 15, // USD
    // Add more items and prices here if needed
  };
  
  // Function to convert USD to INR
  function convertToINR(priceUSD) {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
  }
  
  // Using the map function to convert prices to INR
  const storeInventoryINR = Object.keys(storeInventoryUSD).reduce((acc, item) => {
    acc[item] = convertToINR(storeInventoryUSD[item]);
    return acc;
  }, {});
  
  // Display the inventory with prices in INR
  console.log("Store's inventory with prices in INR:", storeInventoryINR);
  

  // 5.Sample list of books with authors and publication years
const books = [
    {
      title: "Book 1",
      author: "author 1",
      publicationYear: 2005,
    },
    {
      title: "Book 2",
      author: "author 2",
      publicationYear: 2012,
    },
    {
      title: "Book 3",
      author: "author 3",
      publicationYear: 2009,
    },
    // Add more books here if needed
  ];
  
  // Function to capitalize the first letter of a string
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Filter books published after 2010 and capitalize author names
  const filteredBooks = books
    .filter((book) => book.publicationYear >= 2010)
    .map((book) => ({
      ...book,
      author: capitalizeFirstLetter(book.author),
    }));
  
  // Display the filtered books with capitalized author names
  console.log("Filtered books with capitalized author names:", filteredBooks);

  //5.URL Validation
  function validateURL(input) {
    // Regular expression for URL validation
    const urlRegex = /^(https?:\/\/)[\w\d\s./-]+[.][a-zA-Z]+$/;
  
    if (urlRegex.test(input)) {
      console.log("Input is a valid URL.");
    } else {
      console.log("Input is not a valid URL.");
    }
  }
  
  // Test the program with example inputs
  validateURL("http://www.example.com"); // Valid URL
  validateURL("https://www.example.com"); // Valid URL
  validateURL("https://www.example.com/path/page.html"); // Valid URL
  validateURL("ftp://www.example.com"); // Invalid URL
  validateURL("http://123.45.67.89"); // Invalid URL

//LinkedIn Profile URL Validator
  function validateLinkedInProfileURL(input) {
    // Regular expression for LinkedIn profile URL validation
    const linkedInURLRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    if (linkedInURLRegex.test(input)) {
      console.log("Input is a valid LinkedIn profile URL.");
    } else {
      console.log("Input is not a valid LinkedIn profile URL.");
    }
  }
  
  // Test the program with example inputs
  validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe"); // Valid LinkedIn profile URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/john_doe"); // Valid LinkedIn profile URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/john-doe-123"); // Valid LinkedIn profile URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe123"); // Valid LinkedIn profile URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/john.doe"); // Invalid LinkedIn profile URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/invalid$profile"); // Invalid LinkedIn profile URL
  
  
