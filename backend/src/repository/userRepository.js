import crudRepository from "./crudRepository.js";
import User from "../schema/userSchema.js";

const userRepository = {
    ...crudRepository(User),

    getByEmail: async function (email) {
        const response = await User.findOne({ email: email }); 
        return response;
    },

    getByName: async function (name) {
        const response = await User.findOne({ username: name }); 
        return response;
    }
}; 

export default userRepository;
