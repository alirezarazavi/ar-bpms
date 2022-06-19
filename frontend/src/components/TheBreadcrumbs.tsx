import React, { FC, ReactElement } from "react";
import Link from '@mui/material/Link';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from '@mui/icons-material/NavigateBefore';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useMatch } from "react-router-dom";

export const TheBreadcrumbs: FC = (): ReactElement => {
    const homeMatch = useMatch("/*");
    const dashboardMatch = useMatch("dashboard/*");
    const equipmentsMatch = useMatch("dashboard/equipments/*");
    const equipmentsCreateMatch = useMatch("dashboard/equipments/create/*");
    const equipmentTypesMatch = useMatch("dashboard/equipments/types/*");
    const equipmentBrandsMatch = useMatch("dashboard/equipments/brands/*");
    const equipmentPropertiesMatch = useMatch("dashboard/equipments/properties/*");

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{marginBottom: 2}}
            >
            {homeMatch &&
              (<Link underline="hover" key="1" color="inherit" to="/" component={RouterLink}>
                نخست
              </Link>)
            },
            {dashboardMatch &&
              (<Link underline="hover" key="2" color="inherit" to="/dashboard" component={RouterLink}>
                داشبورد
              </Link>)
            },
            {equipmentsMatch &&
              (<Link underline="hover" key="3" color="inherit" to="/dashboard/equipments" component={RouterLink}>
                لیست تجهیزات
              </Link>)
            },
            {equipmentsCreateMatch &&
              (<Link underline="hover" key="4" color="inherit" to="/dashboard/equipments/create" component={RouterLink}>
                ثبت تجهیزات جدید
              </Link>)
            },
            {equipmentTypesMatch &&
              (<Link underline="hover" key="4" color="inherit" to="/dashboard/equipments/types" component={RouterLink}>
                مدیریت انواع تجهیزات
              </Link>)
            },
            {equipmentBrandsMatch &&
              (<Link underline="hover" key="4" color="inherit" to="/dashboard/equipments/brands" component={RouterLink}>
                مدیریت برندها
              </Link>)
            },
            {equipmentPropertiesMatch &&
              (<Link underline="hover" key="4" color="inherit" to="/dashboard/equipments/properties" component={RouterLink}>
                مدیریت ویژگی‌های تجهیزات
              </Link>)
            },
        </Breadcrumbs>
    );
}

export default TheBreadcrumbs;