const app = require('./server');

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`App bouncing on port ${PORT}`);
});
