// This class represents an API interface for interacting with a server that provides card and user information.

export default class Api {
  // Constructor to initialize the API instance with base URL and headers.
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl; // The base URL of the API.
    this._headers = headers; // Headers to be included in API requests.
  }

  // Private method to handle the response from the server.
  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  // Private method to make an API request and handle the server response.
  _request(url, options) {
    return fetch(url, options).then(this._handleServerResponse);
  }

  // Public method to fetch initial card information from the server.
  getInitialCards() {
    const cardInfo = this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
    return cardInfo;
  }

  // Public method to fetch user information from the server.
  getUserInfo() {
    const userInfo = this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
    return userInfo;
  }

  // Public method to update user information on the server.
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

  // Public method to add a new card on the server.
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

  // Public method to remove a card from the server.
  removeCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  // Public method to change the like status of a card on the server.
  changeLikeStatus(cardId, isLiked) {
    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    });
  }

  // Public method to update the user's avatar on the server.
  setUserAvatar(url) {
    console.log("url:" + url); // Log the provided URL for debugging.
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    });
  }
}
