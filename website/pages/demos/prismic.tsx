import { Box, Link } from '@chakra-ui/react'
import { Banner, Button, EmailForm, Feature, FeaturesList, Footer, Hero, HowItWorks, LandingProvider, NavBar, PatternBackground, Pricing } from 'landing-blocks/src'
import React from 'react'
import { FiCheck } from 'react-icons/fi'

const Page = () => (
    <LandingProvider>
        <NavBar
            logo={<img width='120px' src='/prismic/logo.svg' />}
            navs={[
                <a>Features</a>,
                <a>Use Cases</a>,
                <a>Pricing</a>,
                <a>About Us</a>,
                <a>Login</a>,
            ]}
        />
        <Hero
            heading='Make your website editable for the whole team'
            subheading='Choose your technology. Use the API to fetch content. Empower
        your content team.'
            image={
                <PatternBackground color='gray.400' pattern='diagonalLinesSm' scatter={30}>
                    <img width='500px' src='/prismic/code.png' />
                </PatternBackground>
            }
            cta={<Button>Test it out</Button>}
        />
        <Feature
            heading='Prismic is a Content Management System, a tool for editing online content'
            subheading="Also known as a headless CMS, an API CMS, a content platform, a disruptive content-as-a-service digital experience...basically we've built a tool that lets you choose your technology, framework, and language and then easily manage your content."
            image={<img src='/prismic/feature1.jpg' width='500px' />}
            bg='gray.100'
            flip
        />
        <HowItWorks
            heading='How Prismic works'
            subheading='A tool built to allow your content, design, and development teams to produce a finished product that they can all be proud of.'
            steps={[
                {
                    heading: 'Model your editor',
                    image: <img width='500px' src='/prismic/step1.jpg' />,
                    subheading:
                        "Model custom types to match your desired design. Create reusable fields and custom components (we call them Slices...you'll hear us talk about them a lot) to enable dynamic layouts and build the editor experience that you want",
                },
                {
                    heading:
                        'Hand over to your content team to start creating content',
                    image: <img width='500px' src='/prismic/step2.jpg' />,
                    subheading:
                        "Once you've managed the initial setup, you can hand the management over to your content team so that editors can start filling content while you're choosing the framework. With Prismic, creating beautiful content becomes simple enough that even non-technical employees can handle it. ",
                },
                {
                    heading:
                        'Deploy on Zeit Now, Netlify, Heroku or your favorite hosting platform',
                    image: <img width='500px' src='/prismic/step3.png' />,
                    subheading:
                        'We take care of hosting and scaling the publishing tools. All you have to do is host the website, but you can choose whichever hosting platform you prefer.',
                },
            ]}
        />
        <FeaturesList
            heading='Why we think Prismic is good for developers '
            features={[
                {
                    heading: 'API to fetch content',
                    icon: (
                        <img src='https://images.prismic.io/prismic-website%2F4e288d2e-66cd-4209-9ada-fbfb6f1c19c1_api.svg?auto=compress,format' />
                    ),
                    subheading:
                        'Unlike a traditional CMS, an API-based approach is much simpler and more secure. This includes options for REST, GraphQL, and SDKs that help our users to make the most of Prismic.',
                },
                {
                    heading: 'No maintenance or server setup',
                    icon: (
                        <img src='https://images.prismic.io/prismic-website%2F4080f213-f9e0-47f1-ae57-1d26874f1a08_setup.svg?auto=compress,format' />
                    ),
                    subheading:
                        "We offer a high-level SLAs, scalability, and a global CDN. We'll make sure that everything is running smoothly in the background so that you can focus on your projects.",
                },
                {
                    heading: 'A growing ecosystem',
                    icon: (
                        <img src='https://images.prismic.io/prismic-website%2F4268d459-cec4-4e46-856b-d2eaba8d71f8_ecosystem.svg?auto=compress,format' />
                    ),
                    subheading:
                        'Built by developers for developers - we actively engage with the community. Enjoy content that is created specifically for our community and join our Slack to discuss your Prismic projects.',
                },
            ]}
            bg='gray.100'
        />

        <Pricing
            features={[
                'Records per base',
                'Attachment space per base',
                'Revision and snapshot history',
                'Rich field types including file attachments, checkboxes, dropdowns, and more',
                'Grid, calendar, form, kanban, and gallery views',
                'Realtime collaboration and commenting',
            ]}
            prices={[
                {
                    heading: 'FREE',
                    subheading: 'Essential Features',
                    features: ['Unlimited', '1200', '2Gb', '2 Weeks'],
                    price: 'Free',
                    cta: <Link color='blue.600'>Get started</Link>,
                },
                {
                    heading: 'PLUS',
                    subheading: 'Essential Features',
                    features: [
                        'Unlimited',
                        '1200',
                        '2Gb',
                        '2 Weeks',
                        <Box as={FiCheck} />,
                    ],
                    price: '$10',
                    background: 'gray.200',
                    cta: <Link color='blue.600'>Get started</Link>,
                },
                {
                    heading: 'PRO',
                    subheading: 'Essential Features',
                    features: [
                        'Unlimited',
                        '1200',
                        '2Gb',
                        '2 Weeks',
                        <Box as={FiCheck} />,
                        <Box as={FiCheck} />,
                    ],
                    price: '$20',
                    background: 'gray.600',
                    cta: <Link color='blue.600'>Get started</Link>,
                },
            ]}
        />
        <Banner
            dark
            bg='gray.800'
            heading='Try Prismic Now!'
            subheading='50% discount just for good fellows like you'
            // image={<CurlyWire opacity={.5} stroke='red' />}
            // cta={<Button>try it out</Button>}
            cta={<EmailForm />}
            fingerprint='No Spam'
        />
        <Footer
            businessName='Prismic'
            columns={{
                Developers: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
                Company: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
                Product: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
            }}
        />
    </LandingProvider>
)

export default Page
