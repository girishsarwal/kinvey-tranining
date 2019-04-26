/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
require("./bundle-config");
const application = require("tns-core-modules/application");
//TASK 1.3: INITIALIZE KINVEY
const Kinvey = require("kinvey-nativescript-sdk").Kinvey;
Kinvey.init({
    appKey: "kid_rJxCHk6cV",
    appSecret: "d51b303a2a8a4ab4a4a68b2b6521acfb"
});

application.run({ moduleName: "app-root/app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
