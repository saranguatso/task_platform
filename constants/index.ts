export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Create Task',
      route: '/tasks/create',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
  ]
  
  export const taskDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }
  