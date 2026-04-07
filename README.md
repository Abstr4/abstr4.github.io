<!-- prettier-ignore -->
<div align="center">

# Matias Margaritini - Full Stack .NET Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-blue?style=flat-square)](https://matiasmargaritini.netlify.app)
[![.NET](https://img.shields.io/badge/.NET-9.0-512bd4?style=flat-square&logo=.net&logoColor=white)](https://dotnet.microsoft.com)
[![Blazor](https://img.shields.io/badge/Blazor-Server-512bd4?style=flat-square)](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[Overview](#overview) - [Tech Stack](#tech-stack) - [AI Workflow](#ai-assisted-development) - [Samples](#samples) - [Deployment](#deployment) - [Contact](#contact)

</div>

A personal portfolio website showcasing projects, skills, and experience as a Full Stack .NET Developer based in Córdoba, Argentina.

## Overview

This portfolio demonstrates my work as a .NET developer, featuring projects built with:
- **TodoSeUsa** - Inventory management system (Blazor Server + ASP.NET Core MVC)
- **Discord Bot Suite** - Modular automation bots for gaming/crypto communities
- **This portfolio** - Built entirely with AI assistance using Cursor and OpenCode

The site uses vanilla HTML/CSS/JS with no build step, making it easy to deploy anywhere.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | HTML5, CSS3 (custom properties), Vanilla JavaScript |
| **Hosting** | GitHub Pages |
| **Design** | Space Grotesk + Inter fonts, dark/light theme toggle |

## AI-Assisted Development

This portfolio was built using **AI-augmented development methodology** that combines multiple AI tools for rapid prototyping without sacrificing code quality.

### Workflow

```
User Request → Specification → AI Agent → Skill Selection → Implementation → Review
```

**Key Components:**

1. **Specification-Driven Development**
   - Clear requirements before writing code
   - Context management to maintain consistency
   - Iterative refinement based on feedback

2. **AI Tools Used**
   - **Cursor** - AI-powered code editor for rapid development
   - **OpenCode** - CLI tool with specialized agents and skills

3. **Specialized Skills**
   - Skills are domain-specific instruction sets that guide AI behavior
   - Examples: `frontend-design`, `dotnet-best-practices`, `web-design-guidelines`
   - Each skill enforces best practices and quality standards

### Methodology

The AI workflow follows a structured approach:

1. **Analyze** - Understand requirements and select appropriate skills
2. **Implement** - Write code following skill guidelines
3. **Review** - Run skill-based reviews for quality assurance
4. **Iterate** - Refine based on feedback until requirements are met

> [!TIP]
> This methodology allows shipping faster while maintaining quality through automated best-practice enforcement.

---

## Samples

Below are examples of the skill system and AI workflow used in this project.

### Sample Skill: Frontend Design

```yaml
---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces
---

This skill guides creation of distinctive, production-grade frontend interfaces 
that avoid generic "AI slop" aesthetics.

## Key Principles

1. **Essential Elements for Portfolios**
   - Clear headline (who you are, what you do)
   - Visible work "above the fold"
   - Call to action (CTA)
   
2. **Proven Layouts**
   - Bento Grid Layout
   - Clean Carousel Approach
   - Two-Column Layout
```

### Sample Skill: .NET Best Practices

```yaml
---
name: dotnet-best-practices
description: Ensure .NET/C# code meets best practices
---

## C# Best Practices

1. **Use LINQ for queries** - More readable than imperative loops
2. **Dependency Injection** - Loose coupling, testability
3. **Async/Await** - Non-blocking I/O operations
4. **Records** - Immutable data structures
5. **Pattern Matching** - Cleaner conditional logic
```

### Sample Agent: Git Operations

```yaml
---
name: git
description: Handles all git and GitHub operations
---

## Capabilities

- **Commit creation** with conventional commit messages
- **Branch management** - create, switch, delete branches
- **GitHub operations** - PRs, issues, releases
- **Delegation matrix** for different task types
```

### Sample: AGENTS.md Configuration

```markdown
# AGENTS.md - Portfolio Project

## Pre-Code Design Requirements
**MANDATORY:** Before writing ANY code for frontend/UI tasks:
1. Load skill: `.agents/skills/frontend-design/SKILL.md`
2. Load skill: `.agents/skills/web-design-guidelines/SKILL.md`

## Post-Code Review Requirements
After completing any code task, run:
- **frontend-design** - Design quality review
- **web-design-guidelines** - Accessibility review

## Skills Available
- create-readme
- dotnet-best-practices
- dotnet-design-pattern-review
- frontend-design
- gh-cli
- git-commit
- skill-creator
- web-design-guidelines
```

---

## Project Structure

```
Portfolio/
├── index.html              # Main portfolio page
├── work.html              # Projects showcase
├── about.html             # About page
├── lib/
│   ├── css/               # Stylesheets
│   │   ├── base.css       # Reset, variables, theme
│   │   ├── style.css      # Main page styles
│   │   ├── about.css      # About page styles
│   │   └── work.css       # Work page styles
│   ├── js/                # JavaScript files
│   │   ├── router.js      # Client-side routing
│   │   ├── main.js        # Main page logic
│   │   └── ...
│   └── resources/         # Images, photos, icons
├── .agents/
│   └── skills/            # AI skill definitions
├── publish/               # Built files for deployment
├── LICENSE
└── README.md
```

## Running Locally

Open `index.html` directly in your browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Deployment

| Platform | Instructions |
|----------|-------------|
| **GitHub Pages** | Push to `username.github.io` repo |

> [!NOTE]
> The `publish/` folder contains pre-built static files ready for deployment.

---

## Contact

- **Email**: matiasmargaritini@gmail.com
- **LinkedIn**: [matiasmargaritini](https://linkedin.com/in/matiasmargaritini)
- **GitHub**: [Abstr4](https://github.com/Abstr4)
!
