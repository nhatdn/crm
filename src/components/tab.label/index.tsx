import React from "react"
import { Typography } from "antd"
import './style.scss'
type TTabLabel = {
    label?: string;
    icon?: React.ReactNode;
}
const TabLabel: React.FC<TTabLabel> = ({label, icon}) => {
    return (
        <Typography.Text className="tab-label">
            {icon}
            <span className="label">{label}</span>
        </Typography.Text>

    )
}

export default TabLabel;