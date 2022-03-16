import React from 'react'

const ExampleData = () => {

  const menteesGoals = [
    {
      id: 1,
      menteeName: 'Niall Bean',
      goalName: 'Finish Annual report',
      additionalNotes: 'The final report for the project must be completed. Any problems I face I should talk with Neema',
      deadline: '3/23/2022',
      isComplete: false
    },
    {
      id: 2,
      menteeName: 'Ruby-Leigh Powell',
      goalName: 'Consult with Heidi about issues in the workplace',
      additionalNotes: 'The recent workplace survery revealed many are unhappy about the environment they work in',
      deadline: '4/25/2022',
      isComplete: false
    },
    {
      id: 3,
      menteeName: 'Heidi Galloway',
      goalName: 'Consult with Ruby about issues in the workplace',
      additionalNotes: 'The recent workplace survery revealed many are unhappy about the environment they work in',
      deadline: '3/19/2022',
      isComplete: false
    },
    {
      id: 6,
      menteeName: 'Niall Bean',
      goalName: 'Finish monthly report',
      additionalNotes: 'The initial monthly report for the project must be completed. Any problems I face I should talk with Neema',
      deadline: '3/14/2022',
      isComplete: true
    },
    {
      id: 7,
      menteeName: 'Jeremiah Trevino',
      goalName: 'Finish tax planning report',
      additionalNotes: 'The tax planing report requires me to lookup ...',
      deadline: '3/13/2022',
      isComplete: true
    }
  ]

  const myEvents = [
    {
      id: 1,
      title: 'Monthly Report',
      additionalNotes: 'In this meeting, we will discuss the annual report and the improvements we can make.',
      participants: ['Niall Bean', 'Ruby-Leigh Powell', 'Heidi Galloway'],
      date: '4/25/2022',
      time: '18:30',
      place: 'Finance Building',
      isUpcoming: true,
      type: 'Meeting'
    },
    {
      id: 63,
      title: "What are the greatest threats and opportunities the current market poses?",
      tutors: ["Harry Davidson", "Jeremiah Trevino"],
      additionalNotes: "We will be discussing about the state of the current market and its implications.",
      date: "3/19/2022",
      time: "10:45",
      place: "Finance Building",
      isUpcoming: true,
      isRegistered: true,
      type: 'Workshop'
    },
    {
      id: 16,
      title: "Issues in the workplace",
      additionalNotes: "We will all be voicing our own opinions on the current environment in the workplace and how it can be imporved.",
      date: "4/25/2022",
      time: "13:00",
      place: "Bateman Building",
      isRegistered: true,
      isUpcoming: true,
      type: 'Group Session'
    },
    {
      id: 88,
      title: "Introduction into Investment Banking",
      tutors: ["Dylan Bernal", "Deacon Nicholls"],
      additionalNotes: "This will be a quick introduction as to what investment banking is all about",
      date: "2/8/2022",
      time: "14:00",
      place: "Finance Building",
      isRegistered: true,
      isUpcoming: false,
      type: 'Workshop'
    },
    {
      id: 33,
      title: 'Weekly Meet-Up',
      additionalNotes: 'General purpose',
      participants: ['Isha Bryan', 'Clarke Wilkinson'],
      date: '3/10/2022',
      time: '17:25',
      place: 'Finance Building',
      isUpcoming: false,
      type: 'Meeting'
    }

  ]

  const yourGoals = [
    {
      id: 1,
      goalName: 'Finish documentation for the report',
      additionalNotes: 'Specifically sections on accounting',
      deadline: '3/25/2022',
      isComplete: false
    },
    {
      id: 2,
      goalName: 'Read-up on data management',
      additionalNotes: 'To improve my employability, I must expand my areas of knowledge',
      deadline: '3/19/2022',
      isComplete: false
    },
    {
      id: 6,
      goalName: 'Finish up on insurance policy',
      additionalNotes: 'Sections 2.2 ad 4.3 need reviewing',
      deadline: '2/17/2022',
      isComplete: true
    }
  ]

  const user = {
    uid: 12345,
    name: "Neema Raiyat",
    email: "Neema.Raiyat@Warwick.ac.uk",
    bio: "I am a resourceful and highly-motivated second year undergraduate at the University of Warwick with a particular interest in improving sustainability in business environments.",
    skills: ["Analytical Thinking", "Financial Modelling"],
    workArea: "Quantitative Analyst",
    personalInterests: ["Music", "Art", "Interior-Design"],
    skillsToLearn: ["Accounting Skills", "Cash Flow Management"]
  }

  const userFeedback = [
    {
      fid: 1,
      from: "Heidi Galloway",
      fromid: 54321,
      to: "Neema Raiyat",
      toid: 12345,
      skill: "Analytical Thinking",
      feedback: "Neema is a brilliant mentor who is always looking to bring out the best in his mentees.",
      date: "2/14/2022",
      rating: 5
    },
    {
      fid: 2,
      from: "Jeremiah Trevino",
      fromid: 12412,
      to: "Neema Raiyat",
      toid: 12345,
      skill: "Financial Modelling",
      feedback: "Neema is very good at explaining things, but has a tendency to waffle on. Caused a lot of confusion but all went ok in the end.",
      date: "1/8/2022",
      rating: 2
    },
    {
      fid: 3,
      from: "Ruby-Leigh Powell",
      fromid: 54788,
      to: "Neema Raiyat",
      toid: 12345,
      skill: "Analytical Thinking",
      feedback: "Really enjoyed learning from Neema, we had some issues along the way but overall a very useful experience",
      date: "5/8/2021",
      rating: 4
    }
  ]

  const skillList = [
    {
      id:1,
      name:"Investment Banking"
    },
    {
      id:2,
      name:"Quantitative Analysis"
    },
    {
      id:3,
      name:"Accounting"
    },
    {
      id:4,
      name:"Cash Flow Management"
    },
    {
      id:5,
      name:"Analytical Thinking"
    },
    {
      id:6,
      name:"Financial Modelling"
    },
    {
      id:7,
      name:"Business Intelligence"
    },
    {
      id:8,
      name:"Data Management"
    },
    {
      id:9,
      name:"Business Acumen"
    },
    {
      id:10,
      name:"Financial Reporting"
    },
    {
      id:11,
      name:"Actuary"
    }
  ]

  // SUGGESTIONS:
  const workshops = [
    {
      id: 1,
      title: "How to cope with stress",
      tutors: ["Patrick Bateman"],
      additionalNotes: "The modern world can be a tough and stressful place. It can be useful to know how and when to calm yourself down",
      date: "4/20/2022",
      time: "13:30",
      place: "Bateman Building",
      isRegistered: false,
      type: 'Workshop'
    }
  ]

  const groupSessions = [
    {
      id: 4,
      title: "Women in the Workforce",
      additionalNotes: "We will be aiming to discuss the unique challenges women face in the modern day working environment",
      date: "3/27/2022",
      time: "9:00",
      place: "Human Resources Building",
      isRegistered: false,
      type: 'Group Session'
    }
  ]

  const suggestedMentors = [
    {
      id: 6,
      name: "Will Skeldon",
      email: "will.skeldon@mail.com",
      bio: "My job is to give original thinkers the space and support they need to shine.",
      skills: ["Project Managing", "Leadership", "People Skills", "Communication"],
      workArea: "Investment Banker",
      personalInterests: ["Music", "Comedy"],
      skillsToLearn: ["Accounting Skills", "Cash Flow Management"]
    },
    {
      id: 7,
      name: "Tomás Fernandes",
      email: "tom.fernandes@mail.com",
      bio: "If you're an innovator by nature, I can help you to unleash your potential.",
      skills: ["Project Managing"],
      workArea: "Human Resources",
      personalInterests: ["Basketball", "Football"],
      skillsToLearn: ["Accounting Skills", "Cash Flow Management"]
    },
    {
      id: 8,
      name: "Ãmbar Liu Jin",
      email: "ambar.jin@mail.com",
      bio: "As a senior manager for over 10 years, I look to help people fufill their potential by exploring how they can innovate.",
      skills: ["Project Managing", "Leadership", "People Skills", "Communication"],
      workArea: "Accounting",
      personalInterests: ["Music", "Interior-Design"],
      skillsToLearn: ["Accounting Skills", "Cash Flow Management"]
    }
  ]

  const myMentors = [
    {
      id: 10,
      name: "Samuel Gardiner",
      email: "sam.gardiner@mail.com",
      bio: "I'm a sales rep dedicated to helping local City services businesses grow their customer base and decrease customer churn. I have 6 years of experience in local sales and I've consistently met and exceeded my quota throughout my career. ",
      skills: ["Project Managing", "Leadership", "People Skills", "Communication"],
      workArea: "Investment Banker",
      personalInterests: ["Basketball", "Football"],
      skillsToLearn: ["Accounting Skills", "Cash Flow Management"]
    },
    {
      id: 11,
      name: "Melody Roberson",
      email: "mel.roberson@mail.com",
      bio: "I'm a sales coach that's interested in assisting small teams (five-10 people) optimize their time and workflows so businesses can grow without adding more headcount and reps can advance their careers.",
      skills: ["Business Acumen"],
      workArea: "Human Resources",
      personalInterests: ["Music", "Interior-Design"],
      skillsToLearn: ["Accounting Skills"]
    }
  ]

  const myMentees = [
    {
      id: 12,
      name: "Jeremiah Trevino",
      email: "jerem.trev@mail.com",
      bio: "If you're an innovator by nature, I can help you to unleash your potential.",
      skills: ["Project Managing", "Leadership", "People Skills", "Communication"],
      workArea: "Investment Banker",
      personalInterests: ["Food", "Camping", "Photography"],
      skillsToLearn: ["Accounting Skills", "Cash Flow Management"]
    },
    {
      id: 13,
      name: "Ruby-Leigh Powell",
      email: "ruby.powell@mail.com",
      bio: "My job is to give original thinkers the space and support they need to shine.",
      skills: ["Project Managing"],
      workArea: "Accounting",
      personalInterests: ["Music", "Football"],
      skillsToLearn: ["Accounting Skills", "Cash Flow Management"]
    },
    {
      id: 14,
      name: "Heidi Galloway",
      email: "heidi.galloway@mail.com",
      bio: "I'm a sales coach that's interested in assisting small teams (five-10 people) optimize their time and workflows so businesses can grow without adding more headcount and reps can advance their careers.",
      skills: ["People Skills", "Communication"],
      workArea: "Human Resources",
      personalInterests: ["Comedy"],
      skillsToLearn: ["Project Managing"]
    }
  ]



  const data = {menteesGoals, myEvents, yourGoals, user, userFeedback, skillList, 
    workshops, groupSessions, suggestedMentors, myMentors, myMentees}

  return data
}

export default ExampleData