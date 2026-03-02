import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface Station {
  name: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
}

interface MetroLine {
  id: string;
  number: number;
  title: string;
  tagline: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  dotColor: string;
  icon: string;
  stations: Station[];
  expanded: boolean;
}

@Component({
  selector: 'app-metro-map-ai',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './metro-map-ai.component.html',
  styleUrls: ['./metro-map-ai.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1, overflow: 'hidden' }),
        animate('300ms ease-in', style({ height: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class MetroMapAiComponent {

  lines: MetroLine[] = [
    {
      id: 'line1',
      number: 1,
      title: 'Foundations Station',
      tagline: 'These are your boarding passes — no AI mastery without strong foundations.',
      color: '#f97316',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-400',
      dotColor: 'bg-orange-500',
      icon: 'foundation',
      expanded: true,
      stations: [
        { name: 'Python Programming Basics', status: 'pending' },
        { name: 'NumPy & Pandas', status: 'pending' },
        { name: 'Data Structures & Algorithms', status: 'pending' },
        { name: 'Linear Algebra for ML', status: 'pending' },
        { name: 'Probability & Statistics', status: 'pending' },
        { name: 'Calculus for Optimization', status: 'pending' },
        { name: 'Data Cleaning & Visualization', status: 'pending' },
        { name: 'Git & Version Control', status: 'pending' },
        { name: 'Command Line Tools', status: 'pending' },
      ]
    },
    {
      id: 'line2',
      number: 2,
      title: 'Machine Learning Loop',
      tagline: 'ML is the heart of AI. Iterate and experiment.',
      color: '#22c55e',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500',
      textColor: 'text-green-400',
      dotColor: 'bg-green-500',
      icon: 'loop',
      expanded: false,
      stations: [
        { name: 'Supervised Learning (Regression & Classification)', status: 'pending' },
        { name: 'Unsupervised Learning (Clustering, Dimensionality Reduction)', status: 'pending' },
        { name: 'Scikit-Learn Workflows', status: 'pending' },
        { name: 'Feature Engineering & Selection', status: 'pending' },
        { name: 'Ensemble Learning (Bagging, Boosting)', status: 'pending' },
        { name: 'Cross Validation Techniques', status: 'pending' },
        { name: 'Hyperparameter Tuning (GridSearch, RandomSearch)', status: 'pending' },
        { name: 'Model Evaluation (ROC, AUC, Confusion Matrix)', status: 'pending' },
        { name: 'Decision Trees & Random Forests', status: 'pending' },
      ]
    },
    {
      id: 'line3',
      number: 3,
      title: 'Deep Learning Express',
      tagline: 'Fast track: Hop on when you\'re ready for heavy lifting in AI.',
      color: '#a855f7',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-400',
      dotColor: 'bg-purple-500',
      icon: 'psychology',
      expanded: false,
      stations: [
        { name: 'Neural Network Architecture (Perceptron, MLP)', status: 'pending' },
        { name: 'Activation Functions & Backpropagation', status: 'pending' },
        { name: 'CNNs (Image Classification, Object Detection)', status: 'pending' },
        { name: 'RNNs, LSTMs, GRUs (Sequential Data)', status: 'pending' },
        { name: 'Transformers Basics', status: 'pending' },
        { name: 'Autoencoders & GANs', status: 'pending' },
        { name: 'Batch Norm & Dropout', status: 'pending' },
        { name: 'PyTorch & TensorFlow Mastery', status: 'pending' },
        { name: 'Model Optimization & Scheduling', status: 'pending' },
        { name: 'GPT & LLM Architecture', status: 'pending' },
        { name: 'Prompt Engineering 101', status: 'pending' },
        { name: 'Fine-Tuning vs. In-Context Learning', status: 'pending' },
      ]
    },
    {
      id: 'line4',
      number: 4,
      title: 'Generative AI Hub',
      tagline: 'Major intersection: Where the latest AI magic happens.',
      color: '#3b82f6',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-400',
      dotColor: 'bg-blue-500',
      icon: 'auto_awesome',
      expanded: false,
      stations: [
        { name: 'Retrieval-Augmented Generation (RAG)', status: 'pending' },
        { name: 'Diffusion Models (Image & Audio)', status: 'pending' },
        { name: 'Multimodal Models (CLIP, Flamingo, Gemini)', status: 'pending' },
        { name: 'LangChain & Vector Databases', status: 'pending' },
        { name: 'Embeddings & Similarity Search', status: 'pending' },
        { name: 'Open Source LLMs (LLaMA, Mistral, DeepSeek)', status: 'pending' },
        { name: 'Computer Vision Projects (OCR, Face Recognition)', status: 'pending' },
      ]
    },
    {
      id: 'line5',
      number: 5,
      title: 'Applied AI Sector',
      tagline: 'Business lane: Turn theory into real-world projects.',
      color: '#1f2937',
      bgColor: 'bg-gray-600/10',
      borderColor: 'border-gray-400',
      textColor: 'text-gray-300',
      dotColor: 'bg-gray-400',
      icon: 'work',
      expanded: false,
      stations: [
        { name: 'Streamlit, Gradio, Dash for Demos', status: 'pending' },
        { name: 'ML APIs & Wrappers (FastAPI, Flask)', status: 'pending' },
        { name: 'Agentic AI & Tool-Use Capabilities', status: 'pending' },
        { name: 'Voice Assistants & Speech Models', status: 'pending' },
        { name: 'AI in Healthcare, Finance, Retail', status: 'pending' },
        { name: 'Time Series Forecasting (ARIMA, LSTM)', status: 'pending' },
        { name: 'Recommender Systems (Content-based, Collaborative)', status: 'pending' },
        { name: 'NLP Tasks (NER, Translation, Summarization)', status: 'pending' },
        { name: 'Chatbots with RAG + LLMs', status: 'pending' },
        { name: 'AI Agents & Autonomous Workflows', status: 'pending' },
      ]
    },
    {
      id: 'line6',
      number: 6,
      title: 'Tooling & Deployment Route',
      tagline: 'Pro zone: Where models leave the lab and enter production.',
      color: '#92400e',
      bgColor: 'bg-amber-800/10',
      borderColor: 'border-amber-700',
      textColor: 'text-amber-500',
      dotColor: 'bg-amber-600',
      icon: 'rocket_launch',
      expanded: false,
      stations: [
        { name: 'Docker for Model Containers', status: 'pending' },
        { name: 'MLOps Fundamentals (CI/CD, GitHub Actions)', status: 'pending' },
        { name: 'Model Monitoring Tools (Evidently, Prometheus)', status: 'pending' },
        { name: 'Cloud Deployment (AWS Sagemaker, GCP Vertex AI)', status: 'pending' },
        { name: 'Kubernetes & Model Scaling', status: 'pending' },
        { name: 'ONNX & Model Portability', status: 'pending' },
        { name: 'Promptflow & Automated Testing', status: 'pending' },
      ]
    },
    {
      id: 'line7',
      number: 7,
      title: 'Ethics & Safety Line',
      tagline: 'Guardrail line: Build AI that\'s trustworthy, fair, and safe.',
      color: '#06b6d4',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500',
      textColor: 'text-cyan-400',
      dotColor: 'bg-cyan-500',
      icon: 'security',
      expanded: false,
      stations: [
        { name: 'Privacy-Preserving ML (Differential Privacy, Federated Learning)', status: 'pending' },
        { name: 'Adversarial Attacks & Defense', status: 'pending' },
        { name: 'Fairness & Bias Detection', status: 'pending' },
        { name: 'Explainability (SHAP, LIME, XAI)', status: 'pending' },
        { name: 'Model Auditing & Red Teaming', status: 'pending' },
        { name: 'Responsible AI Guidelines', status: 'pending' },
        { name: 'AI Governance & Risk Management', status: 'pending' },
        { name: 'Regulatory Compliance (EU AI Act, GDPR)', status: 'pending' },
        { name: 'Safety Alignment for Autonomous Agents', status: 'pending' },
      ]
    },
    {
      id: 'line8',
      number: 8,
      title: 'Career Launchpad',
      tagline: 'Final stop: Turn your skills into job offers, income, and impact.',
      color: '#22c55e',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-400',
      dotColor: 'bg-emerald-500',
      icon: 'emoji_events',
      expanded: false,
      stations: [
        { name: 'AI Freelancing Platforms (Upwork, Toptal)', status: 'pending' },
        { name: 'Build Your AI SaaS Product', status: 'pending' },
        { name: 'Networking (Discord, X, LinkedIn AI Groups)', status: 'pending' },
        { name: 'AI Certifications & MOOCs (Coursera, DeepLearning.ai)', status: 'pending' },
        { name: 'Technical Interview Prep (ML + System Design)', status: 'pending' },
        { name: 'Resume & LinkedIn Optimization', status: 'pending' },
        { name: 'Contribute to Open Source Projects', status: 'pending' },
        { name: 'Kaggle Competitions & Leaderboards', status: 'pending' },
        { name: 'Portfolio Building (GitHub + Blog)', status: 'pending' },
      ]
    },
  ];

  toggleLine(line: MetroLine): void {
    line.expanded = !line.expanded;
  }

  toggleStatus(station: Station): void {
    const order: Station['status'][] = ['pending', 'in-progress', 'completed'];
    const idx = order.indexOf(station.status);
    station.status = order[(idx + 1) % order.length];
  }

  get totalStations(): number {
    return this.lines.reduce((acc, l) => acc + l.stations.length, 0);
  }

  get completedStations(): number {
    return this.lines.reduce((acc, l) => acc + l.stations.filter(s => s.status === 'completed').length, 0);
  }

  get inProgressStations(): number {
    return this.lines.reduce((acc, l) => acc + l.stations.filter(s => s.status === 'in-progress').length, 0);
  }

  get progressPercent(): number {
    if (this.totalStations === 0) return 0;
    return Math.round((this.completedStations / this.totalStations) * 100);
  }

  lineCompleted(line: MetroLine): number {
    return line.stations.filter(s => s.status === 'completed').length;
  }

  lineProgress(line: MetroLine): number {
    if (line.stations.length === 0) return 0;
    return Math.round((this.lineCompleted(line) / line.stations.length) * 100);
  }

  expandAll(): void {
    this.lines.forEach(l => l.expanded = true);
  }

  collapseAll(): void {
    this.lines.forEach(l => l.expanded = false);
  }
}
