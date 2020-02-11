var inquirer = require("inquirer");
var fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide description of your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Please provide Table of Contents:",
            name: "table"
        },
        {
            type: "input",
            message: "Please provide Installation Steps:",
            name: "installation"
        },
        {
            type: "input",
            message: "Please provide information on Usage:",
            name: "usage"
        },
        {
            type: "input",
            message: "Please provide information on Licensing",
            name: "licensing"
        },
        {
            type: "input",
            message: "Please provide information on Contributing:",
            name: "contributing"
        },
        {
            type: "input",
            message: "Please provide information on Tests:",
            name: "tests"
        },
        {
            type: "input",
            message: "Please provide information on Questions:",
            name: "questions"
        },
        {
            type: "input",
            message: "Please provide url to GitHub Profile Picture",
            name: "picture"
        },
        {
            type: "input",
            message: "Please provide GitHub email:",
            name: "email"
        }

    ])
    .then(function (response) {

        fs.writeFile("pre-readme.md", JSON.stringify(response), function (err) {
            console.log(response.title + " " + response.description + " " + response.table)

        });
    });
