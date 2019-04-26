var admin = require('firebase-admin')
var serviceAccount = require('./fundoo-notes-57ac2-firebase-adminsdk-l2nuw-32f60b7a50.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fundoo-notes-57ac2.firebaseio.com"
});


// var registerationToken = "cNUr19maEwg:APA91bH0iBSwifLw_EPnr8EDn6Ixt-2Rn99a2VaoufaQq7fhSvjOfTp4omyzeV-v1az70Xi3hfy-xf1AZbw4o9eZ_9pCehEozZrAv8DILYc1yMibNfy9Pe02I4F53xKJCrZ2KsrHHJ8I"

var payload = {
    notification: {
        title: 'hello',
        body: 'how r u'
    }
}

var options = {
    priority: "normal",
    timeToLive: 60 * 60
};

module.exports = {

    sendNotification(token) {

        console.log('send notification ' ,payload);
        
        var registerationToken = token
        admin.messaging().sendToDevice(registerationToken, payload, options)
            .then(function (response) {
                console.log("Message sent successfully", response);

            })
            .catch(function (error) {
                console.log("Error in sending message", error);
            })

    }
}



