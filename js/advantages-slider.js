
document.addEventListener("DOMContentLoaded", function () {
    // Loop through all templates
    document.querySelectorAll('[id^="white-label"]').forEach(container => {
        const tabButtons = container.querySelectorAll(".landing-page-3-tab-button");
        const contentTitle = container.querySelector(".landing-page-3-content-title");
        const contentList = container.querySelector(".landing-page-3-content-list");
        const contentImage = container.querySelector(".landing-page-3-content-image img");

        const tabData = {
            "Ownership": {
                title: "Complete Ownership",
                items: [
                    "Branded website design and user interface",
                    "Custom color schemes and visual elements",
                    "Personalized bonus structures and promotions",
                    "Tailored player communication",
                    "Unique game lobby organization"
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"
            },
            "Smart & Scalable": {
                title: "Smart & Scalable",
                items: [
                    "Responsive Design: Default templates optimized for all devices",
                    "Web Builder Tool: Easy customization without coding knowledge",
                    "Game Lobby: Intuitive navigation with filtering and search options",
                    "Player Account Management: Streamlined registration and profile features",
                    "CMS System: Multi-lingual content support for global markets",
                    "Master CSS Control: Complete visual customization capabilities",
                    "Promotions and Bonuses: Create and manage sophisticated promotional campaigns with customizable incentives, targeted offers, tournaments, and loyalty programs",
                    "Easy Navigation: Intuitive user interface with smart category structure, advanced search functionality, personal favorites, recently played games, and streamlined player journeys"
                  ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Back Office": {
                title: "Advanced Back Office",
                items: [
                    "Administration Portal: Complete control over casino operations",
                    "Player Management: Comprehensive tools for account oversight",
                    "Real-time Analytics: Instant access to critical performance data",
                    "Bonus Engine: Sophisticated player engagement tools",
                    "Risk Management: Advanced security and compliance features",
                    "Reporting Suite: Detailed insights across all operational areas",
                    "Branch Management: Multi-level hierarchical structure to manage different casino brands, partners, and agents under a single platform",
                    "Wallet System: Unified account balance management with multi-currency support, automated reconciliation, and secure transaction processing",
                    "KYC & Player Verification: Robust identity verification tools with customizable workflows, document validation, automated checks, and compliance monitoring to meet global regulatory requirements"
                  ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Integration": {
                title: "Seamless Integration",
                items: [
                    "Access to 15+ leading game providers through a single integration",
                    "Diverse game portfolio covering slots, live dealer, table games, and more",
                    "Unified game wallet for seamless player experience",
                    "Demo and real money play options"
                  ]
                  ,
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Payment": {
                title: "Flexible Payment Options",
                items: [
                    "Multiple payment gateway integrations",
                    "Support for fiat and cryptocurrency transactions",
                    "Secure deposit and withdrawal management",
                    "Region-specific payment methods"
                  ]
                  ,
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            }
        };

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active class from all buttons in this container
                tabButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Update content based on clicked tab
                const tabKey = button.innerText.trim();
                const data = tabData[tabKey];
                if (data) {
                    contentTitle.textContent = data.title;
                    contentList.innerHTML = data.items.map(item => `<li class="landing-page-3-content-item">${item}</li>`).join("");
                    contentImage.src = data.image;
                }
            });
        });
    });


    document.querySelectorAll('[id^="white-label-2"]').forEach(container => {
        const tabButtons = container.querySelectorAll(".landing-page-3-tab-button");
        const contentTitle = container.querySelector(".landing-page-3-content-title");
        const contentList = container.querySelector(".landing-page-3-content-list");
        const contentImage = container.querySelector(".landing-page-3-content-image img");

        const tabData = {
            "Operators": {
                title: "Operator Advantages",
                items: [
                    "Create and manage expansive distribution networks ",
                    "Offload player acquisition costs through partner channels ",
                    "Minimize financial risk with controlled credit distribution ",
                    "Scale operations across multiple markets through local partners ",
                    "Generate additional revenue streams through commission structures "
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"
            },
            "Agents": {
                title: "Agent & Partner Benefits",
                items: [
                    "Operate under established brands with proven platforms ",
                    "Manage player relationships with comprehensive tools ",
                    "Create sub-agent networks to expand reach ",
                    "Access detailed performance analytics ",
                    "Enjoy automated commission calculations and payments "
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Support": {
                title: "End-to-End Implementation Support",
                items: [
                    "Strategic partner structure planning ",
                    "Commission model configuration ",
                    "Financial risk assessment ",
                    "Partner onboarding processes ",
                    "Ongoing operational guidance "
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Integration": {
                title: "Seamless Integration",
                items: [
                    "Plug-and-play APIs",
                    "3rd-party game provider integration",
                    "Custom CRM tools",
                    "Payment gateway compatibility",
                    "User-friendly developer documentation"
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Payment": {
                title: "Flexible Payment Options",
                items: [
                    "Multiple currency support",
                    "Secure transactions",
                    "Fast withdrawals and deposits",
                    "Crypto payments available",
                    "Automated billing and invoicing"
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            }
        };

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active class from all buttons in this container
                tabButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Update content based on clicked tab
                const tabKey = button.innerText.trim();
                const data = tabData[tabKey];
                if (data) {
                    contentTitle.textContent = data.title;
                    contentList.innerHTML = data.items.map(item => `<li class="landing-page-3-content-item">${item}</li>`).join("");
                    contentImage.src = data.image;
                }
            });
        });
    });


    document.querySelectorAll('[id^="blue-label-1"]').forEach(container => {
        const tabButtons = container.querySelectorAll(".landing-page-3-tab-button");
        const contentTitle = container.querySelector(".landing-page-3-content-title");
        const contentList = container.querySelector(".landing-page-3-content-list");
        const contentImage = container.querySelector(".landing-page-3-content-image img");

        const tabData = {
            "Features": {
                title: "Power-Packed Features",
                items: [
                    "Peer-to-peer betting functionality ",
                    "Advanced matching algorithms ",
                    "Competitive commission structures  ",
                    "Real-time odds fluctuation ",
                    "Comprehensive market coverage  ",
                    "In-play betting capabilities   "
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"
            },
            "Coverage": {
                title: "Global Sports Coverage",
                items: [
                    "Football/Soccer  ",
                    "Tennis ",
                    "Basketball",
                    "Horse Racing ",
                    "Cricket",
                    "Rugby",
                    "American Football ",
                    "Baseball",
                    "Golf",
                    "Combat Sports ",
                    "eSports",
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Technical": {
                title: "Engineered for Speed, Stability, and Scale",
                items: [
                    "High-frequency trading capabilities ",
                    "Lightning-fast bet matching  ",
                    "Advanced risk management ",
                    "Liquidity management tools ",
                    "Detailed betting history and analytics ",
                    "Custom API development for partners "
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Support": {
                title: "End-to-End Exchange Support",
                items: [
                    "Trading team training ",
                    "Risk management configuration ",
                    "Market creation and management ",
                    "Liquidity optimization strategies ",
                    "Technical support and maintenance"
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            }
        };

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active class from all buttons in this container
                tabButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Update content based on clicked tab
                const tabKey = button.innerText.trim();
                const data = tabData[tabKey];
                if (data) {
                    contentTitle.textContent = data.title;
                    contentList.innerHTML = data.items.map(item => `<li class="landing-page-3-content-item">${item}</li>`).join("");
                    contentImage.src = data.image;
                }
            });
        });
    });

    document.querySelectorAll('[id^="blue-label-2"]').forEach(container => {
        const tabButtons = container.querySelectorAll(".landing-page-3-tab-button");
        const contentTitle = container.querySelector(".landing-page-3-content-title");
        const contentList = container.querySelector(".landing-page-3-content-list");
        const contentImage = container.querySelector(".landing-page-3-content-image img");

        const tabData = {
            "Features": {
                title: "Core Capabilities",
                items: [
                    "Extensive Market Coverage: Thousands of events and betting markets  ",
                    "Live Betting: Real-time odds updates and bet placement  ",
                    "Advanced Risk Management: Automated trading tools and liability controls ",
                    "Customizable Front-End: Branded design and user experience ",
                    "Mobile-First Approach: Optimized for on-the-go betting ",
                    "Statistics and Results: Comprehensive sports data integration ",
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"
            },
            "Integration": {
                title: "Integration Capabilities ",
                items: [
                    "Third-party odds providers ",
                    "Live streaming services ",
                    "Sports data feeds ",
                    "Statistics platforms ",
                    "Virtual sports providers ",
                    "eSports coverage ",
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Technical": {
                title: "Seamless Performance",
                items: [
                    "Odds Feed Integration: Connect with leading odds providers ",
                    "Bet Builder: Allow players to create custom bets ",
                    "Cash Out: Flexible early settlement options ",
                    "Fast Market Creation: Quick deployment of new betting opportunities ",
                    "Results Verification: Multi-source validation of outcomes ",
                    "Bonus System: Sports-specific promotional tools "
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Support": {
                title: "Pro-Level Trading",
                items: [
                    "Trading Consultancy: Expert guidance on odds compilation ",
                    "Risk Configuration: Setting appropriate limits and alerts  ",
                    "Margin Management: Optimization of profitability  ",
                    "Event Creation: Coverage planning and market availability ",
                    "In-Play Management: Live event controls and suspensions "
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            }
        };

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active class from all buttons in this container
                tabButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Update content based on clicked tab
                const tabKey = button.innerText.trim();
                const data = tabData[tabKey];
                if (data) {
                    contentTitle.textContent = data.title;
                    contentList.innerHTML = data.items.map(item => `<li class="landing-page-3-content-item">${item}</li>`).join("");
                    contentImage.src = data.image;
                }
            });
        });
    });

    document.querySelectorAll('[id^="green-label-1"]').forEach(container => {
        const tabButtons = container.querySelectorAll(".landing-page-3-tab-button");
        const contentTitle = container.querySelector(".landing-page-3-content-title");
        const contentList = container.querySelector(".landing-page-3-content-list");
        const contentImage = container.querySelector(".landing-page-3-content-image img");

        const tabData = {
            "Core Advantages": {
                title: "Made for the Crypto Era",
                items: [
                    "Swift Transaction Processing: Instant deposits and lightning-fast withdrawals ",
                    "Customizable Back-Office: Tailor your administrative tools to your business needs ",
                    "Legal Guidance: Expert consultation on regulatory compliance ",
                    "Advanced Bonus System: Sophisticated player retention tools ",
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"
            },
            "Power Features": {
                title: "Integration Capabilities  ",
                items: [
                    "API Integration: Quickly add games from top providers with a single, streamlined integration process. ",
                    "LIndividual Design: Use the built-in Casino Builder to create a fully custom design tailored to your target market.",
                    "Ready-to-Use Platform: Launch instantly with built-in BI tools, risk management, KYC, affiliate tracking, and transaction monitoring.",
                    "Bonus Offerings: Deploy flexible loyalty programs and marketing tools to boost player engagement and retention.",

                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Technical": {
                title: "Seamless Performance",
                items: [
                    "Odds Feed Integration: Connect with leading odds providers ",
                    "Bet Builder: Allow players to create custom bets ",
                    "Cash Out: Flexible early settlement options ",
                    "Fast Market Creation: Quick deployment of new betting opportunities ",
                    "Results Verification: Multi-source validation of outcomes ",
                    "Bonus System: Sports-specific promotional tools "
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Support": {
                title: "Pro-Level Trading",
                items: [
                    "Trading Consultancy: Expert guidance on odds compilation ",
                    "Risk Configuration: Setting appropriate limits and alerts  ",
                    "Margin Management: Optimization of profitability  ",
                    "Event Creation: Coverage planning and market availability ",
                    "In-Play Management: Live event controls and suspensions "
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            }
        };

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active class from all buttons in this container
                tabButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Update content based on clicked tab
                const tabKey = button.innerText.trim();
                const data = tabData[tabKey];
                if (data) {
                    contentTitle.textContent = data.title;
                    contentList.innerHTML = data.items.map(item => `<li class="landing-page-3-content-item">${item}</li>`).join("");
                    contentImage.src = data.image;
                }
            });
        });
    });

    document.querySelectorAll('[id^="green-label-2"]').forEach(container => {
        const tabButtons = container.querySelectorAll(".landing-page-3-tab-button");
        const contentTitle = container.querySelector(".landing-page-3-content-title");
        const contentList = container.querySelector(".landing-page-3-content-list");
        const contentImage = container.querySelector(".landing-page-3-content-image img");

        const tabData = {
            "Integration": {
                title: "Casino API Integration",
                items: [
                    "Add 20,000+ games to your platform through a single, powerful API. With minimal tech effort, operators enjoy fast deployment, automatic updates, and seamless access to additional tools like Sportsbook and Jackpot Aggregator.",
                    "One integration, access to thousands of games",
                    "Regular content updates, no extra maintenance",
                    "Minimal operator involvement",
                    "Unlock 3 iGaming tools in one integration",
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"
            },
            "CMS": {
                title: "Easy Game Content Management ",
                items: [
                    "Quickly experiment with game layouts, add new providers, and tailor your casino lobby to suit player preferences.",
                    "Customise your game suite with ease",
                    "Dedicated back office and reporting tools",
                    "Adjust bet limits per provider or game",
                    "Exclusive accounts for game provider management",
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Customer Service": {
                title: "Exceptional Customer Service",
                items: [
                    "Our global support team works as an extension of yours—offering round-the-clock technical and business assistance for smooth operation.",
                    "24/7 multilingual technical support",
                    "Dedicated account manager team",
                    "Full integration and setup assistance",
                    "Automated helpdesk for faster resolutions",
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            },
            "Tools": {
                title: "Game Integration",
                items: [
                    "Access to 15+ leading game providers through a single integration ",
                    "Diverse game portfolio covering slots, live dealer, table games, and more ",
                    "Unified game wallet for seamless player experience ",
                    "Demo and real money play options",
                ],
                image: "https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/27843fe7-74fd-4a31-8c91-82f383d31b00/public"

            }
        };

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active class from all buttons in this container
                tabButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Update content based on clicked tab
                const tabKey = button.innerText.trim();
                const data = tabData[tabKey];
                if (data) {
                    contentTitle.textContent = data.title;
                    contentList.innerHTML = data.items.map(item => `<li class="landing-page-3-content-item">${item}</li>`).join("");
                    contentImage.src = data.image;
                }
            });
        });
    });




});
