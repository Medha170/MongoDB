const userModel = require('../Models/user');

exports.CreateUser = async (req, res) => {
    const body = req.body;

    const user = userModel.create({
        username: body.username,
        email: body.email,
        password: body.password,
    })

    return res.status(201).json({ message: "User Created" });
};

exports.getAllUsers = async (req, res) => {
    const allUsers = await userModel.find({});
    return res.status(200).json(allUsers);
}

exports.getById = async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findById(id);
    return res.status(200).json(user);
}

exports.updateUser = async (req, res) => {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updatedUser);
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(id);
    return res.json(deletedUser);
}