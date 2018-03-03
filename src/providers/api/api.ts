import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
const _DB = "DB";

@Injectable()
export class Api {

  _db: any;

  constructor(public storage: Storage) {
    this.getDB();
  }

  async getDB() {
    if (!this._db) {
      this._db = await this.storage.get(_DB);
      if (!this._db) {
        this._db = {};
      }
    }
    return this._db;
  }

  storeDB() {
    if (this._db) {
      return this.storage.set(_DB, this._db);
    }
  }

  async get(k, defaultValue?) {
    const db = await this.getDB();
    if (k in db) {
      return db[k]
    }
    return defaultValue;
  }

  async set(k, v) {
    const db = await this.getDB();
    db[k] = v;
    return this.storeDB();
  }
}
