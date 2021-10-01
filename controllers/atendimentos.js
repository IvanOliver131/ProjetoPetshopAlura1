const Atendimento = require('../models/atendimentos');

//OBS: Status por padrão é 200

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    Atendimento.lista()
      .then(resultados => 
        res.status(200).json(resultados)
      )
      .catch(erros => 
        res.status(400).json(erros)
      )
  });

  // falta esse
  app.get('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.buscarPorId(id, res);
  });

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body;

    Atendimento.adiciona(atendimento)
      .then(atendimentoCadastrado => 
        res.status(201).json(atendimentoCadastrado)
      )
      .catch(erros => 
        res.status(400).json(erros)
      )
  }); 

  //falta esse
  app.patch('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    Atendimento.altera(id, valores, res);
  });

  //falta esse
  app.delete('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.deleta(id, res);
  })
}