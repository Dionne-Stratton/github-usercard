/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// import axios from 'axios'; threw me errors so I didn't do it this way.

const mainCard = document.querySelector(".cards");
const getPromise = axios.get("https://api.github.com/users/Dionne-Stratton");

getPromise
  .then((response) => {
    console.log(response.data);
    const myData = createCard(response.data);
    mainCard.appendChild(myData)
  })
  .catch(error => {
    console.log("Error", error)
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
     tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followersArray = [
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell",
  "https://api.github.com/users/justml",
];

followersArray.map((element) => {
  axios
    .get(element)
    .then((res) => {
      const followersData = createCard;
      mainCard.appendChild(followersData(res.data));
    })
    .catch((error) => {
      console.log("Error", error)
    });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(info) {

  //CREATE ELEMENTS
  const card = document.createElement('div'),
    userImg = document.createElement('img'),
    cardInfo = document.createElement('div'),
    name = document.createElement('h3'),
    username = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    link = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p')

  //CREATE STRUCTURE
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  //set class NAMES
  card.classList.add("card");
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  //add CONTENT
  userImg.src = info.avatar_url;
  name.textContent = `Name: ${info.name}`;
  username.textContent = `Username: ${info.login}`;
  location.textContent = `Location: ${info.location}`;
  profile.textContent = `Profile:`;
  link.textContent = `Github Link`;
  link.setAttribute("href", info.html_url);
  followers.textContent = `Followers: ${info.followers}`;
  following.textContent = `Following: ${info.following}`;
  bio.textContent = `Bio: ${info.bio}`;

  console.log("card", card);

  return card;
}

