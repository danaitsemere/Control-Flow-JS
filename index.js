let loginAttempt = 1;//1
while (loginAttempt <=3) {
    console.log(`login failed!`);
    loginAttempt += 1;
}
console.log("account locked");


const votes=["agree","disagree","maybe","disagree"]
let vote=0;
do{
    console.log(`${votes[vote]}`);
    vote++;
}while(vote<votes.length);{
    console.log("All votes are displayed.")
}


const days = (dayTypes) => {
    dayTypes.forEach(day => {
        switch (day) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday")
                 break;
            case 3://for only two or three    
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday"); 
                break;
            case 6:
                console.log("Saturday"); 
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("There is no corresponding day");
                break;
        }

    });
}
let dayTypes = [1,2,3,4,5,6,7];
days(dayTypes);

function passwords(password) {
    for (let i = 0; i < password.length; i++) {
      if (password[i].length >= 8) {
        console.log("Strong");
      } else {
        console.log("Weak");
      }
    }
  }
  
  const passwordTyped = ["short", "thisisalongpassword", "medium"];
  passwords(passwordTyped);


  const greetings = (greetingInDifferentLanguages) => {
    greetingInDifferentLanguages.forEach(greet => {
        switch (greet){
      case "en":
        console.log("Hello");
        break;
      case "fr":
        console.log("Bonjour");
        break;
      case "sw":
        console.log("Habari");
        break;
      default:
     console.lo("Greeting not available for this language.");
        }
    });
  
  }
  let greetingInDifferentLanguages = ["en","fr","sw"];
  greetings(greetingInDifferentLanguages);

  function weatherDashboard(temperatures) {
    for (let i = 0; i < temperatures.length; i++) {
      const temperature = temperatures[i];
      if (temperature > 30) {
        console.log("High heat alert!");
      } else if (temperature < 15) {
        console.log("Cold alert!");
      } else {
        console.log("Normal conditions");
      }
    }
  }
  const arrayOfTemperatures = [52, 25, 20, 18, 28, 10];
  weatherDashboard(arrayOfTemperatures);

  function usersQueue(queue) {
    while (queue.length > 0) {
      const user = queue.shift();
      console.log(`Processing: ${user}`);
    }
    console.log("Queue is empty.");
  }
  const arrayOfQueues = ["Beriha", "Hagos", "Rahel", "Dawit", "Belay"];
  usersQueue(arrayOfQueues);

  function retakes() {
    let score = 10; 
    let attempts = 0;
  
    do {function retakes() {
      let score = 20;
      let attempts = 1;
    }
    retakes();
      console.log(`Attempt ${attempts + 1}: Score is ${score}`);
      score += 10;
      attempts++;
    } while (score < 50);
  
    console.log(`Passed after ${attempts} attempts with a score of ${score}.`);
  }
  retakes();