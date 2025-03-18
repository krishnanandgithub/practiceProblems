const getOrder = (resolve, reject) => {
  setTimeout(() => {
    const id = { orderId: 123 };
    console.log("order receive:", id);
    resolve(id);
  }, 0);
};

const prepareFood = (details) => {
  console.log("preparing food...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foodDetails = "pizza & burger";
      const newDetails = { ...details, foodDetails };
      console.log("food is ready:", newDetails);
      resolve(newDetails);
    }, 3000);
  });
};

const packFood = (details) => {
  console.log("packing food...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const packageDetails = "food is packed in eco-friendly box";
      const newDetails = { ...details, packageDetails };
      console.log("packing done:", newDetails);
      resolve(newDetails);
    }, 2000);
  });
};

const deliverFood = (details) => {
  console.log("delivering food...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const deliveryDetails = "food is delivered by John at 07:00 pm";
      const newDetails = { ...details, deliveryDetails };
      console.log("food is delivered:", newDetails);
      resolve(newDetails);
    }, 5000);
  });
};

const orderReceive = new Promise(getOrder);

// orderReceive.then(prepareFood).then(packFood).then(deliverFood);

const a = orderReceive.then(prepareFood);
const b = a.then(packFood);
const c = b.then(deliverFood).then(console.log.bind(null, a, b));
