
// promisify
const connectDB = new Promise((resolve, reject) => {
  setTimeout(()=> {
     resolve('conectado a la Base de datos');
  }, 2000);
})

// ¿Cómo trabajar con promesas?

// then
connectDB
  .then(msg => console.log(msg))
  .catch(err => console.log(err))

// async / await
async function connect() {
  const msg = await connectDB;
  console.log(msg);
  return msg;
}
console.log(connect());