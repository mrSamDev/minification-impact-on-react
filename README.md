# Minification Impact Analysis

A practical experiment measuring the impact of JavaScript and CSS minification on web performance using React and Vite.

## About

This repository contains code and test infrastructure for measuring the performance impact of frontend asset minification. The experiment provides quantitative data comparing minified and unminified builds across multiple metrics including bundle size, load time, and runtime performance.

For detailed analysis and methodology, check out the accompanying blog post (Not released yet): [Understanding Minification Impact: A Developer's Experiment](https://www.sijosam.in/blog/sustainable-development-1/)

## Key Findings

Our experimental results demonstrated significant improvements through minification:

- Total bundle size reduction: 79.4%
- JavaScript size reduction: 44.6%
- CSS size reduction: 99.8%
- Load time improvement (95th percentile): 43.5%

## Tech Stack

- React 18.3.1
- Vite 6.0.1
- Puppeteer 23.10.1
- Node.js 23.2.0

## Prerequisites

- Node.js (version 18 or higher)
- PNPM package manager (`npm install -g pnpm`)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mrSamDev/minification-impact-on-react
cd minification-impact-on-react
```

2. Install dependencies:

```bash
pnpm install
```

## Available Scripts

### Development

```bash
# Start development server
pnpm dev
```

### Build

```bash
# Create minified production build
pnpm build:minified

# Create unminified production build
pnpm build:unminified

# Run both builds for comparison
pnpm build
```

### Analysis

```bash
# Run performance test suite (100 iterations)
pnpm analysis
```

## Testing Methodology

The test suite:

- Performs 100 iterations of page loads for both minified and unminified builds
- Measures key metrics including bundle size, load time, and runtime performance
- Uses Puppeteer for consistent browser automation
- Implements statistical analysis to ensure reliable results

## Acknowledgments

Special thanks to the React and Vite teams for their excellent build tools that made this analysis possible.
