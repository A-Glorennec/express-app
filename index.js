const app = require('./app');

const port = 3000;

app
    .listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    })
    .on("error", (err) => {
        console.error("Error:", err.message);
    });