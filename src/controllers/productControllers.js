const knex = require('../database/index');


exports.getAll = (req, res) => {

  knex('produtos').then((produtos)=>{
      return res.status(200).json(produtos);
  })   
  
}

exports.getOneId = (req, res, next) => {

  const {id} = req.params;
  
  knex.where({id : id}).table("produtos").then(data => {
    return res.status(201).json(data)
  }).catch(err =>{
    return res.status(400).json(err)
  });


}

exports.create = (req, res ,next) => {


  const { nome,preco,quant_estoque,disponivel,destaque,id_departamento} = req.body

  knex.insert({
      nome,preco,quant_estoque,disponivel,destaque,id_departamento
  }).into("produtos").then(data => {
    return res.status(201).json(data)
  }).catch(err =>{
    return res.status(400).json(err)
  })


}

exports.update = (req, res, next) => {
  const produto = req.body
  const {id} = req.params;

    knex('produtos').where({id}).update(produto).then(data => {
    if(data){
      res.status(200).json(produto)
    }
    else {
      res.status(404).json({message: "Record not found"})
    }
  }).catch(err => {
    res.status(500).json({message: "Error updating new post", error: err})
  });
  
}






