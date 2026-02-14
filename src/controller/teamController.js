
const Team = require("@models/teams.model");


const getTeam = async (req, res) => {


    try {


        if (req.params.id) {
            const team = await Team.findById({ _id: req.params.id });
            res.status(200).json(team);

        } else {
            const teams = await Team.find();
            res.status(200).json(teams);
        }
    } catch (err) {
        next(err);
    }
}


const registerTeam = async (req, res) => {

    try {
        const { name,
            manager,
            members,
            department,
            teamLeadOne,
            teamLeadTwo,
            project,
            location,
            isActive } = req.body;



        await Team.create({
            name,
            manager,
            members,
            department,
            teamLeadOne,
            teamLeadTwo,
            project,
            location,
            isActive

        })

        res.status(200).json({
            message: "Team Created....!"
        })

    } catch (err) {
        next(err);
    }
}




const updateTeam = async (req, res) => {

    try {
        const id = req.params.id;

        await Team.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            message: "User updated ...!"
        })

    } catch (err) {
        next(err);
    }

}


module.exports = { getTeam, registerTeam, updateTeam }