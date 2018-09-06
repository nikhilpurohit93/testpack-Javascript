/**
 * Manage Contractors APIs
 * This API supports all services required to manage Employees on HR system
 *
 * OpenAPI spec version: 0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ERRORUNKNOWN', 'model/Employee'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ERRORUNKNOWN'), require('../model/Employee'));
  } else {
    // Browser globals (root is window)
    if (!root.ManageContractorsApIs) {
      root.ManageContractorsApIs = {};
    }
    root.ManageContractorsApIs.ContractorsApi = factory(root.ManageContractorsApIs.ApiClient, root.ManageContractorsApIs.ERRORUNKNOWN, root.ManageContractorsApIs.Employee);
  }
}(this, function(ApiClient, ERRORUNKNOWN, Employee) {
  'use strict';

  /**
   * Contractors service.
   * @module api/ContractorsApi
   * @version 0.1
   */

  /**
   * Constructs a new ContractorsApi. 
   * @alias module:api/ContractorsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contractorsEmployeeIDDelete operation.
     * @callback module:api/ContractorsApi~contractorsEmployeeIDDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an Employee record
     * Deletes the profile of an employee.
     * @param {Number} employeeID The unique ID of employee.
     * @param {module:api/ContractorsApi~contractorsEmployeeIDDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.contractorsEmployeeIDDelete = function(employeeID, callback) {
      var postBody = null;

      // verify the required parameter 'employeeID' is set
      if (employeeID === undefined || employeeID === null) {
        throw new Error("Missing the required parameter 'employeeID' when calling contractorsEmployeeIDDelete");
      }


      var pathParams = {
        'employeeID': employeeID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contractors/{employeeID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contractorsEmployeeIDGet operation.
     * @callback module:api/ContractorsApi~contractorsEmployeeIDGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves an Employee record
     * Retrieves the profile of an employee.
     * @param {Number} employeeID The unique ID of employee.
     * @param {module:api/ContractorsApi~contractorsEmployeeIDGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employee}
     */
    this.contractorsEmployeeIDGet = function(employeeID, callback) {
      var postBody = null;

      // verify the required parameter 'employeeID' is set
      if (employeeID === undefined || employeeID === null) {
        throw new Error("Missing the required parameter 'employeeID' when calling contractorsEmployeeIDGet");
      }


      var pathParams = {
        'employeeID': employeeID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Employee;

      return this.apiClient.callApi(
        '/contractors/{employeeID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contractorsGet operation.
     * @callback module:api/ContractorsApi~contractorsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ERRORUNKNOWN} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves all Employee records
     * Retrieves the profile of all employees.
     * @param {module:api/ContractorsApi~contractorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ERRORUNKNOWN}
     */
    this.contractorsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ERRORUNKNOWN;

      return this.apiClient.callApi(
        '/contractors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contractorsPost operation.
     * @callback module:api/ContractorsApi~contractorsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an Employees
     * Registers a new employee for the client.
     * @param {Object} opts Optional parameters
     * @param {module:model/Employee} opts.employee The Employee
     * @param {module:api/ContractorsApi~contractorsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.contractorsPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['employee'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contractors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
