import { useTheme, Grid, Box, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';



const style = {
    container: {
        height: '400px',
        borderRadius: '8px',
        backgroundColor: 'bg.secondary',
        padding: '16px'
    },
    heading: {
        fontSize: '16px',
        fontWeight: 600,
        color: 'text.primary'
    },
    doughnutChartContainer: {
        width: '100%',
        height: 'calc(100% - 35px)'
    }
}


ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

const data = {
    labels: ['Fresh Vegetable', 'Shirts', 'Mobiles', 'Camera',],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                '#0e9f6e',
                '#4285F4',
                'rgb(255, 206, 86)',
                '#D23F57',
            ]
        }
    ]
};

const data2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Sales',
            data: [1000, 2000, 3000, 4000, 1000, 10000, 5000, 8000, 6000, 9000, 3000, 2000],
            backgroundColor: '#0e9f6e',
            borderRadius: 100,
            barThickness: 15
        }
    ]
};
  

const Charts = () => {

    const theme = useTheme();

    return (
        <Grid container spacing={2}>

            <Grid item xs={6}>
                <Box
                    sx={style.container}
                    style={{ boxShadow: theme.palette.boxShadow.card }}
                >

                    <Typography
                        variant='body1'
                        sx={style.heading}
                    >Analytics</Typography>

                    <Box sx={style.doughnutChartContainer} mt={1}>
                        <Bar
                            data={data2} 
                            options={{
                                responsive: true,
                                scales: {
                                    x: {
                                      grid: {
                                        display: false
                                      }
                                    }
                                }
                            }}
                        />
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box
                    sx={style.container}
                    style={{ boxShadow: theme.palette.boxShadow.card }}
                >

                    <Typography
                        variant='body1'
                        sx={style.heading}
                    >Top Revenue Product</Typography>

                    <Box sx={style.doughnutChartContainer} mt={1}>
                        <Doughnut 
                            data={data} 
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                    </Box>

                </Box>
            </Grid>
        </Grid>
    )
}

export default Charts;