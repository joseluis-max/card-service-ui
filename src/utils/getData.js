/**
 * Function for fetching data from the API
 */
import { URL_API } from '@/utils/constants'

/**
 * fetching data from the API
 * @param {string} path - Endpoint to add the url api
 * @returns {object} - Data from the API
 */
export default async function getData(path, method = 'GET', data = {}) {
  let res;
  if (method === 'GET') {
    res = await fetch(`${URL_API}${path}`);
  }
  if (method === 'POST') {
    res = await fetch(`${URL_API}${path}`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    });
  }

  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
