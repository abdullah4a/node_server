const client_exp = require('./data/connection')
client_exp.connect();

const express = require('express');
// const posts_made = require('./data/posts');
// const messages_made = require('./data/messages');
//setting app
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('Started');
})
// Setting up Home page
app.get('/', (req: any, res: any) => {
    res.send('<div style="text-align: center;margin-top: 2%;">  <!--header-->\n' +
        '    <div style="font-size: x-large;justify-content: space-between;width: 500px;margin: auto">\n' +
        '        <a style="text-decoration: none;padding: 5%;background: rgba(0,0,0,0.9);border-radius: 10px 0 10px 0;" href="/api/posts">Posts</a>\n' +
        '        <a style="text-decoration: none;padding: 5%;background: rgba(0,0,0,0.9);border-radius: 10px 0 10px 0;" href="/api/messages">Messages</a>\n' +
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
app.get('/api/posts', (req1: any, res1: any) => {
    client_exp.query('select * from posts;', (err: any, res: any) => {
        if (!err) {
            res1.json(res.rows);
        } else {
            console.log(err.message)
        }
    })
    client_exp.end
})
app.get('/api/messages', (req1: any, res1: any) => {
    client_exp.query('select * from messages;', (err: any, res: any) => {
        if (!err) {
            res1.json(res.rows);
        } else {
            console.log(err.message)
        }
    })
    client_exp.end;
})
app.post('/api/posts', (req1: any, res1: any) => {
    client_exp.query(`Insert into posts(id, post_id, description, title, postby_by)
                      VALUES (${req1.body.id}, ${req1.body.post_id}, ${req1.body.description}, ${req1.body.title},
                              ${req1.body.postby_by});`, (err: any, res: any) => {
        if (!err) {
            console.log(res1.rows);
        } else {
            console.log(err.message)
        }
    })
    client_exp.end;
})
app.post('/api/messages', (req1: any, res1: any) => {
    console.log(req1.body);
    res1.send('Submitted');
    // client_exp.query('select * from messages;', (err: any, res: any) => {
    //     if (!err) {
    //         res1.json(res.rows);
    //     } else {
    //         console.log(err.message)
    //     }
    // })
    // client_exp.end;
})
app.put('/api/posts/:id', (req1: any, res1: any, query: number) => {
    console.log(req1.body, query);
    res1.send('Submitted');
    // client_exp.query('Insert into posts(id, post_id, description, title, postby_by) VALUES ();', (err: any, res: any) => {
    //     if (!err) {
    //         res1.json(res.rows);
    //     } else {
    //         console.log(err.message)
    //     }
    // })
    // client_exp.end;
})
app.put('/api/messages/:id', (req1: any, res1: any, query: number) => {
    console.log(req1.body, query);
    res1.send('Submitted');
    // client_exp.query('select * from messages;', (err: any, res: any) => {
    //     if (!err) {
    //         res1.json(res.rows);
    //     } else {
    //         console.log(err.message)
    //     }
    // })
    // client_exp.end;
})
app.delete('/api/posts/:id', (req1: any, res1: any, query: number) => {
    console.log(query);
    res1.send('Submitted');
    // client_exp.query('Insert into posts(id, post_id, description, title, postby_by) VALUES ();', (err: any, res: any) => {
    //     if (!err) {
    //         res1.json(res.rows);
    //     } else {
    //         console.log(err.message)
    //     }
    // })
    // client_exp.end;
})
app.delete('/api/messages/:id', (req1: any, res1: any, query: number) => {
    console.log(query);
    res1.send('Submitted');
    // client_exp.query('select * from messages;', (err: any, res: any) => {
    //     if (!err) {
    //         res1.json(res.rows);
    //     } else {
    //         console.log(err.message)
    //     }
    // })
    // client_exp.end;
})
