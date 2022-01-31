import images from './images'

const individual = [
  {
    title: 'Biryani',
    price: 'Rs 200',
    tags: '1 plate| Non veg',
  },
  {
    title: 'Chicken Momo',
    price: 'Rs 100',
    tags: '1 plate | Non veg',
  },
  {
    title: 'Burger',
    price: 'Rs 200',
    tags: '1 piece | Non veg',
  },
  {
    title: 'Mushroom Pizza',
    price: 'Rs 200',
    tags: '1 set | veg',
  },
  {
    title: 'Chicken Pizza',
    price: 'Rs 100',
    tags: '1 plate| veg',
  },
]

const business = [
  {
    title: 'Chana Andha',
    price: 'Rs 60',
    tags: 'Healthy | 1 plate | 1 egg',
  },
  {
    title: 'Puri Tarkari',
    price: 'Rs 60',
    tags: '6 puri | 1 cup tarkari',
  },
  {
    title: 'Aalu Paratha',
    price: 'Rs 80 ',
    tags: '6 set |delicious',
  },
  {
    title: 'Roti Tarkari',
    price: 'Rs 60',
    tags: '4 roti | 1 cup tarkari',
  },
  {
    title: 'Custome khaja set',
    price: 'Rs 80',
    tags: '2 samosha | Aachar | 1 cup tarkari|2 roti',
  },
]

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
]

export default { individual, business, awards }
