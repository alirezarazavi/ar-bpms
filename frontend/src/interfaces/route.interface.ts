import { FC } from "react";

export default interface RouteInterface {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}