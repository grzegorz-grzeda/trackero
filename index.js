const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
