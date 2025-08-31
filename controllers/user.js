const saveUser = async(req, res) => {
    try {
        const userData = req.body;

        const savedUser = await saveUserService(userData);
        res.status(201).json({
            savedUser
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getAllUsers = async(req, res) => {
    try {
        const getAllUsers = await getAllUsersService();
        res.status(201).json({
            getAllUsers
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default {saveUser, getAllUsers};