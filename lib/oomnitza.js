'use strict';

// require dependencies
const got = require('got');

class Oomnitza {
  /** This class creates a new Oomnitza API client
   * @class Oomnitza
   * @constructor
   * @param {string} orgName - organization name e.g. example.oomnitza.com
   * @param {string} oomnitzaApiKey - Oomnitza API access token
   * @example <caption>Example Oomnitza class usage</caption>
   * const Oomnitza = require('@trevorspecht/oomnitza-sdk-node');
   * const oomnitza = new Oomnitza(oomnitzaApiKey);
   * @see https://{orgname}.oomnitza.com/api/v3/docs/ Oomnitza API Docs
   * @see https://oomnitza.zendesk.com/hc/en-us/articles/360016593593-REST-API-v3-Usage-Examples - Oomnitza API Usage Examples
   */
  constructor(orgName, oomnitzaApiKey) {
    this.apiKey = oomnitzaApiKey;
    this.apiUrl = `https://${orgName}.oomnitza.com/api/v3`;
  }

  /** This function makes a GET request to the Oomnitza /assets endpoint
   * @name {function} listAssets
   * @param {Object} params - query parameter object
   * @param {string} params.fields - array of fields to include in response
   * @param {number} params.skip - pagination: starting index
   * @param {number} params.limit - pagination: the amount of assets returned on each page; default 200
   * @param {string} params.sortby - specified field for sorting list of assets
   * @usage Example listAssets usage
   * const assetList = await oomnitza.listAssets(params);
   * @returns {Promise.object} - JSON response object
   * @see https://{orgname}.oomnitza.com/api/v3/docs/#!/assets/get_assets Oomnitza API Docs
   * @see https://docs.google.com/document/d/1CYw-RP62Arqgh55cLGjrHWkN-GO_KBwUmuNkmt9edRk/view# Oomnitza API Usage Examples
   */
  async listAssets(params) {
    const apiKey = this.apiKey;
    const urlParams = `?fields=${params.fields}&skip=${params.skip}&limit=${params.limit}&sortby=${params.sortby}`;
    const options = {
      url: `${this.apiUrl}/assets/${urlParams}`,
      responseType: 'json',
      headers: {
        'Authorization2': apiKey
      }
    };

    try {
      const response = await got.get(options);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /** This function makes a GET request to the Oomnitza /assets/{id} endpoint
   * @name {function} getAsset
   * @param {string} id - asset id (equipment_id field)
   * @usage Example getAsset usage
   * const asset = await oomnitza.getAsset(id);
   * @returns {Promise.object} - JSON response object
   * @see https://{orgname}.oomnitza.com/api/v3/docs/#!/assets/get_assets Oomitza API Docs
   * @see  https://docs.google.com/document/d/1CYw-RP62Arqgh55cLGjrHWkN-GO_KBwUmuNkmt9edRk/view# Oomnitza API Usage Examples
   */
  async getAsset(id) {
    const apiKey = this.apiKey;
    const options = {
      url: `${this.apiUrl}/${id}`,
      responseType: 'json',
      headers: {
        'Authorization2': apiKey
      }
    };

    try {
      const response = await got.get(options);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = Oomnitza;
