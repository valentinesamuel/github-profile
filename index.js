const btn = document.getElementById("btn");
const search = document.getElementById("search");
const form = document.getElementById("form");

//For the second part
const username = document.getElementById('username');
const bio = document.getElementById('bio');

async function getUser(user) {
  //body
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();
  // console.log(data);



  userCard.innerHTML = `<img src="${data.avatar_url}" id="svgee">
<h3 id="user-name">${data.name}</h3>
<ul>
  <li>${data.following} following</li>
  <li>${data.followers} followers</li>
  <li>${data.location}</li>
</ul>
<p id="bio">${data.bio}. </p>
<div class="line"></div>
<div id="repos">

</div>
`

}

async function getRepos(user) {
  const repoResponse = await fetch(`https://api.github.com/users/${user}/repos`);
  const repoData = await repoResponse.json();
  const repos = document.getElementById("repos");
  repoData.slice(0, 6).forEach(e => {
    const repoName = document.createElement("p")
    const repositoryName = document.createTextNode(e.name)
    repoName.appendChild(repositoryName);
    repos.appendChild(repoName)
  });
}

// Style the repos by adding display flex and other stuff and add other attributes like href and other styling

btn.addEventListener('click', (e) => {
  const mdata = search.value;
  getUser(mdata);
  getRepos(mdata);
  form.style.display = 'none';
});