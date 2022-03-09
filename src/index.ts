const express = require('express');
const posts_made = require('./data/posts');
const messages_made = require('./data/posts');
const app = express();
app.listen(3000, () => {
    console.log('Started')
})
app.get('/posts', (req: any, res: any) => {
    res.json(posts_made)
})
app.get('/messages', (req: any, res: any) => {
    res.json(messages_made)
})
