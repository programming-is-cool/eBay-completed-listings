function VerifyAppID (appID, history) {
    if(!appID) {
        alert('The field is blank.  Please enter the App ID.')
    } else if (history.location.pathname === "/dashboard") {
        console.log('Success.  App_ID is: ' + appID)
        alert('App ID was changed to "' + appID + '".')
    } else {
        history.push('/dashboard')
    }
}

export default VerifyAppID;