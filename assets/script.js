let isLoadingFirstApiCall = false;

async function makeApiCall() {
  isLoadingFirstApiCall = true; // Set loading flag to true initially

  const url = 'https://api.quotable.io/quotes/random';
  const params = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, params);
    const data = await response.json();
    console.log('success');
    console.log(data);
  } catch (error) {
    console.log('An error occurred:', error);
  } finally {
    isLoadingFirstApiCall = false; // Set loading flag to false in the finally block
  }
}

makeApiCall();
