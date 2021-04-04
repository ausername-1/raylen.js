const fetch = require('node-fetch')

module.exports = {
	checkip: async function(ip, key) {
const data = await fetch(`https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`, {
     method: 'get',
     headers: {'Accept': 'application/json', 'Key': key}
 }).then(res => res.json())
   return data;
  },

  reportip: async function(ip,key,reason, category) {
const data = await fetch(`https://api.abuseipdb.com/api/v2/report?ip=${ip}&categories=${category}&comment=${reason}`, {
     method: 'post',
     headers: {'Accept': 'application/json', 'Key': key}
 }).then(res => res.json())
    return data;
  }
}