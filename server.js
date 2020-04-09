const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/myappdb',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });
    
app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'));
});
