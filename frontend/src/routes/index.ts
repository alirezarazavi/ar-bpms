
import RouterInterface from "../interfaces/route.interface";
import DashboardIndex from "../pages/dashboard/Index";
import EquipmentsIndex from "../pages/equipments/Index";
import EquipmentsCreate from "../pages/equipments/Create";
import EquipmentTypesIndex from "../pages/equipments/types/Index";
import EquipmentBrandsIndex from "../pages/equipments/brands/Index";
import EquipmentPropertiesIndex from "../pages/equipments/properties/Index";
import { useTranslation } from "react-i18next";

export const routes: Array<RouterInterface> = [
    {
        key: 'dashboard-route',
        title: 'Dashboard',
        path: '/dashboard',
        enabled: true,
        component: DashboardIndex
    }, 
    {
        key: 'equipments-index-route',
        title: 'Equipments',
        path: '/dashboard/equipments',
        enabled: true,
        component: EquipmentsIndex
    },
    {
        key: 'equipments-create-route',
        title: 'Equipments-Create',
        path: '/dashboard/equipments/create',
        enabled: true,
        component: EquipmentsCreate
    },
    {
        key: 'equipment-types-create-route',
        title: 'Equipment-Types-Create',
        path: '/dashboard/equipments/types',
        enabled: true,
        component: EquipmentTypesIndex
    },
    {
        key: 'equipment-brands-create-route',
        title: 'Equipment-Brands-Create',
        path: '/dashboard/equipments/brands',
        enabled: true,
        component: EquipmentBrandsIndex
    },
    {
        key: 'equipment-properties-create-route',
        title: 'Equipment-Properties-Create',
        path: '/dashboard/equipments/properties',
        enabled: true,
        component: EquipmentPropertiesIndex
    }
]