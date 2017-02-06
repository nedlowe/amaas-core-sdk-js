import { AMaaSModel, Reference } from '../../core'
import uuid from 'uuid'
const Decimal = require('decimal.js')

/**
 * Class representing a Transaction
 * @extends AMaaSModel
 */
class Transaction extends AMaaSModel {
  /**
   * Construct a new Transaction object
   * @param {string} assetManagerId - ID of the Transaction's Asset Manager
   * @param {string} assetBookId - ID of the Transaction's book
   * @param {string} counterpartyBookId - ID of the counterparty to this Transaction
   * @param {string} transactionAction - Transaction action e.g. BUY/SELL
   * @param {string} assetId - ID of the asset being transacted
   * @param {number} quantity - Quantity being transacted
   * @param {date} transactionDate - Date of transactionDate
   * @param {date} settlementDate - Date of settlement e.g. T+2 where T = transactionDate
   * @param {decimal} price - price of Asset being transacted
   * @param {string} transactionCurrency - Currency that the Transaction takes place in
   * @param {string} settlementCurrency - Currency that the Transaction is settled in
   * @param {Asset} transactionType - Type of Transaction e.g. Trade, Allocation
   * @param {*} transactionStatus - *
   * @param {date} executionTime - Time that the Transaction was executed
   * @param {string} transactionId - ID of the Transaction
   * @param {object} charges - Object of all charges (Charge class)
   * @param {object} codes - Object of all codes (Code class)
   * @param {object} references - *
   * @param {*} postings - *
   * @param {*} asset - *
  */
  constructor({
    assetManagerId,
    assetBookId,
    counterpartyBookId,
    transactionAction,
    assetId,
    quantity,
    transactionDate,
    settlementDate,
    price,
    transactionCurrency,
    settlementCurrency,
    asset,
    executionTime=new Date(),
    transactionType='Trade',
    transactionId=uuid(),
    transactionStatus='New',
    charges={},
    codes={},
    comments={},
    links={},
    parties={},
    references={},
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.assetManagerId = assetManagerId
    this.assetBookId = assetBookId
    this.counterpartyBookId = counterpartyBookId
    this.transactionAction = transactionAction
    this.assetId = assetId
    this.quantity = quantity
    this.transactionDate = transactionDate
    this.settlementDate = settlementDate
    this.price = price
    this.transactionCurrency = transactionCurrency
    this.settlementCurrency = settlementCurrency
    this.transactionType = transactionType
    this.transactionStatus = transactionStatus
    this.executionTime = executionTime
    this.transactionId = transactionId
    this.charges = charges
    this.codes = codes
    this.comments = comments
    this.links = links
    this.parties = parties
    this.references = references
    this.references.AMaaS = new Reference({ referenceValue: this.transactionId })
    this.postings = []
    this.asset = asset
  }

  set quantity(newQuantity=0) {
    this._quantity = new Decimal(newQuantity)
  }

  get quantity() {
    return this._quantity
  }

  set price(newPrice=0) {
    this._price = new Decimal(newPrice)
  }

  get price() {
    return this._price
  }

  set grossSettlement(newGrossSettlement=0) {
    this._grossSettlement = new Decimal(newGrossSettlement)
  }

  get grossSettlement() {
    return this._grossSettlement ? this._grossSettlement : this.price.times(this.quantity)
  }

  set netSettlement(newNetSettlement=0) {
    this._netSettlement = new Decimal(newNetSettlement)
  }

  get netSettlement() {
    return this._netSettlement ? this._netSettlement : this.grossSettlement.minus(this.chargesNetEffect)
  }

  chargesNetEffect() {
    let netCharges = new Decimal(0);
    for (let chargeType in this.charges) {
      if (this.charges[chargeType].active && this.charges[chargeType].netAffecting) {
        netCharges = netCharges.plus(this.charges[chargeType].chargeValue)
      }
    }
    return netCharges
  }
}

export default Transaction
