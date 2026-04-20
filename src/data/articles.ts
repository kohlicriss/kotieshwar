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
  bio: "Associate Software Engineer – AI & DevOps at Anasol Consultancy Services",
};

export const articles: Article[] = [
  {
    id: "P001",
    title: "ApiSynIQ — Talk to Your APIs",
    subtitle: "A multi-service framework for natural language interaction with REST APIs",
    category: "AI / Agents",
    date: "Nov 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction:
        "ApiSynIQ is an open-source framework that lets users interact with REST APIs using natural voice or text instead of traditional forms. Say what you want — ApiSynIQ understands the intent, identifies the right endpoint, generates a valid API request, calls it, and returns a human-readable response.",
      sections: [
        {
          heading: "Multi-Service Architecture",
          content:
            "Designed a multi-service architecture (Go Gateway, Python AI Orchestrator, Java API Resolver, Java Agent SDK) that understands user intent, identifies the right endpoint, and generates valid API requests automatically — communicating over gRPC for low-latency cross-language calls.",
        },
        {
          heading: "Semantic API Discovery with pgvector + RAG",
          content:
            "Implemented a semantic API discovery engine with pgvector (PostgreSQL) and Retrieval-Augmented Generation. Every API's input/output description is stored as vector embeddings, enabling the system to match human language to the correct backend service via genuine similarity search rather than brittle keyword lookup.",
        },
        {
          heading: "Annotation-Based SDK",
          content:
            "Created a developer-friendly annotation SDK that turns existing Java APIs into conversational interfaces with minimal code changes. Annotations like @AIExposeController, @AIExposeDto, @AIExposeEpHttp, and @Describe live alongside the code, so descriptions stay in sync as APIs evolve.",
        },
        {
          heading: "Voice and Text, End to End",
          content:
            "The Go Gateway handles HTTP and WebSocket traffic concurrently using goroutines. The Python orchestrator transcribes voice → text, runs LangChain/LangGraph agents, and synthesizes text → voice. Tokens stream back in real time so users feel the system thinking out loud.",
        },
      ],
      conclusion:
        "Open-sourced under Apache-2.0, ApiSynIQ is built for developers who believe APIs should talk back. Java SDK ships today; more languages on the roadmap.",
    },
    tags: ["Go", "Python", "Java", "gRPC", "PostgreSQL", "pgvector", "LangChain", "LangGraph"],
  },
  {
    id: "P002",
    title: "Natural Language Based Autonomous Navigation Vehicle",
    subtitle: "IEEE-published autonomous vehicle that interprets spoken commands into navigation workflows",
    category: "Robotics / AI",
    date: "Aug 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction:
        "An autonomous vehicle that interprets spoken or text commands into task-specific navigation workflows in indoor environments. Published at the 2025 International Conference on Computing Technologies (ICOCT), Bengaluru — DOI 10.1109/ICOCT64433.2025.11118685.",
      sections: [
        {
          heading: "LLM-Based Planning & Response",
          content:
            "Integrated LLM-based planning and response modules to interpret user intent, ask clarification questions when context is missing, and manage multi-step tasks dynamically — using four specialised LLM roles for tool-calling, input classification, orchestration, and conversational responses.",
        },
        {
          heading: "A* Path Planning with Custom Decoder",
          content:
            "Implemented A* path planning over a grid representation of the environment (obstacles as 1s, free paths as 0s) with a custom motion decoder that translates the path into precise instructions Arduino can execute — enabling accurate, obstacle-aware navigation and object delivery between locations.",
        },
        {
          heading: "Complex Workflow Handling",
          content:
            "Handled real-world workflow complexity: backtracking for dependent sub-tasks (e.g. 'no coffee powder, fetch it from the storeroom first') and serialisation for independent tasks arriving mid-execution. The vehicle also asks humans for help when a task requires hands it doesn't have.",
        },
        {
          heading: "Edge Deployment",
          content:
            "Runs entirely at the edge on a Raspberry Pi with Docker, using OpenCV for perception and Groq-hosted LLMs for language understanding. A web UI at http://localhost:5000/ui/ accepts typed or spoken instructions over an environment image.",
        },
      ],
      conclusion:
        "Co-authored with M. D. Chaithanya, M. Abdul Kaleem, and A. Vishnubhatla. Published at IEEE ICOCT 2025 for its approach to combining conversational AI with robotic task execution. Read the paper at ieeexplore.ieee.org/document/11118685.",
    },
    tags: ["IEEE", "Python", "Raspberry Pi", "Arduino", "OpenCV", "A*", "Docker", "LLMs"],
  },
  {
    id: "P003",
    title: "Cloud Infrastructure Automation Toolkit",
    subtitle: "Reusable Terraform modules and Helm charts for production-grade cloud deployments",
    category: "DevOps / Cloud",
    date: "2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction:
        "An open-source toolkit of reusable Terraform modules and Helm charts that automate cloud infrastructure provisioning and Kubernetes deployments across AWS environments.",
      sections: [
        {
          heading: "Production-Ready Templates",
          content:
            "Designed production-ready templates for EKS, ECS, VPC, RDS, ALB, Kafka, Redis, and microservices — reducing repetitive setup for scalable systems and giving teams a sane starting point for new workloads.",
        },
        {
          heading: "GitOps with ArgoCD",
          content:
            "Integrated GitOps workflows with ArgoCD and Helm for consistent, version-controlled deployments from infrastructure to application layer — every change is auditable and reversible.",
        },
        {
          heading: "Service Mesh & Observability",
          content:
            "Wired Istio for service-to-service traffic management and mTLS, with hooks for metrics and logging so production clusters stay observable from day one.",
        },
      ],
      conclusion:
        "Actively used in real deployments. Modules are open source for the community to fork, extend, and harden further.",
    },
    tags: ["Terraform", "Helm", "Kubernetes", "AWS", "ArgoCD", "Istio"],
  },
  {
    id: "P004",
    title: "NLP Architecture Evolution Study",
    subtitle: "From Bag of Words to BERT — building each technique from the ground up",
    category: "ML / NLP",
    date: "2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction:
        "A trio of connected NLP projects covering spam classification, BERT pre-training from scratch, and sentiment analysis — built to understand the evolution from statistical methods to deep contextual learning, not just to use them as black-box libraries.",
      sections: [
        {
          heading: "Statistical to Contextual",
          content:
            "Implemented and compared Bag of Words, TF-IDF, Word2Vec, Bi-LSTM, and BERT, observing how each architecture improved language understanding and prediction accuracy across the same tasks.",
        },
        {
          heading: "BERT Pre-Training from Scratch",
          content:
            "Pre-trained a BERT model from scratch to internalize masked language modelling and next-sentence prediction — demystifying how transformer encoders actually learn contextual representations.",
        },
        {
          heading: "Built to Study, Not to Ship",
          content:
            "Each model was built from the ground up to study internal behaviour and trade-offs — giving me an intuition for which architecture fits which problem, instead of defaulting to whatever is in fashion.",
        },
      ],
      conclusion:
        "This study became the foundation for later work on agentic systems and structured generation — the same questions about representation and context show up everywhere.",
    },
    tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Transformers", "BERT", "RNN"],
  },
  {
    id: "P005",
    title: "OpenCV Computer Vision Learning Repository",
    subtitle: "A practical repository exploring core image processing and real-time object detection",
    category: "Computer Vision",
    date: "2024",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction:
        "A practical computer vision repository exploring core image processing concepts and real-time object detection workflows — built to internalize CV fundamentals through hands-on implementation.",
      sections: [
        {
          heading: "Core Image Processing",
          content:
            "Worked through filters, edge detection, contours, morphological operations, and colour-space transforms with OpenCV and NumPy — the building blocks every higher-level CV system depends on.",
        },
        {
          heading: "Real-Time Object Detection",
          content:
            "Implemented real-time detection workflows with YOLOv8, including video stream processing, bounding-box visualisation, and lightweight tracking — a base for deployment on edge devices like the Raspberry Pi.",
        },
      ],
      conclusion:
        "The hands-on grounding from this repo directly fed into the perception layer of the autonomous navigation vehicle.",
    },
    tags: ["Python", "OpenCV", "YOLOv8", "NumPy"],
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
