import user from "../models/user.js"
export const saveUserService = async (data) => {
    try {
        const userCreated = await user.create(data);
        return userCreated;
    } catch (error) {
        console.log(error)
        return error;
    }
}


export const getAllUsersService = async () => {
    try {
        const users = await user.find();
        return users;
    } catch (error) {
        console.log(error)
        return error;
    }
}


export const userDetailsService = async (id) => {
    try {
        const userDetails = await user.findById(id);
        return userDetails;
    } catch (error) {
        console.log(error)
        return error;
    }
}