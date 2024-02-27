import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'kroooh',
      email: 'krooohcho@gmail.com',
      password: bcrypt.hashSync('12341234'),
      isAdmin: true,
    },
    {
      name: 'tester',
      email: 'tester@gmail.com',
      password: bcrypt.hashSync('12341234'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Pork Meat',
      slug: 'pork-meat',
      category: 'Meats',
      brand: 'monte',
      image: '/images/p1.jpg',
      price: 299,
      rating: 5,
      numReviews: 99,
      countInStock: 20,
      description: 'Pork meat',
      isFeatured: true,
      banner: '/images/p1-b1.jpg',
    },
    {
      name: 'Steak',
      slug: 'steak',
      category: 'Meats',
      brand: 'monte',
      image: '/images/s1.jpg',
      price: 299,
      rating: 5,
      numReviews: 99,
      countInStock: 20,
      description: 'Steak Meat',
      isFeatured: true,
      banner: '/images/s1-b1.jpg',
    },
    {
      name: 'Chicken',
      slug: 'chicken',
      category: 'Meats',
      brand: 'monte',
      image: '/images/c1.jpg',
      price: 299,
      rating: 5,
      numReviews: 99,
      countInStock: 20,
      description: 'Chicken Meat',
      isFeatured: true,
      banner: '/images/c1-b1.jpg',
    },
  ],
}

export default data
