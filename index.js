const btn = document.getElementById("btn");
const search = document.getElementById("search");



//For the second part
const username = document.getElementById('username');
const bio = document.getElementById('bio');


async function getUser(user) {
      // p.innerHTML = 'Loading'
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      console.log(data);

      if (data != "") {
            

      }
}


btn.addEventListener('click', (e) => {
      const mdata = search.value;
      getUser(mdata);



});