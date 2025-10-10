const dogs = [
  {
    name: "Golden Retriever",
    price: 2250,
    inStock: true,
    img: "https://images.photowall.com/products/57215/golden-retriever-puppy.jpg?h=699&q=85",
    alt: "The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is a working dog, and registration is subject to successful completion of a working trial.",
  },

  {
    name: "Border Collie",
    price: 2150,
    inStock: true,
    img: "https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/MTk2NTc4NDk3MDY0MzQ3NDU0/choosing-a-border-collie-pros-and-cons.png",
    alt: "The Border Collie is a British breed of herding dog of the collie type of medium size. It originates in the region of the Anglo-Scottish border, and descends from the traditional sheepdogs once found all over the British Isles. It is kept mostly as a working sheep-herding dog or as a companion animal.",
  },

  {
    name: "Corgi",
    price: 1800,
    inStock: true,
    img: "https://cdn.britannica.com/80/232780-050-404D6708/Pembroke-welsh-corgi-dog.jpg",
    alt: "The Pembroke Welsh Corgi is a cattle herding dog breed that originated in Pembrokeshire, Wales. The name Corgi is of Welsh origin, and is a compound of the words cor and ci. It is one of two breeds known as a Welsh Corgi, the other being the Cardigan Welsh Corgi.",
  },

  {
    name: "Husky",
    price: 1190,
    inStock: true,
    img: "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg",
    alt: "Husky is a general term for a type of dog used in the polar regions, primarily and specifically for work as sled dogs. It refers to a traditional northern type, notable for its cold-weather tolerance and overall hardiness.",
  },

  {
    name: "Akita",
    price: 2500,
    inStock: true,
    img: "https://st.depositphotos.com/2012859/2355/i/450 depositphotos_23554637-stock-photo-akta-inu-dog.jpg",
    alt: "The Akita is a Japanese dog breed of large size. Originating from the mountains of northern Japan, the Akita has a short double coat similar to that of many other northern spitz breeds. ",
  },

  {
    name: "Chow Chow",
    price: 2600,
    inStock: true,
    img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fa526190ae7cb98cccd7dd3a1a4caf127702a6cdf-800x600.jpg&w=1080&q=80",
    alt: "The Chow Chow is a spitz-type of dog breed originally from Northern China. The Chow Chow is a sturdily built dog, square in profile, with a broad skull and small, triangular, erect ears with rounded tips. The breed is known for a very dense double coat that is either smooth or rough.",
  },

  {
    name: "Doberman",
    price: 2000,
    inStock: true,
    img: "https://images.ctfassets.net/nx3pzsky0bc9/5JNIP0KkbMkF8sjyeVFcvt/d2db4e388b752e69935a6001b0259efa/Doberman_feature_image.png?w=804",
    alt: "The Dobermann is a German breed of medium-large working dog of pinscher type. It was originally bred in Thuringia in about 1890 by Louis Dobermann, a tax collector. It has a long muzzle and ideally an even and graceful gait.",
  },

  {
    name: "Labrador",
    price: 1650,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Black_labrador_puppy_%282754841728%29.jpg/2560px-Black_labrador_puppy_%282754841728%29.jpg",
    alt: "The Labrador Retriever, also known simply as the Labrador or Lab, is a British breed of retriever gun dog. It was developed in the United Kingdom from St. John's water dogs imported from the colony of Newfoundland, and was named after the Labrador region of that colony.",
  },

  {
    name: "Rottweilers",
    price: 2000,
    inStock: true,
    img: "https://consumer-cms.petfinder.com/sites/default/files/images/content/Rottweiler%204.jpg",
    alt: "The Rottweiler is a breed of domestic mastiff type dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market.",
  },

  {
    name: "German Shepherd",
    price: 3000,
    inStock: true,
    img: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11180014/202105German-Shepherd-1358309706-scaled-1.jpg",
    alt: "The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. It was originally bred as a herding dog, for herding sheep.",
  },

  {
    name: "Dachshund",
    price: 1250,
    inStock: true,
    img: "https://www.rover.com/blog/wp-content/uploads/dachshund-breed-1024x576.jpg",
    alt: "The dachshund, also known as the wiener dog, or sausage dog, badger dog, doxen and doxie, is a short-legged, long-bodied, hound-type dog breed. The dog may be smooth-haired, wire-haired, or long-haired, with varied coloration.",
  },

  {
    name: "Dalmatian",
    price: 2000,
    inStock: true,
    img: "https://media.istockphoto.com/id/500851439/photo/dalmatian-dog-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bXAdIw3thvMADSpEbQFOGz4_ftZRBSPUDcuz-zuIve4=",
    alt: "The Dalmatian is a breed of dog with a white coat marked with dark-coloured spots. Originally bred as a hunting dog, it was also used as a carriage dog, notably by firefighters in the days of horse-drawn firehouse carriages. The origins of this breed can be traced back to Croatia and its historical region of Dalmatia.",
  },

  {
    name: "Bulldog",
    price: 2750,
    inStock: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/1200px-Bulldog_inglese.jpg",
    alt: "The Bulldog is a British breed of dog of mastiff type. It may also be known as the English Bulldog or British Bulldog. It is a stocky, muscular dog of medium size, with a large head, thick folds of skin around the face and shoulders and a relatively flat face with a protruding lower jaw.",
  },

  {
    name: "Chihuahua",
    price: 1750,
    inStock: true,
    img: "https://cdn.britannica.com/44/233244-050-A65D4571/Chihuahua-dog.jpg",
    alt: "The Chihuahua is a Mexican breed of toy dog. It is named for the Mexican state of Chihuahua and is one of the smallest dog breeds in the world. It is usually kept as a companion animal.",
  },

  {
    name: "Great Dane",
    price: 1500,
    inStock: true,
    img: "https://www.zooplus.ie/magazine/wp-content/uploads/2018/11/Great-Dane-768x512.webp",
    alt: "The Great Dane is a German breed of large mastiff-sighthound, which descends from hunting dogs of the Middle Ages used to hunt bears, wild boar, and deer. They were also used as guardian dogs of German nobility. It is one of the two largest dog breeds in the world, along with the Irish Wolfhound.",
  },

  {
    name: "Havanese",
    price: 3250,
    inStock: true,
    img: "https://apupabove.com/cdn/shop/articles/Havanese.webp?v=1742407835&width=1600",
    alt: "The Havanese, a bichon-type dog, is the national dog of Cuba, developed from the now extinct Blanquito de la Habana. The Blanquito descended from the also now-extinct Bichón Tenerife.",
  },

  {
    name: "Brittany",
    price: 2000,
    inStock: true,
    img: "https://cdn-fastly.petguide.com/media/2022/02/28/8263516/brittany.jpg?size=720x845&nocrop=1",
    alt: "The Brittany Spaniel or Breton Spaniel is a French breed of gun dog of spaniel type, bred primarily for bird hunting. It developed between the seventeenth and nineteenth centuries in Brittany in north-west France, and was officially recognized early in the twentieth.",
  },

  {
    name: "Poodle",
    price: 1900,
    inStock: true,
    img: "https://www.dogster.com/wp-content/uploads/2023/08/red-toy-poodle-in-the-park_Mykhaylo_Kozelko_Shutterstock.jpg",
    alt: "The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle is not universally recognised.",
  },

  {
    name: "Boxer",
    price: 2150,
    inStock: true,
    img: "https://www.thesprucepets.com/thmb/YwjpUBfdG8mkz2L64CX4-mA8cko=/1539x0/filters:no_upscale():strip_icc()/boxer-dog-breed-1117944-hero-dfe9f67a59ce4ab19ebd274c06b28ad1.jpg",
    alt: "The Boxer is a medium to large, short-haired dog breed of mastiff-type, developed in Germany. The coat is smooth and tight-fitting; colors are fawn or brindled, with or without white markings.",
  },

  {
    name: "Pug",
    price: 1400,
    inStock: true,
    img: "https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg?w=400&h=300&c=crop",
    alt: "The Pug is a breed of dog with the physically distinctive features of a wrinkly, short-muzzled face, and curled tail.",
  },
];

function inject(item) {
  let name = "Roman";
  const container = document.querySelector(".name");
  container.insertAdjacentHTML("afterbegin");
}

inject(product[0]);
inject(product[0]);
inject(product[0]);
inject(product[0]);
