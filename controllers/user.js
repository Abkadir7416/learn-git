import { saveUserService, getAllUsersService } from "../services/user.js";

export const saveUser = async(req, res) => {
    try {
        const userData = req.body;
        const savedUser = await saveUserService(userData);
        res.status(201).json({
            success: true,
            data: savedUser
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getAllUsers = async(req, res) => {
    try {
        const getAllUsers = await getAllUsersService();
        res.status(201).json({
            success: true,
            data:getAllUsers
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}
