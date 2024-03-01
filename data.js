let products = [
  {
    name: `10.2" Планшет Apple iPad 10.2 2021, 64 ГБ, Wi-Fi, серый космос`,
    price: 27270,
    rate: 1,
    description: `Диагональ
      10,2"
      Передача данных
      только Wi-Fi
      Память
      64 ГБ
      Серия
      iPad (9-го поколения)
      Цвет
      Space Gray`,
    sale: 0,
    img: `https://appleshops.ru/image/cache/catalog/Apple/Apple%20iPad%2010.2%202021/iPad_10_2_Grey-500x500.jpg_500.webp`,
    id: 4387,
    category: "ipad",
  },
  {
    name: `10.9" Планшет Apple iPad 10.9 2022, 64 ГБ, Wi-Fi, желтый`,
    price: 38380,
    rate: 2,
    description: `Диагональ
      10,9"
      Передача данных
      только Wi-Fi
      Память
      64 ГБ
      Серия
      iPad (10-го поколения)
      Цвет
      Yellow`,
    sale: 0,
    img: `https://appleshops.ru/image/cache/catalog/Apple/Apple%20iPad%2010.9%202022/iPad-10-9-2022-yellow-500x500.jpg_500.webp`,
    id: 4394,
    category: "ipad",
  },
  {
    name: `10.9" Планшет Apple iPad 10.9 2022, 64 ГБ, Wi-Fi, розовый`,
    price: 38470,
    rate: 5,
    description: `Диагональ
      10,9"
      Передача данных
      только Wi-Fi
      Память
      64 ГБ
      Серия
      iPad (10-го поколения)
      Цвет
      Pink`,
    sale: 20,
    img: `https://appleshops.ru/image/cache/catalog/Apple/Apple%20iPad%2010.9%202022/iPad-10_9-2022-pink-500x500.jpg_500.webp`,
    id: 4397,
    category: "ipad",
  },
  {
    name: `10.9" Планшет Apple iPad 10.9 2022, 64 ГБ, Wi-Fi, серебристый`,
    price: 39090,
    rate: 3,
    description: `Диагональ
      10,9"
      Передача данных
      только Wi-Fi
      Память
      64 ГБ
      Серия
      iPad (10-го поколения)
      Цвет
      Silver`,
    sale: 10,
    img: `https://appleshops.ru/image/cache/catalog/Apple/Apple%20iPad%2010.9%202022/iPad-10_9-2022-white-500x500.jpg_500.webp`,
    id: 4396,
    category: "ipad",
  },
  {
    name: `8.3" Планшет Apple iPad mini 2021, 64 ГБ, Wi-Fi, сияющая звезда`,
    price: 41200,
    rate: 4,
    description: `Диагональ
      8,3"
      Передача данных
      только Wi-Fi
      Разъёмы и интерфейсы
      USB‑C
      Память
      64 ГБ
      Серия
      iPad mini (6-го поколения)
      `,
    sale: 0,
    img: `https://appleshops.ru/image/cache/catalog/Apple/iPad%20Mini%206/mini-6-white-500x500.jpg_500.webp`,
    id: 4371,
    category: "ipad",
  },
  {
    name: `Apple iPhone SE 2020 64 ГБ, (PRODUCT)RED`,
    price: 16455,
    rate: 5,
    description: `Диагональ
      4,7"
      Память
      64 ГБ
      Серия
      iPhone SE (2-го поколения)
      Цвет
      (PRODUCT)RED`,
    sale: 50,
    img: `https://appleshops.ru/image/cache/catalog/Apple/iPhone%20SE%202020/se2020red-500x500.png_500.webp`,
    id: 4086,
    category: "iPhone",
  },
  {
    name: `Смартфон Apple iPhone X 256 ГБ, 1 SIM, серебристый`,
    price: 19470,
    rate: 1,
    description: `Диагональ
      5,8"
      Память
      256 ГБ
      Серия
      iPhone X
      Цвет
      Silver`,
    sale: 0,
    img: `https://appleshops.ru/image/cache/catalog/Apple/iPhone%20X/3.png_500.webp`,
    id: 4216,
    category: "iPhone",
  },
  {
    name: `Apple iPhone Xr 128 ГБ, коралл`,
    price: 24870,
    rate: 2,
    description: `Диагональ
      6,1"
      Память
      128 ГБ
      Серия
      iPhone XR
      Цвет
      Coral`,
    sale: 0,
    img: `https://appleshops.ru/image/cache/catalog/Apple/iPhone%20Xr/XR-coral-500x500.jpg_500.webp`,
    id: 4198,
    category: "iPnone",
  },
  {
    name: `Apple iPhone 11 128 ГБ, зеленый`,
    price: 30470,
    rate: 5,
    description: `Диагональ
      6,1"
      Память
      128 ГБ
      Серия
      iPhone 11
      Цвет
      Green
      `,
    sale: 60,
    img: `https://appleshops.ru/image/cache/catalog/Apple/iPhone%2011/iphone11Green-500x500.jpg_500.webp`,
    id: 4181,
    category: "iPhone",
  },
  {
    name: `Apple iPhone 12 mini 64 ГБ, черный`,
    price: 31435,
    rate: 0,
    description: `Диагональ
      5,4"
      Память
      64 ГБ
      Серия
      iPhone 12 mini
      Цвет
      Black`,
    sale: 0,
    img: `https://appleshops.ru/image/cache/catalog/Apple/iPhone%2012%20mini/iphone12-black-500x500.jpg_500.webp`,
    id: 4144,
    category: "iPhone",
  },
  {
    name: `Apple iPhone 12 64 ГБ, белый`,
    price: 34870,
    rate: 5,
    description: `Диагональ
      6,1"
      Память
      64 ГБ
      Серия
      iPhone 12
      Цвет
      White`,
    sale: 10,
    img: `https://appleshops.ru/image/cache/catalog/Apple/iPhone%2012/iphone12-white-500x500.jpg_500.webp`,
    id: 4131,
    category: "iPhone",
  },
  {
    name: `Apple MacBook Air 13" (M2, 8C CPU/8C GPU, 2022) MLY33, 8 ГБ, 256 ГБ SSD, полуночный черный`,
    price: 99090,
    rate: 1,
    description: `Диагональ
      13,6’’
      Объем оперативной памяти
      8 ГБ
      Память
      256 ГБ
      Серия
      MacBook Air
      Цвет
      Midnight`,
    sale: 10,
    img: `https://appleshops.ru/image/cache/catalog/Apple/MacBook%20Air%2013%202022/macbook-air-13-midnight-2022-1.jpg_500.webp`,
    id: 4575,
    category: "mac",
  },
  {
    name: `Apple MacBook Air 13 (M1, 2020) MGND3 8 ГБ, 256 ГБ SSD, золотой`,
    price: 75040,
    rate: 4,
    description: `Диагональ
      13"
      Объем оперативной памяти
      8 ГБ
      Память
      256 ГБ
      Цвет
      Gold`,
    sale: 20,
    img: `https://appleshops.ru/image/cache/catalog/Apple/MacBook%20Air%2013%202020/macbook-air-13-gold-M1-1.jpg_500.webp`,
    id: 4553,
    category: "mac",
  },
  {
    name: `Ноутбук Apple MacBook Air 15 2023 2880x1864, Apple M2, RAM 8 ГБ, SSD 512 ГБ, Apple graphics 10-core, macOS, MQKX3, midnight`,
    price: 128980,
    rate: 1,
    description: `Диагональ
      15,3"
      Передача данных
      
  Bluetooth, Wi-Fi
      Память
      512 ГБ
      Серия
      Macbook Air
      Цвет
      midnight`,
    sale: 0,
    img: `https://appleshops.ru/image/cache/catalog/Apple/Apple%20MacBook%20Air%2015%202023/apple-macbook-air-15-midnight-1.jpg_500.webp`,
    id: 4674,
    category: "mac",
  },
  {
    name: `Apple MacBook Pro 13" (M2, 8C CPU/10C GPU, 2022) MNEH3, 8 ГБ, 256 ГБ SSD, серый космос`,
    price: 103970,
    rate: 3,
    description: `Диагональ
      13,3’’
      Объем оперативной памяти
      8 ГБ
      Память
      256 ГБ
      Серия
      MacBook Pro
      Цвет
      Space Gray`,
    sale: 0,
    img: `https://appleshops.ru/image/cache/catalog/Apple/MacBook%20Pro%2013/macbook-pro-13-space-gray-1.jpg_500.webp`,
    id: 4566,
    category: "mac",
  },
];
