// app.js
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login successful: Rudra Pratap Singh");
      resolve();
    }, 2000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [10, 20, 30, 40];
      console.log("Get data from user:", data);
      resolve(data);
    }, 2000);
  });
}

function calculateData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = data.reduce((sum, n) => sum + n, 0);
      console.log("Calculating data:", result);
      resolve(result);
    }, 2000);
  });
}

function sendSMS(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Sending SMS to user. Message:", `Your result is ${result}`);
      resolve();
    }, 2000);
  });
}

function logout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Logout successful.");
      resolve();
    }, 2000);
  });
}

async function main() {
  try {
    await login();
    const data = await getData();
    const result = await calculateData(data);
    await sendSMS(result);
    await logout();
  } catch (err) {
    console.log("Error:", err);
  }
}

main();

console.log("Other application running...");
