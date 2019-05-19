const https = require('https');

function VerifyAppID (appID) {

    var baseUrl = 'https://svcs.ebay.com/services/search/FindingService/v1?'
        baseUrl += 'OPERATION-NAME=findCompletedItems&'
        baseUrl += 'SERVICE-VERSION=1.13.0&'
        baseUrl += 'GLOBAL-ID=EBAY-US&'
        baseUrl += 'SECURITY-APPNAME=' + appID + '&'
        baseUrl += 'RESPONSE-DATA-FORMAT=JSON&'
        baseUrl += 'REST-PAYLOAD&'
        baseUrl += 'keywords=harry%20potter%20phoenix&'
        baseUrl += 'itemFilter(0).name=Condition&'
        baseUrl += 'itemFilter(0).value=3000'

    let promise = new Promise((resolve, reject) => {
        const req = https.get(baseUrl, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                try {
                    var jsonData = JSON.parse(data);
                } catch (error) {
                    reject(`There was an error parsing the JSON file. ${error.message}`)
                }
                if (response.statusCode == 200 && jsonData.findCompletedItemsResponse[0].ack[0] === 'Success') {
                    resolve()
                } else {
                    try {
                        var auth_message = jsonData.errorMessage[0].error[0].message[0]
                        console.log(auth_message)
                        reject('Invalid App ID.  Please enter a valid App ID.');
                    } catch (error) {
                        reject('An unknown error has occurred.');
                    }
                }
            })
        })
        req.on('error', (error) => {
            if (error.message === 'Failed to fetch') {
                reject('Failed to connect to the server.')
            } else {
                console.log(`Unknown error. ${error.message}`)
                reject(error)
            }
        })
    })
    return promise;
}

export default VerifyAppID;