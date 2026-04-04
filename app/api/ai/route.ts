import { NextResponse } from "next/server";

const PORTFOLIO_KNOWLEDGE = {
  sections: ["Hero", "Services", "Projects", "Clients", "FAQ", "Contact"],
  techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Modern UI Design", "POS Systems", "Full-stack Applications"],
  services: [
    "Web Development (React, Next.js, TS)",
    "UI/UX Design (Modern, Neo-Brutalism)",
    "Mobile Development",
    "POS System Architecture",
    "Full-stack Solutions"
  ],
  projects: [
    "Neo-Brutalism Portfolio",
    "Modern Portfolio (Ago27)",
    "BookIt Booking Site",
    "Government Portal (Next.js + MySQL)"
  ]
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    let response = "";

    if (lastMessage.includes("project") || lastMessage.includes("work")) {
      response = `Augustine has built several impressive projects including: ${PORTFOLIO_KNOWLEDGE.projects.join(", ")}. Which one would you like to know more about?`;
    } else if (lastMessage.includes("service") || lastMessage.includes("can you do")) {
      response = `I offer a range of specialized services: ${PORTFOLIO_KNOWLEDGE.services.join(", ")}. Are you looking for something specific?`;
    } else if (lastMessage.includes("stack") || lastMessage.includes("tech") || lastMessage.includes("use")) {
      response = `The core tech stack includes ${PORTFOLIO_KNOWLEDGE.techStack.join(", ")}. It's focused on high performance and exceptional UI.`;
    } else if (lastMessage.includes("contact") || lastMessage.includes("hire") || lastMessage.includes("start")) {
      response = "I'd love to help you start a new project! What exactly are you building? (e.g., Timeline, Features, Budget). You can also find the contact form at the bottom of the page.";
    } else if (lastMessage.includes("hi") || lastMessage.includes("hello") || lastMessage.includes("hey")) {
      response = "Hello! I'm your portfolio assistant. I can help you explore projects, services, or guide you on how to start a new build together. What's on your mind?";
    } else if (lastMessage.includes("who are you") || lastMessage.includes("about")) {
      response = "I am an AI assistant for Augustine's developer portfolio. My mission is to help you navigate his work and technical expertise.";
    } else {
      response = "That's interesting! To better assist you, could you tell me if you're interested in exploring specific projects, services, or perhaps starting a new collaboration?";
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ content: response });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
