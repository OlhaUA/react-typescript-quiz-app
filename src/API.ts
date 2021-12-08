export type QuestionState = {
  id: number;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  all_answers: string[];
};

export const quizData = [
  {
    id: 1,
    question: 'What is the capital of Ukraine?',
    correct_answer: 'Kyiv',
    incorrect_answers: ['Sofia', 'Odessa', 'Vilnius'],
    all_answers: ['Sofia', 'Kyiv', 'Odessa', 'Vilnius'],
  },
  {
    id: 2,
    question: 'What is the population of Ukraine?',
    correct_answer: '40 mln',
    incorrect_answers: ['2 mln', '12 mln', '20 mln'],
    all_answers: ['2 mln', '12 mln', '20 mln', '40 mln'],
  },
  {
    id: 3,
    question: 'The official language of Ukraine is:',
    correct_answer: 'Ukrainian',
    incorrect_answers: ['Polish', 'Russian', 'Belarusian'],
    all_answers: ['Polish', 'Russian', 'Ukrainian', 'Belarusian'],
  },
  {
    id: 4,
    question:
      "Which Ukrainian poet, a national hero and a symbol of Ukraine, has written 'Kobzar'?",
    correct_answer: 'Taras Shevchenko',
    incorrect_answers: ['Ivan Franko', 'Valerian Pidmohylny', 'Dimitar Talev'],
    all_answers: [
      'Ivan Franko',
      'Taras Shevchenko',
      'Valerian Pidmohylny',
      'Dimitar Talev',
    ],
  },
  {
    id: 5,
    question: 'When was the capital of Ukraine established (a century)?',
    correct_answer: '5th',
    incorrect_answers: ['12th', '14th', '16th'],
    all_answers: ['12th', '5th', '14th', '16th'],
  },
  {
    id: 6,
    question: 'What are the mountains of Ukraine called?',
    correct_answer: 'Carpathian Mountains and Crimean mountains',
    incorrect_answers: ['Balkan Mountains', 'Himalayas', 'Rocky Mountains'],
    all_answers: [
      'Carpathian Mountains and Crimean mountains',
      'Balkan Mountains',
      'Himalayas',
      'Rocky Mountains',
    ],
  },
  {
    id: 7,
    question: 'A traditional Ukrainian beet soup is:',
    correct_answer: 'borscht',
    incorrect_answers: ['kharcho', 'varenyky', 'tarator'],
    all_answers: ['borscht', 'kharcho', 'varenyky', 'tarator'],
  },
  {
    id: 8,
    question:
      'What famous English Christmas carol is derived from Ukrainian shchedrivka?',
    correct_answer: 'Carol of the Bells',
    incorrect_answers: ['Jingle Bells', 'O Holy Night', 'The First Noel'],
    all_answers: [
      'Jingle Bells',
      'O Holy Night',
      'Carol of the Bells',
      'The First Noel',
    ],
  },
  {
    id: 9,
    question:
      'The largest river in Ukraine (and the third largest in Europe) is:',
    correct_answer: 'Dnipro River',
    incorrect_answers: ['Southern Bug', 'Danube', 'Dniester'],
    all_answers: ['Dnipro River', 'Southern Bug', 'Danube', 'Dniester'],
  },
  {
    id: 10,
    question:
      "A Ukrainian former professional footballer, a winner of the 'Golden Ball' 2004 is:",
    correct_answer: 'Andriy Shevchenko',
    incorrect_answers: [
      'Oleksandr Zinchenko',
      'Vitali Klitschko',
      'Robert Lewandowski',
    ],
    all_answers: [
      'Oleksandr Zinchenko',
      'Vitali Klitschko',
      'Robert Lewandowski',
      'Andriy Shevchenko',
    ],
  },
];
