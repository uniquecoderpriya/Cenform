import React, { useState } from 'react';
import axios from 'axios';
import './Details.css';

const CensusForm = () => {
  const [headMember, setHeadMember] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    occupation: '',
    education: '',
    religion: '',
    caste: ''
  });

  const [familyMembers, setFamilyMembers] = useState([]);
  const [children, setChildren] = useState([]);

  const handleHeadMemberChange = (e) => {
    const { name, value } = e.target;
    setHeadMember({ ...headMember, [name]: value });
  };

  const handleFamilyMemberChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index][name] = value;
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleChildChange = (e, index) => {
    const { name, value } = e.target;
    const updatedChildren = [...children];
    updatedChildren[index][name] = value;
    setChildren(updatedChildren);
  };

  const addFamilyMember = () => {
    setFamilyMembers([...familyMembers, { firstName: '', lastName: '', age: '', gender: '', occupation: '', education: '', religion: '', caste: '' }]);
  };

  const addChild = () => {
    setChildren([...children, { firstName: '', lastName: '', age: '', gender: '', education: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      headMember,
      familyMembers,
      children
    };

    try {
      const response = await axios.post('http://localhost:8080/api/census', formData);

      console.log('Census data submitted successfully',response);
    } catch (error) {
      console.error('Error submitting census data:', error.message);
    }
  };

  return (
    <div className="outer-box">
      <div className="inner-box">
        <h1>Indian Census Counting Form</h1>
        <form onSubmit={handleSubmit}>
          <h2>Head of the Family</h2>
          <div className="member-box">
            <input type="text" name="firstName" value={headMember.firstName} onChange={handleHeadMemberChange} placeholder="First Name" />
            <input type="text" name="lastName" value={headMember.lastName} onChange={handleHeadMemberChange} placeholder="Last Name" />
            <input type="number" name="age" value={headMember.age} onChange={handleHeadMemberChange} placeholder="Age" />
            <select name="gender" value={headMember.gender} onChange={handleHeadMemberChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" name="occupation" value={headMember.occupation} onChange={handleHeadMemberChange} placeholder="Occupation" />
            <input type="text" name="education" value={headMember.education} onChange={handleHeadMemberChange} placeholder="Education" />
            <input type="text" name="religion" value={headMember.religion} onChange={handleHeadMemberChange} placeholder="Religion" />
            <input type="text" name="caste" value={headMember.caste} onChange={handleHeadMemberChange} placeholder="Caste" />
          </div>

          <h2>Family Members</h2>
          {familyMembers.map((member, index) => (
            <div key={index} className="member-box">
              <input type="text" name="firstName" value={member.firstName} onChange={(e) => handleFamilyMemberChange(e, index)} placeholder="First Name" />
              <input type="text" name="lastName" value={member.lastName} onChange={(e) => handleFamilyMemberChange(e, index)} placeholder="Last Name" />
              <input type="number" name="age" value={member.age} onChange={(e) => handleFamilyMemberChange(e, index)} placeholder="Age" />
              <select name="gender" value={member.gender} onChange={(e) => handleFamilyMemberChange(e, index)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="text" name="occupation" value={member.occupation} onChange={(e) => handleFamilyMemberChange(e, index)} placeholder="Occupation" />
              <input type="text" name="education" value={member.education} onChange={(e) => handleFamilyMemberChange(e, index)} placeholder="Education" />
              <input type="text" name="religion" value={member.religion} onChange={(e) => handleFamilyMemberChange(e, index)} placeholder="Religion" />
              <input type="text" name="caste" value={member.caste} onChange={(e) => handleFamilyMemberChange(e, index)} placeholder="Caste" />
            </div>
          ))}
          <button type="button" onClick={addFamilyMember}>Add Family Member</button>

          <h2>Children</h2>
          {children.map((child, index) => (
            <div key={index} className="member-box">
              <input type="text" name="firstName" value={child.firstName} onChange={(e) => handleChildChange(e, index)} placeholder="First Name" />
              <input type="text" name="lastName" value={child.lastName} onChange={(e) => handleChildChange(e, index)} placeholder="Last Name" />
              <input type="number" name="age" value={child.age} onChange={(e) => handleChildChange(e, index)} placeholder="Age" />
              <select name="gender" value={child.gender} onChange={(e) => handleChildChange(e, index)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="text" name="education" value={child.education} onChange={(e) => handleChildChange(e, index)} placeholder="Education" />
            </div>
          ))}
          <button type="button" onClick={addChild}>Add Child</button>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CensusForm;
