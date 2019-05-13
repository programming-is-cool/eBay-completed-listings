const https = require('https');

function CompletedListingsRequest (appID, keywords) {

    var keywords = keywords.replace(/\s+/g, '%20');

    var baseUrl = 'https://svcs.ebay.com/services/search/FindingService/v1?'
        baseUrl += 'OPERATION-NAME=findCompletedItems&'
        baseUrl += 'SERVICE-VERSION=1.13.0&'
        baseUrl += 'GLOBAL-ID=EBAY-US&'
        baseUrl += 'SECURITY-APPNAME=' + appID + '&'
        baseUrl += 'RESPONSE-DATA-FORMAT=JSON&'
        baseUrl += 'REST-PAYLOAD&'
        baseUrl += 'keywords=' + keywords

    let promise = new Promise((resolve, reject) => {

        const req = https.get(baseUrl, (response) => {

            let data = '';

            response.on('data', (chuck) => {
                data += chuck;
            });

            response.on('end', () => {
                try {
                    var jsonData = JSON.parse(data);
                } catch (error) {
                    reject('There was an error parsing the JSON file. ' + error.message)
                }
                if (response.statusCode === 200) {
                    resolve(jsonData)
                } else {
                    reject('Unknown error. The following status code was returned: ' + response.statusCode)
                }
            })

        })
        req.on('error', (error) => {
            if (error.message === 'Failed to fetch') {
                alert('Failed to connect to the server.')
                reject(error)
            } else {
                console.log('Unknown error. ' + error.message)
                reject(error)
            }
        })

    })

    return promise;
}

export default CompletedListingsRequest;