class UserInfo {
  constructor(nameElement, jobElement) {
    this._nameElement = nameElement; // The DOM element where the user's name will be displayed
    this._jobElement = jobElement; // The DOM element where the user's job description will be displayed
  }

  // Retrieves the user info from the DOM elements and returns it as an object
  getUserInfo() {
    const userObject = {};
    userObject.profileName = this._nameElement.textContent;
    userObject.description = this._jobElement.textContent;
    return userObject;
  }

  // Sets the user info in the DOM elements
  setUserInfo(nameInfo, jobInfo) {
    this._nameElement.textContent = nameInfo; // Sets the user's name in the name element
    this._jobElement.textContent = jobInfo; // Sets the user's job description in the job element
  }
}

export default UserInfo;
