const knex = require('../database/index');


exports.getAllDep =(req, res) => {

    knex('departamento').then((departamento)=>{
        return res.status(200).json(departamento);
    }) 
}

exports.getdep = (req, res) => {


  const { id } = req.params;
  const produto = knex('produtos')

    knex.where({ id : id }).table('departamento').then(data => {
       if( produto == departamento  ){
         res.status(200).json([{
           idDep : data.id,
           nome : data.nome_dep,
           produtos : produto
         }])
       }
       else{
         res.status(400).json({error:'eroror'})
       }
       
    }).catch(err => {
      res.status(400).json(err)
    })

   

      
    


}

