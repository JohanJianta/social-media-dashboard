import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { UpIcon, DownIcon } from '../assets'
import PropTypes from 'prop-types';

export default function CardMain({ icon, name, lineColor, follower, todayNum, isUp }) {
  return (
    <Card variant='outlined' sx={{ border: 'none' }}>
      {/* Garis berwarna bagian atas card */}
      <Box component='div' sx={{ height: '4px', background: lineColor }} />

      <CardContent>
        {/* Bagian atas */}
        <Stack textAlign='center' spacing={2.5} marginTop={1.5}>
          <Stack direction='row' justifyContent='center' spacing={1}>
            <img src={icon} alt="iconSosmed" />
            <Typography variant='body2' color="text.secondary" gutterBottom>
              <Box component='span' fontWeight="bold">{name}</Box>
            </Typography>
          </Stack>

          {/* Bagian tengah */}
          <Stack>
            <Typography variant='h2' color="text.primary">
              <Box component='span' fontWeight="bold">{follower}</Box>
            </Typography>
            <Typography variant="body2" color='text.secondary' letterSpacing={5}>
              FOLLOWERS
            </Typography>
          </Stack>

          {/* Bagian bawah */}
          <Stack direction='row' justifyContent='center' alignItems='center' spacing={0.5}>
            <img src={isUp ? UpIcon : DownIcon} alt="iconArrow" />
            <Typography variant="body2" color={isUp ? 'success.main' : 'error.main'}>
              <Box component='span' fontWeight="bold">{todayNum} Today</Box>
            </Typography>
          </Stack>
        </Stack>
      </CardContent>

    </Card>
  )
}

// set tipe properti untuk tiap parameter
CardMain.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lineColor: PropTypes.string.isRequired,
  follower: PropTypes.string.isRequired,
  todayNum: PropTypes.number.isRequired,
  isUp: PropTypes.bool.isRequired,
};