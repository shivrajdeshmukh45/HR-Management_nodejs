// const Employee = require("../models/employee.model")



// const getEmployee = async (req, res, next) => {

//     try {
//         if (req.params.id) {
//             const employee = await Employee.findById({ _id: req.params.id })
//             res.status(200).json({
//                 message: "Employee fetched ...!",
//                 data: employee

//             })
//         } else {

//             const employee = await Employee.find();

//             res.status(200).json({
//                 message: "Employees fetched ...!",
//                 data: employee

//             })

//         }
//     } catch (err) {
//         next(err)
//     }
// }




// const createEmployee = async (req, res) => {

//     const { userId,
//         employeeCode,
        // department,
        // designation,
        // joiningDate,
        // salary,
        // managerId
//     } = req.body

//     await Employee.create({
//         userId,
//         department,
//         designation,
//         joiningDate,
//         salary,
//         managerId
//     })


//     res.status(201).json({
//         message: "Employee registered successfully"
//     });


// }



// const updateEmployee = async (req, res, next) => {

//     try {
//         const id = req.params.id;

//         await Employee.findByIdAndUpdate(id, req.body);

//         res.status(200).json({
//             message: "Employee updated ...!"
//         })

//     } catch (err) {
//         next(err);
//     }

// }



// const deleteEmployee = async (req, res, next) => {

//     try {

//         const id = req.params.id;

//         await Employee.deleteById({ _id: id })

//         res.status(200).json({
//             message: "Employee deleted successfully ...!"

//         });

//     } catch (err) {

//     }
// }


// module.exports = { getEmployee, createEmployee, updateEmployee, deleteEmployee }