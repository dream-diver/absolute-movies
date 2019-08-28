import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { IonContent } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

import { AdmobFreeService } from '../../services/admobfree.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { IonSlides } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
declare var require: any;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSlides) slider: IonSlides;
  homeVisibleFlag: any = true;
  results = [];       // This is the array which contains category segment page getAllBangladeshPosts
  resultsBd = [];       // This is the array which contains category segment page getAllBangladeshPosts
  resultsInt = [];
  resultsEconomy = [];
  resultsEnt = [];
  resultsTech = [];
  resultsSports = [];
  resultsLifeStyle = [];
  resultsEducation = [];
  resultsCrime = [];
  resultsCulture = [];
  resultsVivid = [];
  resultsBusiness = [];
  resultsHoroscope = [];
  allPosts = [];
  test = [];
  weather = [];
  jamunaTvYoutube = [];
  category: any = 'home';
  url: string;
  page = 1;
  pageBd = 1;
  pageInt = 1;
  pageEconomy = 1;
  pageSports = 1;
  pageLifeStyle = 1;
  pageEducation = 1;
  pageCrime = 1;
  pageCulture = 1;
  pageVivid = 1;
  pageBusiness = 1;
  pageHoroscope = 1;
  pageEnt = 1;
  pageTech = 1;
  resultFlag = true;
  bdFlag = true;
  intFlag = true;
  economyFlag = true;
  sportsFlag = true;
  lifeStyleFlag = true;
  educationFlag = true;
  crimeFlag = true;
  cultureFlag = true;
  vividFlag = true;
  businessFlag = true;
  horoscopeFlag = true;
  entFlag = true;
  techFlag = true;
  lat = 0;
  long = 0;
  coords: any;
  temp: any;
  humidity: any;
  wind: any;
  speed: any;
  feelsLike: any;
  description: any;
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy: number;
  geoAddress: string;
  yOffset: any;

  weatherIconUrl: any;
  weatherFlag: any = false;

  categories = ['704', '658', '729', '726'] // 704= jugantor, 658=bdnews24 729=bengal-beats, 726=prothom-alo
  dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(
    private router: Router,
    private newsApi: NewsService,
    public event: Events,
    private iab: InAppBrowser,
    public loadingController: LoadingController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public platform: Platform,
    public toastController: ToastController,
    private admobFreeService: AdmobFreeService) {

        this.showAutoHideLoader();
        // this.getPosts(this.page);
        // this.getJamunaTvVideos();
        this.home();
        // this.timeDisplay = document.getElementById("nowTime");
        setInterval(() => {
          this.refreshTime();
        }, 1000);

        this.event.publish('scrollToTop', this.content);
  }

  ngOnInit() {
    if (this.platform.is('cordova')) {
      this.admobFreeService.BannerAd();
    }
  }

  //////////////////////// Imranul Hasan ///////////////////////
  nowTime;
  currentTab: any = 0;
  animationStart: any = 1;
  refreshTime() {
    moment.locale('bn');
    this.nowTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  goToSegment(buttonNumber: number, side: string) {
    let nextButtonNumber = buttonNumber;
    let buttonWidth = document.getElementById(String(buttonNumber)).offsetWidth;

    document.getElementById(String(nextButtonNumber)).click();
    document.getElementById('segment').scrollLeft = nextButtonNumber * buttonWidth - buttonWidth;

  }
  animationDivContent() {
      let element = document.querySelector('ion-content#ionContent');
      if (this.animationStart == 1) {
        element.classList.add('animated', 'zoomInUp');
        element.addEventListener('animationend', () => {
        element.classList.remove('animated', 'zoomInUp');
        this.animationStart = 0;
        });
      }
  }
 animationDiv() {
  if (!document.getElementById("ionContent")) {
  let interval = setInterval(() => {
          if (document.getElementById("ionContent")) {
                clearInterval(interval);
                this.animationDivContent();
          }
        }, 10);
  } else {
      this.animationDivContent();
  }
 }
  segmentWiseSwipe(side: string, currentTab: any) {
    // $("ion-content").css({left:this.platform.width()}).animate({"left":"0px"}, "slow");

       this.goToSegment(currentTab, side);
  }
  swipeLeftPress($event) {
    console.log('swipeLeftPress', $event);

    this.currentTab = (this.currentTab >= 14 ? 14 : this.currentTab + 1);
    console.log('this.currentTab', this.currentTab + 1)
    this.segmentWiseSwipe('left', this.currentTab);
  }
  swipeRightPress($event) {
    console.log('swipeRightPress', $event);
    this.currentTab = (this.currentTab <= 0 ? 0 : this.currentTab - 1);
    this.segmentWiseSwipe('right', this.currentTab);
  }

  //////////////////////// Imranul Hasan end ///////////////////////

  // Get current coordinates of device
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.geoAccuracy = resp.coords.accuracy;
      this.weatherFlag = true;
      this.curentWeatherReport(this.geoLatitude, this.geoLongitude, this.geoAccuracy)
      // this.getGeoencoder(this.geoLatitude,this.geoLongitude);
    }).catch((error) => {
      this.toastMsg('Please ALLOW geolocation service', 2000);
      this.weatherFlag = false;
    });
  }

  /**
   *
   * @param lat
   * @param long
   * Calls the current weather api
   */
  curentWeatherReport(lat, long, accuracy) {
    this.newsApi.getweatherReport(lat, long, accuracy).subscribe(result => {
      this.temp = result['main'].temp;
      this.humidity = result['main'].humidity;
      this.wind = result['wind'].speed;
      var icon = result['weather'][0].icon
      this.description = result['weather'][0].description

      this.weatherIconUrl = 'http://openweathermap.org/img/w/' + icon + '.png'

      const Feels = require('feels');
      const config = {
        temp: this.temp,
        humidity: this.humidity,
        speed: this.wind,
        units: {
          temp: 'c',
          speed: 'mps'
        }
      };

      this.feelsLike = new Feels(config).like();
      this.feelsLike = Math.floor(this.feelsLike);

    });
  }
  /**
   *
   * @param lat
   * @param long
   * Calls the jamuna tv youtube channel api
   */
  getJamunaTvVideos() {

    this.newsApi.getjamunaTvYoutube().subscribe(result => {
      this.animationDiv();
      let lengthOfRes = Object.keys(result['items']).length;
      for (var i = 0; i < lengthOfRes; i++) {
        this.jamunaTvYoutube.push(result['items'][i])
      }
    });
  }

  /**
   *
   * Infinite scroll for todays news section on home page
   */
  loadAllNews(event) {
    setTimeout(() => {
      this.getPosts(this.page);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }
  /**
   *
   * Infinite scroll for bangladesh news section on home page
   */
  loadAllSportsNews(event) {
    setTimeout(() => {
      this.getSportsPosts(this.pageSports);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }
  /**
   *
   * Infinite scroll for bangladesh news section on home page
   */
  loadAllLifeStyleNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getLifeStylePosts(this.pageLifeStyle);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }


  /**
   *
   * Infinite scroll for education news section on home page
   */
  loadAllEducationNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getEducationPosts(this.pageEducation);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }


  /**
   *
   * Infinite scroll for crime news section on home page
   */
  loadAllCrimeNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getCrimePosts(this.pageCrime);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }


    /**
   *
   * Infinite scroll for Culture news section on home page
   */
  loadAllCultureNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getCulturePosts(this.pageCulture);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }


  /**
   *
   * Infinite scroll for Culture news section on home page
   */
  loadAllVividNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getVividPosts(this.pageVivid);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }


    /**
   *
   * Infinite scroll for Culture news section on home page
   */
  loadAllBusinessNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getBusinessPosts(this.pageBusiness);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }



  /**
   *
   * Infinite scroll for Culture news section on home page
   */
  loadAllHoroscopeNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getHoroscopePosts(this.pageHoroscope);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }


  /**
   *
   * Infinite scroll for bangladesh news section on home page
   */
  loadAllBangladeshNews(event) {
    setTimeout(() => {
      this.getBangladeshPosts(this.pageBd);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }
  /**
   *
   * Infinite scroll for International news section on home page
   */
  loadAllInternationalNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getInternationalPosts(this.pageInt);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }

  /**
   *
   * Infinite scroll for Economy news section on home page
   */
  loadAllEconomyNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getEconomyPosts(this.pageEconomy);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }


  /**
   *
   * Infinite scroll for entertainment news section on home page
   */
  loadAllEntertainmentNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getEntertainmentPosts(this.pageEnt);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }
  /**
   *
   * Infinite scroll for Tech news section on home page
   */
  loadAllTechNews(event) {
    setTimeout(() => {
      console.log('Done');
      this.getTechPosts(this.pageTech);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.resultFlag == false) {
        event.target.disabled = true;
      }
    }, 1500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  /**
   *
   * Convert date into bengali
   */

  dateToBengali(date) {
    var event = new Date(date)
    return event.toLocaleDateString('bn', this.dateOptions)
  }

  /**
   * Gets all the posts
   */
  getPosts(page) {
    this.newsApi.getAllPosts(page).subscribe(result => {

      if (result) {
        let lengthOfRes = Object.keys(result).length;
        for (var i = 0; i < lengthOfRes; i++) {
          moment.locale('bn');
          result[i]['date'] = moment(result[i]['date']).format('MMMM Do YYYY');
          this.allPosts.push(result[i]);

          console.log("allPosts[i].date", this.allPosts[i].date)
        }
        this.page = this.page + 1;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.allPosts) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);
        res.link = y['1'];
      }
    });

    // this.page=this.page+1;
  }


  goToSource(url) {
    this.iab.create(url, '_self', 'location=yes')
  }
  goToYoutube(videoId) {
    var youtubeURL = 'https://www.youtube.com/watch?v=' + videoId;
    this.iab.create(youtubeURL, '_self', 'location=yes')
  }

  /**
   * Gets all the posts
   */
  getBangladeshPosts(page) {
    // This flag ensures that the loader does not load on each infinite scroll
    if (this.bdFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllBangladeshPosts(page).subscribe(result => {
      if (result) {

        this.animationDiv();

        let lengthOfRes = Object.keys(result).length;

        for (var i = 0; i < lengthOfRes; i++) {
          this.resultsBd.push(result[i])
        }
        this.pageBd = this.pageBd + 1;
        this.bdFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsBd) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);
        res.link = y['1'];
      }
    });

  }
  /**
   * Gets all the posts
   */
  getSportsPosts(page) {
    // This flag ensures that the loader does not load on each infinite scroll
    if (this.sportsFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllSportsPosts(page).subscribe(result => {
      if (result) {

        this.animationDiv();
        let lengthOfRes = Object.keys(result).length;

        for (var i = 0; i < lengthOfRes; i++) {
          this.resultsSports.push(result[i])
        }
        this.pageSports = this.pageSports + 1;
        this.sportsFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsSports) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);
        res.link = y['1'];
      }

    });

  }
  /**
   * Gets all the posts
   */
  getLifeStylePosts(page) {
    // This flag ensures that the loader does not load on each infinite scroll
    if (this.lifeStyleFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllLifeStylePosts(page).subscribe(result => {
      if (result) {

            this.animationDiv();
            let lengthOfRes = Object.keys(result).length;

            for (var i = 0; i < lengthOfRes; i++) {
          this.resultsLifeStyle.push(result[i])
        }
            this.pageLifeStyle = this.pageLifeStyle + 1;
            this.lifeStyleFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsLifeStyle) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);

        res.link = y['1'];
      }

    });

  }


  /**
   * Gets all the posts
   */
  getEducationPosts(page) {
    // This flag ensures that the loader does not load on each infinite scroll
    if (this.educationFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllEducationPosts(page).subscribe(result => {
      if (result) {

            this.animationDiv();
            let lengthOfRes = Object.keys(result).length;

            for (var i = 0; i < lengthOfRes; i++) {
          this.resultsEducation.push(result[i])
        }
            this.pageEducation = this.pageEducation + 1;
            this.educationFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsEducation) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);

        res.link = y['1'];
      }

    });

  }





  /**
   * Gets all the posts
   */
  getCrimePosts(page) {
    // This flag ensures that the loader does not load on each infinite scroll
    if (this.crimeFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllCrimePosts(page).subscribe(result => {
      if (result) {

            this.animationDiv();
            let lengthOfRes = Object.keys(result).length;

            for (var i = 0; i < lengthOfRes; i++) {
          this.resultsCrime.push(result[i])
        }
            this.pageCrime = this.pageCrime + 1;
            this.crimeFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsCrime) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);

        res.link = y['1'];
      }

    });

  } // end of crime


    /**
   * Gets all the posts
   */
  getCulturePosts(page) {
    // This flag ensures that the loader does not load on each infinite scroll
    if (this.cultureFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllCulturePosts(page).subscribe(result => {
      if (result) {

            this.animationDiv();
            let lengthOfRes = Object.keys(result).length;

            for (var i = 0; i < lengthOfRes; i++) {
          this.resultsCulture.push(result[i])
        }
            this.pageCulture = this.pageCulture + 1;
            this.cultureFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsCulture) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);

        res.link = y['1'];
      }

    });

  } // end of culture


  /**
   * Gets all the posts
   */
  getVividPosts(page) {
    // This flag ensures that the loader does not load on each infinite scroll
    if (this.vividFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllVividPosts(page).subscribe(result => {
      if (result) {

            this.animationDiv();
            let lengthOfRes = Object.keys(result).length;

            for (var i = 0; i < lengthOfRes; i++) {
          this.resultsVivid.push(result[i])
        }
            this.pageVivid = this.pageVivid + 1;
            this.vividFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsVivid) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);

        res.link = y['1'];
      }

    });

  } // end of vivid




  /**
   * Gets all the posts
   */
  getBusinessPosts(page) {
    // This flag ensures that the loader does not load on each infinite scroll
    if (this.businessFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllBusinessPosts(page).subscribe(result => {
      if (result) {

            this.animationDiv();
            let lengthOfRes = Object.keys(result).length;

            for (var i = 0; i < lengthOfRes; i++) {
          this.resultsBusiness.push(result[i])
        }
            this.pageBusiness = this.pageBusiness + 1;
            this.businessFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsBusiness) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);

        res.link = y['1'];
      }

    });

  } // end of business



  /**
   * Gets all the posts
   */
  getHoroscopePosts(page) {
    // This flag ensures that the loader does not load on each infinite scroll
    if (this.horoscopeFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllHoroscopePosts(page).subscribe(result => {
      if (result) {

            this.animationDiv();
            let lengthOfRes = Object.keys(result).length;

            for (var i = 0; i < lengthOfRes; i++) {
          this.resultsHoroscope.push(result[i])
        }
            this.pageHoroscope = this.pageHoroscope + 1;
            this.horoscopeFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsHoroscope) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);

        res.link = y['1'];
      }

    });

  } // end of horoscope

  /**
   * Gets all international the posts
   */
  getInternationalPosts(page) {
    if (this.intFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllInternationalPosts(page).subscribe(result => {
      if (result) {
        this.animationDiv();
        let lengthOfRes = Object.keys(result).length;

        for (var i = 0; i < lengthOfRes; i++) {
          this.resultsInt.push(result[i])
        }

        this.pageInt = this.pageInt + 1;
        this.intFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsInt) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);
        res.link = y['1'];
      }

    });

  }



  /**
   * Gets all international the posts
   */
  getEconomyPosts(page) {
    if (this.economyFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllEconomyPosts(page).subscribe(result => {
      if (result) {
        this.animationDiv();
        let lengthOfRes = Object.keys(result).length;

        for (var i = 0; i < lengthOfRes; i++) {
          this.resultsEconomy.push(result[i]);
        }

        this.pageEconomy = this.pageEconomy + 1;
        this.economyFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsEconomy) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);
        res.link = y['1'];
      }

    });

  }



  /**
   * Gets all entertainment the posts
   */
  getEntertainmentPosts(page) {
    if (this.entFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllEntertainmentPosts(page).subscribe(result => {
      if (result) {
        this.animationDiv();
        let lengthOfRes = Object.keys(result).length;

        for (var i = 0; i < lengthOfRes; i++) {
          this.resultsEnt.push(result[i])
        }

        this.pageEnt = this.pageEnt + 1;
        this.entFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsEnt) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);
        res.link = y['1'];
      }

    });

  }
  /**
   * Gets all tech the posts
   */
  getTechPosts(page) {
    if (this.techFlag) {
      this.showAutoHideLoader();
    }

    // Get the information from the API
    this.newsApi.getAllTechPosts(page).subscribe(result => {
      if (result) {
        this.animationDiv();
        let lengthOfRes = Object.keys(result).length;

        for (var i = 0; i < lengthOfRes; i++) {
          this.resultsTech.push(result[i])
        }
        this.pageTech = this.pageTech + 1;
        this.techFlag = false;
      } else {
        this.resultFlag = false;
      }

      for (let res of this.resultsTech) {
        let x = res.content.rendered;
        let pat = /href="([^\'\"]+)/g;
        let y = pat.exec(x);

        res.link = y['1'];
      }
    });


  }


  doRefresh(event) {


    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2500);
  }

  home() {
    this.allPosts = [];
    this.animationStart = 1;
    this.animationDiv();
    this.getGeolocation();
    this.currentTab = 0;
    this.homeVisibleFlag = true;
    this.getPosts(this.page);
  }

  videos() {
    this.jamunaTvYoutube = [];
    this.animationStart = 1;
    this.currentTab = 1;
    this.content.scrollToTop();
    this.getJamunaTvVideos()
    this.homeVisibleFlag = false;
  }
  bangladesh() {
    this.resultsBd = [];
    this.animationStart = 1;
    this.currentTab = 2;
    this.content.scrollToTop();
    this.getBangladeshPosts(this.pageBd)
    this.homeVisibleFlag = false;
  }
  international() {
    this.resultsInt = [];
    this.animationStart = 1;
    this.currentTab = 3;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getInternationalPosts(this.pageInt);

  }
  economy() {
    this.resultsEconomy = [];
    this.animationStart = 1;
    this.currentTab = 4;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getEconomyPosts(this.pageEconomy);

  }
  sports() {
    this.resultsSports = [];
    this.animationStart = 1;
    this.currentTab = 5;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getSportsPosts(this.pageSports);

  }
  entertainment() {
    this.resultsEnt = [];
    this.animationStart = 1;
    this.currentTab = 6;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getEntertainmentPosts(this.pageEnt);
  }
  tech() {
    this.resultsTech = [];
    this.animationStart = 1;
    this.currentTab = 7;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getTechPosts(this.pageTech);
  }
  lifeStyle() {
    this.resultsLifeStyle = [];
    this.animationStart = 1;
    this.currentTab = 8;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getLifeStylePosts(this.pageLifeStyle);
  }
  education() {
    this.resultsEducation = [];
    this.animationStart = 1;
    this.currentTab = 9;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getEducationPosts(this.pageEducation);
  }
  crime() {
    this.resultsCrime = [];
    this.animationStart = 1;
    this.currentTab = 10;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getCrimePosts(this.pageCrime);
  }
  culture() {
    this.resultsCulture = [];
    this.animationStart = 1;
    this.currentTab = 11;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getCulturePosts(this.pageCulture);
  }
  vivid() {
    this.resultsVivid = [];
    this.animationStart = 1;
    this.currentTab = 12;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getVividPosts(this.pageVivid);
  }
  business() {
    this.resultsBusiness = [];
    this.animationStart = 1;
    this.currentTab = 13;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getBusinessPosts(this.pageBusiness);
  }
  horoscope() {
    this.resultsHoroscope = [];
    this.animationStart = 1;
    this.currentTab = 14;
    this.content.scrollToTop();
    this.homeVisibleFlag = false;
    this.getHoroscopePosts(this.pageHoroscope);
  }

  ionViewDidEnter() {
    this.content.scrollToTop();
  }


  /**
   * Ionic Loading Controller
   */

  showAutoHideLoader() {
    this.loadingController.create({
      spinner: 'crescent',
      cssClass: 'loader',
      duration: 800
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading...');
      });
    });
  }


  /**
   *
   * @param msg the toast message which is going to be displayed
   *
   * This is a generic toast message display function
   */

  async toastMsg(msg, duration) {

    const toast = await this.toastController.create({
      message: msg,
      duration: duration
    });
    toast.present();

  }


}
