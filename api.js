var FruityBabe = require('./fruity-babes');
const dboperations = require('./dboperations');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) =>{
   console.log('middleware');
   next();
})
router.route('/fruitybabes').get((request,response)=>{
    dboperations.getFruityBabes().then(result => {
        console.log(result);
        response.json(result);
    })
})

var port = process.env.PORT || 1433;
app.listen(port);
console.log('API is running on ' + port);



