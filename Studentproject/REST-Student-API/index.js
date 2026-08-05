const express = require("express");

const app = express();

const students = [
    {
        regNo: "BIT001",
        name: "Lorene",
        gender: "Female",
        course: "Information Technology",
        duration: "4 years"
    },
    {
        regNo: "BIT002",
        name: "John",
        gender: "Male",
        course: "Computer Science",
        duration: "4 years"
    }
];


app.get("/student/:regNo", (req, res) => {

    let regNo = req.params.regNo;

    let student = students.find(
        s => s.regNo === regNo
    );


    if(student){
        res.json(student);
    }
    else{
        res.json({
            message: "The student does not exist."
        });
    }

});


app.listen(3000, () => {
    console.log("REST Server running on port 3000");
});