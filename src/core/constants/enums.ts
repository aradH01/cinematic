import {AvailableIcons} from "@/components/elements/Icon";

export enum Path {
  SignIn = '/get-start',
  OTPCode = '/auth/otp-code',
  CreateProfile = '/auth/create-profile',
  Interests = '/auth/interests',
  AddPhone = '/auth/add-phone',
  Settings = '/setting',
  ManageProfile= '/manage-profile',
  EditProfile = '/edit-profile',
}

export const LanguagesList = [
  { value: 'en', label: 'English', icon: 'UsFlag'as AvailableIcons },
  { value: 'az', label: 'Turkish', icon: 'AzarbaijanFlag' as AvailableIcons},
  { value: 'ru', label: 'Russian', icon: 'RussianFlag' as AvailableIcons},
] ;

export const InterestsCat = [
  { value: "genres", label: "Genres" },
  { value: "shows", label: "Shows" },
];
export const InterestsTypes = [
  { title: "Actuality", id: '1' },
  { title: "Action", id: '2' },
  { title: "Adventure", id: '3' },
  { title: "Amateur", id: '4' },
  { title: "Badaga", id: '5' },
  { title: "Cartoon", id: '6' },
  { title: "Chicano", id: '7' },
  { title: "Chopsocky", id: '8' },
  { title: "Docudrama", id: '9' },
  { title: "Detective", id: '10' },
  { title: "Docufiction", id: '11' },
  { title: "Economics", id: '12' },
  { title: "Educational", id: '13' },
  { title: "Epic", id: '14' },
  { title: "Erotic", id: '15' },
  { title: "Ethnofiction", id: '16' },
  { title: "Fantasy", id: '17' },
  { title: "Gangster", id: '18' },
  { title: "Giallo", id: '19' },
  { title: "Actuality", id: '20' }, { title: "Detective", id: '10' },
  { title: "Docufiction", id: '11' },
  { title: "Economics", id: '12' },
  { title: "Educational", id: '13' },
  { title: "Epic", id: '14' },
  { title: "Erotic", id: '15' },
  { title: "Ethnofiction", id: '16' },
  { title: "Fantasy", id: '17' },
  { title: "Gangster", id: '18' },
  { title: "Giallo", id: '19' },
  { title: "Actuality", id: '20' },
];

export const ShowImages=[
  "/images/show1.jpg","/images/show2.jpg","/images/show3.jpg","/images/show4.jpg","/images/show5.jpg",
  "/images/show1.jpg","/images/show2.jpg","/images/show3.jpg","/images/show4.jpg","/images/show5.jpg",
  "/images/show1.jpg","/images/show2.jpg","/images/show3.jpg","/images/show4.jpg","/images/show5.jpg",
  "/images/show1.jpg","/images/show2.jpg","/images/show3.jpg","/images/show4.jpg","/images/show5.jpg",

];
export const WhoWatching=[
  {image: "/images/MenAvatar.svg" , name:"Arad" , active:true},
  {image: "/images/FemaleAvatar.svg" , name:"Mia"},
];

export const MoviesCards=[
  {image: "/images/show5.jpg" , title: "I Am Woman" , description: 'A sci-fi action adventure and the definitive origin story of Buzz Lightyear, the hero who inspired the toy, “Lightyear” follows the legendary Space Ranger after he’s marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew. As Buzz tries to find a way back home through space and time, he’s joined by a group of ambitious recruits and his charming robot companion cat, Sox. Complicating matters and threatening the mission is the arrival of Zurg, an imposing presence with an army of ruthless robots and a mysterious agenda.'},
  {image: "/images/show2.jpg" , title: "Goodfellas" , description: 'A sci-fi action adventure and the definitive origin story of Buzz Lightyear, the hero who inspired the toy, “Lightyear” follows the legendary Space Ranger after he’s marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew. As Buzz tries to find a way back home through space and time, he’s joined by a group of ambitious recruits and his charming robot companion cat, Sox. Complicating matters and threatening the mission is the arrival of Zurg, an imposing presence with an army of ruthless robots and a mysterious agenda.'},
  {image: "/images/show3.jpg" , title: "Jojo Rabbit" , description: 'A sci-fi action adventure and the definitive origin story of Buzz Lightyear, the hero who inspired the toy, “Lightyear” follows the legendary Space Ranger after he’s marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew. As Buzz tries to find a way back home through space and time, he’s joined by a group of ambitious recruits and his charming robot companion cat, Sox. Complicating matters and threatening the mission is the arrival of Zurg, an imposing presence with an army of ruthless robots and a mysterious agenda.'},
]
export const PlayLists=[
  {title: ' Pilot Part 1 & 2' , duration: '1h 21m'},
  {title: ' Pilot Part 1 & 2' , duration: '1h 21m'},
  {title: ' Pilot Part 1 & 2' , duration: '1h 21m'},
  {title: ' Pilot Part 1 & 2' , duration: '1h 21m'},
  {title: ' Pilot Part 1 & 2' , duration: '1h 21m'},
]
export const AvatarSliderMockData = [
  { id: 1, image: "/images/MenAvatar.svg" },
  { id: 2, image: "/images/FemaleAvatar.svg" },
  { id: 3, image: "/images/MenAvatar.svg" },
  { id: 4, image: "/images/FemaleAvatar.svg" },
  { id: 5, image: "/images/MenAvatar.svg" },
  { id: 6, image: "/images/FemaleAvatar.svg" },
  { id: 7, image: "/images/MenAvatar.svg" },
  { id: 8, image: "/images/FemaleAvatar.svg" },
  { id: 9, image: "/images/MenAvatar.svg" },
];
export const Factors=[
  {title:'Genres' , detail:'Drama, Romance'},
  {title:'Audio tracks' , detail:'English, French'},
  {title:'Subtitles' , detail:'English'},
  {title:'Director' , detail:'Joaquim Dos Santos'},
]
export const CastsAvatar=[
  {image: "/images/ovalWomenAvatar.svg" , name:"Todd Phillips"},
  {image: "/images/ovalWomenAvatar.svg" , name:"Joaquin Phoenix"},
  {image: "/images/ovalmenAvatar.svg" , name:"Zazie Beetz" },
  {image: "/images/ovalmenAvatar.svg" , name:"Zazie Beetz" },
];
export const TopSearches=[
  {title:'football'},
  {title:'elemental movie'},
  {title:'five nights at freddy\'s help wanted'},
];
