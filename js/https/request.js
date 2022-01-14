/*



*/

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5500/',
    timeout: 1000,
    method:"get",
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
});
instance.get('/php/created.php').then(res=>{

    console.log(res)
    console.log(res.data)


  }).catch(err=>{
    console.log(err)
  })