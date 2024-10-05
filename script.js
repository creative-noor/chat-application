
 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
      output = "My name is Jarvis, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
      output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
      output = "Why did the chicken go to the seance? To get to the other side.";
    } else if (input.includes("what is web development process?")) {
      output = "1. Combines front-end and back-end development 2. Covers all aspects of website development";
    } else if (input.includes("what is back-end development")) {
      output = "Back-end Development: Server-side scripting (PHP, Ruby, Python, Java). Database management (MySQL, MongoDB, PostgreSQL). API integration and development. Server configuration and deployment";
    }else if (input.includes("career paths of website developer ")) {
      output = "1. Web developer 2. Front-end developer 3. Back-end develope 4. Full-stack developer 5. Web designer 6. UX/UI designer 7. Web project manager";
    }else if (input.includes("salary of website developer in Pakistan ")) {
      output = "The average salary for a website developer in Pakistan is around Rs 41,936 per month ¹. However, salaries can vary depending on factors such as location, experience, and specific job requirements. For instance, senior web developers can earn up to Rs 63,237 per month, while entry-level web developers start at around Rs 28,414 per month ¹.";
    }else if (input.includes("experienced base Salary?")) {
      output = "Junior Web Developer_: Rs 28,414 - Rs 60,000 per month . Senior Web Developer_: Rs 63,237 - Rs 135,000 per month";
    }else if (input.includes("cities based salaries in Pakistan")) {
      output = "Quetta: Rs 50,070 per month . Hyderabad: Rs 48,099 per month .Islamabad: Rs 45,997 per month . Lahore: Rs 45,210 per month . Karachi: Rs 41,026 per month";
    }else if (input.includes("Pakistan IT'S industry outlook ")) {
      output = "Growing IT exports (reached $2.5 billion in 2022). Government initiatives (e.g., Digital Pakistan Vision). Increasing e-commerce and startup ecosystem. Expanding tech hubs (Lahore, Karachi, Islamabad).";
    }else if (input.includes("what is CSS?")) {
      output = "CSS, or Cascading Style Sheets, is a stylesheet language used to control the presentation and layout of HTML documents. While HTML structures the content, CSS is responsible for how that content looks, including colors, fonts, spacing, and positioning.";
    }else if (input.includes("what is javascript?")) {
      output = "JavaScript (JS) is a high-level, dynamic programming language primarily used for enhancing the interactivity and functionality of websites. It's one of the core technologies of the web, alongside HTML and CSS. While HTML structures content and CSS styles it, JavaScript adds behavior to web pages.";
    }else if (input.includes("what is web development?")) {
      output = "Web development is the process of creating and maintaining websites and web applications. It involves a combination of various technologies, programming languages, and tools to build everything from simple static pages to complex dynamic applications";
    }else if (input.includes("which web development specialization are in demand now a days ")) {
      output = "1. Front-end development (React, Angular, Vue.js). 2. Back-end development (Node.js, PHP, Ruby). 3. Full-stack development. 4. Mobile app development (iOS, Android). 5. E-commerce development (WordPress, Magento) 6. Cybersecurity.";
    }else if (input.includes("tips for success in web development ")) {
      output = "1. Build a strong portfolio. 2. Develop in-demand skills. 3. Network and join online communities. 4. Stay updated with industry trends. 5. Consider freelancing or entrepreneurship.";
    }else if (input.includes("best web making tools for beginners")) {
      output = "IWix Squarespace Weebly.";
    }else if (input.includes("what is front-end development")) {
      output = "Front-end development refers to the part of web development that involves creating the user interface and user experience of a website or application. It's all about what users see and interact with directly in their web browsers. This includes the design, layout, and interactive elements.      Key technologies used in front-end development include:1. **HTML (HyperText Markup Language)**: The backbone of web content, used to structure the information on a webpage.2. **CSS (Cascading Style Sheets)**: Used to style and layout web pages, controlling aspects like colors, fonts, spacing, and responsiveness to different screen sizes.3. **JavaScript**: A programming language that adds interactivity to web pages, allowing for dynamic content updates, animations, and more complex user interactions.Front-end developers often use frameworks and libraries like React, Angular, or Vue.js to streamline development and enhance functionality. They also need to ensure that websites are responsive (work well on various devices) and accessible to all users.Overall, front-end development plays a crucial role in creating engaging and user-friendly web experiences.";
    } else if (input.includes("what is html?")) {
        output = "HTML, or HyperText Markup Language, is the standard language used to create and structure content on the web. It allows you to define elements such as headings, paragraphs, links, images, and other multimedia. HTML uses a system of tags, which are enclosed in angle brackets (e.g., <tagname>), to denote different types of content and their roles on a webpage.";
      } else {
      output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });
