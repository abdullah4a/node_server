const client_exp = require('./data/connection')
client_exp.connect();

const express = require('express');
const posts_made = require('./data/posts');
const messages_made = require('./data/messages');
//setting app
const app = express();
app.listen(3000, () => {
    console.log('Started');
})
// Setting up Home page
app.get('/', (req: any, res: any) => {
    res.send('<div style="text-align: center;margin-top: 2%;">  <!--header-->\n' +
        '    <div style="font-size: x-large;justify-content: space-between;width: 500px;margin: auto">\n' +
        '        <a style="text-decoration: none;padding: 5%;background: rgba(0,0,0,0.9);border-radius: 10px 0 10px 0;" href="/posts">Posts</a>\n' +
        '        <a style="text-decoration: none;padding: 5%;background: rgba(0,0,0,0.9);border-radius: 10px 0 10px 0;" href="/messages">Messages</a>\n' +
        '    </div>\n' +
        '    <!--header-->\n' +
        '    <!--body-->\n' +
        '        <h1 style="font-size: 80px;">APIs Working</h1>\n' +
        '    <div style="width: 60%;margin: auto;text-align: justify">\n' +
        '   <div style="font-size: 30px">\n' +
        '        <p>One can visit Here</p>\n' +
        '        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque consequatur ' +
        'consequuntur et exercitationem facilis, in ipsum laborum magni maiores nisi officiis optio pariatur' +
        ' quis reiciendis repellat sint voluptatibus?</p>\n' +
        '    </div>\n' +
        '    </div>' +
        '    <!--body-->' +
        '   ' +
        '    </div>'
    );
})
// Setting up requested pages
app.get('/posts', (req1: any, res1: any) => {
    client_exp.query('select * from posts;', (err: any, res: any) => {
        if (!err) {
            res1.json(res.rows);
        } else {
            console.log(err.message)
        }
    })
    client_exp.end
})
app.get('/messages', (req1: any, res1: any) => {
    client_exp.query('select * from messages;', (err: any, res: any) => {
        if (!err) {
            res1.json(res.rows);
        } else {
            console.log(err.message)
        }
    })
    client_exp.end;
})
