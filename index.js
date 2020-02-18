var inquirer = require("inquirer");
var fs = require("fs");
const axios = require("axios");


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
            message: "Table of Contents (use ',' to separate each topic and end with '.'):",
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
        }


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
                // console.log("The file was saved!");
            });

            //Description 
            fs.appendFile("final-readme.md", "## Description" + "\n" + "\n" + text.description + "\n" + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                // console.log("The file was saved!");
            });
            //************************************************************************************************************************** */
            //Table of Contents
            fs.appendFile("final-readme.md", "## Table Of Contents" + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                // console.log("The file was saved!");
            });

            var word = "";
            var array = [];
            var preFormattedString = text.table;



            for (i = 0; i < preFormattedString.length; i++) {
                if (preFormattedString[i] == ",") {
                    array.push(word);
                    word = "";
                }
                else if (preFormattedString[i] == ".") {
                    array.push(word);
                    word = "";
                }
                else {
                    word = word + preFormattedString[i];
                }
            }

            // console.log(array)


            var wordConcat1 = "";
            for (j = 0; j < array.length; j++) {
                wordConcat1 = "-[" + array[j] + "]" + "(#" + array[j] + ")";
                // console.log(wordConcat1);
                fs.appendFile("final-readme.md", wordConcat1 + "\n" + "\n", function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    // console.log("The file was saved!");
                });

            }
            //************************************************************************************************************************** */
            //Installation
            fs.appendFile("final-readme.md", "## Installation" + "\n" + "\n" + text.installation + "\n" + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                // console.log("The file was saved!");
            });

            fs.appendFile("final-readme.md", "## Usage" + "\n" + "\n" + text.usage + "\n" + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                // console.log("The file was saved!");
            });

            fs.appendFile("final-readme.md", "## Licensing" + "\n" + "\n" + text.licensing + "\n" + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                // console.log("The file was saved!");
            });
            fs.appendFile("final-readme.md", "## Contributing" + "\n" + "\n" + text.contributing + "\n" + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                // console.log("The file was saved!");
            });

            fs.appendFile("final-readme.md", "## Tests" + "\n" + "\n" + text.tests + "\n" + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                // console.log("The file was saved!");
            });
            fs.appendFile("final-readme.md", "## Questions" + "\n" + "\n" + text.questions + "\n" + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
                // console.log("The file was saved!");
            });



            inquirer
                .prompt({
                    message: "Enter your GitHub username",
                    name: "username"
                })
                .then(function ({ username }) {
                    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

                    axios
                        .get(queryUrl)
                        .then(function (res) {
                            // console.log(res.data); //prints the whole response which is an array of objects

                            // var theAvatarLink = res.data[1]owner.avatar_url //answer to get avatar***
                            const { avatar_url } = res.data[1].owner;
                            fs.appendFile("final-readme.md", "## GitHub Avatar" + "\n" + "\n" + "![Image description](" + avatar_url + ")" + "\n" + "\n", function (err) {
                                if (err) {
                                    return console.log(err);
                                }
                                console.log("Your Readme was saved as final-readme.md!");
                            });

                        })
                });


        });






    });

