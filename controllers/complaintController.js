const Complaint=require("../models/complaint")

exports.createComplaint = async (req, res) => {
    try {
        const { title, description, category } = req.body

        const complaint = await Complaint.create({
            title,
            description,
            category,
            user: req.user
        })

        return res.status(200).json({
            message: "complaint created successfully",
            complaint
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message
        })

    }
}
exports.getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};