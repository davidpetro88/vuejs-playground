# Chat

Create file "firebase-config.js" in folder app.
Example : app/firebase-config.js
put this code in file:
````
define('firebase-config', function(){
    return {
        apiKey: "YOUR-API-KEY",
        authDomain: "AUTH-DOMAIN",
        databaseURL: "URL-DATABASE",
        storageBucket: "STORAGE",
    };
});