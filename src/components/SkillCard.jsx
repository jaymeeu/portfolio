import React from 'react'
import "./SkillCard.css"


import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SkillCard = ({skill, color, logo, percent}) => {

    function LinearProgressWithLabel(props) {
        return (
          <Box sx={{ display: 'flex',width: '100%', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
              )}%`}</Typography>
            </Box>
          </Box>
        );
      }
      
      LinearProgressWithLabel.propTypes = {
        value: PropTypes.number.isRequired,
      };

    const [progress, setProgress] = React.useState(10);

        React.useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= percent ? percent : prevProgress + 10));
        }, 400);
        return () => {
          clearInterval(timer);
        };
      }, []);
  return (
    <div className='card_body'>
        <div className="text_areaa">
            {skill}
        <span>
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
        </span>
        </div>
        <div className="image_like_area" style={{backgroundColor:color}}>
            <div className="cirlce">
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SkillCard