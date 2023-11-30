import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { UpIcon, DownIcon } from '../assets'
import PropTypes from 'prop-types';

export default function CardOverview({ title, value, icon, percentage, isUp }) {
  return (
    <Card variant='outlined' sx={{ border: 'none' }}>
      <CardContent>
        {/* Bagian kiri */}
        <Stack direction='row' justifyContent='space-between'>
          <Stack spacing={2.5}>
            <Typography variant="body2" color='text.secondary'>
              <Box component='span' fontWeight="bold">{title}</Box>
            </Typography>
            <Typography variant='h4' color="text.primary">
              <Box component='span' fontWeight="bold">{value}</Box>
            </Typography>
          </Stack>

          {/* Bagian kanan */}
          <Stack justifyContent='space-between' alignItems='center'>
            <img src={icon} alt="icon" width='20px' />
            <Stack direction='row' justifyContent='center' alignItems='center' spacing={0.5}>
              <img src={isUp ? UpIcon : DownIcon} alt="iconArrow" />
              <Typography variant="body2" color={isUp ? 'success.main' : 'error.main'}>
                <Box component='span' fontWeight="bold">{percentage}%</Box>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

// set tipe properti untuk tiap parameter
CardOverview.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  isUp: PropTypes.bool.isRequired,
};