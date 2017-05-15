var _ = require('lodash')

var people = [{
  "id": 1,
  "first_name": "Carlos",
  "last_name": "Martin",
  "email": "cmartin0@addtoany.com",
  "gender": "Male",
  "ip_address": "251.213.167.251"
}, {
  "id": 2,
  "first_name": "Diane",
  "last_name": "Price",
  "email": "dprice1@naver.com",
  "gender": "Female",
  "ip_address": "134.225.18.131"
}, {
  "id": 3,
  "first_name": "Julia",
  "last_name": "Welch",
  "email": "jwelch2@canalblog.com",
  "gender": "Female",
  "ip_address": "32.132.224.204"
}, {
  "id": 4,
  "first_name": "Margaret",
  "last_name": "Hart",
  "email": "mhart3@squidoo.com",
  "gender": "Female",
  "ip_address": "135.18.215.9"
}, {
  "id": 5,
  "first_name": "Patrick",
  "last_name": "Taylor",
  "email": "ptaylor4@over-blog.com",
  "gender": "Male",
  "ip_address": "222.158.72.40"
}, {
  "id": 6,
  "first_name": "Roger",
  "last_name": "Cox",
  "email": "rcox5@reddit.com",
  "gender": "Male",
  "ip_address": "170.29.125.62"
}, {
  "id": 7,
  "first_name": "Steven",
  "last_name": "Garcia",
  "email": "sgarcia6@tiny.cc",
  "gender": "Male",
  "ip_address": "166.218.62.13"
}, {
  "id": 8,
  "first_name": "Evelyn",
  "last_name": "Rose",
  "email": "erose7@wix.com",
  "gender": "Female",
  "ip_address": "163.235.237.187"
}, {
  "id": 9,
  "first_name": "Albert",
  "last_name": "Banks",
  "email": "abanks8@phpbb.com",
  "gender": "Male",
  "ip_address": "125.106.52.109"
}, {
  "id": 10,
  "first_name": "Lawrence",
  "last_name": "Martin",
  "email": "lmartin9@chicagotribune.com",
  "gender": "Male",
  "ip_address": "232.34.112.191"
}, {
  "id": 11,
  "first_name": "Philip",
  "last_name": "Johnston",
  "email": "pjohnstona@google.ru",
  "gender": "Male",
  "ip_address": "60.245.57.175"
}, {
  "id": 12,
  "first_name": "Patricia",
  "last_name": "James",
  "email": "pjamesb@issuu.com",
  "gender": "Female",
  "ip_address": "26.235.35.56"
}, {
  "id": 13,
  "first_name": "Sarah",
  "last_name": "Perez",
  "email": "sperezc@usatoday.com",
  "gender": "Female",
  "ip_address": "63.212.74.245"
}, {
  "id": 14,
  "first_name": "Andrea",
  "last_name": "Medina",
  "email": "amedinad@wiley.com",
  "gender": "Female",
  "ip_address": "16.76.239.234"
}, {
  "id": 15,
  "first_name": "Victor",
  "last_name": "Torres",
  "email": "vtorrese@java.com",
  "gender": "Male",
  "ip_address": "12.214.106.227"
}, {
  "id": 16,
  "first_name": "Jean",
  "last_name": "Lewis",
  "email": "jlewisf@indiegogo.com",
  "gender": "Female",
  "ip_address": "106.9.6.208"
}, {
  "id": 17,
  "first_name": "Kelly",
  "last_name": "Long",
  "email": "klongg@godaddy.com",
  "gender": "Female",
  "ip_address": "15.228.51.7"
}, {
  "id": 18,
  "first_name": "Joseph",
  "last_name": "Hansen",
  "email": "jhansenh@uiuc.edu",
  "gender": "Male",
  "ip_address": "68.32.61.187"
}, {
  "id": 19,
  "first_name": "Donald",
  "last_name": "Davis",
  "email": "ddavisi@shareasale.com",
  "gender": "Male",
  "ip_address": "239.133.227.217"
}, {
  "id": 20,
  "first_name": "Billy",
  "last_name": "Hernandez",
  "email": "bhernandezj@ucoz.ru",
  "gender": "Male",
  "ip_address": "53.129.37.211"
}];

var femaleCount = _.filter(people, {gender: 'Female'}).length

console.log(`There are ${femaleCount} ladies.`)