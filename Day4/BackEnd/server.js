/* 
server ko start karna aur database se connect karna
*/
import dotenv from "dotenv";
dotenv.config({quiet: true});
import app from "./src/app.js";
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
