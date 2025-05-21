document.addEventListener('DOMContentLoaded', () => {
    // Centralized slider configuration
    const sliderConfigurations = {
        'white-label-1': {
            slides: [
                {
                    title: "SpinBytes Gaming Platform",
                    description: "A fully localized online casino platform, built with every essential module needed to run a high-performing digital gaming business. From Player Account Management (PAM) and real-time anti-fraud tools to a powerful reporting engine, game aggregation, and flexible CMS—every system is designed to support seamless operations and growth.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/49a81ac3-c478-40fc-0b6c-4ce004e01b00/public"
                },
                {
                    title: "Payments Made Effortless",
                    description: "Operate smoothly with integrated merchant account support and a wide range of ready-to-use global and local payment solutions. Our platform comes pre-integrated with major payment providers, giving your players a frictionless deposit and withdrawal experience from day one.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/6cac73f4-7f61-4720-c575-78b058941b00/public"
                },
                {
                    title: "World-Class Gaming Content",
                    description: "Gain instant access to hundreds of top-tier games across all major categories—slots, table games, live dealers, and more. SpinBytes White Label Casino connects you to an extensive Game Aggregator network, eliminating the need for multiple licensing agreements or provider contracts.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/07c99fb7-bb7e-4c9c-61f1-a1731e38c000/public"
                },
                {
                    title: "Reliable Hosting & Proactive Support",
                    description: "Your platform is hosted on dedicated servers with high availability, backed by regular bi-weekly software updates to ensure peak performance and feature improvements. Every partner is assigned a dedicated Business Account Manager and Technical Account Manager—so you're never alone in your journey.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/88f6b6e4-d170-4b2c-3334-5add709c3200/public"
                }
            ]
        },
        'white-label-2-slider': {
            slides: [
                {
                    title: "Flexible Hierarchies",
                    description: "Build multi-level networks with master agents, sub-agents, and players. Control credit flow and automate settlements within your partner hierarchy. Master-Agent-Player Structure: Create multi-level networks with configurable hierarchies . Credit Allocation Controls: Distribute and manage credits throughout your partner network. Automated Settlement: Streamlined commission calculations and settlements. Balance Management: Real-time monitoring of credits across all tiers.Flexible Configurations: Tailor partnership models to specific market needs  ",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/7cd18b13-3d37-4ae3-4e08-96e1a0b1c800/public"
                },
                {
                    title: "Partner Autonomy",
                    description: "Empower agents with a dedicated portal, performance dashboards, and custom credit controls. Track player acquisition and configure commission models with ease. Partner Portal: Dedicated interface for agents to manage their operations Credit Limit Controls: Set and adjust credit limits at all levels. Performance Dashboard: Real-time analytics on partner activity and results. Commission Structure: Configurable revenue share and commission models . Player Acquisition Tracking: Monitor player registrations through different partners ",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/cb85914e-2a46-4fd4-9788-12c68a03cf00/public"
                },
                {
                    title: "Risk Management Built-In",
                    description: "Set exposure limits and monitor real-time transactions to mitigate risks. Access controls and audit trails ensure secure, compliant operations. Exposure Limits: Automated alerts for unusual activity patterns. Credit Adjustment Controls: Secure processes for credit increases and reductions. Transaction History: Complete audit trail of all financial movements. Access Controls: Role-based permissions for different management levels. Real-time Monitoring: Instant visibility of network-wide financial activity ",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/b309a207-8dbd-4c5f-d666-0b5405065700/public"
                }
            ]
        },
        'blue-label-1-slider': {
            slides: [
                {
                    title: "Peer-to-Peer Precision",
                    description: "Enable users to back and lay bets just like professional traders, creating a vibrant and competitive marketplace. Our advanced matching engine ensures lightning-fast execution and fair pricing, even during high-volume in-play moments. ",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/aa0c797f-ba8f-499d-a373-c3ec5886b000/public"
                },
                {
                    title: "Built for Scale",
                    description: "Handle thousands of trades per second with a platform designed for high-frequency betting and real-time market updates. Whether you’re starting small or scaling globally, our tech infrastructure grows with your ambitions.",
                    image: " "
                },
                {
                    title: "Risk-Smart Framework",
                    description: "Stay protected with built-in risk management tools that adapt to your exposure and trading patterns. From limit-setting to volatility control, we help you maintain balance and profitability at every turn.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/0edbd5aa-8250-4d83-0fa3-597792d60500/public"
                },
                {
                    title: "Data-Driven Decisions",
                    description: "Track every trade, trend, and user action with a comprehensive analytics suite designed for operators. Use detailed history and API integrations to fine-tune strategies and deliver a smarter exchange experience.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/4869db86-9ee8-4ee9-feb0-be4a6bb64300/public"
                },
                {
                    title: "Operational Expertise",
                    description: "Our team doesn’t just hand over the platform — we guide your team through setup, trading strategy, and market optimization.  From liquidity planning to market-making support, we’re with you at every stage of your journey.",
                    image: ""
                }
            ]
        },
        'blue-label-2-slider': {
            slides: [
                {
                    title: "Full Market Coverage",
                    description: "From top-tier football leagues to niche sports and eSports, access thousands of events and markets daily. Our platform ensures your Sportsbook stays active around the clock with diverse global coverage.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/584bdc3a-03c1-4a32-384a-81a6b1325200/public"
                },
                {
                    title: "Live Betting, Real-Time Thrills",
                    description: "Deliver in-play excitement with fast odds updates, instant settlement, and dynamic market movement. Capture every moment of action and let players react as the game unfolds.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/86a114db-5174-4e73-b854-e67697b23a00/public"
                },
                {
                    title: "Custom Front-End, Your Brand First",
                    description: "Tailor the Sportsbook’s look and feel to match your brand identity and audience preferences. Every interface element is designed to deliver smooth navigation and intuitive betting flows.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/03b93451-06f3-4f37-22fa-3ab3c09f4900/public"
                },
                {
                    title: "Mobile-First Experience",
                    description: "Give your users seamless access on any device with responsive, mobile-optimized design. Fast, intuitive, and built for the bettor on the move.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/153df9df-4eb8-44a0-a9bd-cf9cd6539900/public"
                },
                {
                    title: "Smart Trading & Risk Tools",
                    description: "Leverage automated odds management, configurable risk alerts, and margin optimization features. You stay in control while the system keeps your operations protected and profitable.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/25c46f2c-a65d-4fd1-6974-1eb561ce1200/public"
                },
                {
                    title: "Integrations That Just Work",
                    description: "Connect effortlessly with leading odds feeds, data providers, live streaming, and virtual sports. Our plug-and-play architecture ensures quick deployment and future-ready scalability.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/d47577f7-aac7-4552-b2a1-a74842825900/public"
                }
            ]
        },
        'green-label-1-slider': {
            slides: [
                {
                    title: "Crypto-Optimized Architecture",
                    description: "Our platform is built to handle high-volume crypto transactions with minimal latency. Support for multiple coins ensures seamless user experiences and greater flexibility. ",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/cf7edc8a-c6e6-4bb3-dab1-f46120706c00/public"
                },
                {
                    title: "Ready-to-Launch Platform",
                    description: "Get started quickly with a complete backend, including KYC, BI tools, risk management, and affiliate tracking. Everything is pre-integrated for fast deployment.",
                    image: ""
                },
                {
                    title: "Flexible Game Aggregation",
                    description: "Add top-tier games from multiple providers through a single API integration. Expand your game offerings rapidly without technical complexity.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/0a44e288-dc23-42e0-3221-be7934d42d00/public"
                },
                {
                    title: "Advanced Bonus Mechanics",
                    description: "Run crypto-friendly promotions, loyalty programs, and retention campaigns. Fully configurable tools help you engage and reward players effortlessly.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/33c7a11a-9af7-444c-0d4f-5e6fc64dd900/public"
                },
                {
                    title: "Compliance-Ready Setup",
                    description: "Our legal consultants assist with regulatory requirements in key jurisdictions. Operate with confidence, knowing your platform is built with compliance in mind.",
                    image: ""
                }
            ]
        },
        'green-label-2-slider': {
            slides: [
                {
                    title: "Seamless Integration & Game Variety",
                    description: "Connect instantly to 50+ top-tier RNG and Live Dealer providers through a single, unified API—bringing thousands of casino games to your platform in one smooth move.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/e2419238-5cdb-4813-24f5-715c38133400/public"
                },
                {
                    title: "Smart Management & Player Engagement Tools",
                    description: "Access a dedicated back office to monitor game rounds, stay current with the latest game releases, and run custom tournaments that drive player excitement.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/ae99c972-2235-4620-b42f-0d2f0e62eb00/public"
                },
                {
                    title: "Reliable Support at Every Step",
                    description: "Enjoy round-the-clock customer service and ongoing technical support to ensure your operations run smoothly—no matter the time zone.",
                    image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/526dd18a-8ac6-4f10-f136-a5a20b44db00/public"
                }
            ]
        },

    };



    // Function to initialize slider for a specific container
    function initializeSlider(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Find elements within this specific container
        const dots = container.querySelectorAll('.landing-page-2-slider-dot');
        const title = container.querySelector('.landing-page-2-slider-title');
        const description = container.querySelector('.landing-page-2-slider-description');
        const image = container.querySelector('.landing-page-2-slider-image img');

        // Get slider configuration for this container
        const config = sliderConfigurations[containerId];
        if (!config) return;

        const slides = config.slides;

        // Add click event to dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));

                // Update content
                title.textContent = slides[index].title;
                description.textContent = slides[index].description;
                image.src = slides[index].image;

                // Update dot styles
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });
    }

    // Initialize all sliders on the page
    function initializeAllSliders() {
        // Find all slider containers
        const sliderContainers = document.querySelectorAll('.landing-page-2-slider');

        sliderContainers.forEach(container => {
            const containerId = container.id;
            initializeSlider(containerId);
        });
    }


    initializeAllSliders();
});
