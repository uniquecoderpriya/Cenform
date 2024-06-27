import mongoose from 'mongoose';

const censusSchema = new mongoose.Schema({
  headMember: {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    gender: { type: String },
    occupation: { type: String },
    education: { type: String },
    religion: { type: String },
    caste: { type: String }
  },
  familyMembers: [{
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    gender: { type: String },
    occupation: { type: String },
    education: { type: String },
    religion: { type: String },
    caste: { type: String }
  }], 
  children: [{
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    gender: { type: String },
    education: { type: String }
  }] 
});

const CensusModel = mongoose.model('Census', censusSchema);

export default CensusModel;

