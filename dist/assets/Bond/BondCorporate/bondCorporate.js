'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bond = require('../BondBase/bond.js');

var _bond2 = _interopRequireDefault(_bond);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BondCorporate = function (_BondBase) {
  _inherits(BondCorporate, _BondBase);

  function BondCorporate(_ref) {
    var assetManagerId = _ref.assetManagerId,
        fungible = _ref.fungible,
        assetIssuerId = _ref.assetIssuerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Bond' : _ref$assetClass,
        _ref$assetType = _ref.assetType,
        assetType = _ref$assetType === undefined ? 'BondCorporate' : _ref$assetType,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        maturityDate = _ref.maturityDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        issueDate = _ref.issueDate,
        coupon = _ref.coupon,
        par = _ref.par,
        _ref$references = _ref.references,
        references = _ref$references === undefined ? {} : _ref$references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, BondCorporate);

    return _possibleConstructorReturn(this, (BondCorporate.__proto__ || Object.getPrototypeOf(BondCorporate)).call(this, {
      assetManagerId: assetManagerId,
      fungible: fungible,
      assetIssuerId: assetIssuerId,
      assetId: assetId,
      assetClass: assetClass,
      assetType: assetType,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      maturityDate: maturityDate,
      description: description,
      clientId: clientId,
      issueDate: issueDate,
      coupon: coupon,
      par: par,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));
  }

  _createClass(BondCorporate, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        asset_manager_id: this.assetManagerId,
        fungible: this.fungible,
        asset_issuer_id: this.assetIssuerId,
        asset_id: this.assetId,
        asset_class: this.assetClass,
        asset_type: this.assetType,
        asset_status: this.assetStatus,
        country_id: this.countryId,
        venue_id: this.venueId,
        maturity_date: this.maturityDate,
        description: this.description,
        client_id: this.clientId,
        issue_date: this.issueDate,
        coupon: this.coupon,
        par: this.par,
        references: this.references,
        created_by: this.createdBy,
        updated_by: this.updatedBy,
        created_time: this.createdTime,
        updated_time: this.updatedTime,
        version: this.version
      };
    }
  }]);

  return BondCorporate;
}(_bond2.default);

exports.default = BondCorporate;