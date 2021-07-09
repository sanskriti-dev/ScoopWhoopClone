import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from './articles'
import moment from 'moment'
import { Tabs } from 'antd'
import MobileBanner from './header/mobileBanner'
import DesktopBanner from './header/desktopBanner'
import { LoadingOutlined } from '@ant-design/icons'

import './index.scss'
const { TabPane } = Tabs

const Articles = (props) => {
  const [allCards, setAllCards] = useState([])
  const [offset, setOffSet] = useState(0)
  const [stickyNav, setStickyNav] = useState(false)
  const [mobileBanner, setMobileBanner] = useState()
  const [isFetching, setIsFetching] = useState(false)
  const [isloading, setIsLoading] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
        if (window.innerWidth <= 640) 
           setMobileBanner(true)
        else setMobileBanner(false)
    getArticles()
  }, [])

  useEffect(() => {
    if (!isFetching) return
    getMoreArticles()
  }, [isFetching])

  const getMoreArticles = () => {
    getArticles()
    setIsFetching(false)
  }

  const listenScrollEvent = (e) => {
    if (window.scrollY > 170) {
      setStickyNav(true)
    } else {
      setStickyNav(false)
    }
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return
    setIsFetching(true)
  }

  const viewBannerEvent = (e) => {
    if (window.innerWidth <= 640) setMobileBanner(true)
    else setMobileBanner(false)
  }

  const tabs = ['Fresh', 'Hot']

  const getArticles = async () => {
    setIsLoading(true)
    await axios
      .get(
        `https://www.scoopwhoop.com/api/v4/read/all/?offset=${offset}&limit=8`,
      )
      .then((response) => {
        let allCardsData = [...allCards, ...response.data.data]
        let pageOffset = offset + 8
        setAllCards(allCardsData)
        setOffSet(pageOffset)
        setIsLoading(false)
      })
  }

  return (
    <div>
      {mobileBanner ? (
        <MobileBanner />
      ) : (
        <DesktopBanner stickyNav={stickyNav} />
      )}
      <div className="cards">
        <Tabs defaultActiveKey="0">
          {tabs.map((ele, index) => {
            return (
              <TabPane tab={ele} key={index}>
                <div className="row">
                  {allCards?.map((item) => {
                    return (
                      <Card
                        imgSrc={item.feature_img}
                        title={item.title}
                        category={item?.cat_display?.[0]?.category_display}
                        author={item?.auth_display?.display_name}
                        readTime={item.readtime}
                        published={moment(item.pub_date).fromNow()}
                        analytics={item.analytics}
                        isMobile={mobileBanner}
                      />
                    )
                  })}
                  {isloading ? <LoadingOutlined /> : null}
                </div>
              </TabPane>
            )
          })}
        </Tabs>
      </div>
    </div>
  )
}

export default Articles
