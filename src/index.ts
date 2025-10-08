import express,{Express} from "express";
import serverConfig from "./config/serverConfig";
const app:Express=express();//if we dont mention also express() function returns the type
app.listen(serverConfig.PORT,()=>{
    console.log(`Server started at PORT :${serverConfig.PORT}`);
    console.log("wow");
});