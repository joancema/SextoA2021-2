const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        this.paths = {
            productos: '/api/productos',
            categorias: '/api/categorias'
        }

        this.conectarDB();
        this.middlewares();
        this.routes();
        this.router.use('/v1/inventario', this.app);


        this._express = express().use(this.router);



    }
    async conectarDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }
    routes(){
        this.app.use(this.paths.productos, require('./routes/productos')   )
        this.app.use(this.paths.categorias, require('./routes/categorias')   )
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }


}


module.exports = Server;