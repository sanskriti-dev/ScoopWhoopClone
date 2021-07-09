import React from 'react'
import '../index.scss'
import NavIcon from '../../assets/header-icon.svg'
import StickyNaviIcon from '../../assets/navIcon.svg'
import {
  DownOutlined,
  UserOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons'

const DesktopBanner = (props) => {
  const navListLeft = [
    'Trending',
    'Videos',
    'Stories',
    'Quizzes',
    'Memes',
    'Spotlight',
  ]
  const navListRight = [
    <DownOutlined />,
    <UserOutlined />,
    <SearchOutlined />,
    <MenuOutlined />,
  ]

  return (
    <div className="banner desktop">
      <header className={props.stickyNav ? 'sticky' : ''}>
        <div className="row">
          <div className="col-1">
            <img src={props.stickyNav ? StickyNaviIcon : NavIcon} alt="icon" />
          </div>
          <div className="col-9">
            <div className="navlist-left">
              {navListLeft.map((ele) => {
                return (
                  <div
                    className={
                      props.stickyNav ? 'nav-item nav-item-sticky ' : 'nav-item'
                    }
                  >
                    {ele}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-2">
            <div className="navlist-left">
              {navListRight.map((ele) => {
                return (
                  <div className={props.stickyNav ? 'icons-sticky' : 'icon'}>
                    {ele}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </header>

      <div className="header-article">
        <span className="header-category">Entertainment</span>
        <h1 className="header-text">
          16 Fan Favourite Cult Movies That You Didn't Know Were Copied
        </h1>
        <span className="header-read">Read article -{`>`} </span>
      </div>
    </div>
  )
}

export default DesktopBanner
