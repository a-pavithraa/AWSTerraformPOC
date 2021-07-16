import {stockServiceActions} from './stockservice-slice';



export const fetchTicks = (token) => {
    return async (dispatch) => {
      const fetchData = async () => {
       
        const response = await fetch(
          'http://localhost:80/api/ticks',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
              }
          }
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch ticks!');
        }
  
        const data = await response.json();
        console.log(data);
  
        return data;
      };
  
      try {
        const cartData = await fetchData();
        dispatch(
            stockServiceActions.getTopTenTicks({
            ticks: cartData.finance || {}
            
          })
        );
      } catch (error) {
       //Need to modify state to show error
      }
    };
  };



  export const fetchWatchLists = () => {
    return async (dispatch) => {
      const fetchData = async () => {
       
       /* const response = await fetch(
          'http://localhost:80/api/watchList',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("jwtToken")
              }
          }
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch watchlists!');
        }
*/
        const  data = {
          "finance": {
              "result": [
                  {
                      "id": "section-popular",
                      "name": "Most Followed",
                      "total": 52,
                      "portfolios": [
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "the_berkshire_hathaway_portfolio",
                              "slug": "the-berkshire-hathaway-portfolio",
                              "name": "The Berkshire Hathaway Portfolio",
                              "description": "<p>Follow this list to discover and track stocks held by Berkshire Hathaway, the holding company of Warren Buffett.</p>\n<p><em>Background</em><p>Berkshire Hathaway, a multinational conglomerate based in the US, is led by Warren Buffett, who's arguably the nation's most revered investor. Dubbed the \"Oracle of Omaha\" Buffett's known for playing the long game in the stock market. Berkshire wholly owns a handful of companies and also owns stock in the companies listed here.</p><em>How did we choose these stocks?</em><p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p><p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks held by Berkshire Hathaway, the holding company of Warren Buffett.",
                              "symbolCount": 20,
                              "followerCount": 195452,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1476297902614,
                              "updatedAt": 1626221306159,
                              "dailyPercentGain": -0.7232452905436687,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/N7pbrdWlzGzkCucOMTdV7A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/default/161012/the-berkshire-hathaway-portfolio.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/PSTIELbI5jNCTmxLD7Js.w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/the-berkshire-hathaway-portfolio.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/_hmzzeNSHs8z4ecW730I_A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/default/161012/the-berkshire-hathaway-portfolio.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/T69UMZ6okgmAw15IENCz7A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/default/161012/the-berkshire-hathaway-portfolio.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ZtXnkk9T4pnGLNhziWWboQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/default/161012/the-berkshire-hathaway-portfolio.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/yNkOPpC.aVOUazRBtC3FCw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/default/161012/the-berkshire-hathaway-portfolio.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/lSPYpcEGC2xr_95JbsveEg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/default/161012/the-berkshire-hathaway-portfolio.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/8OZuYhBwRspZiONhLioS9Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/the-berkshire-hathaway-portfolio.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/WUmIGHGzZT7F6jMd90NYIw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/default/161012/the-berkshire-hathaway-portfolio.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "420_stocks",
                              "slug": "420_stocks",
                              "name": "Cannabis Stocks",
                              "description": "<em>Background</em><p>Global spending on legal cannabis worldwide will hit $57 billion in a decade, according to Arcview Market Research and BDS Analytics. Driven by the legalization of recreational and medical cannabis and the increasing demand for both, legal cannabis revenue in the U.S. is projected to hit $23.4 billion by 2022. Yahoo Finance is now tracking the major players in the cannabis industry.</p><em>How do we pick these stocks?</em><p>This is a curated list, powered by Yahoo Finance’s algorithm and intelligence from our millions of users as well as the Yahoo Finance editorial team. The list covers companies in horticulture, pharmaceutical research and ancillary businesses. We will continue to add names as corporations invest and pivot into the space.</p><em>How are these weighted?</em><p>The stocks on this watchlist are weighted equally at the time they were added.</p><p>To learn what every company on this list is doing that involves cannabis, <a href=\"https://finance.yahoo.com/news/presenting-yahoo-finance-cannabis-stock-watchlist-202009074.html\">read this story</a>.</p>",
                              "shortDescription": "Follow this list to discover and track the stock of publicly traded companies with exposure to cannabis",
                              "symbolCount": 21,
                              "followerCount": 151636,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1537827432395,
                              "updatedAt": 1559138503918,
                              "dailyPercentGain": -1.7757895904325376,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YKVsanI9igZOITipqbLG1g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/fin/img/420stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/PRC97LMkPd3HmAuI0_64Gw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/420stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/m46id.i..QF4KS9PfUsFjw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/fin/img/420stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/dQ19VcYXY.GEDfbjf91wlA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/fin/img/420stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/2lDbdXoUZvmrceFZn2I9Yg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/fin/img/420stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/s4dXDjW5BdxWtLuIoUNg7g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/fin/img/420stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/TAREJjsmqOwMC4nrSgTKPw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/fin/img/420stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/BifLW3Y3UYi5UqGNgVGXrw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/420stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/91P218czqVXmycatbhYyPQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/fin/img/420stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "the_only_tech_stocks_that_matter",
                              "slug": "tech-stocks-that-move-the-market",
                              "name": "Tech Stocks That Move the Market",
                              "description": "<em>Background</em><p>“The Only Tech Stocks That Matter” presents a diverse look at the biggest US-traded tech companies, as well as smaller, innovative companies that recently went public. They cover areas including social media, computers, mobile phones, electric cars, mobile payments, video games, real estate, online commerce, cloud computing, online dating, online reviews, and ad tech. </p><em>How did we choose these stocks?</em><p>Each of these stocks was chosen by the Yahoo Finance editorial staff.</p><em>Who made these selections?</em><p>Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of both consumer technology and the business of tech companies.</p><em>How are these weighted?</em><p>The stocks are weighted by market capitalization as of 11 a.m. on Thursday, Sept. 29, 2016.</p>",
                              "shortDescription": "This basket lists stocks that investors interested in tech should have in their portfolios — including FANG stocks and rising stars that just had IPOs.",
                              "symbolCount": 19,
                              "followerCount": 80557,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1476373086635,
                              "updatedAt": 1610149106639,
                              "dailyPercentGain": 0.18886749048993118,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/asx9MoE8NvN2h0qczCQ7Ag--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/default/161012/the-only-tech-stocks-that-matter.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/qAZuY4yqZxq.6gM97y5HUg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/the-only-tech-stocks-that-matter.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kXSCYGYisFvdJo0vmV.PmA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/default/161012/the-only-tech-stocks-that-matter.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/5_ipmkuSbusXzr7AkxJu0Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/default/161012/the-only-tech-stocks-that-matter.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/fD2NMqBwr5v9rGL2oT6V1g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/default/161012/the-only-tech-stocks-that-matter.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/6LCp461Ll1SdRZeq1BX7Nw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/default/161012/the-only-tech-stocks-that-matter.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Y_wdsYg9du_uEUhBZv0KUQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/default/161012/the-only-tech-stocks-that-matter.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/qm0MKvMEvzmvqTdxM_EZ9Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/the-only-tech-stocks-that-matter.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/3JqBFVz4X6C2nEbc.nafcQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/default/161012/the-only-tech-stocks-that-matter.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "most_added",
                              "slug": "most-added",
                              "name": "Most Added to Watchlists",
                              "description": "<p>Follow this list to discover and track stocks that were added to most watchlists by Yahoo Finance Users. This list is generated daily and limited to the top 30 stocks that meet the criteria.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks that were added to most watchlists by Yahoo Finance Users. This list is generated daily and limited to the top 30 stocks that meet the criteria.",
                              "symbolCount": 30,
                              "followerCount": 65343,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1507576184883,
                              "updatedAt": 1626274327151,
                              "dailyPercentGain": -2.769048251930068,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/9A0gx2s.INoSDfdCz8zklw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-added.jpeg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.uZf8YTlg5BB3J68iNrMbg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-added.jpeg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.0cJicYc0C.0Qt2FPzhgRg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-added.jpeg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/15hBlFOqeYidEnoawkbv_Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/finance/social/portfolio/most-added.jpeg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/_VXidaA02ECkhZCjlRJxGg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/finance/social/portfolio/most-added.jpeg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/H88CK46hCHavoinqxJvAFQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-added.jpeg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Ehx4o6P7S4FSwx.ArP0vDg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-added.jpeg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/VypgXlPVu0QGJSqaxoBU4Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-added.jpeg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/a67eZF_VNeD0BBEKYG2dCA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/finance/social/portfolio/most-added.jpeg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "most_bought_by_activist_hedge_funds",
                              "slug": "most-bought-by-activist-hedge-funds",
                              "name": "Most Bought by Activist Hedge Funds",
                              "description": "<p>Follow this list to discover and track the stocks that were bought the most by activist hedge funds in the last quarter.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track the stocks that were bought the most by activist hedge funds in the last quarter.",
                              "symbolCount": 30,
                              "followerCount": 50023,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1524556250317,
                              "updatedAt": 1626221307077,
                              "dailyPercentGain": -0.6679120419980775,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/d3XFULDCOuShHQ9N.w9s7w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/fin/img/most-bought-activist.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/D.tEHG7qjf.7q9Ovn8Bc_A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/most-bought-activist.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/V6ATonCDQgsAeHfKUM0COA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/fin/img/most-bought-activist.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/OJuIZldj3Y_JnlIThtSWOQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/fin/img/most-bought-activist.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/tPA4hyE3cZDC3d16ycraig--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/fin/img/most-bought-activist.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/2TFYbZDWcqeKo2z9mzSqNA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/fin/img/most-bought-activist.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/psiAx4WjtyRW3uScDGpF8Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/fin/img/most-bought-activist.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kDDilHckH7qG07GSGiBYSw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/most-bought-activist.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/lM5iIZWNHqilROwL1vcAlw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/fin/img/most-bought-activist.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "most_bought_by_hedge_funds",
                              "slug": "most-bought-by-hedge-funds",
                              "name": "Most Bought by Hedge Funds",
                              "description": "<p>Follow this list to discover and track the stocks that were bought the most by hedge funds in the last quarter.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track the stocks that were bought the most by hedge funds in the last quarter.",
                              "symbolCount": 30,
                              "followerCount": 33704,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1523692746666,
                              "updatedAt": 1626221587115,
                              "dailyPercentGain": -2.0204058961031213,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/PEfT53p2r8hjo.umM1tP_g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/fin/img/mostboughtHedgeFunds.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ra89OZz8BtiRAF6mVdpsIw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/mostboughtHedgeFunds.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ocX299YZyyDxapoeZ9_v9Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/fin/img/mostboughtHedgeFunds.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/quy36pQDfrWhcrXebSecwg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/fin/img/mostboughtHedgeFunds.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YsxqZcTjTUeodnvmFc4zVQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/fin/img/mostboughtHedgeFunds.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ywGizg3RDAN0nNx8mAU93g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/fin/img/mostboughtHedgeFunds.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/noF6M7OMRPDIB.qRaEQLdg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/fin/img/mostboughtHedgeFunds.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/IP89nW4S2rfKgKItQqOCkg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/mostboughtHedgeFunds.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/PNd3xLxWm3lV_v7SV4Luaw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/fin/img/mostboughtHedgeFunds.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "most_active_penny_stocks",
                              "slug": "most-active-penny-stocks",
                              "name": "Most Active Penny Stocks",
                              "description": "<p>Follow this list to discover and track penny stocks with the highest daily volume. <p>The list includes stocks priced at $5 or less with a day change greater than 3%. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track penny stocks with the highest daily volume.",
                              "symbolCount": 30,
                              "followerCount": 31631,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601422006380,
                              "updatedAt": 1626274687169,
                              "dailyPercentGain": 34.795642905580166,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/gk5H1K2.JMyT0RRzb4ORZg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/penny-stocks-top-gainers.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/plztkydoEd17UW6eOciGew--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/penny-stocks-top-gainers.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/S.8byYZ6_oZpTFVp4Cm4bQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/penny-stocks-top-gainers.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/B0Z45ym2OoJrxgUXghSMNw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/penny-stocks-top-gainers.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/o.enTvE5PIu5aM640qTklg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/penny-stocks-top-gainers.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/xf6275LJtH3hz8Pf2FReMg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/penny-stocks-top-gainers.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/GY9gv0qXUPJFfRSm7Ux_hg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/penny-stocks-top-gainers.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Ftgn3bCs6f3OAeHq9v7eNA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/penny-stocks-top-gainers.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/c39tuYDzdPs_PSzVB8qIKA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/penny-stocks-top-gainers.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "top_crypto_bets",
                              "slug": "top-crypto-bets",
                              "name": "Top Crypto Bets",
                              "description": "<em>Background</em><p>This list tracks publicly traded, non-cryptocurrency companies that have some level of exposure to crypto, either through investments, partnerships, or side ventures. Yahoo Finance will update this list as new companies enter the crypto space.</p><em>How did we choose these stocks?</em><p>This is an editorial, curated list. Our team of reporters uses their expertise to judge which companies have gotten involved enough in crypto to merit inclusion here.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally based on price at the time they were added.</p><p>For more on what the companies on this list are doing that involves cryptocurrency, read <a href=\"https://finance.yahoo.com/news/watchlist-stocks-exposure-bitcoin-195929419.html\">these</a> <a href=\"https://finance.yahoo.com/news/squares-bitcoin-bet-is-paying-off-183613329.html\">three</a> <a href=\"https://finance.yahoo.com/news/visa-has-also-quietly-warmed-to-crypto-along-with-pay-pal-and-square-200953910.html\">stories</a>.</p>",
                              "shortDescription": "This list tracks public non-cryptocurrency companies that have exposure to crypto, either through investments, partnerships, or side ventures. Yahoo Finance will update this list as new companies enter the crypto space.",
                              "symbolCount": 15,
                              "followerCount": 24352,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1513278304242,
                              "updatedAt": 1610651988665,
                              "dailyPercentGain": -0.9262630198372348,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/yg27E6wMg0mYBS.twICmnA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/finance/social/portfolio/crypto_impact.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/_0yc35K..zC4omY7un_DsQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/crypto_impact.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/6HquSVb48q.hNvLBrmT7DQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/finance/social/portfolio/crypto_impact.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/t7x6zbprdoChit3UTZVTAw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/finance/social/portfolio/crypto_impact.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/oNfHirLU2XfngX2gJNlUZQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/finance/social/portfolio/crypto_impact.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/U8rHOP9BuqB6uRNpSInbEQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/finance/social/portfolio/crypto_impact.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/fmLUlUlAgNVtbjExK8hoFA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/finance/social/portfolio/crypto_impact.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vOYQlzFxsuipdOWxez69qQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/crypto_impact.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/LU7arbKUGXzAMvZ_ESYt7g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/finance/social/portfolio/crypto_impact.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "the_fight_against_covid19",
                              "slug": "the-fight-against-covid19",
                              "name": "The Fight Against COVID19",
                              "description": "TREA analyzes over 100 million data points, interactions, relationships on company research and development activities, allowing investors to quickly gain insight without having to go through complex regulatory filings. Primary data sources include: FDA (Food and Drug Administration), NIH (National Institutes of Health), USPTO (US Patent and Trademark Office). The search parameters for generating this watchlist were (1) Above sector average Innovation Index score, (2) IP history at least 5 years (3) COVID19 (4) 2019-nCov (5) SARS-CoV-2 among others.",
                              "shortDescription": "Follow this list to discover and track the stock of publicly traded companies with COVID-19 related treatment and healthcare plans.",
                              "symbolCount": 13,
                              "followerCount": 21364,
                              "brand": {
                                  "name": "trea",
                                  "displayName": "TREA",
                                  "url": "https://trea.com/",
                                  "slug": "trea",
                                  "logoUrl": "https://s.yimg.com/uc/fin/img/20/02/b72e16a.png"
                              },
                              "createdAt": 1585140754871,
                              "updatedAt": 1585140754871,
                              "dailyPercentGain": 0.3651095124861426,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ugF9t86ajYTT_naA1u8m.A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/fin/img/iStock-476433472.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/yjhjPVnVoBRdwHN6M4K4CA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/iStock-476433472.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/iIp_Wu3kGU1g.xgkM1h2rg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/fin/img/iStock-476433472.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/P0W0plbxWEWXCqskuyR6Vw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/fin/img/iStock-476433472.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/pZf49Qj6ixXFBozYGHMLWA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/fin/img/iStock-476433472.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/VGq5169SjKp3PQa.aumgzQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/fin/img/iStock-476433472.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kaXUqGGol2B1G_sAUUuHfw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/fin/img/iStock-476433472.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/wmfyKThigIrXgihL_kjiGQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/iStock-476433472.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/xf4HL3OXDzE5NW2i46DHVg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/fin/img/iStock-476433472.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "crypto_top_market_cap",
                              "slug": "crypto-top-market-cap",
                              "name": "Top Cryptos by Market Cap",
                              "description": "<p>Follow this list to discover and track Cryptocurrencies which have the highest Market Cap. This list is generated dynamically with the intraday price updates.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track Cryptocurrencies which have the highest Market Cap. This list is generated dynamically with the intraday price updates.",
                              "symbolCount": 30,
                              "followerCount": 18770,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1511293017704,
                              "updatedAt": 1626274327011,
                              "dailyPercentGain": -0.8459851703979661,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/tn.TDuD6fItXmez6sBokhA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-market-cap.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/WRIjI0hMdHkSCuSYU7Kzag--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-market-cap.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YfksCyeoxiJE3clugQJhvw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-market-cap.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Ug5h7OwIIcc9gHggTGNZsQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-market-cap.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/jLa9OnxnTCHvQW_5Vstfpg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-market-cap.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/tkNvcgYLfnZ3fOREccKzoQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-market-cap.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/UAoxPxpfA00BHCR3ctxA8A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-market-cap.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/RDbngekpPVVW9EByGmsu.w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-market-cap.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/V6HwXOuANvrg0Wb.AzzP3A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-market-cap.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "most_sold_by_activist_hedge_funds",
                              "slug": "most-sold-by-activist-hedge-funds",
                              "name": "Most Sold by Activist Hedge Funds",
                              "description": "<p>Follow this list to discover and track the stocks that were sold the most by activist hedge funds in the last quarter.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track the stocks that were sold the most by activist hedge funds in the last quarter.",
                              "symbolCount": 30,
                              "followerCount": 18290,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1524556250322,
                              "updatedAt": 1626221307260,
                              "dailyPercentGain": -0.9501862481035178,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/cBb.ZWpq4USC8RqoX3msMw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/fin/img/most-sold-activist.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/J_3IXiMUUBFP6K2Im4._IQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/most-sold-activist.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/VxvGxsN6sxW_RYPtiIqeIA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/fin/img/most-sold-activist.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ZSXtwoI8NZ9xv2OCy6iCxw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/fin/img/most-sold-activist.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Q4K3.0d130OuhhikMOhh_Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/fin/img/most-sold-activist.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/FrCnGhLJ7WrDQ1hlOAYDsQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/fin/img/most-sold-activist.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/boZBAyw3.QmwHSXzKeLTdA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/fin/img/most-sold-activist.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/TXdLwRsxXdPdsEb2lWo9eQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/most-sold-activist.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/El6sO7VTvRlSgm2x0.V11A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/fin/img/most-sold-activist.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "crowded_tech_hedge_fund_positions",
                              "slug": "crowded-tech-hedge-fund-positions",
                              "name": "Crowded Tech Hedge Fund Positions",
                              "description": "<p>Follow this list to discover and track tech stocks with highest percentage of hedge fund ownership.</p>\n<p><em>Background</em><p>The Yahoo Finance Crowded Tech Hedge Fund Positions list tracks the technology positions with the highest hedge fund concentration. Investors follow crowded hedge fund trades as a possible source of returns and an important component of risk management. Though Crowded Hedge Fund Positions have historically outperformed the market, in times of stress, they have become increasingly volatile and underperformed the market over time.</p><em>How did we choose these stocks?</em><p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists. We calculate the concentration of hedge fund holders over the total institutional ownership of all tech stocks in the investable universe. Those with the highest concentration are considered crowded hedge fund positions.</p><p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track tech stocks with highest percentage of hedge fund ownership.",
                              "symbolCount": 15,
                              "followerCount": 16113,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1477944395757,
                              "updatedAt": 1626221306453,
                              "dailyPercentGain": -1.6005291766667613,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/y3LPLUGUIyPEA.fCFJZEKg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolios/crowded-tech-hedge-fund-positions.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/gaiyJ3QsUXkmkPArhc8zWQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolios/crowded-tech-hedge-fund-positions.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/gZPH.s06gXhyrUzRGCqwdw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolios/crowded-tech-hedge-fund-positions.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/zxZi17CwD.aBNcJ_qbzRhQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolios/crowded-tech-hedge-fund-positions.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/dfbQp4FYmeC3iNNo9zOUlA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolios/crowded-tech-hedge-fund-positions.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Bwvx1Tuv65kJnY5dFXNYAg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolios/crowded-tech-hedge-fund-positions.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/cyprB8ImsKogvHnHx9OYYQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolios/crowded-tech-hedge-fund-positions.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/1X0fs_bwOwRsAGNd37JilQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolios/crowded-tech-hedge-fund-positions.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/54mBJVW63l20ZGT7_mKqzA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolios/crowded-tech-hedge-fund-positions.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "new_hedge_fund_holders",
                              "slug": "new-hedge-fund-holders",
                              "name": "New Hedge Fund Holders",
                              "description": "<p>Follow this list to discover and track stocks that have gained the highest number of new hedge fund holders in the last quarter.</p>\n<p><em>Background</em><p>The Yahoo Finance New Hedge Fund Holders list tracks those positions that have increased the most in terms of new hedge fund holders. Investors follow increasing hedge fund investor interest as a possible source of returns and an important component of risk management. Nonetheless, these movements in the market can introduce volatility and uncertainty.</p><em>How did we choose these stocks?</em><p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists. We calculate the total number of new hedge fund owners of all stocks in the investable universe every quarter. The top 30 stocks with the highest number of new hedge fund owners are listed here.</p><p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks that have gained the highest number of new hedge fund holders in the last quarter.",
                              "symbolCount": 30,
                              "followerCount": 13806,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1478013418444,
                              "updatedAt": 1626221587121,
                              "dailyPercentGain": -2.145976904567336,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ZqXjaHUBaSLyV7BtwbjSZg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/new-hedge-fund-holders.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Kk3I0oU_DYvuiv_.3P2ntA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/new-hedge-fund-holders.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/67Rw8OKhk7ac6M6kj_Zm3Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/new-hedge-fund-holders.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Yx1grdkHJ.Ae9faeViz.aQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/new-hedge-fund-holders.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/uzuKFdtvKvNDtBXaYxbBcw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/new-hedge-fund-holders.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/JDHbfMxfepbH_3FZd027zg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/new-hedge-fund-holders.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/9PHdUrWigq6f_xDZoL12KA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/new-hedge-fund-holders.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/uf0e8jnMZvQyYRC90B05cA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/new-hedge-fund-holders.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/dOWydGUVk16rDxj5D3X5Eg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/new-hedge-fund-holders.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "smart_money_stocks",
                              "slug": "smart-money-stocks",
                              "name": "Smart Money Stocks",
                              "description": "<em>Background</em><p>Professional money managers charge high fees in exchange for a portfolio of stocks which they believe will beat the market. Regulation forces them to disclose their positions periodically in SEC filings. This watch list includes some of the most popular holdings among this so-called class of “smart money.”</p><em>How did we choose these stocks?</em><p>Each of these stocks was chosen by the Yahoo Finance editorial staff.</p><em>Who made these selections?</em><p>Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of both consumer technology and the business of tech companies.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p>",
                              "shortDescription": "This basket consists of stocks widely-held by hedge funds.",
                              "symbolCount": 11,
                              "followerCount": 13522,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1476296842128,
                              "updatedAt": 1510357355257,
                              "dailyPercentGain": -0.09659486303575979,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/wMoaLBU.UCFCzgRSl3OrDg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/default/161012/smart-money-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/rGlrtQ3iUwHddEAUJ2A5xA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/smart-money-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/jT8q4Sbps8m1ShqeGH1R0w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/default/161012/smart-money-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/KDDb7ioiWEyRvjXwnEzxNQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/default/161012/smart-money-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/uYjqp5o_J4xideKDntz0ig--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/default/161012/smart-money-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Ae78wauTWz4sWMD0YUhLfg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/default/161012/smart-money-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/VDGqJ1MvFn40nmYdkrvKlA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/default/161012/smart-money-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/6F5fMT7gCJAQNzFgBDoT9A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/smart-money-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Fs36O3Z3N0dY0EcMylWQTw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/default/161012/smart-money-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "fiftytwo_wk_gain",
                              "slug": "fiftytwo-wk-gain",
                              "name": "Largest 52-Week Gains",
                              "description": "<p>Follow this list to discover and track stocks with the greatest 52-week gain. These are stocks whose price has increased the most over the past 52 weeks (percent change). This list is generated daily, the gains are based on today's closing price and limited to the top 30 stocks that meet the criteria.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks with the greatest 52-week gain. These are stocks whose price has increased the most over the past 52 weeks (percent change). This list is generated daily, the gains are based on today's closing price and limited to the top 30 stocks that meet the criteria.",
                              "symbolCount": 30,
                              "followerCount": 13298,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1506547008161,
                              "updatedAt": 1626274507155,
                              "dailyPercentGain": -5.237308017933954,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/pLmfOlVRqZRDPZQTLiZUVg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-gains.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/4ifSfzPkVtzQnUw93yRw4w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-gains.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/m0dvS2IGrA0p9DbSWQmkow--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-gains.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/MUAnaMVgdEsJ2tGC6itA3Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/finance/social/portfolio/largest52week-gains.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/G6VQ0y4VrdnnN4EBO7SyuA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-gains.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/0UhSZ6b6DRbY2d1cBGXdNw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-gains.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Q9s7R6Zvfg16gktkEAO14w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-gains.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/8QqQdridHZ5NVN1TakIluw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-gains.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kSEMPHBNu.fBgx1l3c7XfA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/finance/social/portfolio/largest52week-gains.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "the_autonomous_car",
                              "slug": "the-autonomous-car",
                              "name": "The Autonomous Car",
                              "description": "<em>Background</em><p>Self-driving cars could be one of the biggest economic game-changers in history. Unfortunately, there are no pure plays in the stock market. However, there is no shortage of publicly traded companies that have exposure to this emerging business. This watch list includes companies that are well-positioned to capitalize on the advent of the autonomous car.</p><em>How did we choose these stocks?</em><p>Each of these stocks was chosen by the Yahoo Finance editorial staff.</p><em>Who made these selections?</em><p>Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of both consumer technology and the business of tech companies.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p>",
                              "shortDescription": "This basket consists of stocks expected to benefit from self-driving cars.",
                              "symbolCount": 5,
                              "followerCount": 12501,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1476297366773,
                              "updatedAt": 1510357359653,
                              "dailyPercentGain": -0.0885696216766278,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Bf3hXO1uIJT0kgOxM76c8g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/default/161012/the-autonomous-car.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/o9uIq4NgkJzOrgSYUWCynQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/the-autonomous-car.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Szn0e6nWU.BxpmGfMoIMcQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/default/161012/the-autonomous-car.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/snZv53gWtCF2ygTfiyW9Pw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/default/161012/the-autonomous-car.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/X1Ef3SK2rQq_dVGEQMXAgw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/default/161012/the-autonomous-car.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/M_G3ej26h.HWN2mcM._mLA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/default/161012/the-autonomous-car.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/iZpMbPA7lwZTy7Jo9LvVAQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/default/161012/the-autonomous-car.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/tCbJz19nb05C.c.bk5euFA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/the-autonomous-car.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/LtZzn.5dpoP9Uvb1CkvjvA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/default/161012/the-autonomous-car.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "most_active_small_cap_stocks",
                              "slug": "most-active-small-cap-stocks",
                              "name": "Most Active Small-Cap Stocks",
                              "description": "<p>Follow this list to discover and track the most active small-cap stocks by daily trading volume. Although small-cap stocks are generally associated with more risk, they can provide investors large upside potential. <p>The list includes stocks priced at $5 or more reflecting intraday volume. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Small Cap Stars.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track the most active small-cap stocks by daily trading volume.",
                              "symbolCount": 30,
                              "followerCount": 11764,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334760973,
                              "updatedAt": 1626274327518,
                              "dailyPercentGain": -0.41965134304012097,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/xc0g_7zpF2zJqFVjfV5pNw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/most-active-small-cap-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/aqIeUKr6oKhyGvybsEfj4A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/most-active-small-cap-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Vzq.cPX9J6shiWiwjGVM7Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/most-active-small-cap-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/9wVAqoKvLsGLI9W7LsLrmw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/most-active-small-cap-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/pRfqP3rbUt5iWxHIttBAwA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/most-active-small-cap-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/RfxVODMyb4PVgYohCVqe6w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/most-active-small-cap-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/09wOThW.r_G3QRPcrbK8uw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/most-active-small-cap-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/sK59I6SRVb3IPdkp_ZKRng--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/most-active-small-cap-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/zgL13zhhynxbEGaEvfr0Zw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/most-active-small-cap-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "most_sold_by_hedge_funds",
                              "slug": "most-sold-by-hedge-funds",
                              "name": "Most Sold by Hedge Funds",
                              "description": "<p>Follow this list to discover and track the stocks that were sold the most by hedge funds in the last quarter.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track the stocks that were sold the most by hedge funds in the last quarter.",
                              "symbolCount": 30,
                              "followerCount": 11650,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1523692746645,
                              "updatedAt": 1626221307040,
                              "dailyPercentGain": -2.6771885522405356,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/qdGxhzAB6DOFlncoFLCjPg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/fin/img/mostsoldHedgeFunds.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/k93Lgu53_yYHeJpE4cljZQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/mostsoldHedgeFunds.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vJJHzvpM5VD1hgmAbQjSiw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/fin/img/mostsoldHedgeFunds.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vAcyI88tFwrUIugql6GAGQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/fin/img/mostsoldHedgeFunds.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/rSp6t6sJz8827sqUbtGb7g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/fin/img/mostsoldHedgeFunds.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/HhyUt2.PLYyxeXbHzWLDSg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/fin/img/mostsoldHedgeFunds.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/MJjk3pFoJ._7ubcrWpJqZg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/fin/img/mostsoldHedgeFunds.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/CDi0WHffiJ.mkCqZNkRusw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/mostsoldHedgeFunds.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/yTydFn53zvgCtNfawU7BtQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/fin/img/mostsoldHedgeFunds.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "crypto_top_volume_24hr",
                              "slug": "crypto-top-volume-24hr",
                              "name": "Top Cryptos by Volume (all currencies, 24hr)",
                              "description": "<p>Follow this list to discover and track Cryptocurrencies which have the highest trading volume in all currencies. This list is generated dynamically with the intraday price updates.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track Cryptocurrencies which have the highest trading volume in all currencies. This list is generated dynamically with the intraday price updates.",
                              "symbolCount": 30,
                              "followerCount": 11257,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1511981663598,
                              "updatedAt": 1626274507179,
                              "dailyPercentGain": 1.5665442865403463,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/EOHEfn4CMLdQt2Uv53IcqA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-volume.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/X7W0DX3iJjkiCZIhxg.gWA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-volume.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/GV9s70XRKs.Z5oRuDQXlyw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-volume.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/y0YWJKI2BuRy56bqhad1Cg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-volume.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Y8446V6jsZ.xhOZc9PwTww--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-volume.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/bgOAOmjxmHswHzCObfNxhw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-volume.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Iq9p0kTx5pkLITi3Cml0rw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-volume.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ieixndMtjw9aL0XlWBV_fQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-volume.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.ranbkFvZAcikcyXL9pMhA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-volume.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "10_dividends_to_trust",
                              "slug": "dividend-growth-market-leaders",
                              "name": "Dividend Growth Market Leaders",
                              "description": "<em>Background</em><p>Dividend Aristocrats are the model of consistency. To be a part of the club, a company must be a member of the S&P 500 index and have increased its annual dividend payment for the last 25 years. Many associate the group with income investing and dividend growth, but Dividend Aristocrats have beaten the broader market in total returns, notching better results over one-,three-, five-, and 10-year periods. Within this group of quality companies, our analysts like 10 in particular for investors looking for steady stable income (and some growth too!).</p><em>How did we choose these stocks?</em><p>Each of these stocks is not only a Dividend Aristocrat but also an active recommendation of a Motley Fool premium investing service as of 8/31/2016. </p><em>Who made these selections?</em><p>The Motley Fool is dedicated to helping the world invest — better. Founded in 1993 by brothers Tom and David Gardner, The Motley Fool helps millions of people attain financial freedom through our website, podcasts, books, newspaper column, radio show, mutual funds, and premium investing services.</p><em>How are these weighted?</em><p>This watchlist consists of equally weighted stocks.",
                              "shortDescription": "Companies that not only tend to beat the market, but pay you as they do.",
                              "symbolCount": 10,
                              "followerCount": 11133,
                              "brand": {
                                  "name": "the motley fool",
                                  "displayName": "The Motley Fool",
                                  "url": "http://www.fool.com/",
                                  "slug": "motley-fool",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/motley-fool-logo-new.png"
                              },
                              "createdAt": 1475695445322,
                              "updatedAt": 1483658100797,
                              "dailyPercentGain": 0.13920459650366984,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Lo_OKppaKO4TczmK0p0GTg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/10-dividends-to-trust.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/XQXVWXngu4bZlaDGX7ifUw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/10-dividends-to-trust.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Uk.R2iqXXj3hHi.cosLLAw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/10-dividends-to-trust.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/yKSJqoYTbsdYbJSiN6R8Og--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/10-dividends-to-trust.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/tjioYmVJf.VWuJ7JAwc1RA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/10-dividends-to-trust.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/XwFYe8VzPAEmSDc5W6A_jA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/10-dividends-to-trust.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vgtAKRrBXOy8HCoJZvxe3g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/10-dividends-to-trust.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/6zEVnoSCO9wRShrVXChtCg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/10-dividends-to-trust.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/xJSGAESYz8Dim5_eklbtxA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/10-dividends-to-trust.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "activist_hedge_fund_positions",
                              "slug": "activist-hedge-fund-positions",
                              "name": "Activist Hedge Fund Positions",
                              "description": "<p>Follow this list to discover and track the most popular Activist Hedge Fund positions.</p>\n<p><em>Background</em><p>The Yahoo Finance Activist Hedge Fund Positions list tracks the most popular Activist Investor positions. Activist Investors provide a unique approach to investment outcomes. Their activity is predicated on influencing the fortunes of the companies in which they invest. Nonetheless, their movements in the market can introduce volatility and uncertainty.</p><em>How did we choose these stocks?</em><p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists. This list includes the most popular holdings of Icahn Enterprises, Pershing Square Capital Management, Greenlight Capital, and Third Point Partners.</p><p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track the most popular Activist Hedge Fund positions.",
                              "symbolCount": 30,
                              "followerCount": 10674,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1477624645415,
                              "updatedAt": 1626221307404,
                              "dailyPercentGain": -0.28862635392818836,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/outiYtNIN2kh713QyCRewQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/activist-hedge-fund-positions.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/NDnwkgvd5EJXK5Fb.M8hOg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/activist-hedge-fund-positions.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/A0xAZBaiD9Wct9RPvf1.Tw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/activist-hedge-fund-positions.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ZLkFgIMXOVU6f7zrJzTwOA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/activist-hedge-fund-positions.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/e8fUcxt6WAyaZAtmbPiQ5g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/activist-hedge-fund-positions.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/zynJajp9loFdwUqONyKWtA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/activist-hedge-fund-positions.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/rczowGtUhe_Ym3zw1JhOdg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/activist-hedge-fund-positions.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/H8W3J5cadM_DTI2Lg1UjIA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/activist-hedge-fund-positions.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YptOIJ0.0xi91e50Zq3XjA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/activist-hedge-fund-positions.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "crowded_hedge_fund_positions",
                              "slug": "crowded-hedge-fund-positions",
                              "name": "Crowded Hedge Fund Positions",
                              "description": "<p>Follow this list to discover and track stocks with highest percentage of hedge fund ownership.</p>\n<p><em>Background</em><p>The Yahoo Finance Crowded Hedge Fund Positions list tracks the positions with the highest hedge fund concentration. Investors follow crowded hedge fund trades as a possible source of returns and an important component of risk management. Though Crowded Hedge Fund Positions have historically outperformed the market, in times of stress, they have become increasingly volatile and underperformed the market over time.</p><em>How did we choose these stocks?</em><p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists. We calculate the concentration of hedge fund holders over the total institutional ownership of all stocks in the investable universe. Those with the highest concentration are considered crowded hedge fund positions.</p><p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks with highest percentage of hedge fund ownership.",
                              "symbolCount": 30,
                              "followerCount": 9823,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1477623675955,
                              "updatedAt": 1626221407107,
                              "dailyPercentGain": -2.473121148257798,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/aw9uTM9K_DeZTO0VlaE6uA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/crowded-hedge-fund-positions.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Vh7VRYMzWKtwQeWVZTnKEg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/crowded-hedge-fund-positions.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/G5pQuKjrhsDwbpGUHdPjvQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/crowded-hedge-fund-positions.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.lQ2SJESFUyiB6f.2zBXwA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/crowded-hedge-fund-positions.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ll9zhwkbwd_4pJIEvJvZCQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/crowded-hedge-fund-positions.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/2LNLmsZewCQkHg10.tcz7A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/crowded-hedge-fund-positions.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/5phFbvicbcAAIH5yqG4YIQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/crowded-hedge-fund-positions.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/fHEor8kSvwvPfafQnNbYxA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/crowded-hedge-fund-positions.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/bfH_VyegniXJk8JInTlRpQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/crowded-hedge-fund-positions.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "earnings_beat",
                              "slug": "earnings-beat",
                              "name": "Biggest Earnings Beats",
                              "description": "<p>This list tracks the largest earnings beats for companies recently reporting earnings. This list is produced daily using the real-time earnings results reported by Selerity and limited to the top 30 stocks that meet the criteria.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "This list tracks the largest earnings beats for companies recently reporting earnings. This list is produced daily using the real-time earnings results reported by Selerity and limited to the top 30 stocks that meet the criteria.",
                              "symbolCount": 8,
                              "followerCount": 9792,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1506547008062,
                              "updatedAt": 1626275047121,
                              "dailyPercentGain": -2.7715931134777465,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Pv177UYiDfmEqCVT2lQwqg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-beats.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/FnNj7TqUnse9_.1ZtRSKhg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-beats.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/mCjY6At0ErRY1cY6Ax_y3Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-beats.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/wB8St0HiyC5tpSe9A8acIA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/finance/social/portfolio/earnings-beats.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/OIYirpfbzsFEHurzTivRzQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/finance/social/portfolio/earnings-beats.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/w19MsKtqvDVM1HThBZXtPQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-beats.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/JCoIjTQ6sZz7Frjh_lsVdg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-beats.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/fdJ0psQzUhrmIOeph81G1g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-beats.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/_31mPnOV1g6kmWMRwfIDPg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/finance/social/portfolio/earnings-beats.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "7_stocks_fueling_iot",
                              "slug": "stocks-fueling-internet-of-things",
                              "name": "Stocks Fueling the Internet of Things",
                              "description": "<em>Background</em><p>The internet is undeniably the most important innovation in recent history – it has enabled an open exchange of information and ideas, created a new age in commerce, and brought together people across the globe. But the Internet's connective capabilities don't end with people. The next wave of the Internet is already underway, and it is taking devices and putting them on the grid. This \"Internet of Things\" is taking everyday items and enabling them to communicate with each other, leading to real-time analytics, more efficient operations, and predictive capabilities. Of course, we need sensors, communication infrastructure, and software solutions to collect, communicate and decipher it all. All told, some experts think IoT will have an annual economic impact of over $6 billion by 2025. Here are seven companies that are poised to power this digital revolution.</p><em>How did we choose these stocks?</em><p>Each of these Internet of Things-related stocks is an active recommendation of a Motley Fool premium investing service as of 8/31/2016.</p><em>Who made these selections?</em><p>The Motley Fool is dedicated to helping the world invest — better. Founded in 1993 by brothers Tom and David Gardner, The Motley Fool helps millions of people attain financial freedom through our website, podcasts, books, newspaper column, radio show, mutual funds, and premium investing services.</p><em>How are these weighted?</em><p>This watchlist consists of equally weighted stocks.",
                              "shortDescription": "The next wave of the Internet is already underway – here are seven companies poised to power this digital revolution.",
                              "symbolCount": 7,
                              "followerCount": 9524,
                              "brand": {
                                  "name": "the motley fool",
                                  "displayName": "The Motley Fool",
                                  "url": "http://www.fool.com/",
                                  "slug": "motley-fool",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/motley-fool-logo-new.png"
                              },
                              "createdAt": 1475694179141,
                              "updatedAt": 1510357355812,
                              "dailyPercentGain": -0.5691653992231923,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/z0Iqrw.iEPxgAFlDnJnd9Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/7-stocks-fueling-iot.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/l6CGo.qNA8ZHzVIkxK7CgA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/7-stocks-fueling-iot.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/dsGHlM.qvsLA48CCKbHKMA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/7-stocks-fueling-iot.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/hkkzPAKCoZPDkAcA3Wba_w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/7-stocks-fueling-iot.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/mEneThg3WAgL7gPJ8sbiZg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/7-stocks-fueling-iot.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/IaEY5BPZIbCscLzsIvQiIw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/7-stocks-fueling-iot.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vQgeVZuGWRNvusosWp7ptA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/7-stocks-fueling-iot.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/6rvQG8XEb8MX7mo.HkdmWw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/7-stocks-fueling-iot.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/4jDTZyQci_H8HcQiERUTKg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/7-stocks-fueling-iot.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "high_yield_dividend_stocks",
                              "slug": "high-yield-dividend-stocks",
                              "name": "High-Yield Dividend Stocks",
                              "description": "<p>Follow this list to discover and track stocks that have superior dividend yield percentages. This list focuses on companies that offer the highest forward dividend yields. <p>The list includes stocks priced at $5 or more and with a three month average daily trading volume in excess of 200,000 shares. This list is generated daily and sorted by market cap. It reflects gains based on the latest closing price and is limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called High-Yield Dividends.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks that have superior dividend yield percentages.",
                              "symbolCount": 30,
                              "followerCount": 8983,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601345760598,
                              "updatedAt": 1626274327131,
                              "dailyPercentGain": -2.6327672762524723,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/e1WkqSf3PRdFj.GslrF0Aw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/high-yield-dividend-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/xaFmO3O9C7tvi1N9pP9EMA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/high-yield-dividend-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/FfOarlKox3tKvSeLGo8XEA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/high-yield-dividend-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/NO6MQcZrBdlbNNYT1gTFFQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/high-yield-dividend-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/d3I0BI7bBPk__B2ozVFLMg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/high-yield-dividend-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/5FaPwg3o5bJ45leXWNl2KA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/high-yield-dividend-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/XAUmjOiEvYSdzihddsn2Zg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/high-yield-dividend-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/sjq07hgy4lEh087oOa5xKA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/high-yield-dividend-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/PxHa.Ej8LzDWtPyhqWotQQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/high-yield-dividend-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "8_buffett_buys",
                              "slug": "8-buffett-buys",
                              "name": "Long Haul Buffett Buys",
                              "description": "<em>Background</em><p>There's a reason investors call Warren Buffett \"the Oracle of Omaha.\" For decades, Buffett has beaten the market with the investments he's made through his holding company, Berkshire Hathaway. Thankfully, every quarter Buffett and his colleagues at Berkshire have to disclose the company's holdings in a 13-F filing, so the average investor can see where \"the Oracle\" is putting his money. From his current investments, here are eight stocks we like because they're high quality businesses, built for the long haul, trading at fair prices.</p><em>How did we choose these stocks?</em><p>Each of these stocks is not only a large position of Warren Buffett's Berkshire Hathaway, but also an active recommendation of a Motley Fool premium investing service as of 8/31/2016.</p><em>Who made these selections?</em><p>The Motley Fool is dedicated to helping the world invest — better. Founded in 1993 by brothers Tom and David Gardner, The Motley Fool helps millions of people attain financial freedom through our website, podcasts, books, newspaper column, radio show, mutual funds, and premium investing services.</p><em>How are these weighted?</em><p>This watchlist consists of equally weighted stocks.",
                              "shortDescription": "Here are eight Buffett-approved businesses built for the long haul.",
                              "symbolCount": 8,
                              "followerCount": 8460,
                              "brand": {
                                  "name": "the motley fool",
                                  "displayName": "The Motley Fool",
                                  "url": "http://www.fool.com/",
                                  "slug": "motley-fool",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/motley-fool-logo-new.png"
                              },
                              "createdAt": 1475695199372,
                              "updatedAt": 1510772338116,
                              "dailyPercentGain": -0.12957898078861985,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/SL9.OAkpSylDAtSKR09YKA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/8-buffett-buys.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/oLyNAhbPLTT_vM1QDJxeqQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/8-buffett-buys.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/SrsE8f5fbvBwkAgamBqbew--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/8-buffett-buys.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/HquHE6aKQe4uGs7LWriXGQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/8-buffett-buys.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/h1Jl3uhEpINWsYA.pyLc3w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/8-buffett-buys.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/WgRmVUWjW17u7rNK4vjbRA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/8-buffett-buys.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/AmYNGGRUQOJpzRYvVqvLkw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/8-buffett-buys.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YvZNxyZFzl8Le.rPr2NxEQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/8-buffett-buys.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/4_0t1UnTpOtW6JFL5gW4hw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/8-buffett-buys.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "healthy_living",
                              "slug": "healthy-living",
                              "name": "Healthy Living",
                              "description": "<em>Background</em><p>While America is notorious for its soaring obesity rates, Gallup found last year that people in the US have been exercising more frequently in the past few years. The companies on this list track fitness goals, provide workout gear, and supply nutritious food for Americans craving a healthy lifestyle.</p><em>How did we choose these stocks?</em><p>Each of these stocks was chosen by the Yahoo Finance editorial staff.</p><em>Who made these selections?</em><p>Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of the markets, travel, technology and general business.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p>",
                              "shortDescription": "This basket consists of stocks gaining popularity from health and wellness.",
                              "symbolCount": 11,
                              "followerCount": 7819,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1478543411370,
                              "updatedAt": 1510357351057,
                              "dailyPercentGain": 0.15951766993424366,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/wRrCkMmShgB.7dmf5jQPlA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/healthy-living.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kFcihJideUs1OhE3j4wksA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/healthy-living.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Dlkdser4zZGyGcPvwvD8OQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/healthy-living.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/8QDxKhc67gtpW10v5cSXFA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/healthy-living.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vhhKl7KPqT9UT5_hNGRdjA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/healthy-living.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/IW.XDRV1J7yQSL_cD6g_og--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/healthy-living.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YNraeZ8GVNI.APazmHtOng--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/healthy-living.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/cpuzMmCQF__xct_ul4apdQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/healthy-living.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YSXvMlvRai8NgXRlzVNFkg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/healthy-living.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "the_naughty_list",
                              "slug": "sinful-stocks",
                              "name": "Sinful Stocks",
                              "description": "<em>Background</em><p>Stocks in casinos like Wynn Casinos and Las Vegas sands have surged in recent weeks, and in recent months big tobacco stocks like Philip Morris have also been up. Betting that consumers won’t want to let go of their vices like smoking and gambling, we’ve curated this list of naughty stocks — which also includes adult entertainment and alcohol.</p><em>How did we choose these stocks?</em><p>Each of these stocks was chosen by the Yahoo Finance editorial staff.</p><em>Who made these selections?</em><p>Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of both consumer technology and the business of tech companies.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p>",
                              "shortDescription": "This basket consists of stocks that serve the 18+ crowd, such as casinos, alcohol, tobacco, and strip clubs.",
                              "symbolCount": 15,
                              "followerCount": 7172,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1476298265422,
                              "updatedAt": 1483658982594,
                              "dailyPercentGain": -1.898978638333513,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/iLKqAKYOYYMDlF_93lvLqg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/default/161012/the-naughty-list.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/rlhxVwfPMBY0rZOCVLs4NA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/the-naughty-list.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/cqvhNkjMsWu0Rxwj5GGeCQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/default/161012/the-naughty-list.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/9.8L1uEUo1laMj88x2EoDQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/default/161012/the-naughty-list.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/NJYTHvQpObRlZDrNGw56OA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/default/161012/the-naughty-list.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/QpjuuIzMA3u8TGUFsOeu3A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/default/161012/the-naughty-list.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/IIfC9AFvjnZLxSZky9OMTw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/default/161012/the-naughty-list.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kaROSYa4tiKh5JwYRGI0wg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/the-naughty-list.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/NGs166hNDBJd1MqOfx6ULQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/default/161012/the-naughty-list.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "most_active_spacs",
                              "slug": "most-active-spacs",
                              "name": "Most Active SPACs",
                              "description": "<p>Follow this list to discover and track the most active SPACs by daily trading volume. Investopedia describes a special purpose acquisition company (SPAC) as \"a company with no commercial operations that is formed strictly to raise capital through an initial public offering (IPO) for the purpose of acquiring an existing company.\" They are also known as \"blank check companies.\" <p>SPACs revealed to investors and companies that there are faster and simpler ways to go public than a traditional IPO. If direct listings were previously the hype, SPACs are the new direct listing buzz today. In fact, SPACs have been around for decades and in recent years they have become more established as some notable companies have gone public through SPACs. Additionally, SPACs have attracted many high-profile names and investors which make them even more attractive.</p> <p>The list includes stocks priced at $5 or more reflecting intraday volume. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track the most active SPACs by daily trading volume.",
                              "symbolCount": 30,
                              "followerCount": 6895,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1603236335797,
                              "updatedAt": 1626274507174,
                              "dailyPercentGain": -0.7816364223214259,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/nr27srR.tBW1V3R53kbCyA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/spacs_stocks_3.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/233_rhWeQsqBk8QyObAPLw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/spacs_stocks_3.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/SW5Cj7rdTXeaTUWElmF2KQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/spacs_stocks_3.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kyHTfjRRGSv1PzztuI0PmQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/spacs_stocks_3.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/cZovAQhTtQzbqYNLbaFNAw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/spacs_stocks_3.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/l_zOzmM5bYngXmpfQcYYqw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/spacs_stocks_3.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/V2aIiJmkPtj1QH5cpZO_qg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/spacs_stocks_3.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/8HoGZPz6QRkqUWnklu60ag--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/spacs_stocks_3.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/z7jC8FJSWkwI_.8SbAC.OA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/spacs_stocks_3.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "19_brands_you_love",
                              "slug": "brands-consumers-love",
                              "name": "Brands Consumers Love",
                              "description": "<em>Background</em><p>Many of the best stock market ideas stare you in the face every day. Think of the company behind your favorite website, the company that fills up your medicine cabinet, the company that entertains you, or the company that helps you pay for it all.  Here are 19 companies you probably know, you just may love, and that you may want to consider investing in.</p><em>How did we choose these stocks?</em><p>Each of these stocks is not only a well-known consumer brand, but also an active recommendation of a Motley Fool premium investing service as of 8/31/2016.</p><em>Who made these selections?</em><p>The Motley Fool is dedicated to helping the world invest — better. Founded in 1993 by brothers Tom and David Gardner, The Motley Fool helps millions of people attain financial freedom through our website, podcasts, books, newspaper column, radio show, mutual funds, and premium investing services.</p><em>How are these weighted?</em><p>This watchlist consists of equally weighted stocks.",
                              "shortDescription": "Look no further than the supermarket shelves or the cards in your wallet for investment ideas.",
                              "symbolCount": 19,
                              "followerCount": 5923,
                              "brand": {
                                  "name": "the motley fool",
                                  "displayName": "The Motley Fool",
                                  "url": "http://www.fool.com/",
                                  "slug": "motley-fool",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/motley-fool-logo-new.png"
                              },
                              "createdAt": 1475695709467,
                              "updatedAt": 1510357351339,
                              "dailyPercentGain": -0.055468532849781656,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/9i5fNdJq_B8OVdRc9dOOyA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/19-brands-you-love.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/T6Nli8m2FvuVlU4eNXkGWw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/19-brands-you-love.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/G_X0B4jUnnJa9ZYiFp82.g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/19-brands-you-love.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/xh_kzJl5LBIurm3g_tefbA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/19-brands-you-love.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/X_0LJ3jucQf_Shl_dlGg_A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/19-brands-you-love.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/pr56NJwiSB_4MP_ZowywyA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/19-brands-you-love.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/30.4rOW0FHRHi.Sofre9iA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/19-brands-you-love.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/2j7nIXshgD17.3uz.s5mww--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/19-brands-you-love.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/oY1STkRdBdoYSohQN_WH8g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/19-brands-you-love.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "crypto_top_tokens_outstanding",
                              "slug": "crypto-top-tokens-outstanding",
                              "name": "Top Cryptos by Tokens Outstanding",
                              "description": "<p>Follow this list to discover and track Cryptocurrencies which have the highest circulating supply. This list is generated dynamically with the intraday price updates.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track Cryptocurrencies which have the highest circulating supply. This list is generated dynamically with the intraday price updates.",
                              "symbolCount": 30,
                              "followerCount": 5719,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1511293017522,
                              "updatedAt": 1626274687128,
                              "dailyPercentGain": -0.1264316614726088,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/yqTE0BrtJbPnzzvytnjHZw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-tokens-outstanding.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/hoLTDvlCC4s3yrV.ChTNvw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-tokens-outstanding.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vuF9yG7K1SjZYvrnEieHsg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-tokens-outstanding.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/nIMXyzg3GecayuWFEGA1QQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-tokens-outstanding.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/m8fZaQelcF5XU6dqnn0eyA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-tokens-outstanding.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/qWLu1hWVJW5.rTGzpYSgZw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-tokens-outstanding.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/E.fKJu5mFB6JxxXt.sHLug--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-tokens-outstanding.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/c.NZx5rwUxlLD5PRz7VMMQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-tokens-outstanding.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YLUHHqIYZBcnCBXLLLUw3w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/ae/finance/portfolio/top-cryptos-by-tokens-outstanding.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "semiconductor_stocks",
                              "slug": "semiconductor-stocks",
                              "name": "Semiconductor Stocks",
                              "description": "<p>Follow this list to discover and track semiconductor stocks that produce semiconductor chips, electronic components, networking, and wireless technologies which are critical to the development of Internet of Things (IoT), Artificial Intelligence (AI), Augmented/Virtual Reality (AR/VR), vehicle-to-vehicle communication (V2V), autonomous vehicles, and 5G connectivity. <p>The list includes stocks priced at $5 or more with a three month average daily trading volume in excess of 200,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Connected Car.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track semiconductor stocks that helps the breakthrough of future technologies.",
                              "symbolCount": 30,
                              "followerCount": 5508,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334761056,
                              "updatedAt": 1626274327087,
                              "dailyPercentGain": -0.06590166497104927,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/uS23lyu0Xhx29X1M8EsvSQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/semiconductor-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/X3pfBhDeTApVW63h2I5qAw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/semiconductor-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ZJI77PWQxEBOSPCIgyYJDw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/semiconductor-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/IV6emSwUPGVghXTzyGoKXg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/semiconductor-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kh5WrncZl8IL0MyPShxM3Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/semiconductor-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/o72n6tZx4la3.hPPgOJ1yg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/semiconductor-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ytJV_Rl0vsT.t9fg3CURQw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/semiconductor-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ctjLeBYOt2mnOzLPEAfLNQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/semiconductor-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/5VvJq2fHmye07Evs3zcvJw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/semiconductor-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "crypto_volatility_high",
                              "slug": "crypto-volatility-high",
                              "name": "Most Volatile Cryptos",
                              "description": "<p>Follow this list to track and discover the most volatile cryptocurrencies in the last 20 days. Each coin's volatility is calculated based on its standard deviation over a 20 day period.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to track and discover the most volatile cryptocurrencies in the last 20 days. Each coin's volatility is calculated based on its standard deviation over a 20 day period.",
                              "symbolCount": 30,
                              "followerCount": 5288,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1520570965669,
                              "updatedAt": 1626274507237,
                              "dailyPercentGain": 0.09970595044686627,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/JJwO0.KNlimQkEZqmdQoPQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_high.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/q2nJv8lMdsl4Mdk71utgUA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_high.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.HUxmV1bjWP.4EU3OoR8Lw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_high.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/TbDSo5LElc4bLq2jULv9Ow--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/fin/img/crypto_volatility_high.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/yNkDyqPlE_RrO1zoEsstRg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/fin/img/crypto_volatility_high.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/t7XH0r15UpW_yJw.eYeBlQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_high.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/E0r2iCcCgMd.MoEPfK2ytQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_high.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/wnGfBZqUf2doxpxtm1nmMg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_high.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/HV2X3lp08nSpCBoYMsmZjA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/fin/img/crypto_volatility_high.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "crypto_volatility_low",
                              "slug": "crypto-volatility-low",
                              "name": "Least Volatile Cryptos",
                              "description": "<p>Follow this list to track and discover the least volatile cryptocurrencies in the last 20 days. Each coin's volatility is calculated based on its standard deviation over a 20 day period.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to track and discover the least volatile cryptocurrencies in the last 20 days. Each coin's volatility is calculated based on its standard deviation over a 20 day period.",
                              "symbolCount": 30,
                              "followerCount": 5104,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1520570965058,
                              "updatedAt": 1626274327352,
                              "dailyPercentGain": 0.5504136166860298,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/CLxh2xTfOy.gIe7k69MG6w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_low.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/VOEiX4G_J542MgDWTSKbuQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_low.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/MLCWcjw5eQRTiyxxcpyeTA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_low.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/qJ3AzbMwkpNzmtlMNmytSQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/fin/img/crypto_volatility_low.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Hhn5mnRNV7pBdgMnRqd6NA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/fin/img/crypto_volatility_low.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/3c.fSzvDmUFC2AF.6m8_Lg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_low.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/HTGXb2NPNdihQib9InRUdg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_low.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/dkgfOt_xtSQhxtgn2yWnsg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/fin/img/crypto_volatility_low.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/2zRBQT8PIf9fDHQ_Wc1qeA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/fin/img/crypto_volatility_low.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "china_tech_and_internet_stocks",
                              "slug": "china-tech-and-internet-stocks",
                              "name": "China Tech and Internet Stocks",
                              "description": "<p>Follow this list to discover and track stocks in China's technology market. This list includes China's largest internet companies as measured by market capitalization. <p>The list includes stocks priced at $5 or more with a three month average daily trading volume in excess of 200,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called China Internet.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks in China's technology market.",
                              "symbolCount": 22,
                              "followerCount": 5026,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334760891,
                              "updatedAt": 1626274507147,
                              "dailyPercentGain": -1.1125606048272407,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/mCymRK9jVKfa_JoiEKXpMA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/china-tech-and-internet-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/RWzQ4mOp.UdBENa0MmxEhQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/china-tech-and-internet-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/r8w9wbo4s2.97_eLr3SMSg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/china-tech-and-internet-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/xu3Y5WbuPEW6_.K_aHDGtg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/china-tech-and-internet-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.WCwFSUjza0rp3ajdbIyVw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/china-tech-and-internet-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/HPk5hQUFPst83FHr4Y49VQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/china-tech-and-internet-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/WqFcVF_lFnHqiJ8moBlVNg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/china-tech-and-internet-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/yLy.DgMHIPsvn31kgntDXw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/china-tech-and-internet-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/hxWjY4KKwcOUNdt9ONb8kg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/china-tech-and-internet-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "oil_and_gas_stocks",
                              "slug": "oil-and-gas-stocks",
                              "name": "Oil and Gas Stocks",
                              "description": "<p>Follow this list to discover and track stocks in the oil and gas industry. This list includes the world's largest publicly traded oil and gas companies which perform roles such as drilling, refining, equipment and services, E&P, midstream, and integrated. <p>The list includes stocks priced at $5 or more with a three month average daily trading volume in excess of 200,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Frack Attack.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks in the oil and gas industry.",
                              "symbolCount": 30,
                              "followerCount": 4642,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334760953,
                              "updatedAt": 1626274867127,
                              "dailyPercentGain": -1.3059728961188013,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/KzO2UMZbazSFX4csnsDkhQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/oil-and-gas-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.FOU7n5Ayp0i_OeH2HpAiA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/oil-and-gas-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/l6oPUjf2WRFRa42t9eXP0Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/oil-and-gas-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/somxIm2Ef6j40Su9SWFRSQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/oil-and-gas-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/nHZqMlzyJgs_l9T6grZc_A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/oil-and-gas-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/fgd5tLrR1UdVu9PtfzvXnw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/oil-and-gas-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vbvEwK0wGL4ETavVelqxMw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/oil-and-gas-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/AvzInWxw0NaeFU1vzaLQuA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/oil-and-gas-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/RXZkXmQwzrzOoUOZLMvl5g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/oil-and-gas-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "biotech_and_drug_stocks",
                              "slug": "biotech-and-drug-stocks",
                              "name": "Biotech and Drug Stocks",
                              "description": "<p>Follow this list to discover and track large drug and biotechnology companies. These companies develop specialty drugs and treatments for various diseases and medical conditions. Although there are risks associated with the success of the drug, those that succeed tend to have a strong series of earnings growth over a period of time, especially when they are backed by patents. <p>The list includes stocks priced at $5 or more with a three month average daily trading volume in excess of 200,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Battling Cancer.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track large drug and biotechnology companies.",
                              "symbolCount": 30,
                              "followerCount": 4348,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334760884,
                              "updatedAt": 1626274687140,
                              "dailyPercentGain": 0.07654762316460134,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/4GkqNWGgKSN1i4sJm41hGw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/biotech-and-drug-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/hu96cCeJQHWccz2tlQeZJQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/biotech-and-drug-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/E5Rp0PFTBq6EagRCdmzHkw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/biotech-and-drug-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vNrLOLqgWk8N_OvnC_ytPQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/biotech-and-drug-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/qH7JxmA8HNG1xZaIuG5DMQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/biotech-and-drug-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/c5nwkk6618me1Hq2qGTMlw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/biotech-and-drug-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/sjlD9NbFjOBnzKw.IhSZRQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/biotech-and-drug-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/vDuwosInFBkUgebWE2PlBw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/biotech-and-drug-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/svVQftqCTBeAaOCSMS8ggA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/biotech-and-drug-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "video_game_stocks",
                              "slug": "video-game-stocks",
                              "name": "Video Game Stocks",
                              "description": "<p>Follow this list to discover and track stocks in the online gaming industry. The online gaming industry is booming, with more people joining as a form of leisure and entertainment as well as those who are joining as professional gamers. <p>The list includes stocks priced at $1 or more with a three month average daily trading volume in excess of 15,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Online Gaming World.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks in the online gaming industry.",
                              "symbolCount": 30,
                              "followerCount": 4086,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334760968,
                              "updatedAt": 1626275047128,
                              "dailyPercentGain": -3.6102082670448574,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/i23TRjatUY5mXdyOt41r.g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/video-game-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/4rnzCVXsFEYxU0vVG4UOLA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/video-game-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Mu62uv9YND3vFBSxPEajCA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/video-game-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/EMw2dxTr_yirLuPAloXLYA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/video-game-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/oLsr0VMBJBpGsidtmuwiYA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/video-game-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/fFwGzc_SUvMAeQRG_zECHQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/video-game-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/VVj8Y4D9UnzCQsXHYmXsHA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/video-game-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/sV0HK8pPSnP3IeJHNQNY6Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/video-game-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/V7gUmt78fUuL4ngOqJpinw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/video-game-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "e_commerce_stocks",
                              "slug": "e-commerce-stocks",
                              "name": "E-commerce Stocks",
                              "description": "<p>Follow this list to discover and track stocks in the e-commerce industry. As businesses and market trends are shifting online, e-commerce will continue to play a big role and grow rapidly. These businesses are exposed to a huge market and while competition is becoming more fierce, those with a large market share tend to stay affluent and strong. <p>The list includes stocks priced at $5 or more with a three month average daily trading volume in excess of 200,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Couch Commerce.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks in the e-commerce industry.",
                              "symbolCount": 30,
                              "followerCount": 4027,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334760975,
                              "updatedAt": 1626274507120,
                              "dailyPercentGain": -1.6580996364093052,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/iw8gKMLWDJcmkw_rwumxMg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/ecommerce-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/szRkMK5Nk38WgZL4XD65zg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/ecommerce-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.yAc0pDqmVybqH6Ge.UVvg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/ecommerce-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Q_6KN6pfiDv6LX4OR9mxHw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/ecommerce-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Tttv1ZtkLt378CAPfC.nBQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/ecommerce-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/WQsF2VWHhLG6DissUJQVkg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/ecommerce-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/rP6x2JKqulOGJ3j_zaubWg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/ecommerce-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/jQrcqMtAOIV3Ji4Khg9AUQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/ecommerce-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kdN_6HvBwj1mU8jSgOGy1Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/ecommerce-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "most_removed",
                              "slug": "most-removed",
                              "name": "Most Removed from Watchlists",
                              "description": "<p>Follow this list to discover and track stocks that were removed from most watchlists by Yahoo Finance Users. This list is generated daily and limited to the top 30 stocks that meet the criteria.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks that were removed from most watchlists by Yahoo Finance Users. This list is generated daily and limited to the top 30 stocks that meet the criteria.",
                              "symbolCount": 10,
                              "followerCount": 3518,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1507576184757,
                              "updatedAt": 1626274507129,
                              "dailyPercentGain": -3.6508213853607456,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/aFhu6f5iY.FLfnRswpPSCQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-removed.jpeg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/BftDZUmmbMNWe8QqrhFotg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-removed.jpeg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/qvlEG7kCyl65BPM4QQOI3A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-removed.jpeg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/EsrF_xWvRTwKogZ9nq1qgg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/finance/social/portfolio/most-removed.jpeg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/0dUx0RT6RQDxEauIsM2mLQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/finance/social/portfolio/most-removed.jpeg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/AmtpWxPhLOW0E.rrcl7Isg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-removed.jpeg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.LvRjj3ewIVxgJcljEz0LA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-removed.jpeg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/fT2Wt46LKFRu7G6XMA1ZBA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-removed.jpeg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/2B8mRqDwG.TJyKhoOMfD3Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/finance/social/portfolio/most-removed.jpeg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "most_watched",
                              "slug": "most-watched",
                              "name": "Most Watched by Yahoo Finance Users",
                              "description": "<p>Follow this list to discover and track stocks that are most watched by Yahoo Finance Users. This list is generated daily and limited to the top 30 stocks that meet the criteria.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks that are most watched by Yahoo Finance Users. This list is generated daily and limited to the top 30 stocks that meet the criteria.",
                              "symbolCount": 30,
                              "followerCount": 3443,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1606678207424,
                              "updatedAt": 1626274327108,
                              "dailyPercentGain": -0.8142146900641261,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/B5ujA9Rtlingvw97X_JtiQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-watched.png",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/M5uwhchSCKTnO.FoHUnFIw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-watched.png",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/4WYWOAlQrHqqZe2iUEG4ZA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-watched.png",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/oCig6Ze4wIuGNPc3XODFYA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/finance/social/portfolio/most-watched.png",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/jvJwwdw_lk.vdI05CQVl.Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/finance/social/portfolio/most-watched.png",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/19unEXqi7Gn7MD4HkcGA3g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-watched.png",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/NfdmWGbOHqoLJPzZt4hT2Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-watched.png",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/NmgoEazODLpxAeppor2rRw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/most-watched.png",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/BjpzcnPv.dIPorHuJL0vmg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/finance/social/portfolio/most-watched.png",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "cash_rich_companies_stocks",
                              "slug": "cash-rich-companies-stocks",
                              "name": "Cash-Rich Companies Stocks",
                              "description": "<p>Follow this list to discover and track stocks with the highest net cash balances. To calculate net cash, we subtract current liabilities from cash and cash equivalents. Companies with large cash balances tend to be more robust during times of economic uncertainty and are able to continue to finance their growth by reinvesting in their businesses and generating greater ROI. <p>The list includes stocks priced at $5 or more with a three month average daily trading volume in excess of 200,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Bullet-Proof Balance Sheets.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks with the highest net cash balances.",
                              "symbolCount": 30,
                              "followerCount": 3404,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334760950,
                              "updatedAt": 1626274867151,
                              "dailyPercentGain": 0.30347979451506363,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/1fcrKIzeYrCRGGmRsdzdPA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/cash-rich-companies-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/L0Npy4ctFoYYhFXsWUb4RQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/cash-rich-companies-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/SXwo83G40bDyl50xazllzQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/cash-rich-companies-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/bKoRqVGr2XxhP70m6gGfPQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/cash-rich-companies-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/oGlHEaGVL3zpYDct1q0YfQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/cash-rich-companies-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Gq_n7zjQt3HFY1PmuPQuiQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/cash-rich-companies-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/NiNlvsqVKns2bf9i_8rhzA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/cash-rich-companies-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/DhMTdKjQfrFRjyS5yzUQDg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/cash-rich-companies-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/e.s1vOQQyrwYC7rdaZxoEg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/cash-rich-companies-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "aging_baby_boomers",
                              "slug": "aging-baby-boomers",
                              "name": "Aging Baby Boomers",
                              "description": "<em>Background</em><p>Baby boomers — people born between 1946 and and 1964 — represent nearly 25% of the US population, and the number of Americans over 65 is projected to double by 2060. Many of the companies on this list serve senior citizens’ needs, including recreational activities, health care, and end-of-life planning.</p><em>How did we choose these stocks?</em><p>Each of these stocks was chosen by the Yahoo Finance editorial staff.</p><em>Who made these selections?</em><p>Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of the markets, travel, technology and general business.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p>",
                              "shortDescription": "This basket consists of stocks that benefit from the needs of aging baby boomers.",
                              "symbolCount": 11,
                              "followerCount": 3232,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1479225254153,
                              "updatedAt": 1510357353779,
                              "dailyPercentGain": -0.3599422527774934,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/oaqW4HxOCCmcnc5LUW4vxw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/aging-baby-boomers.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/OdCpcxMeAmVhp3osQVy6pw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/aging-baby-boomers.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/8yYiDrIxbCZj4VKP9ehewQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/aging-baby-boomers.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/tiXKTGUyPt7C92_duppy4Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/aging-baby-boomers.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/C0l7YWg6TLn4WWaLuTcY7Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/aging-baby-boomers.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/gkJZfBFjX0J3vpnn8PAWKA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/aging-baby-boomers.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/E_BG5kvLEeeQ_iSeA5t16A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/aging-baby-boomers.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/IC_aB6.7k8FVKCXhNR7pqg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/aging-baby-boomers.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ot2kEkWJDVSxqNG6FhsI0Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/aging-baby-boomers.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "bank_and_financial_services_stocks",
                              "slug": "bank-and-financial-services-stocks",
                              "name": "Bank and Financial Services Stocks",
                              "description": "<p>Follow this list to discover and track stocks in the financial services sector. <p>These stocks include those in the banking business and capital markets that usually thrive as interest rates rise. The list includes stocks priced at $5 or more with a three month average daily trading volume in excess of 200,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Rising Interest Rates.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks in the financial services sector.",
                              "symbolCount": 30,
                              "followerCount": 2905,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334760957,
                              "updatedAt": 1626274327040,
                              "dailyPercentGain": -0.5792842631354191,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/wt7ib3SSvMFk3.N9gVCcMQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/bank-and-financial-services-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/NZCl0UzwQ4LB3YypkW1pDQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/bank-and-financial-services-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/wQLQorNEOohlgCB5k4b_7A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/bank-and-financial-services-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/MvB78NZ9pObce2Mr8rFZEg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/bank-and-financial-services-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/kGgd69dPf15Sir5lUx873g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/bank-and-financial-services-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/IPCNxWKzRe2Xu1NndSpRsw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/bank-and-financial-services-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/L2yLNYBYmU6xffHsnbcfaA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/bank-and-financial-services-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/xFNYAnv7nj1v53gLfgl6zQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/bank-and-financial-services-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/oyOrYoUUWF3jqBPsuTKDyQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/bank-and-financial-services-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "new_family_economy",
                              "slug": "new-family-economy",
                              "name": "New Family Economy",
                              "description": "<em>Background</em><p>Last year, births in the US were up for the first time in seven years, and the fast-growing demographic of millennials are starting to get to the age where they’re thinking of starting a family. The companies on this watchlist provide services and products that a growing family needs, like cars, diapers and home goods.</p><em>How did we choose these stocks?</em><p>Each of these stocks was chosen by the Yahoo Finance editorial staff.</p><em>Who made these selections?</em><p>Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of the markets, travel, technology and general business.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p>",
                              "shortDescription": "This basket consists of stocks with companies that benefit from new families.",
                              "symbolCount": 13,
                              "followerCount": 2885,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1478558005596,
                              "updatedAt": 1510357357761,
                              "dailyPercentGain": -0.09643870395199995,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/bTzRbcpYlWl1qYTDT1ZO_A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/so-youre-starting-a-family.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/EatiMj31Sp1lxPpbQfRs6A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/so-youre-starting-a-family.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/4JRK9qDo6qQ5veJcnnEcRg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/so-youre-starting-a-family.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/hl5AlOZ25IPV5td6HQHMdg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/so-youre-starting-a-family.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/enyHDkvfwixI.cWn2N3KSQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/so-youre-starting-a-family.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Gu6I9.P6qrBHfbsgco7s1g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/so-youre-starting-a-family.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/c09gPqNuiaoPi5W7BXvC_A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/so-youre-starting-a-family.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/TXXZ7AIQFaVNhTUsUXD8EQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/so-youre-starting-a-family.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/b0QtEhwIY_pVd8hE5vcsOw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/so-youre-starting-a-family.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "fiftytwo_wk_loss",
                              "slug": "fiftytwo-wk-loss",
                              "name": "Largest 52-Week Losses",
                              "description": "<p>Follow this list to discover and track stocks with the greatest 52-week loss. These are stocks whose price has increased the most over the past 52 weeks (percent change). This list is generated daily, the losses are based on today's closing price and limited to the top 30 stocks that meet the criteria.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks with the greatest 52-week loss. These are stocks whose price has increased the most over the past 52 weeks (percent change). This list is generated daily, the losses are based on today's closing price and limited to the top 30 stocks that meet the criteria.",
                              "symbolCount": 30,
                              "followerCount": 2802,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1606675147459,
                              "updatedAt": 1626274867135,
                              "dailyPercentGain": -3.620001507373233,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/J_eYVW1dnUiBQDds3BGqtA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-loss.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/.UKQWvz4GfyJ.xidpDwVbA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-loss.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/fnBmYg3xKXXWldF.J9ZoIg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-loss.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/elte6ZFMHUWbgPrt9YXr4g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/finance/social/portfolio/largest52week-loss.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/DSfeTuOUij_KmDwWRRKFJQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-loss.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/yXOzBHxam4.3vgqQYtUiYw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-loss.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/jjs4lwKCXkliAsaVsEpAUQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-loss.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/nt9zdSkv0p.e7hjhP1NE7Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/largest52week-loss.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/GqAUWIG8roKkUKPZ3OSwTg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/finance/social/portfolio/largest52week-loss.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "romance_industry",
                              "slug": "romance-industry",
                              "name": "Romance Industry",
                              "description": "<em>Background</em><p>This watch list looks at the new intersection of love and technology, acknowledging that meeting “the one” can come after swiping right on Tinder and that date night can consist of an evening watching Netflix. This list also includes companies involved with traditional date-night rituals like movies, luxury hotels, and flowers.</p><em>How did we choose these stocks?</em><p>Each of these stocks was chosen by the Yahoo Finance editorial staff.</p><em>Who made these selections?</em><p>Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of the markets, travel, technology and general business.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p>",
                              "shortDescription": "This basket consists of companies tied to modern and traditional romance in the US.",
                              "symbolCount": 12,
                              "followerCount": 2773,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1478557967223,
                              "updatedAt": 1510357353950,
                              "dailyPercentGain": -1.1400033739141395,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/NnetcImIfzRsgLjXvBpbuQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/finance/portfolio/date-night.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/HnvLDAZOJridQxLvzGKOFA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/date-night.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/FDwdBtcQs4T4.UUngU5AEQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/date-night.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/R66BgAeBYQPIqgeb5cod0Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/finance/portfolio/date-night.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YtB349Dl.pKulFPh93qDQQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/finance/portfolio/date-night.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/hwV5_lRKQ_IRvh0idJb3kw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/finance/portfolio/date-night.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ueyc_Q_95OM8Ycl.XdxxtA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/finance/portfolio/date-night.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/86r4aYC9ROlWMzW2PHfWBQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/finance/portfolio/date-night.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/GoxYaAKsqJKndDUtDjW_ow--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/finance/portfolio/date-night.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "stocks_with_the_highest_short_interest",
                              "slug": "stocks-with-the-highest-short-interest",
                              "name": "Most Shorted Stocks",
                              "description": "<p>Follow this list to discover and track stocks with the highest short interest. This list is based on a summary of the consolidated market short interest positions listed on the Nasdaq and NYSE and is released every 2 weeks. <p>The list includes stocks priced at $1 or more with a three month average daily trading volume in excess of 200,000 shares.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Find the list of top stocks with the highest short interest. Discover stocks you may want to trade and invest in.",
                              "symbolCount": 30,
                              "followerCount": 2725,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1615423252134,
                              "updatedAt": 1626274327110,
                              "dailyPercentGain": -2.2203277301176803,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/0axzyWcJasXBjz3B7het7w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/Stocks-With-the-Highest-Short-Interest.jpeg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ikHrg3GrNGky7z6yHzjgnw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/Stocks-With-the-Highest-Short-Interest.jpeg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/RXyBPMIrkAKdpf554bYBzQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/Stocks-With-the-Highest-Short-Interest.jpeg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/u_iQYzPndF9a7vIVRte24g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/Stocks-With-the-Highest-Short-Interest.jpeg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/8cl5itfBxNFrsSwZpQI_NQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/Stocks-With-the-Highest-Short-Interest.jpeg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/DZgCvc05cwW9kBefIqqvaA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/Stocks-With-the-Highest-Short-Interest.jpeg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/o7WvHDhQShyoaEm2hniW2A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/Stocks-With-the-Highest-Short-Interest.jpeg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/rfsNB4p.O4Jf0JEuNoUxOg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/Stocks-With-the-Highest-Short-Interest.jpeg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/LcNpJhCtHz3vAU1UnZFemw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/Stocks-With-the-Highest-Short-Interest.jpeg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "medical_device_and_research_stocks",
                              "slug": "medical-device-and-research-stocks",
                              "name": "Medical Device and Research Stocks",
                              "description": "<p>Follow this list to discover and track stocks in the medical device and research industry. These stocks include the largest companies in the medical device and research industry by market cap. <p>The list includes stocks priced at $5 or more with a three month average daily trading volume in excess of 100,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Minimally Invasive Surgery.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks in the medical device and research industry.",
                              "symbolCount": 30,
                              "followerCount": 2684,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1606678387441,
                              "updatedAt": 1626275227128,
                              "dailyPercentGain": -1.0501325266858115,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/CLsPk6USJ7xpW.8H5PY2sg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/medical-device-and-research-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Uv3rlOWaWKQNilv1NbG7fQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/medical-device-and-research-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/_JiOcpq5oHo02h9PTmA08g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/medical-device-and-research-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ZUPdRR064Ibt234yY9fjfg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/medical-device-and-research-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ouKdYnL0RUzK7lnVX3A_EQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/medical-device-and-research-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/s7D27YfFkDIqwyKvdQddsw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/medical-device-and-research-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/S6AA06ToOtRF.tfj.k.4AA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/medical-device-and-research-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/Z4L2Vd21Lw80H2h9CS4ccA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/medical-device-and-research-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ovNYlOLHqCbby5GdhCOaAw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/medical-device-and-research-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "5SSSFLJVWAMDKUGZM5HLSSBNAY",
                              "pfId": "earnings_miss",
                              "slug": "earnings-miss",
                              "name": "Biggest Earnings Misses",
                              "description": "<p>This list tracks the largest earnings misses for companies recently reporting earnings. This list is produced daily using the real-time earnings results reported by Selerity and limited to the top 30 stocks that meet the criteria.</p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "This list tracks the largest earnings misses for companies recently reporting earnings. This list is produced daily using the real-time earnings results reported by Selerity and limited to the top 30 stocks that meet the criteria.",
                              "symbolCount": 2,
                              "followerCount": 2413,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1506547008048,
                              "updatedAt": 1626275047103,
                              "dailyPercentGain": -3.201711491175945,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/lEDr3XBxoWXYINTSrvfilg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-misses.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/OU3cKsUU84tKUtHRK8cO7Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-misses.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/9U8FsL0cbtCPNkDTwAxu8g--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-misses.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/YjTIkp.1OcyzRrAW6Agc8w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/uc/finance/social/portfolio/earnings-misses.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/xXlVBZUNGmxUcAKwfED8PA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/uc/finance/social/portfolio/earnings-misses.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/uUyhSOJeUBPOnSPdTcu9SQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-misses.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/f94HFk9maJ4zxpqZVgwT2w--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-misses.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/ANHvBb8LeS0Ix8TpHle.vg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/uc/finance/social/portfolio/earnings-misses.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/scx1urv51qwAPeIc0hYmsw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/uc/finance/social/portfolio/earnings-misses.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "women_at_the_helm",
                              "slug": "women-at-the-helm",
                              "name": "Women at the Helm",
                              "description": "<em>Background</em><p>Studies have shown that women-led companies tend to outperform companies led by men, from earnings and stock-price performance perspectives. Still, women only hold the top spot in 4.2% of the Fortune 500. This list includes the few major corporations in America with women at the helm.</p><em>How did we choose these stocks?</em><p>Each of these stocks was chosen by the Yahoo Finance editorial staff.</p><em>Who made these selections?</em><p>Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of both consumer technology and the business of tech companies.</p><em>How are these weighted?</em><p>The stocks in this watchlist are weighted equally.</p>",
                              "shortDescription": "This basket consists of S&P 500 companies with women at the helm.",
                              "symbolCount": 20,
                              "followerCount": 1986,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1476298818261,
                              "updatedAt": 1510357358227,
                              "dailyPercentGain": -0.13173388988619955,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/f.m57u.tgwJZ0BLOsg0lRA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/dh/ap/default/161012/women-at-the-helm.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/JLSSQJRGzWqtKjA2P4WVDw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/women-at-the-helm.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/wUHW34Ffzl25weqoNqvC2A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/dh/ap/default/161012/women-at-the-helm.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/bNTRfPQTXV2nY9Uoa8uEdQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/dh/ap/default/161012/women-at-the-helm.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/qvYOK3ji6TsvY7D31q7EEA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/dh/ap/default/161012/women-at-the-helm.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/4W.yka6OUsick.8pEbghOg--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/dh/ap/default/161012/women-at-the-helm.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/BnqObuWEDKeQ77bU7w0zKA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/dh/ap/default/161012/women-at-the-helm.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/g6EFRmT_4zhZ816cxMSm3A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/dh/ap/default/161012/women-at-the-helm.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/3WSJ5OxJz4Y1aoSxl368fA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/dh/ap/default/161012/women-at-the-helm.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          },
                          {
                              "userId": "X3NJ2A7VDSABUI4URBWME2PZNM",
                              "pfId": "electronic_trading_stocks",
                              "slug": "electronic-trading-stocks",
                              "name": "Electronic Trading Stocks",
                              "description": "<p>Follow this list to discover and track stocks that provide electronic trading services and financial data based on the demand for low-cost, fast trade executions. <p>The list includes stocks priced at $5 or more with a three month average daily trading volume in excess of 15,000 shares. This list is generated daily and sorted by market cap; the gains are based on the latest closing price and limited to the top 30 stocks that meet the criteria.</p> <p>This watchlist is similar to a discontinued watchlist called Electronic Trading.</p></p>\n<p><em>Background</em>\n<p>Yahoo Finance employs sophisticated algorithms to monitor and detect trends in the Global Financial Markets. We bring these insights to you in the form of watchlists.</p>\n<p>Find other winning investment ideas with the <a href=https://finance.yahoo.com/screener/new>Yahoo Finance Screener</a>.</p>\n<em>How are these weighted?</em>\n<p>The stocks in this watchlist are weighted equally.</p></p>",
                              "shortDescription": "Follow this list to discover and track stocks that provide electronic trading services and financial data based on the demand for low-cost, fast trade executions.",
                              "symbolCount": 13,
                              "followerCount": 1380,
                              "brand": {
                                  "name": "yahoo finance",
                                  "displayName": "Yahoo Finance",
                                  "url": "https://finance.yahoo.com/",
                                  "slug": "yahoo-finance",
                                  "logoUrl": "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png"
                              },
                              "createdAt": 1601334760955,
                              "updatedAt": 1626274687120,
                              "dailyPercentGain": -0.1728947517336827,
                              "backgroundImage": {
                                  "ios:size=small": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/jLEDWWQiDu0xPR6Zu2TOmA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTYwO2g9MTYwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/electronic-trading-stocks.jpg",
                                      "width": 160,
                                      "height": 160
                                  },
                                  "ios:size=card_small_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/d4FPveX.zM2Qke1Ul.7AGQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/electronic-trading-stocks.jpg",
                                      "width": 320,
                                      "height": 530
                                  },
                                  "ios:size=extra_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/DD.DVsqswcZI5LQgWeWAGw--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NjQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/electronic-trading-stocks.jpg",
                                      "width": 640,
                                      "height": 640
                                  },
                                  "ios:size=ipad_portrait_retina": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/hYyfMtwyB4MmxvQZQOeXvA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTUzNjtoPTE1MzY7/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/electronic-trading-stocks.jpg",
                                      "width": 1536,
                                      "height": 1536
                                  },
                                  "ios:size=ipad_portrait": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/srX7fBpr49bDLNxsdi.jhA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NzY4O2g9NzY4Ow--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/electronic-trading-stocks.jpg",
                                      "width": 768,
                                      "height": 768
                                  },
                                  "ios:size=square_large": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/TGFuhtzOSjPcm6kKNGgh5Q--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MTQwO2g9MTQwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/electronic-trading-stocks.jpg",
                                      "width": 140,
                                      "height": 140
                                  },
                                  "ios:size=medium": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/UuNiNSaxoRAMny6vpYIDkQ--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9MzIwO2g9MzIwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/electronic-trading-stocks.jpg",
                                      "width": 320,
                                      "height": 320
                                  },
                                  "ios:size=large_new_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/UMFQtnThKYFkAoyTLarhQA--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9NTMwOw--/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/electronic-trading-stocks.jpg",
                                      "width": 640,
                                      "height": 530
                                  },
                                  "ios:size=card_large_fixed": {
                                      "url": "https://s.yimg.com/lo/api/res/1.2/l5RUFtfU9JTLKNZkGXxU8A--/cT05MDtmaT1maWxsO2FwcGlkPXl2aWRlb2ZlZWRzO3c9NjQwO2g9MTA2MDs-/https://s.yimg.com/cv/apiv2/fin/img/assets/watchlist/electronic-trading-stocks.jpg",
                                      "width": 640,
                                      "height": 1060
                                  }
                              },
                              "isFollowed": false
                          }
                      ],
                      "selectedSortOption": {
                          "sortField": "FOLLOWER_COUNT",
                          "sortOrder": "DESC",
                          "sortTitle": "Most Popular"
                      },
                      "otherSortOptions": [
                          {
                              "sortField": "DAILY_GAIN",
                              "sortOrder": null,
                              "sortTitle": "Day's Gain"
                          },
                          {
                              "sortField": "CREATION_TIME",
                              "sortOrder": null,
                              "sortTitle": "Date Created"
                          },
                          {
                              "sortField": "UPDATED_AT",
                              "sortOrder": null,
                              "sortTitle": "Last Updated"
                          }
                      ]
                  }
              ],
              "error": null
          }
      }
  
        //const data = await response.json();
        console.log(data);
  
        return data;
      };
  
      try {
        const cartData = await fetchData();
        dispatch(
            stockServiceActions.getTopWatchLists({
              watchLists: cartData.finance || {}
            
          })
        );
      } catch (error) {
       //Need to modify state to show error
      }
    };
  };

  
  