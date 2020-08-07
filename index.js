const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connect mongoose"))
  .catch((err) => console.log("Error ", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);
async function createCourse() {
  const course = new Course({
    name: "Swift",
    author: "Angela",
    tags: ["swift", "ios"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

createCourse();
