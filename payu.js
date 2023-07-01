const axios = require('axios');
const crypto = require('crypto-js');
const xml2js = require('xml2js');


const API_LOGIN = '0S7rI9Illf7rCWg';
const API_KEY = 'd80T78BC288es5i1CwIHqm0ewT';


async function getPaymentMethods() {
    const date = new Date().toISOString().slice(0, 19).replace(/-/g, '').replace(/:/g, '').replace(/T/g, '');
  
    const signature = crypto.HmacSHA256(`${API_KEY}~${API_LOGIN}~${date}`, API_KEY).toString(crypto.enc.Hex);
  
    const requestData = {
      language: 'es',
      command: 'GET_PAYMENT_METHODS',
      merchant: {
        apiLogin: API_LOGIN,
        apiKey: API_KEY,
      },
    };
  
    const xmlRequest = new xml2js.Builder().buildObject(requestData);
  
    const response = await axios.post('https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi', xmlRequest, {
      headers: {
        'Content-Type': 'application/xml',
        'Accept': 'application/xml',
        'User-Agent': 'PayU SDK Node.js',
        'Content-MD5': crypto.MD5(xmlRequest).toString(crypto.enc.Base64),
        'Date': date,
        'Signature': signature,
      },
    });
  
    const xmlResponse = response.data;
    const responseData = await xml2js.parseStringPromise(xmlResponse);
  
    // Procesa y devuelve la respuesta de PayU
    return responseData;
  }
  