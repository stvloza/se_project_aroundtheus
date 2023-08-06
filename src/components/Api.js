export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._handleServerResponse);
  }

  getInitialCards() {
    const Cardinfo = this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
    return Cardinfo;
  }

  getUserInfo() {
    const UserInfo = this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
    return UserInfo;
  }

  setUserInfo(name, description) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description,
      }),
    });
  }

  addCard({ name, link }) {
    return this._request(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  removeCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  // other methods for working with the API
}
