
import { useDispatch, useSelector } from 'react-redux';
// material-ui
import { ButtonBase } from '@mui/material';
// project imports
import config from 'config';
// import Logo from '../../../assets/images/dr_logo_100.svg';
import Logo from '../../../assets/images/dr_logo.svg'
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const defaultId = useSelector((state) => state.customization.defaultId);
    const dispatch = useDispatch();
    return (
        <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} to={config.defaultPath}>
            <img src={Logo} width={140} height={55} alt="image"/>
        </ButtonBase>
    );
};

export default LogoSection;
