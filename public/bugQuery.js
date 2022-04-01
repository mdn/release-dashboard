
// THIS IS A WORK IN PROGRESS
// create new issue https://github.com/mdn/content/issues/new?title=foo&body=bar

/**
 * 
 * @param {object} containing the following:
 * (All properties are optional, if none are specified all bugs with `dev-doc-needed` are returned)
 * id {int} bug id to return one bug
 * keywords {array} array of keyword strings to search for
 * 
 * @returns {array} of bug objects
 * Each bug object contains the following (NB we probably don't need to show all these)
 * id
 * description
 * release (version or target milestone)
 * type
 * status
 * resolution
 * classification
 * 
 * keywords
 */

/**
 * Some notes:
 * meta is a keyword
 * categories are
 * 	'product' (core) &
 * 	'component' (eg Audio Video)
 * 	'type' (task) 
 * Related bugs are 'Depends on'
 *
 * Querystring
 * keywords=
 * include_fields: blocks classification component depends_on flags(ffrel) id is_confirmed keywords product summary target_milestone update_token description
 * limit
 */

// Do we want to cache bugs ever? Or just call every time we want to display.
class BugzillaQuery {

  #apiSecret = process.env.VUE_APP_BUGZILLA_API_KEY;
  #bugzillaURL = "https://bugzilla.mozilla.org/rest/bug?"
  #keywords;
  #queryString;

  constructor({
      keywords = ['dev-doc-needed'],
      include_fields = 'short',
    } = {} ) {
    this.#keywords = this.#generateKeyworkString(keywords);

    this.#queryString = this.generateQueryString();
  }

  // keywords ~~~~~~~~~~~~~~~~~~~~
  /**
   * generateKeywordString Generate a keyword string for the api call
   * @param  {[array]} keywords [array of keywords to search for]
   * @return {[string]} [Passed into this.#keywords]
   */
  #generateKeywordString(keywords) {
    let query = 'keywords=';
    for (const word of keywords) {
      query += word+','; // !TODO apart from the last one
    }
  }
  get keywords() {
    return this.#keywords
  }
  set keywords(keywords) {
    this.#keywords = this.#generateKeywordString(keywords);
  }
  #generateQueryString() {

  }
  get queryString() {
    return this.#queryString;
  }
  set queryString() {
    this.#queryString = this.#generateQueryString;
  }

  fetchBugs() {

  }


}

export default BugzillaQuery;