if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const apiRouter = require('./app/routers/apiRouter');
const expressSwagger = require('express-swagger-generator')(app);
const cors = require('cors');

const port = process.env.PORT || 3000;
let options = {
    swaggerDefinition: {
        info: {
            description: 'Cette api permet de gérer les candidatures d\'emploi',
            title: 'Ojob',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/api',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./app/routers/*.js', './app/datamappers/*.js'] //Path to the API handle folder
};
expressSwagger(options);
app.use(cors());
app.use(express.json());
app.use('/api' , apiRouter);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});