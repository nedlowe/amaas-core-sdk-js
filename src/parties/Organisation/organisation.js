import Party from '../Party/party.js'

/**
 * Class representing an Organisation
 * @extends Party
 */
class Organisation extends Party {
  /**
   * Construct a new Organisation object
   * @param {object} params - Organisation creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Organisation
   * @param {string} params.partyId - Party ID of the Organisation
   * @param {string} params.partyStatus=Active - Status of the Organisation (e.g. 'Active')
   * @param {string} params.partyClass=Organisation - Class of the Organisation
   * @param {string} params.partyType=Organisation - Type of the Organisation
   * @param {string} params.description - Description of the Organisation
   * @param {object} params.addresses - Object of Addresses associated with this Organisation
   * @param (object) params.emails - Object of Emails associated with this Organisation
   * @param {object} params.references - Object of References associated with this Organisation
   * @param {string} params.createdBy - ID of the user that created the Organisation (required if creating a new Organisation)
   * @param {string} params.updatedBy - ID of the user that updated the Organisation (use if amending existing Organisation)
   * @param {date} params.createdTime - Time that the Organisation was created (required if creating new Organisation)
   * @param {date} params.updatedTime - Time that the Organisation was updated (required if amending existing Organisation)
   * @param {number} params.version - Version number of the Organisation
   */
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Organisation', partyType='Organisation', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      assetManagerId,
      partyId,
      partyStatus,
      partyClass,
      partyType,
      description,
      addresses,
      emails,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }

  toJSON() {
    return {
      asset_manager_id: this.assetManagerId,
      party_id: this.partyId,
      party_status: this.partyStatus,
      party_class: this.partyClass,
      party_type: this.partyType,
      description: this.description,
      addresses: this.addresses,
      emails: this.emails,
      references: this.references,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
}

export default Organisation
