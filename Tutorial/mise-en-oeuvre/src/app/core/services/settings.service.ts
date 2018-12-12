import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Hjson from 'hjson';
import { Logger } from './logger.service';
import { environment } from 'src/environments/environment';

// export const Hjson = require('hjson');
/**
 * App config interface
 *
 * @interface IConfig
 */
interface IConfig {
    version: string,
    apiUrl: string
}

/**
 * Service to handle global application settings
 *
 * @export
 * @class SettingsService
 */
@Injectable()
export class SettingsService {

    private _config: IConfig;

    /**
     * Read settings
     *
     * @readonly
     * @type {IConfig}
     * @memberof SettingsService
     */
    get config(): IConfig {
        return this._config;
    }

    /**
     *Creates an instance of SettingsService.
     * @param {HttpClient} http
     * @memberof SettingsService
     */
    constructor(
        private http: HttpClient,
        private logger: Logger
    ) { }


    /**
     * Load Application Settings
     *
     * @memberof SettingsService
     */
    load(): void {
        const headers = new HttpHeaders()
            .append('Cache-Control', 'no-cache')
            .append('Pragma', 'no-cache');

        this.http.get(`resources/settings.${environment.envName}.hjson`, { headers: headers, responseType: 'text' }).subscribe(
            res => this._config = Hjson.parse(res),
            (error) => { throw error; },
            () => this.logger.trace('Settings loaded')
        );
    }
}