const Project = require("@models/project.model");



const getProjects = async (req, res) => {


    try {


        if (req.params.id) {
            const team = await Project.findById({ _id: req.params.id });
            res.status(200).json(team);

        } else {
            const teams = await Project.find();
            res.status(200).json(teams);
        }
    } catch (err) {
      next(err);
    }
}



const createProject = async (req, res) => {
    try {

        const { name,
            description,
            department,
            team,
            projectManager,
            clientName,
            startDate,
            endDate,
            status,
            priority,
            isActive
        } = req.body;


        await Project.create({
            name,
            description,
            department,
            team,
            projectManager,
            clientName,
            startDate,
            endDate,
            status,
            priority,
            isActive

        })

        res.status(201).json({
            message: "Project Created...!"
        })

    } catch (err) {
      next(err);
    }
}




const updateProject = async (req, res) => {

    try {
        const id = req.params.id;

        await Project.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            message: "Project Info updated ...!"
        })

    } catch (err) {
      next(err);
    }

}

module.exports = { getProjects, createProject, updateProject }

