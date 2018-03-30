import {Injectable} from '@angular/core';
import {Profile} from "../../models/profile";

function str_match(a: string, b: string) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a.indexOf(b) != -1
    || b.indexOf(a) != -1
}

@Injectable()
export class Items {
  items: Profile[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor() {
    let items: Profile[] = [
      {
        "name": "Beeno Tung",
        "profilePic": "assets/img/speakers/beeno.svg",
        "about": "Technical Consultant.",
        "note":"<a href='https://beeno-tung.surge.sh'>Homepage</a>",
        tags: ['Frontend', 'Backend', 'Full-stack', 'P2P', 'Matching', 'Developer', 'IT'
          , 'Tangle', 'Blockchain'
          , 'Programmer'
          , 'Education'
        ]
      },
      {
        "name": "Anne Yip",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Digital Marketer.",
        tags: [
          'Media'
          , 'Facebook'
          , 'Digital Marketing'
        ]
      },
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let item of items) {
      this.items.push(item);
    }
  }

  fullQuery(q) {
    console.log('full query', q);
    return this.items.filter(item => {

      for (let k in item) {
        const v = item[k];
        if (typeof v === "string" && typeof q === "string" && str_match(v, q)) {
          return item;
        } else if (q == v) {
          return item;
        } else if (Array.isArray(v)) {
          return (v as string[]).some(s => str_match(s, q))
        }
      }
      return null;
    })
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Profile) {
    this.items.push(item);
  }

  delete(item: Profile) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
