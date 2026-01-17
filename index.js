const app = require('./src/app');

// Azure sets the PORT variable. If not found (local testing), use 3000.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});