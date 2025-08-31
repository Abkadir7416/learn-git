import { saveUserService, getAllUsersService, userDetailsService, userUpdateService } from "../services/user.js";

export const saveUser = async (req, res) => {
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

export const getAllUsers = async (req, res) => {
    try {
        const getAllUsers = await getAllUsersService();
        res.status(201).json({
            success: true,
            data: getAllUsers
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const userDetails = async (req, res) => {

    try {
        const { id } = req.params;
        const getUserDetails = await userDetailsService(id);
        res.status(201).json({
            success: true,
            data: getUserDetails
        });
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const updateUser = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params
        const getUserDetails = await userUpdateService(id, data);
        res.status(201).json({
            success: true,
            data: getUserDetails
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}