const express = require('express');
const router =  express.Router();

let projects= [
   { id: 1, name: 'Project One', description: 'This is the first project' },
   { id: 2, name: 'Project Two', description: 'This is the second project' },
   { id: 3, name: 'Project Three', description: 'This is the Third project' },
   { id: 4, name: 'Project Four', description: 'This is the Fourth project' },
   { id: 5, name: 'Project Five', description: 'This is the Fiveth project' },
   { id: 6, name: 'Project Six', description: 'This is the Sixth project' },
   { id: 7, name: 'Project Seven', description: 'This is the Seventh project' },
   { id: 8, name: 'Project Eight', description: 'This is the Eight project' },
];

router.get('/',(req,res)=>{
     res.json(projects);
});

router.get('/:id',(req,res)=>{
      const projectId = parseInt(req.params.id);
    const project = projects.find(p =>p.id === projectId);

    if(project){
         res.json(project);
    }else{
        res.status(404).json({error:'project not found'});
    }
});

router.post('/',(req,res) =>{
     const newProject ={
        id:projects.length+1,
        name:req.body.name,
        description:req.body.description,
     };

projects.push(newProject);
res.status(201).json(newProject);
});


router.put('/:id', (req, res) => {
     const projectId = parseInt(req.params.id);
     const project = projects.find(p => p.id === projectId);
     
     if (project) {
       project.name = req.body.name;
       project.description = req.body.description;
       res.json(project);
     } else {
       res.status(404).json({ error: 'Project not found' });
     }
   });

 router.delete('/:id',(req,res) =>{
     const projectid = parseInt(req.params.id);
     const projectIndex = projects.findIndex(p =>p.id === projectid);

     if(projectIndex !== -1){
           projects.splice(projectIndex,1);
           res.status(204).send();

     }else{
           res.status(404).json({error:'project not found'});     }
 })

 module.exports= router;



