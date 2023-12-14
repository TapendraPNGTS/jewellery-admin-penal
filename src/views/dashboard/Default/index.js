import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import { gridSpacing } from 'store/constant';

// import Calendar from 'react-calendar';
// ==============================|| DEFAULT DASHBOARD ||============================== //
const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [appoint, setAppoint] = useState(0);
    const [user, setUser] = useState(0);
    const [currentAmount, setCurrentAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [allCurrentAppoiment, setAllCurrentAppoiment] = useState(0);
    const [totalDue, setTotalDue] = useState(0);
    const [currentDue, setCurrentDue] = useState(0);

    function getalldata() {
        var myHeaders = new Headers();
        myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
        myHeaders.append("token", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            adminId: localStorage.getItem("userId"),
        });
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        fetch(`${process.env.REACT_APP_API_URL}Dashboard`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setAllCurrentAppoiment(result.data.current_appoint);
                setUser(result.data.user);
                setAppoint(result.data.appoint);
                setCurrentAmount(result.data.current_amount);
                setTotalAmount(result.data.total_amount);
                setTotalDue(result.data.total_due);
                setCurrentDue(result.data.current_due);

            })
            .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        getalldata()
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={user} isTitle={`Total User`} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={appoint} isTitle={`All Products`} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={appoint} isTitle={`Labgrown Products`} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={appoint} isTitle={`Natural Products`} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={allCurrentAppoiment} isTitle={`Total Settings`} />
                    </Grid>
                    {/* <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={currentAmount} isTitle={`Current Amount ₹`} />
                    </Grid> */}
                    {/* <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={totalAmount} isTitle={`Total Amount ₹`} />
                    </Grid> */}
                    {/* <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={totalDue} isTitle={`Total Due Amount ₹`} />
                    </Grid> */}
                    {/* <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} isCount={currentDue} isTitle={`Current Due Amount ₹`} />
                    </Grid> */}
                </Grid>
            </Grid>

        </Grid>
    );
};

export default Dashboard;
