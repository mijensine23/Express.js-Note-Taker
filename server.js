//requires the file system module 
const fs = require('fs');
//imports the express module to create allow express application use. 
const express = require ('express');
//imports the file path module 
const path = require ('path');
//allows heroku hosting machine while still being able to run in developement mode
const PORT = process.env.PORT || 3001;

//defines use of the express module
const app = express();

