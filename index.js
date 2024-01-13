const datas = require('./src/assets/local-test-ptr.datas.json')
const habilitations = require('./src/assets/local-test-ptr.habilitations.json')
const motifreclamations = require('./src/assets/local-test-ptr.motifreclamations.json')
const otps = require('./src/assets/local-test-ptr.otps.json')
const reclamations = require('./src/assets/local-test-ptr.reclamations.json')
const transactions = require('./src/assets/local-test-ptr.transactions.json')
const users = require('./src/assets/local-test-ptr.users.json')

module.exports = () => ({
  datas: [datas, datas],
  habilitations: [habilitations, habilitations],
  motifreclamations: [motifreclamations, motifreclamations],
  otps: [otps, otps],
  reclamations: [reclamations, reclamations],
  transactions: [transactions, transactions],
  users: [users, users]
});