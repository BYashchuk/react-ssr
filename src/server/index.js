const fs = require('fs');

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import App from '../shared/redux/containers/root';

const app = express()
app.use(express.static("public"))

app.get("*", (req, res, next) => {
    const context = {};
    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    fs.readFile("./public/renderHtml.html", "utf8", function (err, htmlstr) {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }
        else {
            var htmlstring = htmlstr.replace("<!--markupdata-placeholder-->", markup);
            res.send(htmlstring);
        }
    });

})

var PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port: 3000`)
})