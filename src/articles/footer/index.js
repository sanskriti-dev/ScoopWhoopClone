import React from 'react';
import { ThunderboltOutlined,
CaretRightOutlined,
MenuUnfoldOutlined,
TrophyOutlined,
SmileOutlined } from '@ant-design/icons'
import '../index.scss'

const Footer = props => {
    const navList = [
        {
            name : "Trending",
            icon : <ThunderboltOutlined />
        },
        {
            name : "Videos",
            icon : <CaretRightOutlined />
        },
        {
            name : "Stories",
            icon : <MenuUnfoldOutlined />
        },
        {
            name : "Quizzes",
            icon : <TrophyOutlined />
        },
        {
            name : "Memes",
            icon : <SmileOutlined />
        }
    ]
    return (
        <div className = "footer">
            {
                navList.map(ele => {
                    return <div className = "menu-item">
                        <span>{ele.icon}</span>
                        <span>{ele.name}</span>
                    </div>
                })
            }

        </div>
    )
}

export default Footer