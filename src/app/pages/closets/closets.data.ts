export const CLOSET_TYPES = [
  {image: '../luxurykitchens/img/lk-collectionImg70.jpg'},
  {image: '../luxurykitchens/img/lk-collectionImg70.jpg'},
  {image: '../luxurykitchens/img/lk-collectionImg70.jpg'},
  {image: '../luxurykitchens/img/lk-collectionImg70.jpg'}
];
export const CLOSET_CORNERS = [
  {src: '/assets/img/closets/esquina1.png'},
  {src: '/assets/img/closets/esquina2.png'},
  {src: '/assets/img/closets/esquina3.png'},
  
];

export const SHAPES = [
  {value: "Single wall", color: 'fff'},
  {value: "Gallery", color: 'fff'},
  {value: "L shaped", color: 'fff'},
  {value: "U shaped", color: 'fff'},
  {value: "Custom", color: 'fff'},
  {value: "Island", color: 'fff'}
];

export const CLOSETS = [
  {closet: "walk in closet"},
  {closet: "wardrobe closet"},
  {closet: "walk in + wardrobe"}
];

export const ITEMS_NAV = {
  primaryItems: [
    {title:'WARDROVE CLOSETS', route:'/closets', selected:false},
    {title:'WALK-IN-CLOSETS', route:'/closets/walk-in', selected:false},
    {title:'CENTER ISLAND', route:'/closets', selected:false},
    {title:'ACCESORIES', route:'/closets', selected:false},
    {title:'FINISHES', route:'/closets', selected:false},
  ],
  secondaryItems: [
    {title:'QUALITY', route:'/closets', selected:false},
    {title:'STUDIOS', route:'/closets', selected:false},
    {title:'VISUALIZER', route:'/closets', selected:false},
    {title:'ASK QUESTIONS', route:'/closets', selected:false},
    {title:'EXPERTS & PROJECTS', route:'/closets', selected:false},
  ],
  buttons: [
    {
      config: {
        type:"download",  
        text:'Download catalog', 
        icon:'fas fa-download'}, 
      route:'/closets/start'},
  ],
  description: 'Boths Web page <br/> Countertops Web page <br/> Luxury kitchens Web page',
}

export const WALK_IN_IMAGES = [
  {
    id: "1",
    src: "/assets/img/closets/Preview1x.jpg",
    class: "item-grid-1"
  },
  {
    id: "2",
    src: "/assets/img/closets/Preview2x.jpg",
    class: "item-grid-2"
  },
  {
    id: "3",
    src: "/assets/img/closets/Preview3x.jpg",
    class: "item-grid-3"
  },
  {
    id: "4",
    src: "/assets/img/closets/Preview4x.jpg",
    class: "item-grid-4"
  },
  {
    id: "6",
    src: "/assets/img/closets/Preview6x.jpg",
    class: "item-grid-6"
  },
  {
    id: "5",
    src: "/assets/img/closets/Preview5x.jpg",
    class: "item-grid-5"
  },
]

export const SHOW_HIDE_IMAGE_CLOSETS = [
  {
    id: '1',
    src: '/assets/img/closets/Preview1x.jpg',
    show: false,
    buttonText: 'COLL W01'
  },
  {
    id: '2',
    src: '/assets/img/closets/Preview2x.jpg',
    show: false,
    buttonText: 'COLL W01A'
  },
  {
    id: '3',
    src: '/assets/img/closets/Preview3x.jpg',
    show: false,
    buttonText: 'COLL W02'
  },
  {
    id: '4',
    src: '/assets/img/closets/Preview4x.jpg',
    show: false,
    buttonText: 'COLL W02A'
  },
  {
    id: '5',
    src: '/assets/img/closets/Preview5x.jpg',
    show: false,
    buttonText: 'COLL W03'
  },
  {
    id: '6',
    src: '/assets/img/closets/Preview6x.jpg',
    show: false,
    buttonText: 'COLL W04'
  },
]

export const BUTTONS_MASTER_CLOSET = [
  {
    id: '1',
    src: '/assets/img/closets/master-closet1.png',
    config: {type:"collection", text:"COLLECTION W01", selected: true}
  },
  {
    id: '2',
    src: '/assets/img/closets/master-closet2.png',
    config: {type:"collection", text:"COLLECTION W01A", selected: false}
  },
  {
    id: '3',
    src: '/assets/img/closets/master-closet3.png',
    config: {type:"collection", text:"COLLECTION W02", selected: false}
  },
  {
    id: '4',
    src: '/assets/img/closets/master-closet4.png',
    config: {type:"collection", text:"COLLECTION W03", selected: false}
  },
  {
    id: '5',
    src: '/assets/img/closets/master-closet5.png',
    config: {type:"collection", text:"COLLECTION W04", selected: false}
  },
  {
    id: '6',
    src: 'no-image',
    config: {type:"collection", text:"COLLECTION WARDROBE", selected: false}
  },
]
export const GALLERY_ACCESORIES = [
  {
    name: '1',
    src: '/assets/img/closets/master-closet1.png',
    text: 'COLLECTION W01'
  },
  {
    name: '2',
    src: '/assets/img/closets/master-closet2.png',
    text: 'COLLECTION W01A'
  },
  {
    name: '3',
    src: '/assets/img/closets/master-closet3.png',
    text: 'COLLECTION W02'
  },
  {
    name: '1',
    src: '/assets/img/closets/master-closet4.png',
    text: 'COLLECTION W01'
  },
  {
    name: '2',
    src: '/assets/img/closets/master-closet2.png',
    text: 'COLLECTION W01A'
  },
  {
    name: '3',
    src: '/assets/img/closets/master-closet3.png',
    text: 'COLLECTION W02'
  }
]

export const FORM_CHECKLIST = {
  user: '',
  title: 'Checklist for',
  description: 'Write the amount of items you need',
  items: [
    {label: 'Belts', name: 'belts'},
    {label: 'Dress Shirts', name: 'dressShirts'},
    {label: 'Dresses-long', name: 'dressesLong'},
    {label: 'Dresses-short', name: 'dressesShort'},
    {label: 'Jackets', name: 'jackets'},
    {label: 'Jeans', name: 'jeans'},
    {label: 'Lingerie', name: 'lingerie'},
    {label: 'Miscellaneous', name: 'miscellaneous'},
    {label: 'Pants-dress', name: 'pantsDress'},
    {label: 'Pants-jeans', name: 'pantsJeans'},
    {label: 'Purses', name: 'purses'},
    {label: 'Shoes-Dress', name: 'shoesDress'},
    {label: 'Shoes-sport', name: 'shoesSport'},
    {label: 'Shorts', name: 'shorts'},
    {label: 'Suits', name: 'suits'},
    {label: 'Sweaters', name: 'sweaters'},
    {label: 'Ties', name: 'ties'},
    {label: 'T-shirts', name: 'TShirts'},
    {label: 'Underwear', name: 'underwear'},
  ]
}