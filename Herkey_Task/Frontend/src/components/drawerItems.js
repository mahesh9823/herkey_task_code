import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const items = {
    "mainArea": {
        "items": {
            "dashboard": {
                "label": "Dashboard",
                "icon": <DashboardOutlinedIcon fontSize="large" sx={{ color: "#96959c" }} />,
                "url": null,
                "dropdown": null
            },
            "jobs": {
                "label": "Jobs",
                "icon": <BusinessCenterOutlinedIcon fontSize="large" sx={{ color: "#96959c" }} />,
                "url": null,
                "dropdown": null
            },
            "applications": {
                "label": "Applications",
                "icon": <InventoryOutlinedIcon fontSize="large" sx={{ color: "#96959c" }} />,
                "url": null,
                "dropdown": null
            },
            "followers": {
                "label": "Followers",
                "icon": <PeopleAltOutlinedIcon fontSize="large" sx={{ color: "#96959c" }} />,
                "url": null,
                "dropdown": null
            },
            "myInventory": {
                "label": "My Inventory",
                "icon": <Inventory2OutlinedIcon fontSize="large" sx={{ color: "#96959c" }} />,
                "url": null,
                "dropdown": null
            },
            "companyProfile": {
                "label": "Company Profile",
                "icon": <ApartmentOutlinedIcon fontSize="large" sx={{ color: "#96959c" }} />,
                "url": null,
                "dropdown": null
            },
            "allUsers": {
                "label": "All Users",
                "icon": <SupervisedUserCircleOutlinedIcon fontSize="large" sx={{ color: "#96959c" }} />,
                "url": null,
                "dropdown": null
            },
            "myAccount": {
                "label": "My Account",
                "icon": <AccountCircleOutlinedIcon fontSize="large" sx={{ color: "#99ca3b" }} />,
                "active": true,
                "url": null,
                "dropdown": null
            }
        }
    }

}

export default items