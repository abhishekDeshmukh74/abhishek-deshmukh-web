export const PORTFOLIO_DATA = {
    HOME: {
        META: {
            TITLE: 'Abhishek Deshmukh portfolio - Home',
            DESCRIPTION: `This is a portfolio website of Abhishek Deshmukh. I am a full stack developer
            specializing in building dynamic websites using modern technologies`,
        },
        SCHEMA: {
            '@type': 'WebSite',
            '@context': 'http://schema.org',
            author: {
                '@type': 'Person',
                name: 'Abhishek Deshmukh',
                description: `This is a portfolio website of Abhishek Deshmukh. I am a full stack developer
                specializing in building dynamic websites using modern technologies`,
                url: 'https://www.abhishekdeshmukh.com',
                logo: 'https://www.abhishekdeshmukh.com/assets/img/portrait_250.png'
            },
            image: 'https://www.abhishekdeshmukh.com/assets/img/default_og_url.png',
            screenshot: 'https://www.abhishekdeshmukh.com/assets/img/default_og_url.png',
            name: 'Abhishek Deshmukh',
            url: 'https://www.abhishekdeshmukh.com/',
            operatingSystem: 'Android, Chrome OS, iOS, iPadOS, macOS, OS X, Linux, Windows',
            sameAs: [
                'https://www.linkedin.com/in/abhishek-deshmukh-dev',
                'https://www.facebook.com/abhishekdeshmukh74',
                'https://www.instagram.com/abhishek__deshmukh',
                'https://twitter.com/Abhishe73310685'
            ]
        }
    },
    ABOUT_ME: {
        PATH: 'about',
        META: {
            TITLE: 'Abhishek Deshmukh portfolio - About me',
            DESCRIPTION: `Abhishek Deshmukh is a full stack developer specializing in building dynamic websites using modern technologies, Find info related to my experience here`,
        }
    },
    CONTACT_ME: {
        PATH: 'contact-me',
        META: {
            TITLE: 'Abhishek Deshmukh portfolio - Contact Me',
            DESCRIPTION: `I am a full stack developer specializing in building dynamic websites using modern technologies. Contact me here for any queries or Job offer`,
        }
    },
    MY_RESUME: {
        META: {
            TITLE: 'Abhishek Deshmukh portfolio - My Resume',
            DESCRIPTION: `Find my resume here. I am a MEAN stack developer with experience in
            building dynamic websites using modern technologies with best practices`,
        }
    },
    BLOG: {
        META: {
            TITLE: 'Abhishek Deshmukh blog | Angular, JavaScript(ES6+), ReactJS blog',
            DESCRIPTION: `Angular blog, JavaScript(ES6+) blog, ReactJS blog written by Abhishek Deshmukh`,
        }
    },
    GOOGLE_CALLBACK: {
        PATH: 'google/callback',
        META: {
            TITLE: 'Abhishek Deshmukh - Sign in with google',
            DESCRIPTION: `This page received Google callback that is needed for users to login in abhishekdeshmukh.com`,
        }
    }
};
