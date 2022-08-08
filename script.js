

// Object


const address = {
    street: {
      line1: '11 Broadway',
      line2: '2nd Floor'
    },
    city: 'New York',
    state: 'NY',
    zipCode: '10004'
  };
  
  console.log(address.street);
  console.log((address.street.line1), (address.city), (address.street.line2));
  
  
  const meals = {
    breakfast: 'Avocado toast',
    lunch: 'Avocado toast',
    dinner: 'Avocado toast'
  };
  
  console.log(meals.breakfast);
  
  // Accessing Nonexistent Properties
  
  address.country = 'USA';
  
  console.log(address);
  
  
  // Bracket notation using []
  console.log (address['street']);
  console.log (address['street']['line1']);
  
  
  /*Nonstandard Keys (try not to do it)
  Follow
  camelCaseEverything
  Start the key with a lowercase letter
  No spaces or punctuation*/
  
  
  // by having  [] it will treat keys as variables and WITHOUT [] will treat as identifier
  
  const morningMeal = 'breakfast';
  const middayMeal = 'lunch';
  const eveningMeal = 'dinner';
  
  const yummymeals = {
    [morningMeal]: 'French toast',
    [middayMeal]: 'Personal pizza',
    [eveningMeal]: 'Fish and chips'
  };
  
  console.log(yummymeals);
  
  
  const yummymeals2 = {
    morningMeal: 'French toast',
    middayMeal: 'Personal pizza',
    eveningMeal: 'Fish and chips'
  };
  
  console.log(yummymeals2);
  
  
  
  const wednesdayMenu = {
    cheesePlate: {
      soft: 'Brie',
      semiSoft: 'Fontina',
      hard: 'Provolone'
    },
    fries: 'Sweet potato',
    salad: 'Southwestern'
  };
  
  console.log(wednesdayMenu);
  console.log(Object.keys(wednesdayMenu));
  console.log(Object.keys(wednesdayMenu.cheesePlate));
  console.log(Object.values(wednesdayMenu));
  
  
  
  
  