# Wisest Maths — Project Scaffolding Workflow


## Phase 1: Foundation and Repository Sync
Before building the UI, the architecture needs a clean starting point. 
* **Initialize Next.js:** Bootstrap the project using the App Router, Tailwind CSS, and TypeScript.
* **Component Library:** Install shadcn/ui and set up your core design tokens (colors, typography) to ensure a professional, cohesive look. 
* **Version Control:** Link your local setup directly to your remote repository (`https://github.com/bwalpole2025/Wisest_Maths_V5.git`) and establish a baseline commit before adding complex components. 
* **Math Rendering:** Install `react-katex` or configure MathJax so that all equations in your prototype look academically rigorous from day one.

## Phase 2: The Investor Landing Page
The landing page must immediately communicate your core mission: providing a comprehensive, rigorous, and visually clear math resource.
* **Hero Section:** A clean, bold value proposition highlighting clear, step-by-step math mastery. Include a "Browse Question Bank" Call to Action (CTA).
* **Feature Grid:** Visually outline your core pillars: Comprehensive Question Banks, Formal Step-by-Step Solutions, Common Misconceptions, and Clear Visualizations.
* **Curriculum Teaser:** Showcase the specific focus on GCSE, A-level Maths, and A-level Further Maths.

## Phase 3: Authentication and Routing Structure
Investors want to see the user journey and platform organization. 
* **Login/Signup UI:** Implement a sleek, static login page using shadcn form components. Hardcode a successful login redirect to the dashboard.
* **Dashboard Layout:** Build a persistent sidebar or top navigation bar that houses the core app sections.
* **Curriculum Routing:** Set up the file structure for the main question banks: `/dashboard/gcse`, `/dashboard/a-level`, and `/dashboard/a-level-further`. 

## Phase 4: The Core Experience (The Problem View)
This is the most critical page for your pitch. You need perfectly designed mock questions that demonstrate your structured pedagogy.
* **The Interface:** A clean, focused layout. The main area holds the problem statement and an interactive canvas for student work. 
* **Solution Disclosure:** Use a progressive "Reveal Solution" mechanism. This allows students to attempt the problem and then check their work against a static, expertly crafted step-by-step guide.
* **Multiple Representations:** Include tabs or accordions in the UI that reveal the "Formal Steps" (rendered perfectly in LaTeX/KaTeX), noted "Common Misconceptions," and visual graphs or diagrams to reinforce understanding.