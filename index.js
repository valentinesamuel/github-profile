const btn = document.getElementById("btn");
const search = document.getElementById("search");
const form = document.getElementById("form");

//For the second part
const username = document.getElementById('username');
const bio = document.getElementById('bio');
const userCard = document.getElementById('userCard');

const repos = ['manny', 'elective', 'arduino', 'shekpe', 'mudiaga', 'blessing', 'activist'];

async function getUser(user) {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();
  console.log(data);
}

function createRepoCard() {
  const repoSection = document.createElement('div');
  repoSection.classList.add('repo-section')
console.log(repoSection);
  // setTimeout(()=>{

  //   repos.forEach((repo) => {
  //     const singleRepo = document.createElement('a');
  //     const singleRepoName = document.createElement('p');
  //     singleRepo.appendChild(singleRepoName);
  //     // singleRepo.classList.add('a')
  //     singleRepoName.innerHTML = repo
  //     // singleRepo.classList.add('link')
  //     // console.log(singleRepo);
  //    userCard.appendChild(singleRepoName)
  //    repoSection.innerHTML=singleRepoName
  //   })

  // },2000);
  
}

function createUserCard() {
  userCard.innerHTML = `<svg id="svgee"
          viewBox="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
           <defs>
            <pattern
              id="img"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <image
                xlink:href="./images/profile.jpg"
                x="-25"
                width="150"
                height="100"
              />
            </pattern>
          </defs>
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />
        </svg>
<h3 id="user-name">Emmanuel Ekpeyong</h3>
<ul>
  <li>344 following</li>
  <li>2358 followers</li>
  <li>Stugartt, Germany</li>
</ul>
<p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aperiam ipsam? Unde aliquid optio corporis natus debitis sunt! Error unde reprehenderit ipsum fugit perspiciatis soluta dolorem eveniet quo ducimus dolorum. Error unde reprehenderit ipsum fugit perspiciatis soluta dolorem eveniet quo ducimus dolorum. </p>
<div class="line"></div>
`
}

btn.addEventListener('click', (e) => {
  // const mdata = search.value;
  // getUser(mdata);
  form.style.display = 'none';
  createUserCard();
  createRepoCard();
});