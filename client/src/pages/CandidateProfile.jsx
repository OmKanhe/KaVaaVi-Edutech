import React from 'react';
import { 
  Box, 
  Container,
  Grid, 
  Typography, 
  Card, 
  CardContent,
  Chip,
  IconButton,
  useTheme,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Email,
  Phone,
  LocationOn,
  School,
  Work,
  EmojiEvents,
  BusinessCenter,
  OpenInNew
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.1),
  background: theme.palette.background.paper,
  backdropFilter: 'blur(20px)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const TimelineCard = styled(StyledCard)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    borderRadius: '4px 0 0 4px',
    backgroundColor: '#ff7d29',
  },
}));

const ContactChip = styled(Chip)(({ theme }) => ({
  borderRadius: 8,
  height: 36,
  padding: theme.spacing(0.5),
  '& .MuiChip-icon': {
    color: '#ff7d29',
  },
}));

const CandidateProfile = ({ candidateData }) => {
  const theme = useTheme();

  const renderContactInfo = () => (
    <Box display="flex" gap={1} flexWrap="wrap">
      <ContactChip
        icon={<Email />}
        label={candidateData.email}
        onClick={() => window.location.href = `mailto:${candidateData.email}`}
      />
      <ContactChip
        icon={<Phone />}
        label={candidateData.phoneNumber}
        onClick={() => window.location.href = `tel:${candidateData.phoneNumber}`}
      />
      <ContactChip
        icon={<LocationOn />}
        label={`${candidateData.city}, ${candidateData.country}`}
      />
    </Box>
  );

  const renderEducationTimeline = () => (
    <Box display="flex" flexDirection="column" gap={2}>
      {/* Graduation */}
      {candidateData.graduation?.[0] && (
        <TimelineCard>
          <CardContent>
            <Typography variant="h6" sx={{ color: '#ff7d29' }} gutterBottom>
              {candidateData.graduation[0].courseName}
            </Typography>
            <Typography variant="subtitle1" fontWeight="medium">
              {candidateData.graduation[0].universityName}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="text.secondary">
                {candidateData.graduation[0].startingYear} - {candidateData.graduation[0].graduationYear}
              </Typography>
              <Chip 
                label={`CGPA: ${candidateData.graduation[0].cgpa}`}
                size="small"
                sx={{ 
                  borderColor: '#ff7d29',
                  color: '#ff7d29'
                }}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </TimelineCard>
      )}
      {/* College */}
      {candidateData.college?.[0] && (
        <TimelineCard>
          <CardContent>
            <Typography variant="h6" sx={{ color: '#ff7d29' }} gutterBottom>
              {candidateData.college[0].stream}
            </Typography>
            <Typography variant="subtitle1" fontWeight="medium">
              {candidateData.college[0].collegeName}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="text.secondary">
                {candidateData.college[0].startingYear} - {candidateData.college[0].graduationYear}
              </Typography>
              <Chip 
                label={`Percentage: ${candidateData.college[0].percentage}%`}
                size="small"
                sx={{ 
                  borderColor: '#ff7d29',
                  color: '#ff7d29'
                }}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </TimelineCard>
      )}
      {/* School */}
      {candidateData.school?.[0] && (
        <TimelineCard>
          <CardContent>
            <Typography variant="h6" sx={{ color: '#ff7d29' }} gutterBottom>
              {candidateData.school[0].boardName}
            </Typography>
            <Typography variant="subtitle1" fontWeight="medium">
              {candidateData.school[0].schoolName}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="text.secondary">
                High School
              </Typography>
              <Chip 
                label={`Marks: ${candidateData.school[0].schoolMarks}`}
                size="small"
                sx={{ 
                  borderColor: '#ff7d29',
                  color: '#ff7d29'
                }}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </TimelineCard>
      )}
    </Box>
  );

  const renderExperienceTimeline = () => (
    <Box display="flex" flexDirection="column" gap={2}>
      {candidateData.jobs?.map((job, index) => (
        <TimelineCard key={`job-${index}`}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start">
              <Box>
                <Typography variant="h6" sx={{ color: '#ff7d29' }} gutterBottom>
                  {job.position}
                </Typography>
                <Typography variant="subtitle1" fontWeight="medium">
                  {job.companyName}
                </Typography>
              </Box>
              {/* <IconButton size="small">
                <OpenInNew fontSize="small" sx={{ color: '#ff7d29' }} />
              </IconButton> */}
            </Box>
            <Typography variant="body2" color="text.secondary">
              {job.startDate} - {job.endDate || 'Present'}
            </Typography>
          </CardContent>
        </TimelineCard>
      ))}
    </Box>
  );

  const renderInternships = () => (
    <Box display="flex" flexDirection="column" gap={2}>
      {candidateData.internships?.map((internship, index) => (
        <TimelineCard key={`internship-${index}`}>
          <CardContent>
            <Typography variant="h6" sx={{ color: '#ff7d29' }} gutterBottom>
              {internship.position}
            </Typography>
            <Typography variant="subtitle1" fontWeight="medium">
              {internship.companyName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {internship.startDate} - {internship.endDate}
            </Typography>
          </CardContent>
        </TimelineCard>
      ))}
    </Box>
  );

  const renderAchievements = () => (
    <Grid container spacing={2}>
      {candidateData.activities?.map((activity, index) => (
        <Grid item xs={12} sm={6} key={`activity-${index}`}>
          <StyledCard>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1}>
                <EmojiEvents sx={{ color: '#ff7d29' }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {activity.activityName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {activity.activityRank}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <StyledCard sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
                {candidateData.firstName} {candidateData.lastName}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                <span className='text-[#ff7d29]'>Highest Qualification</span> - {candidateData.highestQualification}
              </Typography>
              {renderContactInfo()}
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={7}>
          <Box mb={4}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <School sx={{ color: '#ff7d29' }} />
              <Typography variant="h5">Education</Typography>
            </Box>
            {renderEducationTimeline()}
          </Box>

          <Box mb={4}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Work sx={{ color: '#ff7d29' }} />
              <Typography variant="h5">Experience</Typography>
            </Box>
            {renderExperienceTimeline()}
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={5}>
          <Box mb={4}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <BusinessCenter sx={{ color: '#ff7d29' }} />
              <Typography variant="h5">Internships</Typography>
            </Box>
            {renderInternships()}
          </Box>

          <Box>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <EmojiEvents sx={{ color: '#ff7d29' }} />
              <Typography variant="h5">Achievements</Typography>
            </Box>
            {renderAchievements()}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CandidateProfile;



