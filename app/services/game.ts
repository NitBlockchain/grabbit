
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root',
})
export class GameProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello SessionProvider Provider');
  }

  ////guser
  gUSER(token: any, user: any, lat: any, lng: any) {
    let DATA = {
      token: token,
      user: user,
      lat: lat,
      lng: lng
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/gUSER', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  ////business
  bizSAVE(token: string, user: string, bizname: string, address: string, phone: string, story: string, email: string, bType: string, lat: any, lng: any) {
    let DATA = {
      token: token,
      user: user,
      bizName: bizname,
      phone: phone,
      story: story,
      email: email,
      bType: bType,
      lat: lat,
      lng: lng
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/bSAVE', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  ////game
  bGAMES(lat, lng) {
    let DATA = {
      // token: user_token,
      // user_id: user_id,
      // gType: gType,
      // gID: gID,
      lat: lat,
      lng: lng
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/bGAMES', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  onGrab(token: any, user: any, game: any) {
    let DATA = {
      token: token,
      user: user,
      game: game,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/grab', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  onSlap(token: any, user: any, game: any) {
    let DATA = {
      token: token,
      user: user,
      game: game,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/slap', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  onSneak(token: any, user: any, game: any) {
    let DATA = {
      token: token,
      user: user,
      game: game,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/sneak', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  onAvatar(token: any, user: any, avatar: any) {
    let DATA = {
      token: token,
      user: user,
      avatar: avatar,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/avatar', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  onEdit(token: any, user: any, text: any, type: any) {
    let DATA = {
      token: token,
      user: user,
      text: text,
      type: type
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/profile/edit', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  onTimer(token: any, user: any, gID: any) {
    let DATA = {
      token: token,
      user: user,
      gID: gID,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/timer', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  play(token: any, user: any, gID: any) {
    let DATA = {
      token: token,
      user: user,
      gID: gID,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/play', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  login(number: string, device: string, lat: string, lng: string) {
    let DATA = {
      number: number,
      device: device,
      lat: lat,
      lng: lng
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/login', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  loginComplete(code: string, device: string) {
    let DATA = {
      code: code,
      device: device,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/loginComplete', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  bYELP(token: string, user: string, lat: string, lng: string, yelp: string) {
    let DATA = {
      user: user,
      token: token,
      yelp: yelp,
      lat: lat,
      lng: lng
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/bYelp', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  vYELP(token: string, user: string, code: string) {
    let DATA = {
      user: user,
      token: token,
      code: code,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/vYelp', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  gCREATE(token: string, user: string, prizeType: string, gameTitle: string, maxPlayers: any, prize: string, prize2: string, price: any, total: any) {
    let DATA = {
      user: user,
      token: token,
      prizeType: prizeType,
      gameTitile: gameTitle,
      maxPlayers: maxPlayers,
      prize: prize,
      prize2: prize2,
      price: price,
      total: total
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/gCreate', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }


  onPay(token: string, user: string, grabs: string, slaps: string, sneaks: string, payType) {
    let DATA = {
      user: user,
      token: token,
      grabs: grabs,
      slaps: slaps,
      sneaks: sneaks,
      payType: payType,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('https://app.grabbit.cheap/onPay', DATA, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return observableThrowError(errMsg);
  }

}
