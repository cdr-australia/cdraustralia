// ============================================================
// siteData — a single JavaScript object holding all business
// content. script.js reads this and builds the entire page
// from it, instead of the content being written as static HTML.
// ============================================================
const siteData = {
    business: {
        name: "CDRAustralia.Org",
        tagline: "Engineering Report Writers",
        officeAddress: "Level 8/145 Crown St, Sydney NSW 2000, Australia",
        email: "Contact@CDRAustralia.Org",
        whatsapp: "https://wa.me/+61291917405"
    },

    phones: [
        { country: "Australia", number: "+61 2 9191 7405", href: "tel:+61291917405" },
        { country: "New Zealand", number: "+64 9 887 9053", href: "tel:+6498879053" },
        { country: "Canada", number: "+1 647 600 9575", href: "tel:+16476009575" },
        { country: "India", number: "+91 96505 72343", href: "tel:+919650572343" }
    ],

    nav: [
        { label: "Home", href: "#top" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" }
    ],

    hero: {
        badge: "Engineering Migration Report Specialists",
        heading: "Clear, Compliant Reports for Your Engineering Assessment",
        paragraph: "We write CDR, KA02, RPL, NER and AACA reports that meet the exact standards assessing bodies expect — clearly written, properly structured, and built around your genuine engineering experience.",
        highlights: [
            "Reports matched to current EA requirements",
            "Written fresh for every client",
            "Free revisions before submission",
            "Confidential handling, always",
            "Realistic, dependable timelines"
        ]
    },

    services: [
        {
            id: "cdr",
            icon: "fa-file-lines",
            titleHtml: '<a href="https://cdraustralia.org/">CDR Australia</a>: Competency Demonstration Report',
            keywords: "cdr competency demonstration report engineers australia",
            description: "Our core service is CDR (Competency Demonstration Report) writing for professional registration, qualification recognition and migration skills assessment of engineers by Engineers Australia"
        },
        {
            id: "ka02",
            icon: "fa-building-columns",
            titleHtml: '<a href="https://cdraustralia.org/ipenz/kao2/">KA02 (Knowledge Assessment 02)</a>',
            keywords: "ka02 knowledge assessment new zealand engineering",
            description: "We serve egineers & ICT professionals with all neccessary support to prepare a KA02 (Knowledge Assessment 02) report for Engineering New Zealand skills assessment for migration & non-accredited or non-standard overseas qualification recognition"
        },
        {
            id: "acsrpl",
            icon: "fa-laptop-code",
            titleHtml: '<a href="https://cdraustralia.org/our-services/acs/rpl-writing-services/">RPL for ACS</a>',
            keywords: "acs rpl recognition prior learning ict australia",
            description: "We offer the mandatory assistance to ICT professionals to prepar an RPL (Recognition of Prior Learning) reports for ACS (Australian Computer Society) in order to get a skilled migration visa to Australia"
        },
        {
            id: "ner",
            icon: "fa-user-check",
            titleHtml: '<a href="https://cdraustralia.org/ner/">NER (National Engineering Register)</a>',
            keywords: "ner national engineering register australia",
            description: "We provide help & support to engineers with preparation of their application and competency assessment report for the professional recongnition in Australia through registration in National Engineering Register and/or regional authorised engineering registers of Australia."
        },
        {
            id: "aaca",
            icon: "fa-city",
            titleHtml: '<a href="https://cdraustralia.org/aaca/">AACA (Architects Accreditation Council Of Australia)</a>',
            keywords: "aaca architects accreditation council australia",
            description: "For the architects seeking skilled immigration to Australia or professional registration, we offer documentation support to present their theoretical knowledge, practical experience and competencies before the assessors."
        },
        {
            id: "iepng-egm-erb-ecsa",
            icon: "fa-earth-oceania",
            titleHtml: "IEPNG, RICS, ERP, ECSA, EGM &c. ",
            keywords: "iepng egm erb ecsa rics papua new guinea manitoba south africa botswana uk",
            description: 'Our competency-based assessment (CBA) support include documentation services for <a href="https://cdraustralia.org/iepng/">IEPNG</a> (Papua New Guinea), <a href="https://cdraustralia.org/enggeomb/">EGM</a> (Manitoba), <a href="https://cdraustralia.org/ecsa/">ECSA</a> (South Africa), <a href="https://cdraustralia.org/erb/">ERB</a> (Botswana), <a href="https://cdraustralia.org/uk/rics/">RICS</a> (UK) and other engineering registration and migration service authorities.'
        }
    ],

    about: {
        heading: "Fifteen Years Supporting Engineers Worldwide",
        paragraph: "We've worked with engineers across nearly every discipline and background. Our focus stays the same: presenting your work accurately, clearly, and in line with what assessors are trained to look for.",
        checklist: [
            "Guidelines followed carefully",
            "Experienced engineering writers",
            "Confidential handling of your details",
            "Revisions included as standard"
        ],
        stats: [
            { value: 15, suffix: "+", label: "Years of Experience" },
            { value: 12000, suffix: "+", label: "Reports Delivered" },
            { value: 98, suffix: "%", label: "Success Rate" },
            { value: 24, suffix: "/7", label: "Client Support" }
        ]
    },

    process: [
        { title: "Share Your Background", description: "Send your CV, qualifications and a summary of your engineering experience." },
        { title: "We Draft Your Report", description: "An experienced writer prepares your report to the correct format and standard." },
        { title: "Review and Finalise", description: "You review the draft, request changes, and receive the completed report." }
    ],

    cta: {
        heading: "Let's Talk About Your Application",
        paragraph: "Reach out today for a free, no-obligation consultation about your skills assessment."
    },

    footer: {
        aboutHtml: '<a href="https://cdraustralia.org/">CDRAustralia.Org</a> is the first choice of engineers to get help with the preparation of competency assessment reports for qualification recognition, profossional registration & skilled migration to Australia, New Zealand, Canada, Papua New Guinea, South Affrica, Botswana, UK and many more other countries.',
        quickLinks: [
            { label: "About Us", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" }
        ],
        social: [
            { icon: "fa-facebook-f", href: "https://www.facebook.com/cdrhelpaustralia/" },
            { icon: "fa-twitter", href: "https://twitter.com/cdraustraliaea" },
            { icon: "fa-instagram", href: "https://www.instagram.com/cdraustraliaorg/" },
            { icon: "fa-youtube", href: "https://www.youtube.com/channel/UCVG8w8aobi4WL3qmhN9bfEw" },
            { icon: "fa-linkedin-in", href: "https://au.linkedin.com/company/cdraustralia-org/" }
        ]
    }
};
