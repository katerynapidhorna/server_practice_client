const express = require('express');

const axios = require('axios');

const app = express();

const port = 3000;



//page render
function render(content) {
  console.log('render should be on the page')
  return `<html>
  <head><title>User dashboard</title></head>
  <body>
  <h1>User Dashboard</h1>
  ${content}

  </body>
  </html>`
} 

//get host:4000
async function getUsers(reuqest,response) {
  //because server uses app.get
  const usersD = await axios.get('http://localhost:4000/user-info/')
}

// async function getUsers(reuqest, response) {
//   try{
//       const users = await axios.get('http://localhost:4000/user-info/');
//       const allUsers = users.data.map((user)=>{
//       return `<p><a href='http://localhost:4000/user-info/${user.name}/'>${user.name}</a></p>`
//     })
//     const joined = allUsers.join(' ')
//     const webpage = render(joined);
//     response.send(webpage)
//   } catch(error) {
//     console.log(error.message)
//   }
// }


app.get('/all-users', getUsers)

app.listen(port, ()=>{
  console.log(`up and running on ${port}`)
})