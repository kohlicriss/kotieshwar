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
    title: "ApiSynIQ – Talk to Your APIs",
    subtitle: "A voice-driven AI assistant for natural language API interaction",
    category: "AI / Agents",
    date: "Nov 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction: "ApiSynIQ is a voice-driven AI assistant that enables natural language interaction with APIs, eliminating the need for complex UIs by automatically planning API calls and filling parameters.",
      sections: [
        {
          heading: "Architecture & Tech Stack",
          content: "Built with Deep Agents, Go (net/http, Gorilla WebSocket), LangChain, RAG, Spring AI, gRPC, and TTS/STT integration. The system uses a multi-agent architecture where each agent has a specialized role.",
        },
        {
          heading: "Deep Agent Pipeline",
          content: "Implemented Deep Agents for API execution planning and an API-resolver sub-agent using LangChain. The system can automatically decompose user requests into API call sequences, resolve dependencies, and execute them in the correct order.",
        },
        {
          heading: "Spring Boot Integration",
          content: "Integrated RAG in Spring Boot with a reusable Java dependency for seamless adoption in any Java application. This allows enterprises to plug the voice-driven API layer into existing Spring-based microservices.",
        },
        {
          heading: "Inter-Service Communication",
          content: "Enabled inter-service communication via gRPC for high-performance, low-latency messaging between the Go-based WebSocket server and Spring Boot backend services.",
        },
      ],
      conclusion: "ApiSynIQ demonstrates how Agentic AI can fundamentally simplify API interaction, making complex systems accessible through natural conversation.",
    },
    tags: ["Deep Agents", "LangChain", "Go", "gRPC", "Spring AI", "RAG"],
  },
  {
    id: "P002",
    title: "Robotic Vehicle for Autonomous Navigation",
    subtitle: "AI-powered autonomous vehicle with natural language control",
    category: "Robotics / AI",
    date: "Jan 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80",
    author: koteshwar,
    content: {
      introduction: "An autonomous robotic vehicle capable of task planning, human communication, and object transport using natural language instructions. Published as an IEEE research paper.",
      sections: [
        {
          heading: "Natural Language Understanding",
          content: "Implemented Deep Agents for natural language understanding, allowing users to give high-level instructions like 'pick up the package from room A and deliver it to room B'. The system decomposes these into actionable navigation commands.",
        },
        {
          heading: "Path Planning with A*",
          content: "Implemented the A* algorithm for optimal path planning in mapped environments. The vehicle dynamically plans routes while avoiding obstacles and adapting to changing environments in real-time.",
        },
        {
          heading: "Hardware Integration",
          content: "Deployed on Raspberry Pi OS with Arduino-based motor control. The software stack runs on the Pi while low-level motor control and sensor reading is handled by Arduino, communicating via serial protocol.",
        },
        {
          heading: "Agentic AI Architecture",
          content: "Built using LangChain and LangGraph for orchestrating the AI pipeline — from speech recognition to task decomposition to action execution. Docker containers ensure consistent deployment across environments.",
        },
      ],
      conclusion: "This project bridges the gap between natural language AI and physical robotics, demonstrating practical applications of Agentic AI in autonomous systems. Published in IEEE, June 2025.",
    },
    tags: ["Agentic AI", "LangChain", "LangGraph", "Raspberry Pi", "Arduino", "Docker"],
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
