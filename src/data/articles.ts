export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

const koteshwar = {
  name: "Chinnolla Koteshwar",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  bio: "Associate Software Engineer at Anasol Consultancy Services",
};

export const articles: Article[] = [
  {
    id: "P001",
    title: "ApiSynIQ — Talk to Your APIs",
    subtitle: "An open-source conversational layer that sits in front of your APIs",
    category: "AI / Agents",
    date: "Nov 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction:
        "ApiSynIQ is an open-source framework that lets users interact with APIs through natural voice or text — no long forms, no manual JSON wrangling. Say 'Book me a ticket to Mumbai for tomorrow' and ApiSynIQ understands the intent, constructs the correct request payload, calls the right endpoint, and hands back a human-readable response. It's a conversational layer that sits in front of your APIs and makes them accessible to anyone, through any interface.",
      sections: [
        {
          heading: "Why ApiSynIQ Exists",
          content:
            "Without ApiSynIQ, users fill 10-field forms, developers wire up every UI field, API calls stay static and brittle, and voice support is a separate project. With ApiSynIQ, users say what they want, the system infers parameters from intent, semantic search finds the right endpoint, and voice ↔ text is built in from day one.",
        },
        {
          heading: "Layer 1 — Go Gateway: Handle Everything, Drop Nothing",
          content:
            "Every request — voice or text, HTTP or WebSocket — lands in the Go Gateway first. Go's goroutine model makes concurrent request handling nearly effortless. Built with net/http for standard HTTP and gorilla/websocket for persistent streaming connections so AI tokens flow to the client in real time as they're generated. Requests are then dispatched to the AI Orchestrator over gRPC.",
        },
        {
          heading: "Layer 2 — Python AI Orchestrator: The Brain",
          content:
            "Written in Python because nothing else comes close for AI tooling. The orchestrator routes requests to the right model, reasons about which endpoint satisfies the user's intent, pulls relevant context, persists conversation history, manages LangChain and LangGraph agent logic, defines tools wired to deep agents and subagents, transcribes voice ↔ text, and converts raw JSON schemas into typed Pydantic models. It queries the API catalogue using two query types: Input Query (POST/PUT/PATCH bodies) and Output Query (GET/DELETE results).",
        },
        {
          heading: "Layer 3 — Java API Resolver: The Memory",
          content:
            "Written in Java for its mature, battle-tested ecosystem for database-heavy workloads. This is the RAG engine — every API's input and output descriptions are stored as vector embeddings in pgvector (PostgreSQL). When the orchestrator needs an endpoint, it runs genuine semantic similarity search, not brittle keyword lookup. It also maintains relational mappings between parameters and natural language descriptions, stores structured info about every JSON schema, and powers all CRUD operations for the SDK.",
        },
        {
          heading: "Layer 4 — Java Agent SDK: The Connector",
          content:
            "An annotation-based SDK that lets you describe endpoints, DTOs, and parameters in plain language inside your existing Java code. Key annotations: @AIExposeController (gives a complete picture of all endpoints in a class), @AIExposeDto (describes a DTO so the AI knows what it's filling), @AIExposeEpHttp (the richest annotation — fully describes an endpoint: what it does, how to call it, when to use it, what it returns), and @Describe (fine-grained documentation for individual fields). Co-locating descriptions with code means they stay in sync as APIs evolve — no drift between docs and reality.",
        },
        {
          heading: "End-to-End Request Flow",
          content:
            "User (voice/text) → Go Gateway (concurrent HTTP + WebSocket) → AI Orchestrator over gRPC (LangGraph agents, tool definitions, voice I/O) → API Resolver via gRPC FETCH (pgvector RAG search returns top chunks + URLs) → correct API called → response interpreted → user gets an answer. TTS streams the spoken reply back via the SPEAK gRPC channel.",
        },
      ],
      conclusion:
        "ApiSynIQ is open source under Apache-2.0 and built for developers who believe APIs should talk back. The framework currently ships a Java SDK with more languages on the roadmap.",
    },
    tags: ["Open Source", "LangGraph", "Go", "Python", "Java", "gRPC", "pgvector", "RAG"],
  },
  {
    id: "P002",
    title: "Natural Language Based Autonomous Navigation Vehicle",
    subtitle: "IEEE-published robotic vehicle that understands, plans, and asks for help",
    category: "Robotics / AI",
    date: "Aug 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction:
        "A robotic vehicle that understands natural language, transports objects between locations, responds to user inputs, asks task-specific questions when it needs human help, and executes complex multi-step workflows flawlessly. Published at the 2025 International Conference on Computing Technologies (ICOCT), Bengaluru — DOI 10.1109/ICOCT64433.2025.11118685.",
      sections: [
        {
          heading: "Understanding Natural Language — Four LLM Roles",
          content:
            "Accurate language understanding is the crucial first step. The system uses LLMs with tool-calling in four distinct roles: (1) Tool-calling LLM — generates task-specific workflows; (2) Input Classification LLM — decides whether the user wants a task performed or is asking a general question (current position, task history, capabilities); (3) Orchestrator LLM — restructures user input so downstream planning produces perfect plans; (4) Responding LLM — handles conversational replies that aren't location-specific.",
        },
        {
          heading: "Transporting Things — A* + Decoder",
          content:
            "Path-finding combines the A* algorithm with a custom decoder. The environment map is treated as a graph: obstacles are 1s, free paths are 0s. A* finds the shortest path between the source and destination nodes selected by the LLM. The decoder then translates A*'s output into precise instructions Arduino can execute, so the vehicle follows the path without directional errors.",
        },
        {
          heading: "Responding to User Inputs",
          content:
            "Three scenarios route through the Responding LLM: the vehicle is busy with another task when a new request arrives; the requested location doesn't exist in the mapped environment; or the user just wants to clarify something (where it is, what it has done, what it can do). In every case the input is redirected to the Responding LLM which generates an appropriate reply instead of a navigation plan.",
        },
        {
          heading: "Asking Task-Specific Questions",
          content:
            "The vehicle travels, transports, and speaks — it doesn't manipulate objects itself. So whenever a task needs hands, it asks for a human. Example: asked to bring coffee from the kitchen to the bedroom, it drives to the kitchen, requests someone to make the coffee, waits until it's ready, then carries it to the bedroom.",
        },
        {
          heading: "Complex Workflows — Backtracking & Serialisation",
          content:
            "Case 1 — Task in Task (dependent): mid-task, the vehicle may receive a sub-task. If 'no coffee powder, fetch it from the storeroom first' is said at the kitchen, it backtracks: detours to the storeroom, returns the powder, waits for coffee, then resumes the original delivery to the bedroom. Case 2 — Task After Task (independent): if a new unrelated task arrives mid-execution (fetch the bat from the storeroom to the park), it serialises tasks and completes them one after the other.",
        },
        {
          heading: "Running It Locally with Docker",
          content:
            "Repo: github.com/KoteshwarChinnolla/A_robotic_vehicle. Clone, create a .env with GROQ_API_KEY, GROQ_MODEL (defaults to llama-3.3-70b-versatile), and optionally ARDUINO_PORT (e.g. COM7 on Windows, /dev/ttyUSB0 on Linux), then run `docker compose up --build`. A prebuilt image is also published as koti21/robotic_car:v0.0.1 for both local-only and Raspberry-Pi-with-Arduino setups. The UI is served at http://localhost:5000/ui/ where you can pick an image map and either type or speak your instructions.",
        },
      ],
      conclusion:
        "Co-authored with M. D. Chaithanya, M. Abdul Kaleem, and A. Vishnubhatla, the paper combines LLM tool-calling, A* planning, and human-in-the-loop robotics into a single voice-driven autonomous vehicle. Read the IEEE publication at ieeexplore.ieee.org/document/11118685.",
    },
    tags: ["IEEE", "LLM", "A*", "LangChain", "Raspberry Pi", "Arduino", "Docker", "Groq"],
  },
  {
    id: "P003",
    title: "Open-Source Helm Charts & Terraform Modules",
    subtitle: "Production-grade infrastructure as code for the community",
    category: "DevOps / Cloud",
    date: "June 2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction: "Maintaining open-source repositories with production-grade Helm charts and Terraform modules for managing AWS workloads and Kubernetes deployments.",
      sections: [
        {
          heading: "Helm Charts",
          content: "Production-grade Helm charts for Kafka, Redis, Certificate Authorities, and more. Each chart follows best practices with configurable values, health checks, resource limits, and security contexts.",
        },
        {
          heading: "Terraform Modules",
          content: "Reusable Terraform modules for managing AWS workloads including Kubernetes clusters, S3 buckets, web hosting lifecycle management using CloudFront, S3, and Route53.",
        },
        {
          heading: "Infrastructure Patterns",
          content: "Established patterns for CI/CD pipeline integration, secret management, and multi-environment deployments. All modules are thoroughly documented and tested.",
        },
      ],
      conclusion: "These open-source contributions help teams adopt infrastructure as code best practices and accelerate their cloud-native journey.",
    },
    tags: ["Terraform", "Kubernetes", "AWS", "Helm", "Open Source"],
  },
  {
    id: "P004",
    title: "Production ERP Systems & Job Platform",
    subtitle: "Enterprise-scale backend services at Anasol Consultancy",
    category: "Backend",
    date: "Apr 2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction: "Contributing to production-grade ERP systems and a job recommendation platform at Anasol Consultancy Services, building and deploying scalable backend services.",
      sections: [
        {
          heading: "ERP System Development",
          content: "Working on production-grade ERP systems including various products and software modules. Focused on reliability, scalability, and maintainability of enterprise software.",
        },
        {
          heading: "Scalable Backend Architecture",
          content: "Built services using Kubernetes for orchestration, Kafka for event streaming, Redis for caching, and Docker for containerization. Implemented CI/CD pipelines for automated testing and deployment.",
        },
        {
          heading: "AWS Lambda & Serverless",
          content: "Leveraged AWS Lambda for serverless functions to handle specific workloads efficiently, reducing infrastructure costs while maintaining high availability.",
        },
      ],
      conclusion: "This role combines hands-on engineering with production systems and cutting-edge cloud technologies at enterprise scale.",
    },
    tags: ["Kubernetes", "Kafka", "Redis", "AWS Lambda", "CI/CD", "Docker"],
  },
  {
    id: "P005",
    title: "IEEE Research: NL-Based Autonomous Navigation",
    subtitle: "Published research on natural language vehicle control",
    category: "Research",
    date: "June 2025",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction: "Published IEEE research paper on 'Natural Language Based Autonomous Navigation Vehicle' — combining NLP, path planning, and robotics for human-robot interaction.",
      sections: [
        {
          heading: "Research Problem",
          content: "Current autonomous vehicles require specialized programming interfaces. This research explores using natural language as the primary control mechanism, making robot operation accessible to non-technical users.",
        },
        {
          heading: "Methodology",
          content: "Combined large language models with A* path planning and physical motor control systems. The pipeline processes speech input, extracts navigation intent, plans optimal paths, and executes physical movements.",
        },
      ],
      conclusion: "The research demonstrates that natural language interfaces can effectively control autonomous vehicles, opening doors for accessible human-robot interaction.",
    },
    tags: ["IEEE", "Research", "NLP", "Autonomous Navigation", "Robotics"],
  },
  {
    id: "P006",
    title: "Machine Learning & Computer Vision Projects",
    subtitle: "Deep learning applications with TensorFlow and PyTorch",
    category: "ML / CV",
    date: "2023 – 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction: "A collection of machine learning and computer vision projects built during academic studies and personal exploration, using TensorFlow, PyTorch, and OpenCV.",
      sections: [
        {
          heading: "Deep Learning Models",
          content: "Built and trained various deep learning models for classification, object detection, and sequence prediction tasks using TensorFlow and PyTorch frameworks.",
        },
        {
          heading: "Computer Vision Applications",
          content: "Developed computer vision applications using OpenCV for image processing, feature extraction, and real-time object tracking.",
        },
        {
          heading: "Tools & Frameworks",
          content: "Extensive work with TensorFlow, PyTorch, OpenCV, NumPy, and scikit-learn. Experience with data preprocessing, model training, hyperparameter tuning, and deployment.",
        },
      ],
      conclusion: "These projects built a strong foundation in ML/DL that now powers the Agentic AI systems in production work.",
    },
    tags: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "OpenCV"],
  },
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find((article) => article.id === id);
};

export const getRelatedArticles = (id: string, limit = 3): Article[] => {
  const current = getArticleById(id);
  if (!current) return articles.slice(0, limit);
  return articles
    .filter((a) => a.id !== id)
    .slice(0, limit);
};
