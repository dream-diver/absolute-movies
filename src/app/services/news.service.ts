import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";
import 'rxjs/add/observable/forkJoin';
import * as Global from '../../globalSettings';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})


export class NewsService {

  apiURL = Global.API_SLUG;
  jamunaTvYouTubeURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCPKMoCzd_WwQ6HeQAFWITwVnL1-YDBxgE&channelId=UCN6sm8iHiPd0cnoUardDAnw&part=snippet,id&order=date&maxResults=20";
  data: any = [];
  constructor(public http: HttpClient) {
  }

  /**
   * Get all the posts
   */
  getweatherReport(lat, long, accuracy) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=metric&appid=40e08730efcea491d4b72d2d32656090"
    return this.http.get(apiUrl);
  }

  /**
   * Jamuna Tv Youtube channel api call
   */
  getjamunaTvYoutube() {
    return this.http.get(this.jamunaTvYouTubeURL);
  }


  /**
   * Get all the posts
   */
  getAllPosts(page) {
    console.log("NEWS SERVICE PAGE NUM");
    console.log(page);

    return this.http.get(Global.API_SLUG + 'posts?categories_exclude=262,16&page=' + page);
  }
  /**
   * Get all the posts from LifeStyle category
   * http://ahayder.me/wp-json/wp/v2/posts?
   */
  getAllLifeStylePosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=34,35,90,31,61,62,176,182,31,69,68,235&page=' + page);
  }

  /**
* Get all the posts from Education category
* http://ahayder.me/wp-json/wp/v2/posts?
*/
  getAllEducationPosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=33&page=' + page);
  }


  /**
   * Get all the posts from Sports category
   * http://ahayder.me/wp-json/wp/v2/posts?
   */
  getAllSportsPosts(page) {
    console.log("Page page page")
    console.log(page)
    return this.http.get(Global.API_SLUG + 
      'posts?tags=19,27,192,53,125,205,109,231,163,49,46,126,140,191,50,193,258,145,48,150,138,190,265,209,93&page=' + page);
  }
  /**
   * Get all the posts from Bangladesh category
   * http://ahayder.me/wp-json/wp/v2/posts?
   */
  getAllBangladeshPosts(page) {
    console.log("Page page page")
    console.log(page)
    return this.http.get(Global.API_SLUG + 'posts?tags=25,13,9,29,21,241,160,133&page=' + page);
  }
  /**
   * Get all the posts from Tech category
   * http://ahayder.me/wp-json/wp/v2/posts?
   */
  getAllTechPosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=28,183,252,270,271,332&page=' + page);
  }

  /**
   * Get all the posts from antorjatik category
   */
  getAllInternationalPosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=32&page=' + page);
  }

  /**
   * Get all the posts from orthoniti category
   */
  getAllEconomyPosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=22,26,44,256,257,242,170&page=' + page);
  }

  /**
   * Get all the posts from Binodon category
   * http://ahayder.me/wp-json/wp/v2/posts?
   */
  getAllEntertainmentPosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=10,147,55,155,54,154&page=' + page);
  }


  getAllCrimePosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=78,131,132,82,220,170&page=' + page);
  }
  
  
  getAllCulturePosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=267,207,206,111,203,54&page=' + page);
  }
  
  
  getAllVividPosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=164,178,92,165,230,233,114,67,36,180,154,194,209&page=' + page);
  }
  
  
  getAllBusinessPosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=264,274,86,87,26,44,263,257&page=' + page);
  }
  
  
  getAllHoroscopePosts(page) {
    return this.http.get(Global.API_SLUG + 'posts?tags=195,196&page=' + page);
  }

}
