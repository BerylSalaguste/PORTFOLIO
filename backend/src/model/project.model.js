import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: String,
  issueDate: Date,
  expirationDate: Date,
  credentialId: String,
  credentialUrl: String,
  description: String,
  fileUrl: String
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  technologies: [String],
  role: String,
  duration: String,
  link: String,
  dateCreated: { type: Date, default: Date.now },
  certificates: [certificateSchema]
});

const Project = mongoose.model('Project', projectSchema);
export default Project;