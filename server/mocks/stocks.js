/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var stocksRouter = express.Router();

  stocksRouter.get('/', function(req, res) {
    var stocks = [{
      symbol: "FLWS",
      name: "1-800 FLOWERS.COM, Inc."
    },
    {
      symbol: "GRPN",
      name: "Groupon, Inc."
    },
    {
      symbol: "TFSCR",
      name: "1347 Capital Corp."
    }];

    res.send({
      'stocks': stocks
    });
  });

  stocksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  stocksRouter.get('/:id', function(req, res) {
    res.send({
      'stocks': {
        id: req.params.id
      }
    });
  });

  stocksRouter.put('/:id', function(req, res) {
    res.send({
      'stocks': {
        id: req.params.id
      }
    });
  });

  stocksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  // app.use('/stocks', stocksRouter);
};
