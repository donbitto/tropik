var path = require('path');
var express = require('express');
var expressVue = require('express-vue');
var app = express();

app.engine('vue',expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname,'/views'));

app.set('vue',{
    componentsDir: path.join(__dirname,'/views/components'),
    defaultLayout:'layout'
});


app.get('/', function(req,res){
    var scope = {
        data :{
            title: "Hello World",
            message: 'Hello!',
        },
        vue :{
            head:{
                title:"Hello!",
            },
            components:['message']
        }
       
    };
    res.render('index',scope);
});

app.listen(8080, function(){
    console.log('Example app listening on port 8080!');
})