const express =require('express');
const app = express();
const port = 1400
var path = require('path')

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) =>{
    res.sendFile('/Users/jasmynejeanremy/Desktop/jasmynejr.com/client/views/index.html')
})

app.listen(port, () => {
    console.log(`jasmynejr.com listening at http://localhost:${port}`)
  })