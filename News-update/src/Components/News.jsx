import React, { Component } from 'react'
import NewsItem from './NewsItem.jsx'

export default class News extends Component {

      articles = [
            {
              "source": { "id": "reuters", "name": "Reuters" },
              "author": null,
              "title": "North Korea launches new type of ballistic missile, South says - Reuters",
              "description": "North Korea fired a new model of long-range ballistic missile on Thursday, South Korea said, triggering a scare in northern Japan, where residents were told to take cover, though there turned out to be no danger.",
              "url": "https://www.reuters.com/world/asia-pacific/north-korea-fires-missile-into-sea-off-east-coast-south-korea-says-2023-04-12/",
              "urlToImage": "https://www.reuters.com/resizer/_tL5rnsySLAJ39wC9Ce3AAfupy0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6ECTZULI3FMQDHFELAUOODR2NQ.jpg",
              "publishedAt": "2023-04-13T08:36:00Z",
              "content": "SEOUL/TOKYO, April 13 (Reuters) - North Korea fired a new model of long-range ballistic missile on Thursday, South Korea said, triggering a scare in northern Japan, where residents were told to take … [+4229 chars]"
            },
            {
              "source": { "id": "cnn", "name": "CNN" },
              "author": "Ashley Strickland",
              "title": "The Juice mission will soon launch to Jupiter's icy ocean worlds - CNN",
              "description": "The European Space Agency is about to send a spacecraft to explore Jupiter and three of its largest and most intriguing moons. The Jupiter Icy Moons Explorer missior, or Juice, is expected to launch on Thursday at 8:15 a.m ET.",
              "url": "https://www.cnn.com/2023/04/13/world/esa-jupiter-juice-mission-launch-scn/index.html",
              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230104105917-esa-juice-mission-rendering.jpg?c=16x9&q=w_800,c_fill",
              "publishedAt": "2023-04-13T08:25:00Z",
              "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nThe European Space Agency is about to send a spacecraf… [+6776 chars]"
            },
            {
              "source": { "id": "cnn", "name": "CNN" },
              "author": "Joe Sutton, Taylor Ward, Travis Caldwell",
              "title": "Severe flooding strikes Fort Lauderdale as parts of South Florida face historic amounts of rainfall - CNN",
              "description": "Substantial downpours have inundated Fort Lauderdale and parts of South Florida Wednesday night in a once-in-a-half-century rainfall event, leading to a flash flood emergency in Broward County and one mayor calling the deluge the \"most severe flooding that I'…",
              "url": "https://www.cnn.com/2023/04/12/weather/florida-flash-flood-fort-lauderdale/index.html",
              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230412203720-01-flash-flood-emergency-florida-0413.jpg?c=16x9&q=w_800,c_fill",
              "publishedAt": "2023-04-13T07:58:00Z",
              "content": "Substantial downpours have inundated Fort Lauderdale and parts of South Florida Wednesday night in a once-in-a-half-century rainfall event, leading to a flash flood emergency in Broward County and on… [+5578 chars]"
            },
            {
              "source": { "id": null, "name": "CNBC" },
              "author": "Jihye Lee, Lim Hui Jie",
              "title": "Asia markets mostly fall as Fed warns of recession risk triggered by banking crisis - CNBC",
              "description": "Comments from the Fed erased earlier gains seen on Wall Street after the release of the U.S. consumer price index report that showed inflation cooled in March.",
              "url": "https://www.cnbc.com/2023/04/13/asia-markets.html",
              "urlToImage": "https://image.cnbcfm.com/api/v1/image/107159436-1669859699359-gettyimages-1243950696-yuen-hongkong221013_npN6J.jpeg?v=1681342778&w=1920&h=1080",
              "publishedAt": "2023-04-13T07:57:00Z",
              "content": "Markets do not seem to have priced in a potential U.S. recession, despite forecasts that one is on the horizon, according to Alex Wolf, managing director of JPMorgan Private Bank and head of its inve… [+757 chars]"
            },
            {
              "source": { "id": null, "name": "BBC News" },
              "author": "https://www.facebook.com/bbcnews",
              "title": "US thinks UN chief too accommodating to Moscow, leaked files suggest - BBC",
              "description": "Classified files indicate that Washington believed Antonio Guterres was soft on Russia over Ukraine.",
              "url": "https://www.bbc.com/news/world-us-canada-65257957",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13AB4/production/_129346508_gutafp.jpg",
              "publishedAt": "2023-04-13T07:02:49Z",
              "content": "The US believes the UN Secretary General is too willing to accommodate Russian interests, according to fresh revelations in classified documents leaked online.\r\nThe files suggest Washington has been … [+4146 chars]"
            },
            {
              "source": { "id": "cnn", "name": "CNN" },
              "author": "Tina Burnside",
              "title": "Actor Jamie Foxx is recovering after suffering undisclosed 'medical complication,' daughter says - CNN",
              "description": "Actor Jamie Foxx is recovering after experiencing a \"medical complication,\" according to an Instagram post Wednesday night from his daughter Corinne Foxx.",
              "url": "https://www.cnn.com/2023/04/13/entertainment/jamie-foxx-recovering-medical-complication/index.html",
              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/200619093245-jamie-foxx-0222.jpg?c=16x9&q=w_800,c_fill",
              "publishedAt": "2023-04-13T06:43:00Z",
              "content": "Actor Jamie Foxx is recovering after experiencing a medical complication, according to an Instagram post Wednesday night from his daughter Corinne Foxx. \r\nWe wanted to share that, my father, Jamie Fo… [+663 chars]"
            },
            {
              "source": { "id": "independent", "name": "Independent" },
              "author": "Gustaf Kilander",
              "title": "Louisville shooting – live: Panicked 911 call from gunman's mother released after bodycam video shows 'ambush' - The Independent",
              "description": "Louisville shooting live updates",
              "url": "https://www.independent.co.uk/news/world/americas/crime/louisville-shooting-911-calls-bodycam-shooter-mom-b2318908.html",
              "urlToImage": "https://static.independent.co.uk/2023/04/11/09/Louisville%20shooting.jpg?quality=75&width=1200&auto=webp",
              "publishedAt": "2023-04-13T06:30:30Z",
              "content": "Sign up to our free US news bulletin sent straight to your inbox each weekday morning\r\nSign up to our free morning US email news bulletin\r\nChilling 911 calls have been released of terrified bank empl… [+10794 chars]"
            },
            {
              "source": { "id": null, "name": "CBS Sports" },
              "author": "Jasmyn Wimbish",
              "title": "Bulls vs. Raptors score, takeaways: Zach LaVine leads Chicago to comeback victory in Toronto to extend season - CBS Sports",
              "description": "The Bulls will now face the Miami Heat on Friday night for the No. 8 seed",
              "url": "https://www.cbssports.com/nba/news/bulls-vs-raptors-score-takeaways-zach-lavine-leads-chicago-to-comeback-victory-in-toronto-to-extend-season/live/",
              "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/04/13/02597ae8-a1f6-45a9-87a0-bac3139d7333/thumbnail/1200x675/38563f74c89abfc674ddf5b5f460bbc9/untitled-design-2023-04-12t203322-080.png",
              "publishedAt": "2023-04-13T05:19:00Z",
              "content": "The Chicago Bulls pulled off a 109-105 comeback win on the road to extend their season and send the Toronto Raptors home packing Wednesday night. After falling behind by 19 points, the Bulls stormed … [+6564 chars]"
            },
            {
              "source": { "id": "usa-today", "name": "USA Today" },
              "author": "Joey Garrison, USA TODAY",
              "title": "Biden in Ireland: Gaffe about 'Black and Tans' makes waves in England - USA TODAY",
              "description": "President Joe Biden's gaffe spoiled a delicate balance he's tried to strike by celebrating his Irish roots but staying out of historical grudges.",
              "url": "https://www.usatoday.com/story/news/2023/04/13/biden-ireland-gaffe-black-and-tans-makes-waves-england/11650836002/",
              "urlToImage": "https://www.gannett-cdn.com/presto/2023/04/12/USAT/63d26251-a70b-4633-8c64-0fa278333126-AP_Ireland_Biden_1.jpg?auto=webp&crop=5548,3121,x0,y282&format=pjpg&width=1200",
              "publishedAt": "2023-04-13T05:00:30Z",
              "content": "DUBLIN — President Joe Biden spoke proudly of his Irish roots during his first day in Ireland – so much so that a gaffe he made at an Irish pub stirred controversy across the sea in Britain.\r\nBiden w… [+4106 chars]"
            },
            {
              "source": { "id": null, "name": "KABC-TV" },
              "author": null,
              "title": "Sen. Dianne Feinstein asks for temporary Judiciary Committee replacement amid calls for her resignation from Ro Khanna, others - KABC-TV",
              "description": "Sen. Dianne Feinstein asked to be temporarily replaced on the Judiciary Committee after California Democrat Rep. Ro Khanna called for her to step aside, saying she's no longer fit to serve.",
              "url": "https://abc7.com/dianne-feinstein-calls-to-resign-senator-feinsteins-health-ro-khanna/13120186/",
              "urlToImage": "https://cdn.abcotvs.com/dip/images/13119453_041223-kabc-5pm-dianne-feinstein-vid.jpg?w=1600",
              "publishedAt": "2023-04-13T04:40:39Z",
              "content": "LOS ANGELES (KABC) -- U.S. Sen. Dianne Feinstein of California asked Wednesday to be temporarily replaced on the Judiciary Committee, shortly after two House Democrats called on her to resign amid he… [+2689 chars]"
            },
            {
              "source": { "id": null, "name": "Yahoo Entertainment" },
              "author": "Jason Owens",
              "title": "Shai Gilgeous-Alexander floater helps Thunder escape play-in thriller over Pelicans - Yahoo Sports",
              "description": "The Thunder survive to face the Timberwolves with the West's last playoff spot at stake.",
              "url": "https://sports.yahoo.com/shai-gilgeous-alexander-floater-helps-thunder-escape-play-in-thriller-over-pelicans-043222710.html",
              "urlToImage": "https://s.yimg.com/ny/api/res/1.2/JbYjbbzGKWkxAV_6JxBnyQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/5ea84170-d9b0-11ed-bbbf-f5b8a0f19860",
              "publishedAt": "2023-04-13T04:32:00Z",
              "content": "The Thunder have survived.\r\nPowered by a pair of 30-point performances and a late clutch bucket by Shai Gilgeous-Alexander, the Oklahoma City Thunder won a 123-118 play-in thriller over the New Orlea… [+2611 chars]"
            },
            {
              "source": { "id": null, "name": "YouTube" },
              "author": null,
              "title": "Elon Musk takes on media: Twitter CEO doesn't hold back in BBC interview - CNBC Television",
              "description": "Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money, culture and policy. Tune in Monday...",
              "url": "https://www.youtube.com/watch?v=d900-hdZ980",
              "urlToImage": "https://i.ytimg.com/vi/d900-hdZ980/maxresdefault.jpg",
              "publishedAt": "2023-04-13T01:45:50Z",
              "content": null
            },
            {
              "source": { "id": null, "name": "Managing Madrid" },
              "author": "Kiyan Sobhani, Tacticalfouling",
              "title": "Managing Madrid Podcast: Real Madrid 2 - 0 Chelsea Post-game, Champions League 2022 - 2023 - Managing Madrid",
              "description": "Kiyan and Sid break down Real’s 1st leg in front of a live virtual audience",
              "url": "https://www.managingmadrid.com/2023/4/13/23681284/managing-madrid-podcast-real-madrid-2-0-chelsea-post-game-champions-league-2022-2023",
              "urlToImage": "https://cdn.vox-cdn.com/thumbor/y-5rXcrLyt-ttJOFYHj2Lpv64Ws=/0x0:3500x1832/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24581868/1251758299.jpg",
              "publishedAt": "2023-04-13T01:28:30Z",
              "content": "On this Patron-only episode of the Managing Madrid Podcast, Kiyan Sobhani and Siddharth Ramsundar discuss:\r\n<ul><li>Any chance of a Bayern Munich comeback vs Manchester City?</li><li>How surprised we… [+1433 chars]"
            },
            {
              "source": { "id": null, "name": "Nintendo Life" },
              "author": "Liam Doolan",
              "title": "GameStop Fires Employee For Leaking Zelda: Tears Of The Kingdom Switch - Nintendo Life",
              "description": "Report claims Nintendo \"forced the company's hand\"",
              "url": "https://www.nintendolife.com/news/2023/04/gamestop-fires-employee-for-leaking-zelda-tears-of-the-kingdom-switch",
              "urlToImage": "https://images.nintendolife.com/7f4902a2915ea/1280x720.jpg",
              "publishedAt": "2023-04-13T00:35:00Z",
              "content": "Subscribe to Nintendo Life on YouTube\r\nAt the end of March, Nintendo announced it would be releasing an official Legend of Zelda: Tears of the Kingdom Switch OLED model. While it was meant to be a su… [+1067 chars]"
            },
            {
              "source": { "id": null, "name": "YouTube" },
              "author": null,
              "title": "Bella Hadid Supports Ariana Grande Against Body-Shaming | E! News - E! News",
              "description": "One day after Ariana Grande reflects on being body shamed in a video posted to TikTok, Bella Hadid shares a message in support of the singer: \"Love you Ari.\"...",
              "url": "https://www.youtube.com/watch?v=3v9bgVQmu-8",
              "urlToImage": "https://i.ytimg.com/vi/3v9bgVQmu-8/maxresdefault.jpg",
              "publishedAt": "2023-04-12T23:43:00Z",
              "content": null
            },
            {
              "source": { "id": "cnn", "name": "CNN" },
              "author": "Florencia Trucco, Karina Maciel, Karol Suarez",
              "title": "Mexico investigates migration chief over deadly fire in detention center - CNN",
              "description": "Mexican authorities are investigating the head of the country's immigration agency, in the wake of last month's deadly fire in a migrant detention center that killed at least 38 people and left dozens injured.",
              "url": "https://www.cnn.com/2023/04/12/americas/mexico-migrant-detention-fire-intl-latam/index.html",
              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328101605-mexican-migration-center-fire-032723.jpg?c=16x9&q=w_800,c_fill",
              "publishedAt": "2023-04-12T23:41:00Z",
              "content": "Mexican authorities are investigating the head of the countrys immigration agency, in the wake of last months deadly fire in a migrant detention center that killed at least 38 people and left dozens … [+3014 chars]"
            },
            {
              "source": { "id": null, "name": "Daily Beast" },
              "author": "AJ McDougall",
              "title": "One of Pablo Escobar's 'Cocaine Hippos' Dies After Being Struck by Car in Colombia - The Daily Beast",
              "description": "But don’t worry—there are still more than 100 of the highly aggressive animals still hanging out around the drug kingpin’s sprawling estate.",
              "url": "https://www.thedailybeast.com/pablo-escobars-cocaine-hippo-killed-in-suv-collision-on-colombia-highway",
              "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1152,w_2048,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1681340943/2002-12-10T000000Z_1101765657_RP3DRIFUBYAA_RTRMADP_3_COLOMBIA-HIPPOS_s97nca",
              "publishedAt": "2023-04-12T23:22:14Z",
              "content": "A hippopotamus descended from the brood of animals owned by Pablo Escobar was killed after an SUV slammed into it on a highway not far from the Colombian narcoterrorists sprawling estate, local offic… [+653 chars]"
            },
            {
              "source": { "id": "cbs-news", "name": "CBS News" },
              "author": "Caroline Linton",
              "title": "Memphis commissioners reappoint ousted representative Justin Pearson to Tennessee House - CBS News",
              "description": "\"Nashville thought that they could silence democracy,\" Pearson said following the vote.",
              "url": "https://www.cbsnews.com/news/justin-pearson-tennessee-three-justin-jones-shelby-county-board-of-commissioners-meeting-today-2023-04-12/",
              "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/04/12/3f74ceea-cf41-444b-8a80-dc8c4793fbc8/thumbnail/1200x630/46364fc00e6b8c2a8c0d8da6e732e60b/2023-04-12t174022z-1256105981-rc25d0atx447-rtrmadp-3-tennessee-politics-house.jpg",
              "publishedAt": "2023-04-12T23:03:00Z",
              "content": "County officials in Memphis voted unanimously on Wednesday to reappoint Justin Pearson to the Tennessee House of Representatives, less than a week after the legislature voted to expel him and another… [+3280 chars]"
            },
            {
              "source": { "id": "fox-news", "name": "Fox News" },
              "author": "Andrea Vacchiano",
              "title": "Colorado high school remains closed after teacher dies of suspected meningitis - Fox News",
              "description": "Eaglecrest High School in Aurora, Colorado will remain closed as public health officials investigate the deaths of two teachers, including one who has symptoms of meningitis.",
              "url": "https://www.foxnews.com/us/colorado-high-school-remains-closed-teacher-dies-suspected-meningitis",
              "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/eaglecresths1.jpg",
              "publishedAt": "2023-04-12T22:47:00Z",
              "content": "A Colorado high school remains closed  after two faculty members died over the weekend including one from symptoms of bacterial meningitis.\r\nEaglecrest High School in Aurora, Colorado, was closed Wed… [+1590 chars]"
            },
            {
              "source": { "id": null, "name": "YouTube" },
              "author": null,
              "title": "Americans get relief from rising food and gas prices, but core inflation remains high - PBS NewsHour",
              "description": "Inflation cooled last month to its lowest level in nearly two years. The price of groceries dropped three-tenths of a percent in March, marking the first dec...",
              "url": "https://www.youtube.com/watch?v=vQDZAYxvAKg",
              "urlToImage": "https://i.ytimg.com/vi/vQDZAYxvAKg/maxresdefault.jpg",
              "publishedAt": "2023-04-12T22:17:04Z",
              "content": null
            }
          ]                                  // always use array before the constructor. (here array is articles.)
      constructor (){                                   // always use constructor in class 
            super();                                     //always use super(); inside  constructor 
            this.state ={                                  // this is how state is used in class based components (this.state)
                  articles : this.articles,
                  loading : false,
                  page : 1                           //  true is to show the loading  not important to use. 
            }
      }
      async componentDidMount(){
        let url ="https://newsapi.org/v2/everything?q=tesla&from=2023-03-16&sortBy=publishedAt&apiKey=8a5ec1c1430a4a2585d2f0c4a6cdd60b&page=1pageSize=15"; 
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
      }



      handleBackClick = async ()=>{
        console.log("back")
        let url =`https://newsapi.org/v2/everything?q=tesla&from=2023-03-16&sortBy=publishedAt&apiKey=8a5ec1c1430a4a2585d2f0c4a6cdd60b&page=${this.state.page - 1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
          page:this.state.page - 1,
          articles:parsedData.articles
        }) 

      }
      handleNextClick = async ()=>{
        console.log("next")
        let url =`https://newsapi.org/v2/everything?q=tesla&from=2023-03-16&sortBy=publishedAt&apiKey=8a5ec1c1430a4a2585d2f0c4a6cdd60b&page=${this.state.page + 1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
        this.setState({
          page: this.state.page + 1,
          articles:parsedData.articles

        })

      }
  render() {
    return (
      <>
      <h1>News Updater - for daily updates</h1>
      <div className='my-4 mx-4'>
      <div className="row">
      {this.state.articles.map ((element)=>{
         return   <div className="col-md-3" key={element.url}>
      <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} />
      </div>
      })}
      </div>
      <div className="container d-flex justify-content-around my-3 ">
      <button type="button" disabled={this.state.page<=1}   className="btn btn-outline-warning" onClick={this.handleBackClick}>&laquo; Back</button>
      <button type="button"  className="btn btn-outline-warning" onClick={this.handleNextClick}>Next &raquo;</button>

      </div>
      </div>
      </>
    )
  }
}
// slice is used to for showing the text.
// {} brackets is used for using javascript in html {}.
