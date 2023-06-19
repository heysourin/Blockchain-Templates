const axios = require('axios');

const MUMBAI_API_KEY = '';
const MUMBAI_API_BASE_URL = 'https://api-testnet.polygonscan.com/api';
const address = '';

async function getLatestTransactions(address, count) {
  const endpoint = `?module=account&action=txlist&address=${address}&page=1&offset=${count}&sort=desc&apikey=${MUMBAI_API_KEY}`;
  const url = `${MUMBAI_API_BASE_URL}${endpoint}`;

  try {
    const response = await axios.get(url);
    return response.data.result;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
}

async function fetchAndDisplayTransactions() {
  try {
    const transactions = await getLatestTransactions(address, 10);
    transactions.forEach((transaction, index) => {
        console.log(`Transaction ${index + 1}:`);
        console.log('  Hash:', transaction.hash);
        console.log('  From:', transaction.from);
        console.log('  To:', transaction.to);
        console.log('  is Error:', transaction.isError);
        console.log('  Timestamp:', parseInt(transaction.timeStamp, 10));
      });
      const transactions = await getLatestTransactions(address, 5);
      console.log(transactions[0]);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchAndDisplayTransactions();
