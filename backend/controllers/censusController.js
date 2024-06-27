import CensusModel from '../models/CensusModel.js';

const storeCensusData = async (req, res) => {
  try {
    const { headMember, familyMembers, children } = req.body;

    if (!headMember || !familyMembers || !children) {
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }
    if (!headMember.firstName || !headMember.lastName || !headMember.age || !headMember.gender || !headMember.occupation || !headMember.education || !headMember.religion || !headMember.caste) {
      return res.status(400).json({ success: false, message: 'Head member data is incomplete.' });
    }
    if (!familyMembers.every(member => member.firstName && member.lastName && member.age && member.gender && member.occupation && member.education && member.religion && member.caste)) {
      return res.status(400).json({ success: false, message: 'Family member data is incomplete.' });
    }
    if (!children.every(child => child.firstName && child.lastName && child.age && child.gender && child.education)) {
      return res.status(400).json({ success: false, message: 'Children data is incomplete.' });
    }

    const censusData = new CensusModel({
      headMember,
      familyMembers,
      children
    });

    await censusData.save();

    res.status(201).json({ success: true, message: 'Census data saved successfully.' });
  } catch (error) {
    console.error('Error saving census data:', error);
    res.status(500).json({ success: false, message: 'Failed to save census data.' });
  }
};

const getTotalPersonsCount = async (req, res) => {
    try {
      const censusData = await CensusModel.find();
      let totalCount = 0;
      let maleCount = 0;
      let femaleCount = 0;
      let otherGenderCount = 0;
      let totalAge = 0;
      let minAge = Infinity;
      let maxAge = -Infinity;
      let religionDistribution = {};
      let casteDistribution = {};
  
      censusData.forEach(data => {
        const familyMembers = data.familyMembers || [];
        const children = data.children || [];
  
        totalCount += 1 + familyMembers.length + children.length;
        [...familyMembers, ...children].forEach(member => {
          if (member.gender === 'Male') {
            maleCount++;
          } else if (member.gender === 'Female') {
            femaleCount++;
          } else {
            otherGenderCount++;
          }
          totalAge += member.age;
          minAge = Math.min(minAge, member.age);
          maxAge = Math.max(maxAge, member.age);
          religionDistribution[member.religion] = (religionDistribution[member.religion] || 0) + 1;
          casteDistribution[member.caste] = (casteDistribution[member.caste] || 0) + 1;
        });
      });
 
      const totalMembers = maleCount + femaleCount + otherGenderCount;
      const averageAge = totalAge / totalMembers || 0;
 
      const sexRatio = femaleCount > 0 ? maleCount / femaleCount : 0;
  
      res.status(200).json({
        success: true,
        totalCount,
        maleCount,
        femaleCount,
        otherGenderCount,
        sexRatio,
        averageAge,
        minAge: minAge === Infinity ? 0 : minAge,
        maxAge: maxAge === -Infinity ? 0 : maxAge,
        religionDistribution,
        casteDistribution
      });
    } catch (error) {
      console.error('Error retrieving total count:', error);
      res.status(500).json({ success: false, message: 'Failed to retrieve total count.' });
    }
  };
  const getAllCensusData = async (req, res) => {
    try {
      const censusData = await CensusModel.find();
      res.status(200).json({ success: true, data: censusData });
    } catch (error) {
      console.error('Error retrieving all census data:', error);
      res.status(500).json({ success: false, message: 'Failed to retrieve all census data.' });
    }
  };
  
  
  export { storeCensusData, getTotalPersonsCount, getAllCensusData };