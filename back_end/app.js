const express = require('express');
const expressApp = require('./express-app');

const StartServer = async () => {
    const PORT = process.env.PORT || 5000;
    const app = express();

    await expressApp(app);

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();
