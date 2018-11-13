const express = require('express');

const service = require('../api/billing-cycle/billing-cycle-service');

const routes = (server) => {
  const router = express.Router();
  server.use('/api', router);

  service.register(router, '/billingCycles');
};

module.exports = routes;
