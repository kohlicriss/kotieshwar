import koteshwarAvatar from "@/assets/koteshwar.jpeg";

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
  motivation: string;
  content: {
    introduction: string;
    sections: { heading: string; content: string }[];
    conclusion: string;
  };
  challenges?: string[];
  outcomes?: string[];
  techStack: string[];
  links?: { label: string; url: string }[];
  tags: string[];
}

const koteshwar = {
  name: "Chinnolla Koteshwar",
  avatar: koteshwarAvatar,
  bio: "Associate Software Engineer — AI & DevOps · Anasol Consultancy Services",
};

export const articles: Article[] = [
  {
    id: "P001",
    title: "ApiSynIQ — Talk to Your APIs",
    subtitle:
      "An open-source conversational layer that turns natural voice or text into precise API calls — no forms, no JSON wrangling.",
    category: "AI / Agents",
    date: "Nov 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
    author: koteshwar,
    motivation:
      "Every modern product still buries its real power behind 10-field forms. Users describe what they want in plain language, but APIs demand structured payloads. ApiSynIQ exists to close that gap — to make every API conversational by default, without forcing developers to rewrite a single endpoint.",
    content: {
      introduction:
        "ApiSynIQ is an open-source framework that lets users interact with REST APIs through natural voice or text. Just say 'Book me a ticket to Mumbai for tomorrow' or type 'Update my shipping address to…' — ApiSynIQ understands the intent, constructs the correct request payload, calls the right endpoint, and hands back a human-readable response. It's a conversational layer that sits in front of your APIs and makes them accessible to anyone, through any interface.",
      sections: [
        {
          heading: "1 · Go Gateway — Handle Everything, Drop Nothing",
          content:
            "Every request — voice or text, HTTP or WebSocket — lands here first. Go was chosen deliberately: its goroutine model makes concurrent request handling nearly effortless. net/http handles all standard HTTP requests with zero overhead, and gorilla/websocket maintains persistent, streaming WebSocket connections so AI tokens flow to the client in real time, as they're generated. Once accepted, every request is dispatched to the AI Orchestrator over gRPC.",
        },
        {
          heading: "2 · AI Orchestrator — The Brain (Python)",
          content:
            "Routes user requests to the right model, reasons about which API endpoint best satisfies the user's intent, pulls relevant context, persists conversation history, manages LangChain and LangGraph agent logic, defines tools and wires them to deep agents and subagents, transcribes voice ↔ text, and converts raw JSON schemas into Pydantic models for clean, typed API definitions. It queries the API Resolver via two query types — Input Query (for POST/PUT/PATCH bodies) and Output Query (for GET/DELETE responses).",
        },
        {
          heading: "3 · API Resolver — The Memory (Java + pgvector)",
          content:
            "The RAG engine of ApiSynIQ. Every API's input and output description is stored as vector embeddings in pgvector (PostgreSQL). When the orchestrator needs to find the right endpoint, it runs a semantic similarity search — not a brittle keyword lookup, but genuine meaning-based retrieval. It also maintains relational mappings between API parameters and natural-language descriptions, stores structured info about every JSON schema, and powers all SDK CRUD operations.",
        },
        {
          heading: "4 · Java Agent SDK — The Connector",
          content:
            "An annotation-based SDK that turns existing Java APIs into conversational interfaces with minimal code changes. @AIExposeController describes a controller, @AIExposeDto documents request bodies, @AIExposeEpHttp fully describes an endpoint (powering semantic search), and @Describe annotates individual variables. Descriptions live next to the code they describe, so they stay in sync as APIs evolve — no drift between docs and reality.",
        },
        {
          heading: "Request Flow — End to End",
          content:
            "User (voice/text) → Go Gateway (HTTP + WebSocket) → AI Orchestrator over gRPC → API Resolver runs pgvector RAG search → top chunks + URLs flow back → orchestrator builds a typed request → correct API is called → response is interpreted by the LLM → user gets a natural-language answer. Voice responses stream back through a parallel SPEAK channel.",
        },
      ],
      conclusion:
        "Open-sourced under Apache-2.0. Built for developers who believe APIs should talk back. Java SDK ships today; support for more languages is on the roadmap.",
    },
    challenges: [
      "Designing a four-language polyglot system (Go, Python, Java, Java SDK) that stays cohesive over gRPC.",
      "Keeping API descriptions in sync with code as endpoints evolve — solved with annotation-driven metadata.",
      "Achieving low-latency streaming so users feel the system 'think out loud' over WebSockets.",
    ],
    outcomes: [
      "Working multi-service framework with semantic API discovery via pgvector + RAG.",
      "Annotation-based Java SDK that turns existing controllers into conversational interfaces.",
      "Open-source release under Apache-2.0 — a foundation other developers can build on.",
    ],
    techStack: [
      "Go", "Python", "Java", "gRPC", "Protobuf", "PostgreSQL", "pgvector",
      "LangChain", "LangGraph", "Pydantic", "Spring", "WebSockets",
    ],
    links: [
      { label: "GitHub Repo", url: "https://github.com/KoteshwarChinnolla/ApiSynIQ" },
    ],
    tags: ["Open Source", "Agentic AI", "RAG", "gRPC", "pgvector"],
  },
  {
    id: "P002",
    title: "Natural Language Based Autonomous Navigation Vehicle",
    subtitle:
      "An IEEE-published autonomous vehicle that turns spoken commands into multi-step navigation workflows — running on a Raspberry Pi at the edge.",
    category: "Robotics / AI",
    date: "Aug 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80",
    author: koteshwar,
    motivation:
      "Robots in homes and industries shouldn't need keypads, JSON, or trained operators. The motivation was simple: someone should be able to walk up and say 'bring me coffee from the kitchen', and a vehicle should figure out the rest — including knowing when to ask for help, when to pause, and when to plan a sub-task.",
    content: {
      introduction:
        "An autonomous vehicle that interprets spoken or text commands into task-specific navigation workflows in indoor environments. Published at the 2025 International Conference on Computing Technologies (ICOCT), Bengaluru — DOI 10.1109/ICOCT64433.2025.11118685. Co-authored with M. D. Chaithanya, M. Abdul Kaleem, and A. Vishnubhatla.",
      sections: [
        {
          heading: "Understanding Natural Language — Four LLM Roles",
          content:
            "Tool-calling LLM generates task-specific workflows. Input Classification LLM decides whether the user is requesting a task, asking about state, or asking a general question. The Orchestrator restructures user input into something the planner can consume. The Responding LLM handles all conversational replies that don't trigger movement.",
        },
        {
          heading: "Transferring Things — A* + Custom Decoder",
          content:
            "The environment is treated as a grid: obstacles are 1s, free paths are 0s. A* finds the shortest path between LLM-resolved nodes. A custom decoder then translates that path into precise motion instructions Arduino can execute — eliminating directional drift and enabling accurate object delivery between locations.",
        },
        {
          heading: "Responding to User Inputs",
          content:
            "Three real-world cases drove this: the vehicle is busy with another task, the requested location doesn't exist, or the user just wants status (current position, task history, capabilities). All three are routed to the Responding LLM, which produces a sensible reply instead of a failure.",
        },
        {
          heading: "Asks for Help When It Has No Hands",
          content:
            "The vehicle's job is to travel, transport, and speak — not to perform every task itself. If asked to bring coffee, it reaches the kitchen, asks a human to make the coffee, waits, then completes the delivery. This honest acknowledgement of capability is what makes it usable in real homes and offices.",
        },
        {
          heading: "Complex Workflows — Backtracking & Serialisation",
          content:
            "Case 1: Task-in-task (dependent). If the kitchen has no coffee powder, the vehicle plans a sub-trip to the storeroom, returns, and resumes — implemented with backtracking. Case 2: Task-after-task (independent). If a new request arrives mid-execution, it serialises the new task after the current one completes.",
        },
        {
          heading: "Edge Deployment with Docker",
          content:
            "Runs entirely at the edge on a Raspberry Pi using Docker. OpenCV for perception, Groq-hosted LLMs (default llama-3.3-70b-versatile) for language understanding, Arduino over serial for motion. A web UI at http://localhost:5000/ui/ accepts typed or spoken instructions over an environment image.",
        },
      ],
      conclusion:
        "Accepted at IEEE ICOCT 2025 for its approach to combining conversational AI with robotic task execution. The same questions about structured output reliability that surfaced here later seeded my work on ApiSynIQ.",
    },
    challenges: [
      "Translating fuzzy natural language into deterministic A* node coordinates.",
      "Handling task-in-task and task-after-task without losing global plan state.",
      "Running multiple LLM roles + OpenCV + Arduino I/O on a Raspberry Pi without thermal throttling.",
    ],
    outcomes: [
      "IEEE-published research paper (ICOCT 2025) — DOI 10.1109/ICOCT64433.2025.11118685.",
      "Working Dockerised deployment on Raspberry Pi with Arduino motor control.",
      "Open-source Docker image koti21/robotic_car:v0.0.1 anyone can run locally.",
    ],
    techStack: [
      "Python", "Raspberry Pi", "Arduino", "OpenCV", "A* Search",
      "LangChain", "LangGraph", "Groq", "Docker",
    ],
    links: [
      { label: "IEEE Paper", url: "https://ieeexplore.ieee.org/document/11118685" },
      { label: "GitHub Repo", url: "https://github.com/KoteshwarChinnolla/A_robotic_vehicle" },
    ],
    tags: ["IEEE", "Robotics", "Edge AI", "Autonomous Systems"],
  },
  {
    id: "P003",
    title: "helm-utilities & terraform-modules",
    subtitle:
      "Production-grade, reusable Helm charts and Terraform modules for shipping microservices and AWS infrastructure in minutes.",
    category: "DevOps / Cloud",
    date: "2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1920&q=80",
    author: koteshwar,
    motivation:
      "Every team I worked with re-invented the same Kubernetes and AWS scaffolding from scratch — and got it slightly wrong each time. I wanted a battle-tested, opinionated set of building blocks that anyone could pull off the shelf, plug in their values, and ship to production the same day.",
    content: {
      introduction:
        "Two companion open-source repositories. helm-utilities is a collection of plug-and-play Helm charts for microservices and supporting infrastructure on Kubernetes. terraform-modules is a library of self-contained AWS modules for VPC, EC2, ECS, EKS, RDS, ALB, ECR, S3, CloudFront, ACM, Route53, and IAM — composable into full environments.",
      sections: [
        {
          heading: "Any_service — Generic Microservice Chart",
          content:
            "A single chart that fits 90% of microservice patterns: Deployment, Service, Istio HTTPRoute, configurable env vars, secret references (postgres-credentials, employee-aws-access), and an embedded ArgoCD application block in values.yaml so GitOps wiring comes for free.",
        },
        {
          heading: "certified_gateway — Istio Gateway + TLS",
          content:
            "Manages the Istio Gateway entry point and automates TLS via cert-manager + Let's Encrypt with Route53 DNS-01 challenge. Multi-protocol listeners (HTTP 80, HTTPS 443, TCP 5432/6378), wildcard certificate support, and independent toggles for gateway and certificate.",
        },
        {
          heading: "kafka-helm-chart — KRaft Mode Kafka",
          content:
            "Production-style Kafka cluster in KRaft mode (no ZooKeeper) with separate controller and broker StatefulSets, persistent storage, and a Kafka UI deployment exposed via NodePort for visual cluster management.",
        },
        {
          heading: "redis — Sentinel HA Topology",
          content:
            "Master-replica Redis with Sentinel for automatic failover. Configurable replica count, password auth on master and replica connections, AOF persistence, and separate sizing for replica vs sentinel volumes.",
        },
        {
          heading: "Argo_CD — GitOps by Default",
          content:
            "A pre-built ArgoCD Application manifest wires the chart repo to each microservice's source repo. The same configuration is also embedded in Any_service/values.yaml — every deployment is declarative, version-controlled, and reversible.",
        },
        {
          heading: "terraform-modules — AWS Building Blocks",
          content:
            "Self-contained modules: vpc (subnets/IGW/NAT), ec2_instance, asg, alb, ecs (Fargate), eks (cluster + managed node groups), rds (PostgreSQL/MySQL), ecr, s3_bucket, cloud_front, acm_ROOT_CERT / acm_SUB_ROOT_CERT, route_53, IAM_grops_poicy, and iam_oidc_trust_polecy (IRSA pattern). Composable examples: ec2_production_ready, ecs-rds, eks_cluster, webhosting (S3+CloudFront+ACM+Route53), iam_user_groups, creat_ecr_registry.",
        },
        {
          heading: "GitHub Actions CI/CD",
          content:
            "Reusable workflows ship with the modules — including creat_eks_cluster.yaml and host_webpage.yaml — so terraform plan/apply and site deployment happen automatically on every push.",
        },
      ],
      conclusion:
        "Both repositories are open source and actively used in production. The Helm charts are published as a hosted Helm repo at koteshwarchinnolla.github.io/helm-utilities/charts.",
    },
    challenges: [
      "Designing one Any_service chart flexible enough for 90% of services without becoming a YAML maze.",
      "Automating TLS issuance via DNS-01 Route53 challenge end to end.",
      "Keeping Terraform modules small, composable, and free of cross-module hidden coupling.",
    ],
    outcomes: [
      "Hosted Helm repo with 4 charts (hrms-microservices, certified_gateway, kafka-helm-chart, redis).",
      "13+ reusable Terraform modules covering networking, compute, data, edge, and IAM.",
      "Reusable GitHub Actions workflows that take a fresh AWS account to a running EKS cluster.",
    ],
    techStack: [
      "Helm", "Kubernetes", "Istio", "cert-manager", "Kafka", "Redis",
      "Terraform", "AWS (EKS/ECS/RDS/ALB/S3/CloudFront)", "ArgoCD", "GitHub Actions",
    ],
    links: [
      { label: "helm-utilities", url: "https://github.com/KoteshwarChinnolla/helm-utilities" },
      { label: "Helm Repo", url: "https://koteshwarchinnolla.github.io/helm-utilities/charts" },
    ],
    tags: ["Open Source", "Kubernetes", "Terraform", "GitOps"],
  },
  {
    id: "P004",
    title: "NLP Architecture Evolution Study",
    subtitle:
      "From Bag of Words to BERT — building each technique from the ground up to understand how language models actually learn.",
    category: "ML / NLP",
    date: "2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80",
    author: koteshwar,
    motivation:
      "Most ML tutorials hand you a pre-trained model and a one-line API. I wanted to know what's actually happening underneath — so I rebuilt the entire NLP stack from statistical methods to transformers, applying each one to the same problems and watching what changed.",
    content: {
      introduction:
        "A trio of connected NLP projects covering spam classification, BERT pre-training from scratch, and sentiment analysis. The goal was understanding the evolution from statistical methods to deep contextual learning — not just using libraries as black boxes.",
      sections: [
        {
          heading: "Statistical → Contextual",
          content:
            "Implemented and compared Bag of Words, TF-IDF, Word2Vec, Bi-LSTM, and BERT on the same tasks. Watching each architecture lift accuracy made the trade-offs concrete: speed vs context, data efficiency vs expressive power.",
        },
        {
          heading: "BERT Pre-Training from Scratch",
          content:
            "Pre-trained a BERT model from scratch with masked language modelling and next-sentence prediction. Demystified how transformer encoders actually learn contextual representations — and why pre-training corpora matter so much.",
        },
        {
          heading: "Built to Study, Not to Ship",
          content:
            "Each model was built ground-up to study internal behaviour and trade-offs. The intuition for which architecture fits which problem — instead of defaulting to whatever's in fashion — fed directly into the agentic systems I build today.",
        },
      ],
      conclusion:
        "This study became the foundation for later work on agentic systems and structured generation. The same questions about representation and context show up everywhere.",
    },
    challenges: [
      "Pre-training BERT from scratch on limited compute without overfitting.",
      "Building Word2Vec and Bi-LSTM from the ground up instead of importing a library.",
    ],
    outcomes: [
      "Working implementations of BoW, TF-IDF, Word2Vec, Bi-LSTM, and BERT on identical tasks.",
      "A documented intuition for matching architecture to problem.",
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Transformers", "BERT"],
    links: [],
    tags: ["NLP", "Deep Learning", "Research"],
  },
  {
    id: "P005",
    title: "OpenCV Learning Repository",
    subtitle:
      "A practical computer-vision repo: image processing fundamentals, real-time object detection with YOLOv8, and a car counter from scratch.",
    category: "Computer Vision",
    date: "2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1920&q=80",
    author: koteshwar,
    motivation:
      "Computer vision is what gives robots eyes — and I needed those eyes to work for the autonomous navigation vehicle. This repo is the lab notebook where I worked out the fundamentals before stitching them into a real system.",
    content: {
      introduction:
        "A personal learning space for exploring computer vision concepts using OpenCV and Python. Everything here is experimental and built for understanding — not production use. Three sub-projects: basic_cv (fundamentals), number_cars_passing_a_line (a real mini-application), and yolo_object_detection (modern detection).",
      sections: [
        {
          heading: "basic_cv — The Fundamentals",
          content:
            "Reading and displaying images (read.py), drawing shapes and text (drowing.py), splitting RGB/HSV channels (colour_split.py), thresholding — binary and adaptive (thresh.py), contours (contrives.py), and an image-processing Jupyter walkthrough. The building blocks every higher-level CV system depends on.",
        },
        {
          heading: "number_cars_passing_a_line — A Real Mini-App",
          content:
            "A small project that detects and counts cars crossing a virtual line in a video, using the SORT algorithm for tracking. Connecting raw detection to a useful counting signal taught me a lot about the messy middle of real CV pipelines.",
        },
        {
          heading: "yolo_object_detection — Modern Detection",
          content:
            "Introduction to object detection with YOLOv8. yolo_basic_img.py runs detection on static images; video_processing.py runs it on video streams. Pre-trained weights (yolov8n.pt) live in Yolo-Weights/ and auto-download on first run.",
        },
      ],
      conclusion:
        "The hands-on grounding from this repo directly fed into the perception layer of the autonomous navigation vehicle.",
    },
    challenges: [
      "Tuning SORT tracking thresholds so cars weren't double-counted across frames.",
      "Keeping YOLO inference fast enough to feel real-time on commodity hardware.",
    ],
    outcomes: [
      "A working car-counter pipeline (detection + tracking + line-crossing logic).",
      "Reusable CV building blocks that fed straight into the IEEE robotics paper.",
    ],
    techStack: ["Python", "OpenCV", "YOLOv8 (Ultralytics)", "NumPy", "SORT"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/KoteshwarChinnolla/open_cv" },
    ],
    tags: ["Computer Vision", "YOLO", "Learning"],
  },
];

export const getArticleById = (id: string): Article | undefined =>
  articles.find((article) => article.id === id);

export const getRelatedArticles = (id: string, limit = 3): Article[] => {
  const current = getArticleById(id);
  if (!current) return articles.slice(0, limit);
  return articles.filter((a) => a.id !== id).slice(0, limit);
};
