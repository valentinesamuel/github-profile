const btn = document.getElementById("btn");
const search = document.getElementById("search");
const p = document.getElementById('demo');


async function getUser(user) {
      p.innerHTML = 'Loading'
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      console.log(data);

      if (data != "") {
            p.innerHTML = 'Not loading';
      }
}


btn.addEventListener('click', (e) => {
      const mdata = search.value;
      getUser(mdata);
})