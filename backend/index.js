const express = require('express');

const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res)=> {
    res.send('server is ready');
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'this is joke 1'
        },
        {
            id: 1,
            title: 'Another joke',
            content: 'this is joke 2'
        },
        {
            id: 1,
            title: 'A third joke',
            content: 'this is joke 3'
        },
        {
            id: 1,
            title: 'A fourth joke',
            content: 'this is joke 4'
        },
        {
            id: 1,
            title: 'A fifth joke',
            content: 'this is joke 5'
        }
    ];
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})