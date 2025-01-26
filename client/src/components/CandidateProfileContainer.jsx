import React, { useState, useEffect } from 'react';
import CandidateProfile from '../pages/CandidateProfile';
import { CircularProgress, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ErrorContainer = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
}));

const RetryButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#FF7C00',
  '&:hover': {
    backgroundColor: '#E66D00',
  },
}));

const CandidateProfileContainer = () => {
  const [candidateData, setCandidateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCandidateData = async () => {
    try {
      setLoading(true);
      setError(null);
      const email = localStorage.getItem('emailId');
      if (!email) {
        throw new Error('User email not found in localStorage');
      }

      const response = await fetch(`http://localhost/kavaavi/api/fetch_candidate_info.php?email=jon.oe@example.com`, {
        credentials: 'include',
      });
      console.log("API URL:", response);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('To view your profile please create your profile first.');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.status === 'success') {
        setCandidateData(result.data);
      } else {
        throw new Error(result.message || 'Unknown error occurred');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidateData();
  }, []);

  if (loading) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress style={{ color: '#FF7C00' }} />
      </Container>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <Typography variant="h5" color="error" gutterBottom>
          Error: {error}
        </Typography>
        <Typography variant="body1" gutterBottom>
          There was a problem fetching your profile data. This could be due to a server issue or misconfiguration.
        </Typography>
        <RetryButton variant="contained" color="primary" onClick={fetchCandidateData}>
          Retry
        </RetryButton>
      </ErrorContainer>
    );
  }

  if (!candidateData) {
    return (
      <ErrorContainer>
        <Typography variant="h5" gutterBottom>
          No candidate data found
        </Typography>
        <Typography variant="body1">
          Please ensure you have completed your profile or contact support for assistance.
        </Typography>
      </ErrorContainer>
    );
  }

  return <CandidateProfile candidateData={candidateData} />;
};

export default CandidateProfileContainer;

