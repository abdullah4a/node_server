const express = require('express');
const posts_made = require('./data/posts');
const messages_made = require('./data/posts');
//setting app
const app = express();
app.listen(3000, () => {
    console.log('Started')
})
// Setting up Home page
app.get('/', (req: any, res: any) => {
    res.send('<div>  <!--header-->\n' +
        '    <div>\n' +
        '        <a href="/posts">Posts</a>\n' +
        '        <a href="/messages">Messages</a>\n' +
        '    </div>\n' +
        '    <!--header-->\n' +
        '    <!--body-->\n' +
        '    <div>\n' +
        '        <h1>APIs Working</h1>\n' +
        '        <p>One can visit Here</p>\n' +
        '        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque consequatur ' +
        'consequuntur et exercitationem facilis, in ipsum laborum magni maiores nisi officiis optio pariatur' +
        ' quis reiciendis repellat sint voluptatibus?</p>\n' +
        '    </div>\n' +
        '    <!--body-->' +
        '   ' +
        '    </div>'
    );
})
// Setting up requested pages
app.get('/posts', (req: any, res: any) => {
    res.json(posts_made)
})
app.get('/messages', (req: any, res: any) => {
    res.json(messages_made)
})
