export type SkillLevel = "Confirm" | "Beginner" | "Intermediate" | "N.A";

export type Skill = {
  id: string;
  label: string;
  defaultChecked?: boolean;
  defaultLevel?: SkillLevel;
};

export type SkillGroup = {
  id: string;
  label: string;
  rating: number; // 0..5
  skills: Skill[];
};

export const skillLevels: SkillLevel[] = [
  "Confirm",
  "Beginner",
  "Intermediate",
  "N.A"
];

export const skillGroups: SkillGroup[] = [
  {
    id: "web-dev",
    label: "DEVELOPPEMENT WEB",
    rating: 4,
    skills: [
      { id: "html-css", label: "HTML/CSS", defaultChecked: true, defaultLevel: "Confirm" },
      { id: "javascript", label: "JavaScript", defaultChecked: true, defaultLevel: "Beginner" },
      { id: "java", label: "Java", defaultChecked: false, defaultLevel: "N.A" },
      { id: "cpp", label: "C++", defaultChecked: false, defaultLevel: "N.A" },
      { id: "python-backend", label: "Python_back-end", defaultChecked: true, defaultLevel: "Intermediate" }
    ]
  },
  {
    id: "ai",
    label: "INTELLIGENCE ARTIFICIELLE",
    rating: 4,
    skills: [
      { id: "python-ia", label: "Python_IA", defaultChecked: true, defaultLevel: "Intermediate" },
      { id: "aws-sagemaker", label: "AWS SageMaker", defaultChecked: true, defaultLevel: "Beginner" },
      { id: "keras", label: "Keras", defaultChecked: true, defaultLevel: "Intermediate" },
      { id: "tensorflow-google", label: "TensorFlow_Google", defaultChecked: false, defaultLevel: "N.A" },
      { id: "azure-ml", label: "Azur Machine Learning", defaultChecked: false, defaultLevel: "N.A" }
    ]
  },
  {
    id: "dataviz",
    label: "DATA VISUALISATION",
    rating: 4,
    skills: [
      { id: "powerbi", label: "PowerBI", defaultChecked: true, defaultLevel: "Confirm" },
      { id: "tableau", label: "Tableau", defaultChecked: false, defaultLevel: "Confirm" },
      { id: "qlick", label: "Qlick", defaultChecked: true, defaultLevel: "Confirm" },
      { id: "google-analytics", label: "Google Analytics", defaultChecked: false, defaultLevel: "N.A" },
      { id: "matplotlib", label: "Matplotlib Python", defaultChecked: false, defaultLevel: "N.A" }
    ]
  },
  {
    id: "tools",
    label: "OUTILS AGILES / METHODOLOGIE",
    rating: 4,
    skills: [
      { id: "jira", label: "Jira", defaultChecked: true, defaultLevel: "Confirm" },
      { id: "trello", label: "Trello", defaultChecked: true, defaultLevel: "Beginner" },
      { id: "asana", label: "Asana", defaultChecked: true, defaultLevel: "Intermediate" },
      { id: "wrike", label: "Wrike", defaultChecked: false, defaultLevel: "N.A" },
      { id: "excel", label: "Excel", defaultChecked: false, defaultLevel: "N.A" }
    ]
  },
  {
    id: "languages",
    label: "LANGAGES DE PROGRAMMATION",
    rating: 2,
    skills: [
      { id: "sql", label: "SQL", defaultChecked: true, defaultLevel: "Confirm" },
      { id: "vba", label: "VBA", defaultChecked: true, defaultLevel: "Beginner" },
      { id: "python", label: "Python", defaultChecked: true, defaultLevel: "Beginner" },
      { id: "r", label: "R", defaultChecked: false, defaultLevel: "N.A" },
      { id: "js2", label: "JavaScript", defaultChecked: false, defaultLevel: "N.A" }
    ]
  }
];

