const app = require('./server');

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`App bouncing on port ${PORT}`);
});
