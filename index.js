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
        // {
        //     type: "input",
        //     message: "Please provide Installation Steps:",
        //     name: "installation"
        // },
        // {
        //     type: "input",
        //     message: "Please provide information on Usage:",
        //     name: "usage"
        // },
        // {
        //     type: "input",
        //     message: "Please provide information on Licensing",
        //     name: "licensing"
        // },
        // {
        //     type: "input",
        //     message: "Please provide information on Contributing:",
        //     name: "contributing"
        // },
        // {
        //     type: "input",
        //     message: "Please provide information on Tests:",
        //     name: "tests"
        // },
        // {
        //     type: "input",
        //     message: "Please provide information on Questions:",
        //     name: "questions"
        // },
        // {
        //     type: "input",
        //     message: "Please provide url to GitHub Profile Picture",
        //     name: "picture"
        // },
        // {
        //     type: "input",
        //     message: "Please provide GitHub email:",
        //     name: "email"
        // }

    ])
    .then(function (response) {

        //create a pre-readme file containing the stringified object with all inputed info.
        fs.writeFile("pre-readme.md", JSON.stringify(response), function (err) {
            // console.log(response.title + " " + response.description + " " + response.table)

        });
        //read the created file and create local object out of it , so then we can access values to
        //make a file that is nice a neat.
        var text = Object.create(null);
        fs.readFile("pre-readme.md", "utf-8", function (error, data) {
            text = JSON.parse(data);


            //Title 
            fs.writeFile("final-readme.md", "# " + text.title + "\n" + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });

            //Description 
            fs.appendFile("final-readme.md", "## Description" + "\n" + text.description + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                // console.log("The file was saved!");
            });

        });


        console.log(text.title); //works
        console.log(text.description);
        console.log(text.table);



    });

