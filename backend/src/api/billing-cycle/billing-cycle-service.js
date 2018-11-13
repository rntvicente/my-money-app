const BillingCycle = require('./billing-cycle-schema');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

module.exports = BillingCycle;
