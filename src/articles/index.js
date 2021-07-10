import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from './articles'
import moment from 'moment'
import { notification, Tabs } from 'antd'
import MobileBanner from './header/mobileBanner'
import DesktopBanner from './header/desktopBanner'
import { LoadingOutlined } from '@ant-design/icons'
import Footer from './footer'
import './index.scss'
const { TabPane } = Tabs

const Articles = (props) => {
  const [allCards, setAllCards] = useState([])
  const [offset, setOffSet] = useState(0)
  const [stickyNav, setStickyNav] = useState(false)
  const [mobileBanner, setMobileBanner] = useState()
  const [isFetching, setIsFetching] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [stickyFooter, setStickyFooter] = useState()

  useEffect(() => {
    if (window.innerWidth <= 700) setMobileBanner(true)
    else setMobileBanner(false)
    window.addEventListener('scroll', listenScrollEvent)
    // document.title= window.scrollY
    getArticles()
  }, [])


  useEffect(() => {
    if (!isFetching) return
    getMoreArticles()
  }, [isFetching])

  const getMoreArticles = () => {
    getArticles()
  }

  const listenScrollEvent = (e) => {
    window.pageYOffset >= 170 ? setStickyNav(true) : setStickyNav(false)
    window.pageYOffset < 500 ? setStickyFooter(true) : setStickyFooter(false)

    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && !isFetching)
    setIsFetching(true)
    else
    return
  }

  const tabs = ['Fresh', 'Hot']

  const getArticles = async () => {
    setIsLoading(true)
    try {
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
          setIsFetching(false)

        })
    } catch (err) {
      notification['error']({
        message: 'Somthing went wrong',
      })
      setIsLoading(false)
    }
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
                  {allCards?.map((item,i) => {
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
                        key = {`artticle-${i}`}
                      />
                    )
                  })}
                  {isloading ? <LoadingOutlined /> : null}
                  {mobileBanner && stickyFooter ? <Footer /> : null}
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
