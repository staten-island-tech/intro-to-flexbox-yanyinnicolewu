const dogs = [
  {
    name: "Golden Retriever",
    price: 2250,
    inStock: true,
    img: "Golden Retriever.png",
    alt: "The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is a working dog, and registration is subject to successful completion of a working trial.",
  },

  {
    name: "Border Collie",
    price: 2150,
    inStock: true,
    img: "Border Collie.png",
    alt: "The Border Collie is a British breed of herding dog of the collie type of medium size. It originates in the region of the Anglo-Scottish border, and descends from the traditional sheepdogs once found all over the British Isles. It is kept mostly as a working sheep-herding dog or as a companion animal.",
  },

  {
    name: "Corgi",
    price: 1800,
    inStock: true,
    img: "Corgi.png",
    alt: "The Pembroke Welsh Corgi is a cattle herding dog breed that originated in Pembrokeshire, Wales. The name Corgi is of Welsh origin, and is a compound of the words cor and ci. It is one of two breeds known as a Welsh Corgi, the other being the Cardigan Welsh Corgi.",
  },

  {
    name: "Husky",
    price: 1190,
    inStock: true,
    img: "Husky.png",
    alt: "Husky is a general term for a type of dog used in the polar regions, primarily and specifically for work as sled dogs. It refers to a traditional northern type, notable for its cold-weather tolerance and overall hardiness.",
  },

  {
    name: "Akita",
    price: 2500,
    inStock: true,
    img: "Akita.png",
    alt: "The Akita is a Japanese dog breed of large size. Originating from the mountains of northern Japan, the Akita has a short double coat similar to that of many other northern spitz breeds. ",
  },

  {
    name: "Chow Chow",
    price: 2600,
    inStock: true,
    img: "Chow Chow.png",
    alt: "The Chow Chow is a spitz-type of dog breed originally from Northern China. The Chow Chow is a sturdily built dog, square in profile, with a broad skull and small, triangular, erect ears with rounded tips. The breed is known for a very dense double coat that is either smooth or rough.",
  },

  {
    name: "Doberman",
    price: 2000,
    inStock: true,
    img: "Doberman.png",
    alt: "The Dobermann is a German breed of medium-large working dog of pinscher type. It was originally bred in Thuringia in about 1890 by Louis Dobermann, a tax collector. It has a long muzzle and ideally an even and graceful gait.",
  },

  {
    name: "Labrador",
    price: 1650,
    inStock: true,
    img: "Labrador.png",
    alt: "The Labrador Retriever, also known simply as the Labrador or Lab, is a British breed of retriever gun dog. It was developed in the United Kingdom from St. John's water dogs imported from the colony of Newfoundland, and was named after the Labrador region of that colony.",
  },

  {
    name: "Rottweilers",
    price: 2000,
    inStock: true,
    img: "Rottweilers.png",
    alt: "The Rottweiler is a breed of domestic mastiff type dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market.",
  },

  {
    name: "German Shepherd",
    price: 3000,
    inStock: true,
    img: "German Shepherd.png",
    alt: "The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. It was originally bred as a herding dog, for herding sheep.",
  },

  {
    name: "Dachshund",
    price: 1250,
    inStock: true,
    img: "Dachshund.png",
    alt: "The dachshund, also known as the wiener dog, or sausage dog, badger dog, doxen and doxie, is a short-legged, long-bodied, hound-type dog breed. The dog may be smooth-haired, wire-haired, or long-haired, with varied coloration.",
  },

  {
    name: "Dalmatian",
    price: 2000,
    inStock: true,
    img: "Dalmatian.png",
    alt: "The Dalmatian is a breed of dog with a white coat marked with dark-coloured spots. Originally bred as a hunting dog, it was also used as a carriage dog, notably by firefighters in the days of horse-drawn firehouse carriages. The origins of this breed can be traced back to Croatia and its historical region of Dalmatia.",
  },

  {
    name: "Bulldog",
    price: 2750,
    inStock: true,
    img: "Bulldog.png",
    alt: "The Bulldog is a British breed of dog of mastiff type. It may also be known as the English Bulldog or British Bulldog. It is a stocky, muscular dog of medium size, with a large head, thick folds of skin around the face and shoulders and a relatively flat face with a protruding lower jaw.",
  },

  {
    name: "Chihuahua",
    price: 1750,
    inStock: true,
    img: "Chihuahua.png",
    alt: "The Chihuahua is a Mexican breed of toy dog. It is named for the Mexican state of Chihuahua and is one of the smallest dog breeds in the world. It is usually kept as a companion animal.",
  },

  {
    name: "Great Dane",
    price: 1500,
    inStock: true,
    img: "Great Dane.png",
    alt: "The Great Dane is a German breed of large mastiff-sighthound, which descends from hunting dogs of the Middle Ages used to hunt bears, wild boar, and deer. They were also used as guardian dogs of German nobility. It is one of the two largest dog breeds in the world, along with the Irish Wolfhound.",
  },

  {
    name: "Havanese",
    price: 3250,
    inStock: true,
    img: "Havanese.png",
    alt: "The Havanese, a bichon-type dog, is the national dog of Cuba, developed from the now extinct Blanquito de la Habana. The Blanquito descended from the also now-extinct Bichón Tenerife.",
  },

  {
    name: "Brittany",
    price: 2000,
    inStock: true,
    img: "Brittany.png",
    alt: "The Brittany Spaniel or Breton Spaniel is a French breed of gun dog of spaniel type, bred primarily for bird hunting. It developed between the seventeenth and nineteenth centuries in Brittany in north-west France, and was officially recognized early in the twentieth.",
  },

  {
    name: "Poodle",
    price: 1900,
    inStock: true,
    img: "Poodle.png",
    alt: "The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle is not universally recognised.",
  },

  {
    name: "Boxer",
    price: 2150,
    inStock: true,
    img: "Boxer.png",
    alt: "The Boxer is a medium to large, short-haired dog breed of mastiff-type, developed in Germany. The coat is smooth and tight-fitting; colors are fawn or brindled, with or without white markings.",
  },

  {
    name: "Pug",
    price: 1400,
    inStock: true,
    img: "Pug.png",
    alt: "The Pug is a breed of dog with the physically distinctive features of a wrinkly, short-muzzled face, and curled tail.",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  const html = `
    <div class="card">
      <img src = "${item.img}">
      <h2>${item.name}</h2>
      <p>${item.alt}</p>
      <p>Price: $${item.price}</p>
      <button class="add-btn">Add to Cart</button>
    </div>
  `;
  container.insertAdjacentHTML("afterbegin", html);
}

dogs.forEach((item) => inject(item));
