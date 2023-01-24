const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Task must have a title'],
            maxlength: 50
        },
        completed: {
            type: Boolean,
            default: false,
        }
    }
)

module.exports = mongoose.model('Task', taskSchema);