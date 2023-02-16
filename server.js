const express = require('express')
const path = require('path')
const port = 3001
const {mergePdfs} = require('./merge.js')
const multer = require('multer')
const upload = multer({dest:'uploads/'})
const app = express()
app.use('/static',express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})
app.post('/merge', upload.array('pdfs', 2),async (req,res,next) =>{
  console.log(req.files)
   let d= await mergePdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
   res.redirect(`http://localhost:3001/static/${d}.pdf`)
  
  
 // res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})