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
        let authenticated = false;

        https.get(baseUrl, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                const jsonData = JSON.parse(data);
                if (response.statusCode == 200 && jsonData.findCompletedItemsResponse) {
                    authenticated = true;
                    resolve(authenticated)
                } else if (response.statusCode === 500) {
                    try {
                        var auth_message = jsonData.errorMessage[0].error[0].message[0]
                        console.log(auth_message)
                        reject(authenticated);
                    } catch (error) {
                        console.log('An unknown error has occurred.  Please retry authentication.')
                        reject(authenticated);
                    }
                }
            })

        })

    })

    return promise;
}

export default VerifyAppID;