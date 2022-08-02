import {axiosRequestHandler} from "../Helper/ApiHelper";
export async function addUser(payload){
    try{
        console.log("Payload", payload);
        const {error, data} = await axiosRequestHandler("/user/add-user", "POST", payload);
        if(error){
            console.log("Error", error);
        }
        return Promise.resolve(data);
    }catch(e){
        console.error(e);
    }
}

export async function removeUser(payload){
    try{
        console.log("Payload", payload);
        const {error, data} = await axiosRequestHandler(`/user/remove-user/${payload}`, "GET");
        if(error){
            console.log("Error", error);
        }
        return Promise.resolve(data);
    }catch(err){
        console.error(err);
    }
}

export async function getList(){
    try{
        const {error, data} = await axiosRequestHandler("/user/list", "GET");
        if(error){
            console.log("Error", error);
        }
        return Promise.resolve(data);
    }catch(err){
        console.error(err);
    }
}