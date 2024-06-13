let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
  {
    id: 6,
    customerName: "Birdie Shepland",
    productName: "Tomato Paste",
    productPrice: 5845,
    productQuantity: 65,
    creditCardType: "visa-electron",
  },
  {
    id: 7,
    customerName: "Willyt Helks",
    productName: "Asparagus - Green, Fresh",
    productPrice: 89253,
    productQuantity: 26,
    creditCardType: "laser",
  },
  {
    id: 8,
    customerName: "Bill Champion",
    productName: "Wine - Red, Harrow Estates, Cab",
    productPrice: 922100,
    productQuantity: 40,
    creditCardType: "china-unionpay",
  },
  {
    id: 9,
    customerName: "Cris Druce",
    productName: "Bar Mix - Lemon",
    productPrice: 83104,
    productQuantity: 6,
    creditCardType: "jcb",
  },
  {
    id: 10,
    customerName: "Darnell O'Currine",
    productName: "Lime Cordial - Roses",
    productPrice: 99041,
    productQuantity: 75,
    creditCardType: "visa-electron",
  },
];

// Start coding here

let studentScore = {
  James : 40,
  Ann : 80,
  Joe : 52,
  Ball : 67,
  Mick : 89,
  Ole : 10
};

function avgScore (studentScore) {
    let result;
    let sum=0;
    let count=0;
    for (let index in studentScore) {
            sum = sum+studentScore[index];
            count = count+1
            result = sum/count
    };
    return result
};

function maxScore (studentScore) {
    let result;
    let maxScore;
    let name;
    for (let index in studentScore) {
        if (maxScore>studentScore[index]) {
            maxScore = maxScore
        } else {
            maxScore = studentScore[index]
        };
    result = maxScore
        if(studentScore[index]===maxScore) {
            name = index;
        }
    };
    return `${name} has the highest score, which is ${result} points`
};

function minScore (studentScore) {
    let result;
    let minScore;
    let name;
    for (let index in studentScore) {
        if (minScore<studentScore[index]) {
            minScore = minScore
        } else {
            minScore = studentScore[index]
        };
    result = minScore
        if(studentScore[index]===minScore) {
            name = index;
        }
    };
    return `${name} has the lowest score, which is ${result} points`
};


console.log(avgScore(studentScore))
console.log(maxScore(studentScore))
console.log(minScore(studentScore))