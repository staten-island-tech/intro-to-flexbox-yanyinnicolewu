// function total(cart) {
//   let total = 0;
//   cart.forEach((item) => {
//     let price = item.price;
//     if (price < 5) {
//       price = price * 0.95;
//     }
//     total = total + price * item.QUantity;
//   });
//   if (total > 100) {
//     total = total * 0.9;
//   }
//   return total;
// }

// const dnsRecords = [
//   { address: "amazon.com", dns: "205.251.242.103" },
//   { address: "apple.com", dns: "17.253.144.10" },
//   { address: "bbc.com", dns: "151.101.64.81" },
//   { address: "chat.openai.com", dns: "104.18.12.123" },
//   { address: "cnn.com", dns: "151.101.1.67" },
//   { address: "discord.com", dns: "162.159.137.232" },
//   { address: "github.com", dns: "140.82.113.3" },
//   { address: "google.com", dns: "142.250.72.14" },
//   { address: "instagram.com", dns: "157.240.229.174" },
//   { address: "microsoft.com", dns: "40.113.200.201" },
//   { address: "netflix.com", dns: "52.41.250.12" },
//   { address: "nasa.gov", dns: "198.49.245.141" },
//   { address: "nytimes.com", dns: "151.101.1.164" },
//   { address: "reddit.com", dns: "151.101.1.140" },
//   { address: "roblox.com", dns: "128.116.114.3" },
//   { address: "stanford.edu", dns: "171.67.215.200" },
//   { address: "youtube.com", dns: "142.250.190.46" },
// ];
// function findDNS(records, target) {
//   let low = 0;
//   let high = records.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (records[mid].address === target) {
//       return records[mid].dns;
//     } else if (records[mid].address < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return "DNS not found";
// }
// console.log(findDNS(dnsRecords, "google.com"));
// console.log(findDNS(dnsRecords, "reddit.com"));
// console.log(findDNS(dnsRecords, "nasa.com"));
// console.log(findDNS(dnsRecords, "openai.com"));

slots(48, 3, 10, 4);
function slots(q, p1, p2, p3) {
  let plays = 0;
  let currentmachines = 1;
  while (q > 0) {
    q--;
    if (currentmachines === 1);
    {
      q = q + 30;
      p1++;
      currentmachines === 1;
    }
    elseif(p2 > 1 === 100);
    {
      q = q + 60;
      p2++;
      currentmachines === 2;
    }
    elseif(p3 > 1 === 10);
    {
      q = q + 9;
      p3++;
      currentmachines === 3;
    }
    if (q > 0) return plays;
    console.log(a);
  }
}
