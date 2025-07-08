document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const langEnBtn = document.getElementById('lang-en');
    const langPtBtn = document.getElementById('lang-pt');

    // --- Language Dictionary ---
    const translations = {
        en: {
            // General / Global
            logo_text: "AppFlow Studios",
            nav_home: "Home",
            nav_services: "Services",
            nav_give_hand: "Give Me A Hand",
            nav_build_for_me: "Build It For Me",
            nav_templates: "Templates",
            nav_about: "About Us",
            nav_contact: "Contact",
            nav_get_quote: "Get a Quote",
            read_more: "Read More →", // Reused for resources if they were still there, and now for templates
            get_template_btn: "Get Template →", // Used on templates page

            // Index Page
            title_index: "AppFlow Studios - Your Partner in Modern App Development",
            hero_heading: "Ignite Your Business Potential with Power Platform", // More active, broader focus
            hero_subheading: "We craft powerful, intuitive applications and automated solutions that streamline operations, drive growth, and unlock new insights. Modern, clean, and user-centric, tailored for your success.", // Expanded to include automation/insights

            services_heading: "Our Core Services",
            services_description: "We provide a range of solutions to empower your business.",
            service1_title: "Custom App Development",
            service1_desc: "Craft bespoke business apps at lightning speed. Turn your ideas into powerful, intuitive solutions that drive immediate impact.",
            service2_title: "Business Process Automation",
            service2_desc: "Automate repetitive tasks and amplify your output. Seamlessly connect apps and services to free your team for what truly matters.",
            service3_title: "Training & Workshops",
            service3_desc: "Empower your team with hands-on training to master low-code/no-code platforms.",
            service4_title: "Consulting & Strategy",
            service4_desc: "Expert guidance to help you navigate the app development landscape and make informed decisions.",

            tech_heading: "Technologies We Master",
            tech_description: "Unleashing innovation through the most powerful platforms. See how we transform businesses:",
            tech1_title: "Microsoft Power Apps",
            tech1_desc: "Craft bespoke business apps at lightning speed. Turn your ideas into powerful, intuitive solutions that drive immediate impact.",
            tech2_title: "Power Automate",
            tech2_desc: "Automate the mundane, amplify your output. Seamlessly connect apps and services to free your team for what truly matters.",
            tech3_title: "Power BI",
            tech3_desc: "Transform raw data into crystal-clear insights. Make smarter, faster decisions with stunning, interactive dashboards.",
            tech4_title: "SharePoint Online",
            tech4_desc: "Revolutionize collaboration and content management. Secure, centralized, and effortlessly organized workspaces for your entire team.",
            tech5_title: "Microsoft Dataverse",
            tech5_desc: "Build on a secure, scalable foundation. Centralize and manage your critical business data with enterprise-grade reliability.",
            tech6_title: "Microsoft Azure",
            tech6_desc: "Unlock infinite possibilities in the cloud. Scalable, secure, and future-proof solutions powering your business, globally.",

            // Removed Resources section translations as per request.

            about_heading: "About AppFlow Studios",
            about_description: "We are passionate about empowering businesses through innovative solutions and intelligent automation with the Power Platform.",
            about_paragraph1: "At AppFlow Studios, we believe that powerful, accessible solutions can transform any business. Our team of expert developers and consultants is dedicated to crafting beautiful, functional, and scalable applications, automated workflows, and insightful dashboards that solve real-world business challenges. We combine deep technical expertise with a friendly, collaborative approach to deliver solutions that exceed expectations.",
            about_paragraph2: "Our mission is to simplify the complex world of business process enhancement, making it easy for you to streamline operations and bring your ideas to life. We pride ourselves on clear communication, transparent processes, and an unwavering commitment to your success.",
            about_cta: "Meet Our Team (Coming Soon)",

            cta_heading: "Ready to Transform Your Business?",
            cta_description: "Choose the path that best fits your app development needs.",
            cta_help_me_build: "Give Me A Hand",
            cta_build_for_me: "Build It For Me",
            cta_start_with_template: "Start with a Template",

            // Consolidated Contact CTA - Now generic for any page bottom CTA
            contact_cta_heading: "Your Next Big Solution Starts Here.", // Stronger, more inviting
            contact_cta_subheading: "Ready to accelerate your business? Connect with our experts to discuss your vision and unlock tailored Power Platform possibilities.", // More benefit-oriented
            contact_cta_btn: "Let's Talk Solutions", // More engaging button text

            form_name_label: "Your Name",
            form_email_label: "Your Email",
            form_subject_label: "Subject",
            form_message_label: "Your Message",
            form_submit_btn: "Send Message",
            form_name_placeholder: "Enter your name",
            form_email_placeholder: "Enter your email",
            form_subject_placeholder: "Enter subject",
            form_message_placeholder: "Type your message here...",

            footer_brand_title: "AppFlow Studios",
            footer_brand_desc: "Crafting powerful and friendly app solutions.",
            footer_quick_links_title: "Quick Links",
            footer_social_title: "Connect With Us",
            footer_copyright: "&copy; 2025 AppFlow Studios. All rights reserved.",


            // Help Me Build Pricing Page
            title_give_hand_pricing: "Give Me A Hand - Pricing & Details - AppFlow Studios",
            give_hand_hero_heading: "Give Me A Hand: Transparent Pricing & Value",
            give_hand_hero_subheading: "Collaborate with our experts on your Power Platform journey. Get the guidance you need, tailored to your budget.",

            pricing_heading: "Flexible Engagement Models",
            pricing_description: "Choose the support structure that best fits your project scope and learning goals. Our rates are designed to be highly competitive, offering exceptional value for expert guidance.",
            pricing_hourly_title: "Hourly Consultation",
            pricing_hourly_rate: "Starting at $150/hour",
            pricing_hourly_desc: "Ideal for quick questions, troubleshooting, or ad-hoc guidance. Purchase blocks of time as needed.",
            pricing_hourly_feature1: "Direct expert access",
            pricing_hourly_feature2: "Flexible scheduling",
            pricing_hourly_feature3: "Solution-focused problem solving",
            pricing_cta_consult: "Book Consultation",

            pricing_package_title: "Project Support Packages",
            pricing_package_rate: "Starting at $1,200/package",
            pricing_package_desc: "For structured projects requiring ongoing support and mentoring. Tiered packages based on complexity.",
            pricing_package_feature1: "Dedicated expert time",
            pricing_package_feature2: "Code reviews & best practices",
            pricing_package_feature3: "Structured milestones & deliverables",
            pricing_cta_package: "Explore Packages",

            pricing_workshop_title: "Custom Workshops & Training",
            pricing_workshop_rate: "Custom Quote",
            pricing_workshop_desc: "Tailored training for your team, from beginner fundamentals to advanced Power Platform topics.",
            pricing_workshop_feature1: "On-site or remote delivery",
            pricing_workshop_feature2: "Custom curriculum",
            pricing_workshop_feature3: "Hands-on exercises",
            pricing_cta_workshop: "Request Workshop",

            how_works_heading: "How \"Give Me A Hand\" Works",
            how_works_description: "Our collaborative process is designed for clarity and efficiency, ensuring you get the most out of every interaction.",
            step1_title: "Tell Us Your Goal",
            step1_desc: "Share your Power Platform challenge or project idea with us. We'll understand your current progress and desired outcomes.",
            step2_title: "Expert Match",
            step2_desc: "We connect you with a Power Platform expert whose skills perfectly align with your specific needs.",
            step3_title: "Collaborate & Build",
            step3_desc: "Work alongside your dedicated expert through scheduled sessions, receiving real-time guidance, code reviews, and insights.",
            step4_title: "Achieve & Grow",
            step4_desc: "Successfully build your solution, gain valuable skills, and empower your team for future projects.",

            testimonials_heading: "What Our Clients Say",
            testimonials_description: "Hear from businesses that built amazing solutions with our guidance.",
            testimonial1_quote: "\"AppFlow Studios' coaching was a game-changer! Their expert guided us through complex Power Apps features, saving us weeks of development time.\"",
            testimonial1_author: "- Jane Doe, Project Lead at Innovate Corp.",
            testimonial2_quote: "\"The customized Power Automate workshop transformed how our team handles approvals. Highly recommend their collaborative approach!\"",
            testimonial2_author: "- John Smith, Operations Manager at Global Solutions.",


            // Build It For Me Details Page
            title_build_details: "Build It For Me - Full Service Details - AppFlow Studios",
            build_details_hero_heading: "Build It For Me: Your Vision, Delivered.",
            build_details_hero_subheading: "Experience seamless, end-to-end Power Platform development, from concept to launch and beyond. Focus on your business, we handle the tech.",

            our_process_heading: "Our Comprehensive Delivery Process",
            our_process_description: "We ensure clarity, efficiency, and excellence at every stage of your custom solution development.",
            process_step1_title: "Discovery & Strategy",
            process_step1_desc: "Deep dive into your business needs, goals, and existing systems to define a clear project roadmap.",
            process_step2_title: "Design & Prototyping",
            process_step2_desc: "Craft intuitive user interfaces (UI) and engaging user experiences (UX), presenting interactive prototypes for your review.",
            process_step3_title: "Agile Development",
            process_step3_desc: "Our expert team builds your solution using agile methodologies, ensuring flexibility, regular updates, and continuous feedback integration.",
            process_step4_title: "Quality Assurance & Testing",
            process_step4_desc: "Rigorous testing phases to guarantee a bug-free, high-performing, and secure solution that meets all requirements.",
            process_step5_title: "Deployment & Training",
            process_step5_desc: "Seamless deployment of your new solution, complete with user training to ensure smooth adoption across your organization.",
            process_step6_title: "Support & Evolution",
            process_step6_desc: "Ongoing maintenance, support, and future enhancements to ensure your solution grows with your business needs.",

            benefits_heading: "Why Choose AppFlow Studios to Build For You?",
            benefits_description: "Partnering with us for full-service development brings unparalleled advantages to your business.",
            benefit1_title: "Guaranteed Quality",
            benefit1_desc: "Leverage our certified experts to deliver robust, reliable, and high-performance Power Platform solutions.",
            benefit2_title: "Time & Cost Efficiency",
            benefit2_desc: "Accelerate development cycles and reduce overhead with our streamlined project management and expertise.",
            benefit3_title: "Security & Scalability",
            benefit3_desc: "Built with enterprise-grade security and designed to scale effortlessly with your growing business.",
            benefit4_title: "Precision Tailored",
            benefit4_desc: "Receive a solution meticulously crafted to your unique business processes, eliminating generic inefficiencies.",

            success_stories_heading: "Our Success Stories",
            success_stories_description: "See how we've delivered transformative Power Platform solutions for businesses like yours.",
            build_testimonial1_quote: "\"AppFlow Studios completely streamlined our sales process with a custom Power Apps CRM. The ROI was almost immediate!\"",
            build_testimonial1_author: "- Alex P., Head of Sales at Growth Innovations",
            build_testimonial2_quote: "\"Their team built an incredible inventory management system from scratch using the Power Platform. Flawless execution and fantastic support.\"",
            build_testimonial2_author: "- Maria S., Operations Director at SupplyChain Pro",

            // Build It For Me Details Page - New Pricing Packages
            build_pricing_heading: "Our Full-Service Project Packages",
            build_pricing_description: "Explore our transparent pricing tiers, designed to fit various project complexities and scopes. All packages are customizable.",

            build_package1_title: "Starter Solution",
            build_package1_price: "$5,000 - $15,000",
            build_package1_desc: "Ideal for small-scale apps or automation flows. Get a critical business process digitized quickly and efficiently.",
            build_package1_feature1: "Single App/Flow (basic complexity)",
            build_package1_feature2: "Standard UI/UX",
            build_package1_feature3: "Basic data integration (e.g., SharePoint Lists)",
            build_package1_feature4: "2 weeks post-launch support",
            build_package_cta: "Get a Quote for Starter",

            build_package2_title: "Growth Accelerator",
            build_package2_price: "$15,000 - $40,000",
            build_package2_desc: "Perfect for medium-complexity solutions, integrating multiple processes or departmental apps. Designed for significant operational impact.",
            build_package2_feature1: "Multiple Apps/Flows OR Complex Single Solution",
            build_package2_feature2: "Customized Branding & Advanced UI/UX",
            build_package2_feature3: "Dataverse/SQL integration",
            build_package2_feature4: "Basic Power BI reporting",
            build_package2_feature5: "4 weeks post-launch support & minor enhancements",
            // Reusing build_package_cta: "Request Growth Quote", no need to add again

            build_package3_title: "Enterprise Transformation",
            build_package3_price: "Custom Quote (>$40,000)",
            build_package3_desc: "For large-scale, integrated Power Platform ecosystems. Comprehensive solutions across departments, driving strategic digital transformation.",
            build_package3_feature1: "Multi-phase, cross-departmental solutions",
            build_package3_feature2: "Advanced security & governance",
            build_package3_feature3: "Complex system integrations (APIs, ERPs)",
            build_package3_feature4: "Full Power BI dashboard suite",
            build_package3_feature5: "Extended support, training & strategic roadmap planning",
            // Reusing build_package_cta: "Discuss Enterprise Project", no need to add again


            // Templates Page
            title_templates: "Power Platform Solutions - AppFlow Studios Templates",
            templates_hero_heading: "Ready-to-Use Power Platform Templates",
            templates_hero_subheading: "Jumpstart your solutions with our expertly crafted, customizable templates for Power Apps, Power Automate, Power BI, and more.",

            templates_pa_heading: "Power Apps Templates",
            templates_pa_description: "Accelerate your app development with these powerful starting points.",
            template_pa1_title: "Asset Management Tracker",
            template_pa1_desc: "Efficiently track and manage your company's physical assets, including location, status, and maintenance history.",
            template_pa2_title: "Employee Leave Request",
            template_pa2_desc: "Simplify HR processes with an intuitive app for submitting, approving, and tracking employee leave requests.",
            template_pa3_title: "Event Check-in Solution",
            template_pa3_desc: "Streamline event registration and attendee check-in with a robust and user-friendly Power App.",

            templates_pa_auto_heading: "Power Automate Templates",
            templates_pa_auto_description: "Automate tedious tasks and integrate your systems seamlessly.",
            template_auto1_title: "Document Approval Workflow",
            template_auto1_desc: "Automate the review and approval process for documents, contracts, or expense reports.",
            template_auto2_title: "Cross-Platform Data Synchronization",
            template_auto2_desc: "Keep data consistent across different systems (e.g., SharePoint, Salesforce, Excel) automatically.",
            template_auto3_title: "Automated Notification System",
            template_auto3_desc: "Set up instant alerts for critical events, new submissions, or task assignments via email/Teams.",

            templates_pbi_heading: "Power BI Templates",
            templates_pbi_description: "Unlock insights with pre-built, stunning dashboards and reports.",
            template_pbi1_title: "Interactive Sales Performance",
            template_pbi1_desc: "Visualize your sales data, identify trends, and track KPIs with a dynamic, ready-to-use dashboard.",
            template_pbi2_title: "HR Analytics Dashboard",
            template_pbi2_desc: "Monitor employee metrics, talent acquisition, and workforce diversity with comprehensive HR insights.",
            template_pbi3_title: "Project Status & Health",
            template_pbi3_desc: "Keep track of project progress, budget, and risks with a clear, visual overview for stakeholders.",

            templates_pf_heading: "Full Power Platform Solutions",
            templates_pf_description: "Integrated solutions combining the best of the Power Platform for complex business needs.",
            template_pf1_title: "Employee Onboarding Hub",
            template_pf1_desc: "A comprehensive solution for new hire onboarding, combining apps, workflows, and dashboards.",
            template_pf2_title: "Lightweight CRM System",
            template_pf2_desc: "Manage customer interactions, sales leads, and account histories with a tailored CRM solution.",
            template_pf3_title: "Internal Helpdesk Portal",
            template_pf3_desc: "Empower your internal IT or support teams with a self-service helpdesk and efficient ticket management.",
        },
        pt: {
            // General / Global
            logo_text: "AppFlow Studios",
            nav_home: "Início",
            nav_services: "Serviços",
            nav_give_hand: "Ajude-me a Construir",
            nav_build_for_me: "Construa Para Mim",
            nav_templates: "Modelos",
            nav_about: "Sobre Nós",
            nav_contact: "Contato",
            nav_get_quote: "Obter Orçamento",
            read_more: "Leia Mais →",
            get_template_btn: "Obter Modelo →",

            // Index Page
            title_index: "AppFlow Studios - Seu Parceiro no Desenvolvimento Moderno de Aplicativos",
            hero_heading: "Desperte o Potencial do Seu Negócio com Power Platform",
            hero_subheading: "Criamos aplicativos poderosos e intuitivos, além de soluções automatizadas que otimizam operações, impulsionam o crescimento e revelam novos insights. Moderno, limpo e centrado no usuário, feito sob medida para o seu sucesso.",

            services_heading: "Nossos Serviços Principais",
            services_description: "Oferecemos uma gama de soluções para impulsionar seu negócio.",
            service1_title: "Desenvolvimento de Aplicativos Personalizados",
            service1_desc: "Crie aplicativos de negócios sob medida em velocidade surpreendente. Transforme suas ideias em soluções poderosas e intuitivas com impacto imediato.",
            service2_title: "Automação de Processos de Negócio",
            service2_desc: "Automatize o monótono, amplifique sua produtividade. Conecte aplicativos e serviços sem esforço para liberar sua equipe para o que realmente importa.",
            service3_title: "Treinamentos e Workshops",
            service3_desc: "Capacite sua equipe com treinamentos práticos para dominar plataformas low-code/no-code.",
            service4_title: "Consultoria e Estratégia",
            service4_desc: "Orientação especializada para ajudá-lo a navegar no cenário de desenvolvimento de aplicativos e tomar decisões informadas.",

            tech_heading: "Tecnologias que Dominamos",
            tech_description: "Liberando a inovação através das plataformas mais poderosas. Veja como transformamos negócios:",
            tech1_title: "Microsoft Power Apps",
            tech1_desc: "Crie rapidamente aplicativos de negócios personalizados com nosso desenvolvimento e consultoria em Power Apps.",
            tech2_title: "Power Automate",
            tech2_desc: "Automatize fluxos de trabalho e integre serviços para aumentar a eficiência e a produtividade.",
            tech3_title: "Power BI",
            tech3_desc: "Transforme seus dados em insights poderosos com painéis e relatórios interativos.",
            tech4_title: "SharePoint Online",
            tech4_desc: "Aproveite o SharePoint para soluções robustas de gerenciamento de documentos e colaboração em equipe.",
            tech5_title: "Microsoft Dataverse",
            tech5_desc: "Armazene e gerencie dados com segurança para seus aplicativos de negócios.",
            tech6_title: "Microsoft Azure",
            tech6_desc: "Construindo soluções em nuvem escaláveis e seguras com os serviços do Azure.",

            // Removed Resources section translations as per request.

            about_heading: "Sobre a AppFlow Studios",
            about_description: "Somos apaixonados por capacitar negócios através de soluções inovadoras e automação inteligente com a Power Platform.",
            about_paragraph1: "Na AppFlow Studios, acreditamos que soluções poderosas e acessíveis podem transformar qualquer negócio. Nossa equipe de desenvolvedores e consultores especializados se dedica a criar aplicativos bonitos, funcionais e escaláveis, fluxos de trabalho automatizados e painéis perspicazes que resolvem desafios de negócios do mundo real. Combinamos profundo conhecimento técnico com uma abordagem amigável e colaborativa para entregar soluções que superam as expectativas.",
            about_paragraph2: "Nossa missão é simplificar o complexo mundo do aprimoramento de processos de negócios, tornando mais fácil para você otimizar operações e dar vida às suas ideias. Orgulhamo-nos de uma comunicação clara, processos transparentes e um compromisso inabalável com o seu sucesso.",
            about_cta: "Conheça Nossa Equipe (Em Breve)",

            cta_heading: "Pronto para Transformar Seu Negócio?",
            cta_description: "Escolha o caminho que melhor se adapta às suas necessidades de desenvolvimento de aplicativos.",
            cta_help_me_build: "Ajude-me a Construir",
            cta_build_for_me: "Construa Para Mim",
            cta_start_with_template: "Começar com um Modelo",

            // Consolidated Contact CTA
            contact_cta_heading: "Sua Próxima Grande Solução Começa Aqui.",
            contact_cta_subheading: "Pronto para acelerar seu negócio? Conecte-se com nossos especialistas para discutir sua visão e descobrir as possibilidades personalizadas da Power Platform.",
            contact_cta_btn: "Vamos Conversar sobre Soluções",

            form_name_label: "Seu Nome",
            form_email_label: "Seu E-mail",
            form_subject_label: "Assunto",
            form_message_label: "Sua Mensagem",
            form_submit_btn: "Enviar Mensagem",
            form_name_placeholder: "Digite seu nome",
            form_email_placeholder: "Digite seu e-mail",
            form_subject_placeholder: "Digite o assunto",
            form_message_placeholder: "Digite sua mensagem aqui...",

            footer_brand_title: "AppFlow Studios",
            footer_brand_desc: "Criando soluções de aplicativos poderosas e amigáveis.",
            footer_quick_links_title: "Links Rápidos",
            footer_social_title: "Conecte-se Conosco",
            footer_copyright: "&copy; 2025 AppFlow Studios. Todos os direitos reservados.",


            // Help Me Build Pricing Page
            title_give_hand_pricing: "Ajude-me a Construir - Preços e Detalhes - AppFlow Studios",
            give_hand_hero_heading: "Ajude-me a Construir: Preços Transparentes e Valor",
            give_hand_hero_subheading: "Colabore com nossos especialistas em sua jornada Power Platform. Obtenha a orientação que você precisa, adaptada ao seu orçamento.",

            pricing_heading: "Modelos de Engajamento Flexíveis",
            pricing_description: "Escolha a estrutura de suporte que melhor se adapta ao escopo do seu projeto e aos seus objetivos de aprendizado. Nossas taxas são projetadas para serem altamente competitivas, oferecendo valor excepcional para orientação especializada.",
            pricing_hourly_title: "Consulta por Hora",
            pricing_hourly_rate: "A partir de R$ 750/hora",
            pricing_hourly_desc: "Ideal para perguntas rápidas, solução de problemas ou orientação ad hoc. Adquira blocos de tempo conforme a necessidade.",
            pricing_hourly_feature1: "Acesso direto a especialistas",
            pricing_hourly_feature2: "Agendamento flexível",
            pricing_hourly_feature3: "Resolução de problemas focada em soluções",
            pricing_cta_consult: "Agendar Consulta",

            pricing_package_title: "Pacotes de Suporte a Projetos",
            pricing_package_rate: "A partir de R$ 6.000/pacote",
            pricing_package_desc: "Para projetos estruturados que exigem suporte e mentoria contínuos. Pacotes escalonados com base na complexidade.",
            pricing_package_feature1: "Tempo dedicado de especialista",
            pricing_package_feature2: "Revisões de código e melhores práticas",
            pricing_package_feature3: "Marcos e entregas estruturados",
            pricing_cta_package: "Explorar Pacotes",

            pricing_workshop_title: "Workshops e Treinamentos Personalizados",
            pricing_workshop_rate: "Orçamento Personalizado",
            pricing_workshop_desc: "Treinamento sob medida para sua equipe, desde fundamentos básicos até tópicos avançados do Power Platform.",
            pricing_workshop_feature1: "Entrega no local ou remota",
            pricing_workshop_feature2: "Currículo personalizado",
            pricing_workshop_feature3: "Exercícios práticos",
            pricing_cta_workshop: "Solicitar Workshop",

            how_works_heading: "Como Funciona o \"Ajude-me a Construir\"",
            how_works_description: "Nosso processo colaborativo é projetado para clareza e eficiência, garantindo que você aproveite ao máximo cada interação.",
            step1_title: "Conte-nos Seu Objetivo",
            step1_desc: "Compartilhe seu desafio ou ideia de projeto Power Platform conosco. Entenderemos seu progresso atual e os resultados desejados.",
            step2_title: "Match com Especialista",
            step2_desc: "Nós o conectamos com um especialista em Power Platform cujas habilidades se alinham perfeitamente às suas necessidades específicas.",
            step3_title: "Colabore e Construa",
            step3_desc: "Trabalhe lado a lado com seu especialista dedicado através de sessões agendadas, recebendo orientação em tempo real, revisões de código e insights.",
            step4_title: "Alcance e Cresça",
            step4_desc: "Construa sua solução com sucesso, adquira habilidades valiosas e capacite sua equipe para projetos futuros.",

            testimonials_heading: "O que Nossos Clientes Dizem",
            testimonials_description: "Ouça de empresas que construíram soluções incríveis com nossa orientação.",
            testimonial1_quote: "\"O coaching da AppFlow Studios mudou o jogo! O especialista deles nos guiou por recursos complexos do Power Apps, economizando semanas de tempo de desenvolvimento.\"",
            testimonial1_author: "- Jane Doe, Líder de Projeto na Innovate Corp.",
            testimonial2_quote: "\"O workshop personalizado de Power Automate transformou a forma como nossa equipe lida com aprovações. Recomendo muito a abordagem colaborativa deles!\"",
            testimonial2_author: "- John Smith, Gerente de Operações na Global Solutions.",


            // Build It For Me Details Page
            title_build_details: "Construa Para Mim - Detalhes do Serviço Completo - AppFlow Studios",
            build_details_hero_heading: "Construa Para Mim: Sua Visão, Entregue.",
            build_details_hero_subheading: "Experimente o desenvolvimento Power Platform de ponta a ponta, do conceito ao lançamento e além. Concentre-se no seu negócio, nós cuidamos da tecnologia.",

            our_process_heading: "Nosso Processo de Entrega Abrangente",
            our_process_description: "Garantimos clareza, eficiência e excelência em cada etapa do desenvolvimento da sua solução personalizada.",
            process_step1_title: "Descoberta e Estratégia",
            process_step1_desc: "Análise aprofundada das necessidades, objetivos e sistemas existentes do seu negócio para definir um roteiro de projeto claro.",
            process_step2_title: "Design e Prototipagem",
            process_step2_desc: "Criação de interfaces de usuário (UI) intuitivas e experiências de usuário (UX) envolventes, apresentando protótipos interativos para sua revisão.",
            process_step3_title: "Desenvolvimento Ágil",
            process_step3_desc: "Nossa equipe de especialistas constrói sua solução usando metodologias ágeis, garantindo flexibilidade, atualizações regulares e integração contínua de feedback.",
            process_step4_title: "Garantia de Qualidade e Testes",
            process_step4_desc: "Fases rigorosas de teste para garantir uma solução sem bugs, de alto desempenho e segura que atenda a todos os requisitos.",
            process_step5_title: "Implantação e Treinamento",
            process_step5_desc: "Implantação perfeita de sua nova solução, completa com treinamento do usuário para garantir uma adoção suave em sua organização.",
            process_step6_title: "Suporte e Evolução",
            process_step6_desc: "Manutenção contínua, suporte e aprimoramentos futuros para garantir que sua solução cresça com as necessidades do seu negócio.",

            benefits_heading: "Por que Escolher a AppFlow Studios para Construir Para Você?",
            benefits_description: "A parceria conosco para o desenvolvimento de serviço completo traz vantagens incomparáveis para o seu negócio.",
            benefit1_title: "Qualidade Garantida",
            benefit1_desc: "Aproveite nossos especialistas certificados para entregar soluções Power Platform robustas, confiáveis e de alto desempenho.",
            benefit2_title: "Eficiência de Tempo e Custo",
            benefit2_desc: "Acelere os ciclos de desenvolvimento e reduza despesas gerais com nossa gestão de projetos e experiência simplificadas.",
            benefit3_title: "Segurança e Escalabilidade",
            benefit3_desc: "Construído com segurança de nível empresarial e projetado para escalar sem esforço com o crescimento do seu negócio.",
            benefit4_title: "Precisão Sob Medida",
            benefit4_desc: "Receba uma solução meticulosamente elaborada para seus processos de negócios exclusivos, eliminando ineficiências genéricas.",

            success_stories_heading: "Nossas Histórias de Sucesso",
            success_stories_description: "Veja como entregamos soluções Power Platform transformadoras para empresas como a sua.",
            build_testimonial1_quote: "\"A AppFlow Studios simplificou completamente nosso processo de vendas com um CRM personalizado em Power Apps. O ROI foi quase imediato!\"",
            build_testimonial1_author: "- Alex P., Chefe de Vendas na Growth Innovations",
            build_testimonial2_quote: "\"A equipe deles construiu um sistema incrível de gerenciamento de estoque do zero usando a Power Platform. Execução impecável e suporte fantástico.\"",
            build_testimonial2_author: "- Maria S., Diretora de Operações na SupplyChain Pro",

            // Build It For Me Details Page - New Pricing Packages
            build_pricing_heading: "Nossos Pacotes de Projetos Full-Service",
            build_pricing_description: "Explore nossos níveis de preços transparentes, projetados para se adequar a diversas complexidades e escopos de projetos. Todos os pacotes são personalizáveis.",

            build_package1_title: "Solução Inicial",
            build_package1_price: "R$ 25.000 - R$ 75.000",
            build_package1_desc: "Ideal para aplicativos ou fluxos de automação em pequena escala. Digitalize um processo de negócios crítico de forma rápida e eficiente.",
            build_package1_feature1: "Único App/Fluxo (complexidade básica)",
            build_package1_feature2: "UI/UX Padrão",
            build_package1_feature3: "Integração básica de dados (ex: Listas SharePoint)",
            build_package1_feature4: "2 semanas de suporte pós-lançamento",
            build_package_cta: "Obter Orçamento Inicial",

            build_package2_title: "Acelerador de Crescimento",
            build_package2_price: "R$ 75.000 - R$ 200.000",
            build_package2_desc: "Perfeito para soluções de média complexidade, integrando múltiplos processos ou aplicativos departamentais. Projetado para um impacto operacional significativo.",
            build_package2_feature1: "Múltiplos Apps/Fluxos OU Solução Única Complexa",
            build_package2_feature2: "Marca Personalizada e UI/UX Avançada",
            build_package2_feature3: "Integração Dataverse/SQL",
            build_package2_feature4: "Relatórios básicos de Power BI",
            build_package2_feature5: "4 semanas de suporte pós-lançamento e pequenas melhorias",

            build_package3_title: "Transformação Corporativa",
            build_package3_price: "Orçamento Personalizado (> R$ 200.000)",
            build_package3_desc: "Para ecossistemas Power Platform de grande escala e integrados. Soluções abrangentes entre departamentos, impulsionando a transformação digital estratégica.",
            build_package3_feature1: "Soluções multifásicas e interdepartamentais",
            build_package3_feature2: "Segurança e governança avançadas",
            build_package3_feature3: "Integrações complexas de sistemas (APIs, ERPs)",
            build_package3_feature4: "Pacote completo de dashboards Power BI",
            build_package3_feature5: "Suporte estendido, treinamento e planejamento de roteiro estratégico",


            // Templates Page
            title_templates: "Power Platform Solutioons - AppFlow Studios Templates",
            templates_hero_heading: "Modelos Power Platform Prontos para Uso",
            templates_hero_subheading: "Impulsione suas soluções com nossos modelos criados por especialistas e personalizáveis para Power Apps, Power Automate, Power BI e muito mais.",

            templates_pa_heading: "Modelos de Power Apps",
            templates_pa_description: "Acelere o desenvolvimento de seus aplicativos com esses pontos de partida poderosos.",
            template_pa1_title: "Rastreador de Gerenciamento de Ativos",
            template_pa1_desc: "Rastreie e gerencie eficientemente os ativos físicos de sua empresa, incluindo localização, status e histórico de manutenção.",
            template_pa2_title: "Solicitação de Férias para Funcionários",
            template_pa2_desc: "Simplifique os processos de RH com um aplicativo intuitivo para enviar, aprovar e rastrear solicitações de licença de funcionários.",
            template_pa3_title: "Solução de Check-in de Eventos",
            template_pa3_desc: "Otimize o registro e o check-in de participantes em eventos com um Power App robusto e fácil de usar.",

            templates_pa_auto_heading: "Modelos de Power Automate",
            templates_pa_auto_description: "Automatize tarefas tediosas e integre seus sistemas perfeitamente.",
            template_auto1_title: "Fluxo de Trabalho de Aprovação de Documentos",
            template_auto1_desc: "Automatize o processo de revisão e aprovação de documentos, contratos ou relatórios de despesas.",
            template_auto2_title: "Sincronização de Dados entre Plataformas",
            template_auto2_desc: "Mantenha os dados consistentes em diferentes sistemas (por exemplo, SharePoint, Salesforce, Excel) automaticamente.",
            template_auto3_title: "Sistema de Notificação Automatizado",
            template_auto3_desc: "Configure alertas instantâneos para eventos críticos, novas submissões ou atribuições de tarefas via e-mail/Teams.",

            templates_pbi_heading: "Modelos de Power BI",
            templates_pbi_description: "Desbloqueie insights com dashboards e relatórios pré-construídos e impressionantes.",
            template_pbi1_title: "Desempenho de Vendas Interativo",
            template_pbi1_desc: "Visualize seus dados de vendas, identifique tendências e acompanhe KPIs com um dashboard dinâmico e pronto para usar.",
            template_pbi2_title: "Dashboard de Análise de RH",
            template_pbi2_desc: "Monitore métricas de funcionários, aquisição de talentos e diversidade da força de trabalho com insights abrangentes de RH.",
            template_pbi3_title: "Status e Saúde do Projeto",
            template_pbi3_desc: "Acompanhe o progresso do projeto, orçamento e riscos com uma visão clara e visual para as partes interessadas.",

            templates_pf_heading: "Soluções Power Platform Completas",
            templates_pf_description: "Soluções integradas que combinam o melhor da Power Platform para necessidades de negócios complexas.",
            template_pf1_title: "Central de Integração de Funcionários",
            template_pf1_desc: "Uma solução abrangente para a integração de novos funcionários, combinando aplicativos, fluxos de trabalho e dashboards.",
            template_pf2_title: "Sistema CRM Leve",
            template_pf2_desc: "Gerencie interações com clientes, leads de vendas e históricos de contas com uma solução CRM sob medida.",
            template_pf3_title: "Portal Interno de Helpdesk",
            template_pf3_desc: "Capacite suas equipes internas de TI ou suporte com um helpdesk de autoatendimento e gerenciamento eficiente de tickets.",
        }
    };

    let currentLang = 'en'; // Default language

    // --- Helper Functions ---
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('preferredLang', lang); // Remember user's choice

        // Update all elements with data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            if (translations[currentLang] && translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-placeholder-key]').forEach(element => {
            const key = element.dataset.placeholderKey;
            if (translations[currentLang] && translations[currentLang][key]) {
                element.placeholder = translations[currentLang][key];
            }
        });

        // Update title tag
        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.dataset.langKey) {
            const key = titleElement.dataset.langKey;
            if (translations[currentLang] && translations[currentLang][key]) {
                titleElement.textContent = translations[currentLang][key];
            }
        }

        // Update active flag styles
        if (langEnBtn) langEnBtn.classList.remove('active');
        if (langPtBtn) langPtBtn.classList.remove('active');
        if (lang === 'en' && langEnBtn) {
            langEnBtn.classList.add('active');
        } else if (lang === 'pt' && langPtBtn) {
            langPtBtn.classList.add('active');
        }

        // Update document lang attribute for accessibility
        document.documentElement.lang = lang;
    }

    function detectAndSetInitialLanguage() {
        // Check local storage first for user's preference
        const storedLang = localStorage.getItem('preferredLang');
        if (storedLang && (storedLang === 'en' || storedLang === 'pt')) {
            setLanguage(storedLang);
            return;
        }

        // If no stored preference, detect from browser
        const browserLang = navigator.language || navigator.userLanguage;
        const shortBrowserLang = browserLang.split('-')[0]; // e.g., 'en', 'pt'

        if (shortBrowserLang === 'pt') {
            setLanguage('pt');
        } else {
            setLanguage('en'); // Default to English if browser lang is not PT
        }
    }

    // --- Event Listeners ---
    // Mobile Navigation Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('open');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('open');
            });
        });
    }

    // Language Switcher Clicks
    if (langEnBtn) {
        langEnBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('en');
        });
    }
    if (langPtBtn) {
        langPtBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('pt');
        });
    }

    // Highlight the current page in the navigation
    function highlightCurrentPage() {
        const currentPath = window.location.pathname.split('/').pop();
        const cleanedPath = currentPath === '' || currentPath === 'index.html' ? 'index.html' : currentPath;

        document.querySelectorAll('.nav-menu a').forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();

            // Check if the link's filename matches the current page's filename
            if (cleanedPath === linkPath) {
                link.classList.add('current-page');
            } else {
                link.classList.remove('current-page');
            }

            // Special handling for index.html as both a page and sections
            if (cleanedPath === 'index.html' && linkPath === 'index.html') {
                 link.classList.add('current-page');
            }
        });
    }

    // --- Initialize Language ---
    detectAndSetInitialLanguage();
    highlightCurrentPage();
});