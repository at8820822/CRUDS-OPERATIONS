const User = require('../models/user');

async function handleGetAllUsers(req ,res){

    const allDBUsers = await User.find({});
    return res.json(allDBUsers);


} 

async function handleGetUserById(req, res){
    const user= await User.findById(req.params.id)
/*     const id = Number(req.params.id);
    const user = users.find((user) => user.id === id); */
       if(!user) 
           return res.status(404).json({status: 'User not found'});
       
    return res.json(user);
    
}

async function handleUpdateUserById(req, res){

    await User.findByIdAndUpdate(req.params.id,{last_name: "Doe"});
    return res.json({status: 'User updated successfully'});

}

async function handleDeleteUserById(req, res){

    await User.findByIdAndDelete(req.params.id); 
    return res.json({status: 'User deleted successfully'});

}


async function handleCreateUser(req, res){
    const body = req.body;
    if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({status: 'User not created'});
    }
    /* users.push({...body ,id: users.length + 1});
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err, data) => {
    return res.status(201).json({status: 'User updated successfully'});
    });
     */
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender,

    });
    console.log(result);
    return res.status(201).json({status: 'User created successfully'});

}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser,
}