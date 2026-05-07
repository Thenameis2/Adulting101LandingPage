import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Adulting 101: Life Skills App",
  seo: {
    title: "Adulting 101: Life Skills App",
    description: "App landing page for Adulting 101",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/MainLogonobg.png",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  // googlePlayLink:
  //   "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: false,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://www.instagram.com/adulting101.elevate?igsh=Y29vbDJubmtiMWp4&utm_source=qr",
      // facebook: "https://facebook.com/google",
      // twitter: "https://x.com/google",
      tiktok: "https://www.tiktok.com/@adulting101.elevate?_r=1&_t=ZT-96Ae0byZahB",
    },
    links: [
      // { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      // { href: "/#pricing", title: "Pricing" },
      // { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      // { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      // { href: "/#pricing", title: "Pricing" },
      // { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Our Mobile App Today!",
    subtitle:
      "",
      screenshots: [
        "/screenshots/firstpic.png",
        "/screenshots/secondpic.png",
        "/screenshots/thirdpic.png",
      
      ],
  },
  home: {
    seo: {
      title: "Adulting101 App Landing Page",
      description: "Adulting101 App Landing Page",
    },
    // testimonials: {
    //   id: "testimonials",
    //   title: "Testimonials",
    //   subtitle: "Check out a few of our customer stories",
    //   cards: [
    //     {
    //       name: "Alice Johnson",
    //       comment:
    //         "The service was fantastic! Highly recommended. The team was very professional and attentive to our needs. They went above and beyond to ensure we were satisfied with the results. I will definitely be using their services again in the future.",
    //     },
    //     {
    //       name: "Bob Smith",
    //       comment:
    //         "Great value for the price. Very satisfied with the overall experience. The product quality is top-notch and the customer service is excellent. I appreciate the prompt responses to my inquiries and the helpful advice provided. Highly recommend.",
    //     },
    //     {
    //       name: "Charlie Brown",
    //       comment:
    //         "An excellent experience from start to finish. The onboarding process was smooth and the support team was very responsive. I felt valued as a customer and the results exceeded my expectations. I am impressed with the level of detail and care put into their work.",
    //     },
    //     {
    //       name: "Dana White",
    //       comment:
    //         "Superb customer service and high-quality products. The team demonstrated great expertise and patience throughout the project. They addressed all my concerns and provided valuable insights. The end product was delivered on time and surpassed my expectations.",
    //     },
    //     {
    //       name: "Eve Adams",
    //       comment:
    //         "I couldn't be happier with the results! The attention to detail and the level of customization provided was outstanding. The team was friendly and professional, making the entire process enjoyable. I highly recommend their services to anyone looking for top-quality work.",
    //     },
    //   ],
    // },
    // partners: {
    //   title: "As seen on",
    //   logos: [
    //     "/misc/companies/apple.svg",
    //     "/misc/companies/aws.svg",
    //     "/misc/companies/google.svg",
    //     "/misc/companies/tumblr.svg",
    //   ],
    // },
    howItWorks: {
      id: "how-it-works",
      title: "How it works",
      // subtitle:
      //   "Explore our comprehensive step-by-step guide to understand how our process ensures seamless and effective results",
      steps: [
        {
          title: "Install the App",
          subtitle:
            "Download and install the app on your device to get started quickly and easily.",
          image: "stock/dowload.jpeg",
        },
        // {
        //   title: "Create an Account",
        //   subtitle:
        //     "Sign up by entering your personal details and verifying your University email to create a new account in just a few minutes.",
        //   image: "/stock/register.PNG",
        // },
        {
          title: "Set Up Your Profile",
          subtitle:
            "Complete your profile by adding necessary information and preferences to personalize your experience on the platform.",
          image: "/stock/profile.PNG",
        },
        {
          title: "Explore Tips ",
          subtitle:
            "Navigate through the app to discover various tips based on category.",
          image: "/screenshots/secondpic.png",
        },
        {
          title: "Explore Age timeline: ",
          subtitle:
            "what to do by 18, 25, 30, and beyond.",
          image: "/screenshots/thirdpic.png",
        },
        {
          title: "Explore Reminders ",
          subtitle:
            "Set reminders from tips or even create a custom reminder.",
          image: "/screenshots/reminders.png",
        },
      ],
    },
    // features: {
    //   id: "features",
    //   title: "Transform Your Daily Routine",
    //   subtitle:
    //     "Elevate your lifestyle with our innovative mobile app, designed for seamless living",
    //   cards: [
    //     {
    //       title: "Seamless Integration",
    //       subtitle:
    //         "Connect effortlessly with all your devices, ensuring smooth and efficient workflows across different platforms and applications without any disruptions",
    //       icon: "/3D/link-front-color.webp",
    //     },
    //     {
    //       title: "24/7 Customer Support",
    //       subtitle:
    //         "Get assistance whenever you need it with our dedicated customer support team, available around the clock to help resolve any issues you may encounter",
    //       icon: "/3D/clock-front-color.webp",
    //     },
    //     {
    //       title: "Intuitive Design",
    //       subtitle:
    //         "Navigate through our intuitive and easy-to-use interface designed to enhance user experience, making it accessible for users of all skill levels",
    //       icon: "/3D/roll-brush-front-color.webp",
    //     },
    //     {
    //       title: "Top-Notch Security",
    //       subtitle:
    //         "Protect your data with our top-notch security protocols, offering robust encryption and real-time monitoring to keep your information safe and secure",
    //       icon: "/3D/sheild-front-color.webp",
    //     },
    //   ],
    // },
    // faq: {
    //   id: "faq",
    //   title: "Frequently Asked Questions",
    //   qa: [
    //     {
    //       question: "How can I create an account on your website?",
    //       answer:
    //         "To create an account, click on the 'Sign Up' button located at the top right corner of our homepage. Fill in the required information, including your name, email address, and password. Once you submit the form, you will receive a confirmation email. Click the link in the email to verify your account, and you're all set!",
    //     },
    //     {
    //       question: "What payment methods do you accept?",
    //       answer:
    //         "We accept a variety of payment methods to ensure convenience for our customers. These include major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. For more details, visit our Payments page.",
    //     },
    //     {
    //       question: "How can I track my order?",
    //       answer:
    //         "Once your order is shipped, you will receive an email with a tracking number. You can use this tracking number on our website under the 'Track Order' section to see the current status and estimated delivery date of your package.",
    //     },
    //     {
    //       question: "What is your return policy?",
    //       answer:
    //         "We offer a 30-day return policy for unused and unopened items. If you are not satisfied with your purchase, please contact our customer support team to initiate a return. Refunds will be processed within 7-10 business days after we receive the returned item.",
    //     },
    //     {
    //       question: "How can I contact customer support?",
    //       answer:
    //         "You can contact our customer support team through the 'Contact Us' page on our website. We are available via email, phone, and live chat. Our support hours are Monday to Friday, 9 AM to 5 PM.",
    //     },
    //   ],
    // },
    header: {
      headline: "Master the Skills Nobody Taught You.",
      subtitle:
        "Build better habits with daily life tips, explore 30 practical lessons in every category, set reminders to stay on track, and follow your personal growth through every stage of adulthood.",
      screenshots: [
        "/screenshots/thirdpic.png",
        "/screenshots/secondpic.png",
        "/screenshots/firstpic.png",
      ],
      // rewards: ["App of the year \n 1st", "Product of the day"],
      // usersDescription: "100+ people already using the app",
      headlineMark: [1, 3],
    },
    // pricing: {
    //   id: "pricing",
    //   title: "Pricing",
    //   subtitle: "Flexible costs to meet your budget",
    //   actionText: "Download the app",
    //   plans: [
    //     {
    //       title: "Basic Plan",
    //       price: "$9.99/month",
    //       rows: ["Access to basic features", "Email support", "1 GB storage"],
    //     },
    //     {
    //       title: "Standard Plan",
    //       price: "$19.99/month",
    //       featured: true,
    //       rows: [
    //         "Access to all basic features",
    //         "Priority email support",
    //         "10 GB storage",
    //         "Monthly webinars",
    //       ],
    //     },
    //     {
    //       title: "Premium Plan",
    //       price: "$29.99/month",
    //       rows: [
    //         "Access to all features",
    //         "24/7 support",
    //         "100 GB storage",
    //         "Weekly webinars",
    //         "Exclusive content",
    //       ],
    //     },
    //   ],
    // },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy",
      description: "Privacy Policy",
    },
    content: "This policy is hosted externally: [Privacy Policy](https://calm-bubblegum-2acff2.netlify.app/)"  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Mobile App Landing Template",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** [Insert Date]

## Introduction

This Cookies Policy explains how [Your Company Name] ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, [Your App Name] (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

[Your Company Name]  
[Your Contact Information]  
[Email Address]  
[Phone Number (optional)]
`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - Mobile App Landing Template",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions

Last updated May 7th, 2026

**AGREEMENT TO OUR LEGAL TERMS** 

We are Adulting101 ("Company," "we," "us," "our"), a company registered in Maryland, United States at 811 Arbor Park Place, Mitchellville, MD 20721.

We operate the mobile application Adulting101 (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").

You can contact us by phone at 2025566065, email at mihiretujackson@gmail.com, or by mail to 811 Arbor Park Place, Mitchellville, MD 20721, United States.

These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Adulting101, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.

Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.

The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.

We recommend that you print a copy of these Legal Terms for your records.

**TABLE OF CONTENTS** 
1. OUR SERVICES
2. INTELLECTUAL PROPERTY RIGHTS
3. USER REPRESENTATIONS
4. PROHIBITED ACTIVITIES
5. USER GENERATED CONTRIBUTIONS
6. CONTRIBUTION LICENSE
7. MOBILE APPLICATION LICENSE
8. THIRD-PARTY WEBSITES AND CONTENT
9. ADVERTISERS
10. SERVICES MANAGEMENT
11. PRIVACY POLICY
12. TERM AND TERMINATION
13. MODIFICATIONS AND INTERRUPTIONS
14. GOVERNING LAW
15. DISPUTE RESOLUTION
16. CORRECTIONS
17. DISCLAIMER
18. LIMITATIONS OF LIABILITY
19. INDEMNIFICATION
20. USER DATA
21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
22. CALIFORNIA USERS AND RESIDENTS
23. MISCELLANEOUS
24. CONTACT US

**1. OUR SERVICES** 

The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.

The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).

**2. INTELLECTUAL PROPERTY RIGHTS**

O**ur intellectual property**

We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").

Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.

The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.

**Your use of our Services**

Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
- access the Services; and
- download or print a copy of any portion of the Content to which you have properly gained access,

solely for your personal, non-commercial use or internal business purpose.

Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.

If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: mihiretujackson@gmail.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.

We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.

Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.

**Your submissions**

Please review this section and the **"PROHIBITED ACTIVITIES"** section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.

**Submissions:** By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.

**You are responsible for what you post or upload:** By sending us Submissions through any part of the Services you:
- confirm that you have read and agree with our **"PROHIBITED ACTIVITIES"** and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;
- to the extent permissible by applicable law, waive any and all moral rights to any such Submission;
- warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and
- warrant and represent that your Submissions do not constitute confidential information.

You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.

**3. USER REPRESENTATIONS**

By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.

If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).

**4. PROHIBITED ACTIVITIES**

You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

As a user of the Services, you agree not to:

- Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
- Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
- Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.
- Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
- Use any information obtained from the Services in order to harass, abuse, or harm another person.
- Make improper use of our support services or submit false reports of abuse or misconduct.
- Use the Services in a manner inconsistent with any applicable laws or regulations.
- Engage in unauthorized framing of or linking to the Services.
- Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
- Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
- Delete the copyright or other proprietary rights notice from any Content.
- Attempt to impersonate another user or person or use the username of another user.
- Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").
- Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.
- Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.
- Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.
- Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
- Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.
- Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.
- Use a buying agent or purchasing agent to make purchases on the Services.
- Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
- Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.
- Use the Services to advertise or offer to sell goods and services.

**5. USER GENERATED CONTRIBUTIONS**

The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:

- he creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
- You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.
- You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.
- Your Contributions are not false, inaccurate, or misleading.
- Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
- Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).
- Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
- Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.
- Your Contributions do not violate any applicable law, regulation, or rule.
- Your Contributions do not violate the privacy or publicity rights of any third party.
- Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.
- Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
- Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.

Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.

**6. CONTRIBUTION LICENSE**

You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).

By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.

We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.

**7. MOBILE APPLICATION LICENSE**

**Use License**

If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.

**Apple and Android Devices**

The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an "App Distributor") to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a "terrorist supporting" country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.

**8. THIRD-PARTY WEBSITES AND CONTENT**

The Services may contain (or you may be sent via the App) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.

**9. ADVERTISERS**

We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.

**10. SERVICES MANAGEMENT**

We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.

**11. PRIVACY POLICY**

We care about data privacy and security. Please review our Privacy Policy: idyllic-torrone-20da03.netlify.app. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.

**12. TERM AND TERMINATION**

These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.

If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.

**13. MODIFICATIONS AND INTERRUPTIONS**

We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.

We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.

**14. GOVERNING LAW**

These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of South Carolina applicable to agreements made and to be entirely performed within the State of South Carolina, without regard to its conflict of law principles.

**15. DISPUTE RESOLUTION**

Any legal action of whatever nature brought by either you or us (collectively, the "Parties" and individually, a "Party") shall be commenced or prosecuted in the state and federal courts located in Dorchester, South Carolina, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Legal Terms. In no event shall any claim, action, or proceeding brought by either Party related in any way to the Services be commenced more than one (1) years after the cause of action arose.

**16. CORRECTIONS**

There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.

**17. DISCLAIMER**

THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.

**18. LIMITATIONS OF LIABILITY**

IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO $100.00 USD. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.

**19. INDEMNIFICATION**

You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.

**20. USER DATA**

We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.

**21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES**

Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.

**22. CALIFORNIA USERS AND RESIDENTS**

If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.

**23. MISCELLANEOUS**

These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.

**24. CONTACT US**

In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:

Adulting101
811 Arbor Park Place
Mitchellville, MD 20721
United States
Phone: 2025566065
mihiretujackson@gmail.com

`,
  },
};

export default templateConfig;
