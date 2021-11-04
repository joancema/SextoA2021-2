const axios    = require('axios').default;
const cheerio  = require('cheerio');
const mongoose = require('mongoose');
const cron     = require('node-cron');

const { MONGO_URI } =  require('./config');
const {Noticias } = require('./models');


    cron.schedule("* * * * *", async ()=>{
    try
    {
        const resconexion =  await mongoose.connect(MONGO_URI)
        const html=  await axios.get("https://cnnespanol.cnn.com/");
        const $ = cheerio.load(html.data)
        const titulos =  $(".news__title");
        let arregloNoticias=[];
        titulos.each(async (index, element)=>{
            const Noticia = {
                titulo:$(element).text().toString() ,
                enlace: $(element).children().attr("href") 
            }
            //await Noticias.create(Noticia);
            arregloNoticias= [...arregloNoticias, Noticia];
        })
        //console.log(arregloNoticias)
            Noticias.create(arregloNoticias);
    }
    catch(err){
        console.log(err)
    }
});
