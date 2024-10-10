import { db } from "../index.js";

const candidatePersonalInfo = async (req, res) => {
  try {
    const {
      address,
      alternateNumber,
      city,
      country,
      dateOfBirth,
      district,
      emailId,
      fatherName,
      firstName,
      gender,
      landmark,
      lastName,
      motherName,
      phoneNumber,
      state,
      zipCode
    } = req.body;

    // Validate required fields
    if (!address || !city || !country || !dateOfBirth || !emailId || !firstName || !gender || !lastName || !phoneNumber || !state || !zipCode) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Prepare the SQL query
    const insertQuery = 'INSERT INTO personal_information (address, alternate_number, city, country, date_of_birth, district, email_id, father_name, first_name, gender, landmark, last_name, mother_name, mobile_number, state, pincode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // Execute the SQL query
    db.query(
      insertQuery,
      [
        address,
        alternateNumber || null, // Set to null if alternateNumber is not provided
        city,
        country,
        dateOfBirth,
        district || null, // Set to null if district is not provided
        emailId,
        fatherName || null, // Set to null if fatherName is not provided
        firstName,
        gender,
        landmark || null, // Set to null if landmark is not provided
        lastName,
        motherName || null, // Set to null if motherName is not provided
        phoneNumber,
        state,
        zipCode
      ],
      (err, result) => {
        if (err) {
          console.error('Error executing query:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }

        res.status(200).json({ message: 'Personal information inserted successfully' });
      }
    );
  } catch (error) {
    console.error('Error inserting personal information:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

};


export {candidatePersonalInfo}