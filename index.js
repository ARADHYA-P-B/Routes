const express  = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const projectRoutes = require('./routes/project');
app.use('/projects',projectRoutes);

app.get('/',(req,res) =>{
     res.send('welcome to the node.js project')
});

app.listen(port,() =>{
     console.log(`server running on http://localhost:${port}`);
});
