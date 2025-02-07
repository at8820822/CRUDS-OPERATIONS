const express = require('express');
const router = express.Router();
const {handleGetAllUsers, handleGetUserById, handleUpdateUserById , handleDeleteUserById , handleCreateUser} = require('../controllers/user');

router.get('/users', async(req, res) => {
    const users = await User.find({});
    const html = `
    <ul>
    ${users.map((user )=> `<li>${user.first_name} ${user.last_name} ${user.email} </li>`).join('')}
    <ul>
    `
    res.send(html);
});
//app routes
router.route('/', ).get(handleGetAllUsers).post(handleCreateUser) //get all users

router. route('/:id')
.get(handleGetUserById)//get user by id
.patch(handleUpdateUserById) //update user by id
.delete(handleDeleteUserById); //delete user by id



module.exports = router;
