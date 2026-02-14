require("module-alias/register");
const cors = require("cors");

require("dotenv").config();


const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();



app.use(cors({
  origin: "loclhost:3200",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.listen(process.env.PORT, () => {

  console.log(`Server is running at port ${process.env.PORT} `);

});
