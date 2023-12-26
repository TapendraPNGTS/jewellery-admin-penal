import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, Grid, Typography } from '@mui/material';

// third party
import Chart from 'react-apexcharts';

// ============================|| TOTAL LINE CHART CARD ||============================ //

const TotalLineChartCard = ({ bgColor, chartData, title, percentage, value,footerData }) => {
    const theme = useTheme();

    let footerHtml;
    if (footerData) {
        footerHtml = footerData.map((item, index) => (
            <Grid item key={index}>
                <Box
                    sx={{
                        mt: 3,
                        mb: 3,
                        p: 1
                    }}
                >
                    <Grid container direction="column" spacing={1} alignItems="center">
                        <Typography variant="h3" sx={{ mb: 1 }}>
                            {item.value}
                        </Typography>
                        <Typography variant="body1">{item.label}</Typography>
                    </Grid>
                </Box>
            </Grid>
        ));
    }
    return (
        <Card>
            <Box sx={{ color: '#fff', bgcolor: bgColor || theme.palette.primary.dark }}>
                <Box sx={{ p: 2.5 }}>
                    <Grid container direction="column">
                        <Grid item container justifyContent="space-between" alignItems="center">
                            {value && (
                                <Grid item>
                                    <Typography variant="h3" color="inherit">
                                        {value}
                                    </Typography>
                                </Grid>
                            )}
                            {percentage && (
                                <Grid item>
                                    <Typography variant="body2" color="inherit">
                                        {percentage}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                        {title && (
                            <Grid item>
                                <Typography variant="body2" color="inherit">
                                    {title}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Box>
                {chartData && <Chart {...chartData} />}
            </Box>  
            {footerData && (
                <Grid container justifyContent="space-around" alignItems="center">
                    {footerHtml}
                </Grid>
            )}
        </Card>
    );
};

TotalLineChartCard.propTypes = {
    bgColor: PropTypes.string,
    chartData: PropTypes.object,
    title: PropTypes.string,
    percentage: PropTypes.string,
    footerData: PropTypes.array,
    value: PropTypes.number
};

export default TotalLineChartCard;