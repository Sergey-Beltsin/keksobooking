'use strict';

var avatarsNum = [1, 2, 3, 4, 5, 6, 7, 8];
var offerTitle = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var offerType = ['palace', 'flat', 'house', 'bungalo'];
var offerRooms = [1, 2, 3, 4, 5];
var offerCheckin = ['12:00', '13:00', '14:00'];
var offerCheckout = ['12:00', '13:00', '14:00'];
var offerFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

// var generateAvatars = function(path, endPath) {
//     for (let i = 0; i < avatarsNum.length; i++) {
//         var avatarNum = path + avatarsNum[i] + endPath;
//     }
//     return avatarNum;
// }

var ads = [
    {
        author: {
            avatar: 'img/avatars/user01.png'
        },
        
        offer: {
            title: 'Большая уютная квартира',
            address: '300, 350',
            price: 280000,
            type: 'flat',
            rooms: 3,
            guests: 13,
            checkin: '13:00',
            checkout: '14:00',
            features: ['wifi ', 'washer ', 'elevator'],
            description: '',
            photos: ['"http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'],
            location: {
                x: 300,
                y: 350
            }
        }
    },
    {
        author: {
            avatar: 'img/avatars/user02.png'
        },
        
        offer: {
            title: 'Маленькая неуютная квартира',
            address: '250, 540',
            price: 80000,
            type: 'flat',
            rooms: 1,
            guests: 3,
            checkin: '13:00',
            checkout: '14:00',
            features: ['wifi ', 'washer ', 'elevator'],
            description: '',
            photos: ['"http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'],
            location: {
                x: 250,
                y: 540
            }
        }
    },
    {
        author: {
            avatar: 'img/avatars/user03.png'
        },
        
        offer: {
            title: 'Огромный прекрасный дворец',
            address: '565, 480',
            price: 970000,
            type: 'palace',
            rooms: 5,
            guests: 25,
            checkin: '13:00',
            checkout: '14:00',
            features: ['wifi', ' dishwasher', ' parking', ' washer', ' elevator', ' conditioner'],
            description: '',
            photos: ['"http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'],
            location: {
                x: 565,
                y: 480
            }
        }
    },
    {
        author: {
            avatar: 'img/avatars/user04.png'
        },
        
        offer: {
            title: 'Маленький ужасный дворец',
            address: '540, 380',
            price: 165000,
            type: 'palace',
            rooms: 2,
            guests: 8,
            checkin: '13:00',
            checkout: '14:00',
            features: ['wifi'],
            description: '',
            photos: ['"http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'],
            location: {
                x: 540,
                y: 380
            }
        }
    },
    {
        author: {
            avatar: 'img/avatars/user05.png'
        },
        
        offer: {
            title: 'Некрасивый негостеприимный домик',
            address: '345, 245',
            price: 120000,
            type: 'house',
            rooms: 4,
            guests: 15,
            checkin: '13:00',
            checkout: '14:00',
            features: ['washer', ' elevator'],
            description: '',
            photos: ['"http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'],
            location: {
                x: 345,
                y: 245
            }
        }
    },
    {
        author: {
            avatar: 'img/avatars/user06.png'
        },
        
        offer: {
            title: 'Уютное бунгало далеко от моря',
            address: '470, 350',
            price: 450000,
            type: 'bungalo',
            rooms: 3,
            guests: 10,
            checkin: '13:00',
            checkout: '14:00',
            features: ['wifi', ' parking', ' washer', ' conditioner'],
            description: '',
            photos: ['"http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'],
            location: {
                x: 470,
                y: 230
            }
        }
    },
    {
        author: {
            avatar: 'img/avatars/user07.png'
        },
        
        offer: {
            title: 'Неуютное бунгало по колено в воде',
            address: '785, 350',
            price: 350000,
            type: 'bungalo',
            rooms: 2,
            guests: 7,
            checkin: '12:00',
            checkout: '13:00',
            features: ['wifi', ' washer', ' elevator'],
            description: '',
            photos: ['"http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'],
            location: {
                x: 785,
                y: 350
            }
        }
    },
    {
        author: {
            avatar: 'img/avatars/user08.png'
        },
        
        offer: {
            title: 'Огромный прекрасный дворец',
            address: '680, 475',
            price: 670000,
            type: 'palace',
            rooms: 4,
            guests: 22,
            checkin: '13:00',
            checkout: '14:00',
            features: ['wifi', ' parking', ' conditioner'],
            description: '',
            photos: ['"http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'],
            location: {
                x: 680,
                y: 475
            }
        }
    }
]

// console.log(ads[0].author.avatar);

var adTemplate = document.querySelector('#map__template')
    .content
    .querySelector('.map__card__wrapper');

for (let i = 0; i < ads.length; i++) {
    var adElement = adTemplate.cloneNode(true);

    // adElement.querySelector('.map__card').style.cssText = `left: ${ads[i].offer.location.x}px;`;
    adElement.querySelector('.map__card').setAttribute('style', `top: ${ads[i].offer.location.y}px; left: ${ads[i].offer.location.x}px; display: none;`);
    adElement.querySelector('.map__pin').setAttribute('style', `top: ${ads[i].offer.location.y}px; left: ${ads[i].offer.location.x}px; display: none;`);
    adElement.querySelector('.popup__avatar').setAttribute('src', ads[i].author.avatar);
    adElement.querySelector('.popup__avatar').setAttribute('alt', ads[i].offer.title);
    adElement.querySelector('.map__pin img').setAttribute('src', ads[i].author.avatar);
    adElement.querySelector('.map__pin img').setAttribute('alt', ads[i].offer.title);
    adElement.querySelector('.popup__title').textContent = ads[i].offer.title;
    adElement.querySelector('.popup__text--address').textContent = ads[i].offer.address;
    adElement.querySelector('.popup__text--price').textContent = `${ads[i].offer.price}₽\ночь`;
    adElement.querySelector('.popup__type').textContent = ads[i].offer.type;
    adElement.querySelector('.popup__text--capacity').textContent = `${ads[i].offer.rooms} комнаты для ${ads[i].offer.guests} гостей`;
    adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ads[i].offer.checkin}, выезд до ${ads[i].offer.checkout}.`;
    adElement.querySelector('.popup__features').textContent = ads[i].offer.features;
    adElement.querySelector('.popup__description').textContent = ads[i].offer.description;

    document.querySelector('.map__pins').appendChild(adElement);
}

var map = document.querySelector('.map');
var mapCard = document.querySelectorAll('.map__card');
var mapClose = document.querySelectorAll('.popup__close');
var uploadFile = document.querySelector('.notice__header');
var forms = document.querySelectorAll('.form__element');

for (let i = 0; i < forms.length; i++) {
    forms[i].setAttribute('disabled', '');
}
uploadFile.setAttribute('disabled', '');

function cancelInactiveState() {
    for (let i = 0; i < forms.length; i++) {
        forms[i].removeAttribute('disabled', '');
    }

    for (let i = 0; i < ads.length; i++) {
        var mapCardButton = document.querySelectorAll('.map__pin');
        mapCardButton[i + 1].setAttribute('style', `top: ${ads[i].offer.location.y}px; left: ${ads[i].offer.location.x}px; display: block;`);
        mapCardButton[i + 1].addEventListener('click', function() {
            for (let j = 0; j < ads.length; j++) {
                if (i == j) {
                    for (let k = 0; k < mapCard.length; k++) {
                        mapCard[k].setAttribute('style', `display: none;`);
                    }
                    mapCard[i].setAttribute('style', `display: block;`);
                }
            }
        });
    }

    for (let i = 0; i < mapClose.length; i++) {
        mapClose[i].addEventListener('click', function() {
            for (let k = 0; k < mapCard.length; k++) {
                if (i == k) {
                    mapCard[k].setAttribute('style', 'display: none;');
                }
            }
        });
    }

    uploadFile.removeAttribute('disabled', '');

    document.querySelector('.notice__form').style.opacity = '1';
}

// document.querySelector('.map__pin--main').addEventListener('mouseup', function() {
//     map.classList.remove('map--faded');
//     cancelInactiveState();
// });

var mapPin = document.querySelector('.map__pin');

mapPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    map.classList.remove('map--faded');
    cancelInactiveState();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var mapPinPositionX = mapPin.style.top = (mapPin.offsetTop - shift.y) + 'px';
      var mapPinPositionY = mapPin.style.left = (mapPin.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      var mapPinPosition = [mapPin.style.top, mapPin.style.left];
      var mapPinPositionNum = mapPinPosition.filter((item) => {
        return !isNaN(Number(item));
      });
      console.log(mapPinPositionNum);
      document.querySelector('#address').setAttribute('value', mapPinPosition);
      console.log(`top: ${mapPin.style.top}`);
      console.log(`left: ${mapPin.style.left}`);

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });