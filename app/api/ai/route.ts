import { NextResponse } from "next/server";

type Intent =
  | "greeting"
  | "projects"
  | "services"
  | "tech"
  | "contact"
  | "about"
  | "start_project"
  | "pricing"
  | "unknown";

type ChatContext = {
  lastIntent?: Intent;
  projectType?: string;
  interested?: boolean;
};

const KNOWLEDGE = {
  projects: [
    "Neo-Brutalism Portfolio",
    "Modern Portfolio (Ago27)",
    "BookIt Booking Site",
    "Government Portal (Next.js + MySQL)"
  ],
  services: [
    "Web Development",
    "UI/UX Design",
    "Mobile Development",
    "POS System Architecture",
    "Full-stack Solutions"
  ],
  techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Modern UI Design", "POS Systems", "Full-stack Applications"]
};

function detectIntent(message: string): Intent {
  const msg = message.toLowerCase();
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) return "greeting";
  if (msg.includes("project") || msg.includes("work")) return "projects";
  if (msg.includes("service") || msg.includes("can you do")) return "services";
  if (msg.includes("stack") || msg.includes("tech") || msg.includes("use")) return "tech";
  if (msg.includes("contact") || msg.includes("hire") || msg.includes("start")) return "start_project";
  if (msg.includes("price") || msg.includes("cost") || msg.includes("budget")) return "pricing";
  if (msg.includes("who are you") || msg.includes("about")) return "about";
  return "unknown";
}

function updateContext(context: ChatContext, intent: Intent, message: string): ChatContext {
  const newContext = { ...context, lastIntent: intent };
  if (intent === "start_project") newContext.interested = true;
  return newContext;
}

function generateResponse(intent: Intent, context: ChatContext) {
  switch (intent) {
    case "greeting":
      return {
        content: "Hi! I can help you explore projects, services, or start a new build.",
        mode: "buttons",
        options: ["Projects", "Services", "Start a Project", "About"]
      };
    case "projects":
      return {
        content: `Augustine has built: ${KNOWLEDGE.projects.join(", ")}.`,
        mode: "buttons",
        options: ["See Services", "Start a Project", "Contact"]
      };
    case "services":
      return {
        content: `Specialized in: ${KNOWLEDGE.services.join(", ")}.`,
        mode: "buttons",
        options: ["See Projects", "Start a Project", "Contact"]
      };
    case "tech":
      return {
        content: `Stack: ${KNOWLEDGE.techStack.join(", ")}. Focus is performance & UI.`,
        mode: "buttons",
        options: ["Projects", "Start a Project"]
      };
    case "start_project":
      return {
        content: "Nice 🔥 What are you building?",
        mode: "buttons",
        options: ["Landing Page", "E-commerce", "Full System", "Custom App"]
      };
    case "pricing":
      return {
        content: "Pricing depends on complexity. What's your estimated budget?",
        mode: "input",
        inputPlaceholder: "e.g. $1,000 - $5,000"
      };
    case "about":
      return {
        content: "I'm Augustine's AI assistant. I help navigate his work and technical expertise.",
        mode: "buttons",
        options: ["Projects", "Services", "Contact"]
      };
    default:
      if (context.interested) {
        return {
          content: "Got it. Tell me more about the features or timeline you have in mind.",
          mode: "input",
          inputPlaceholder: "Features, timeline, etc."
        };
      }
      return {
        content: "How can I help you today?",
        mode: "buttons",
        options: ["Projects", "Services", "Start a Project"]
      };
  }
}

export async function POST(req: Request) {
  try {
    const { messages, context = {} } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const intent = detectIntent(lastMessage);
    const updatedContext = updateContext(context, intent, lastMessage);
    const response = generateResponse(intent, updatedContext);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    return NextResponse.json({
      ...response,
      context: updatedContext
    });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
