import React, { useEffect } from 'react'
import VerifyAppID from '../../utils/verifyAppID'
var fs = require('fs');
const remote = require('electron').remote;
const appPath = remote.app.getAppPath();
const appName = remote.app.getName();

require('../../assets/icons/font_awesome/all.min.js')
require('../../assets/css/custom.css')
require('../../assets/css/bootstrap.min.css')

function InitialLoad (props) {

    useEffect(() => {
        let configData;
        let chunks = appPath.split(`${appName}.app`);
        try {
            configData = fs.readFileSync(`${chunks[0]}config.json`, 'utf-8');
            let configJson = JSON.parse(configData);
            let token = configJson.token;
            if (!token) {
                props.history.push('/appid')
            } else {
                VerifyAppID(token)
                .then((data) => {
                    props.appIDChange(token)
                    props.history.push('/dashboard')
                }).catch((data) => {
                    alert(data)
                    props.history.push('/appid')
                });
            }
        } catch (error) {
            // Allows the user to read the "Checking config file for token..." message before 
            // redirecting to the appID entry screen
            setTimeout(() => {
                console.log(error.message);
                props.history.push('/appid')
            }, 2000)
        }
    })

    return(
        <div className='center-page'>
            <div className='loading-wheel-center'>
                <span className="spinner-border spinner-border-lg" role="status" aria-hidden="true" /> 
            </div>
            <div>
                Checking config file for token...
            </div> 
        </div>
    );
}

export default InitialLoad;