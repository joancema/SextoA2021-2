const mongoose =  require("mongoose");
const conexion = `mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/prueba6A?retryWrites=true&w=majority`;

(async ()=>{
    await mongoose.connect(conexion, { useNewUrlParser:true, useUnifiedTopology:true });
    const Usuario =  mongoose.model("Usuario", { nombre:String });
    const usuario1 = new Usuario({nombre:"Roger Cruz"});
    const guardo=  await usuario1.save();
    const respuesta = await Usuario.find();
    console.log(respuesta);
})();


