const categories = [
    {
        id:'plants',
        name:'Plants',
        tags:['products','inspirations','shop'],
        count:147,
        image:require('../assets/icons/plants_1.png')
    },
    {
        id:'seeds',
        name:'Seeds',
        tags:['products','shop'],
        count:16,
        image:require('../assets/icons/seeds.png')
    },
    {
        id:'flowers',
        name:'Flowers',
        tags:['products','inspirations'],
        count:68,
        image:require('../assets/icons/flowers.png')
    },
    {
        id:'sprayers',
        name:'Sprayers',
        tags:['products','shop'],
        count:17,
        image:require('../assets/icons/sprayers.png')
    },
    {
        id:'pots',
        name:'Pots',
        tags:['products','shop'],
        count:47,
        image:require('../assets/icons/pots.png')
    },
    {
        id:'fertilizers',
        name:'fertilizers',
        tags:['products','shop'],
        count:47,
        image:require('../assets/icons/fertilizers.png')
    }
];

const explore = [
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png'),
];

const products = [
   {
    id:1,
    name:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
    tags:['Interior','27m','Ideas'],
    gallery:[
        require('../assets/images/plants_1.png'),
        require('../assets/images/plants_2.png'),
        require('../assets/images/plants_3.png'),
    ]
   }
];
const profile = {
   username:'ElhamFadel',
   location:'Gaza',
   email:'elham@gmail.com',
   avater:require('../assets/images/avatar.png'),
   budget:1000,
   monthly_cap:5000,
   notification:true,
   newletter:false
}

export{
 categories,
 explore,
 profile,
 products
}