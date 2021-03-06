'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('../../core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Asset Manager
 * @extends AMaaSModel
 */
var AssetManager = function (_AMaaSModel) {
  _inherits(AssetManager, _AMaaSModel);

  /**
   * Construct a new Asset Manager Model
   * @param {object} params - Asset Manager creation options
   * @param {number} params.assetManagerId - Asset Manager's ID
   * @param {string} params.assetManagerType - Type of Asset Manager (e.g. Hedge Fund)
   * @param {string} params.assetManagerStatus - Status of Asset Manager (e.g. Active)
   * @param {string} params.clientId - ID of the associated client
   * @param {string} params.partyId - ID of the associated party (associated party may be self)
   * @param {string} params.defaultBookOwnerId - ID of the default owner for any books owned by this Asset Manager
   * @param {date} params.defaultTimezone - Default timezone for any books owned by this Asset Manager
   * @param {date} params.defaultBookCloseTime - Default book close time for any books owned by this Asset Manager
   * @param {string} params.createdBy - ID of the user that created the Asset Manager (required if creating a new Asset Manager)
   * @param {string} params.updatedBy - ID of the user that updated the Asset Manager (use if amending existing Asset Manager)
   * @param {date} params.createdTime - Time that the Asset Manager was created (required if creating new Asset Manager)
   * @param {date} params.updatedTime - Time that the Asset Manager was updated (required if amending existing Asset Manager)
   * @param {number} params.version - Version number of the Asset Manager
   */
  function AssetManager(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetManagerType = _ref.assetManagerType,
        assetManagerStatus = _ref.assetManagerStatus,
        clientId = _ref.clientId,
        partyId = _ref.partyId,
        defaultBookOwnerId = _ref.defaultBookOwnerId,
        defaultTimezone = _ref.defaultTimezone,
        defaultBookCloseTime = _ref.defaultBookCloseTime,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, AssetManager);

    var _this = _possibleConstructorReturn(this, (AssetManager.__proto__ || Object.getPrototypeOf(AssetManager)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    _this.assetManagerId = assetManagerId;
    _this.assetManagerType = assetManagerType;
    _this.assetManagerStatus = assetManagerStatus;
    _this.clientId = clientId;
    _this.partyId = partyId;
    _this.defaultBookOwnerId = defaultBookOwnerId;
    _this.defaultTimezone = defaultTimezone;
    _this.defaultBookCloseTime = defaultBookCloseTime;
    return _this;
  }

  _createClass(AssetManager, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        asset_manager_id: this.assetManagerId,
        asset_manager_type: this.assetManagerType,
        asset_manager_status: this.assetManagerStatus,
        client_id: this.clientId,
        party_id: this.partyId,
        default_book_owner_id: this.defaultBookOwnerId,
        default_timezone: this.defaultTimezone,
        default_book_close_time: this.defaultBookCloseTime,
        created_by: this.createdBy,
        updated_by: this.updatedBy,
        created_time: this.createdTime,
        updated_time: this.updatedTime,
        version: this.version
      };
    }
  }]);

  return AssetManager;
}(_core.AMaaSModel);

exports.default = AssetManager;