export const messageData = JSON.parse(localStorage.getItem("nacos")) || [
  {
    id: 1,
    arrays: [],
    timeMeridian: [],
    time: [],
    computerResponse: [],
  },
];

export const computerResponseData = [
  {
    key: [
      "hello",
      "hi",
      "hey",
      "awfa",
      "morning",
      "afternoon",
      "doing",
      "evening",
      "yo",
      "gee",
    ],
    message: "I am alright, how you doing today ",
  },
  {
    key: ["help", "assist", "confused"],
    message: "What can i help you with?",
  },
  {
    key: ["fuck", "love", "sex", "knack"],
    message: "I don't have an experience with that yet ",
  },
  {
    key: ["slaughter", "murder", "kill", "steal", "kidnap", "rape"],
    message: "I can't help you with that",
  },
  {
    key: ["vote", "president"],
    message:
      "<img src='img/eze.jpg' alt='Vote flier for eze' loading='lazy' />",
  },
  {
    key: ["don't"],
    message:
      "Why? Eze Daniel has shown his experience in helping NACOS in different fields e.g: QA engineer",
  },
  {
    key: ["truthful", "accurate", "answer"],
    message: "I will give my best response to your question. What is it.?",
  },
  {
    key: ["skills", "experience", "why"],
    message:
      "<img style='object-position: right;' src='img/eze 2.jpg' alt='Eze Skills' loading='lazy' />",
  },
];
