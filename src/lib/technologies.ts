import PHP from 'virtual:icons/nonicons/php-16';
import Laravel from 'virtual:icons/fa6-brands/laravel';
import React from 'virtual:icons/fa6-brands/react';
import Svelte from 'virtual:icons/proicons/svelte';
import NodeJs from 'virtual:icons/proicons/nodejs';
import MongoDB from 'virtual:icons/lineicons/mongodb';
import Firebase from 'virtual:icons/cib/firebase';
import Vercel from 'virtual:icons/ri/vercel-line';
import Serverless from 'virtual:icons/file-icons/serverless';
import NeonDB from 'virtual:icons/cbi/neon';
import Tailwind from 'virtual:icons/lineicons/tailwindcss';
import HTML from 'virtual:icons/proicons/html';
import CSS from 'virtual:icons/proicons/css';
import JavaScript from 'virtual:icons/proicons/javascript';
import Redis from 'virtual:icons/cib/redis';
import Docker  from 'virtual:icons/cib/docker';
import RESTfulAPI from 'virtual:icons/dashicons/rest-api';
import Git from 'virtual:icons/lineicons/git';
import CICD from 'virtual:icons/clarity/ci-cd-line';
import Linux  from 'virtual:icons/proicons/linux';
import Server from 'virtual:icons/proicons/server';
import DevOps from 'virtual:icons/carbon/ibm-devops-control';
import TypeScript  from 'virtual:icons/proicons/typescript';
import PostgreSQL from 'virtual:icons/lineicons/postgresql';
import type { Tech } from './types';


export let Technologies: { [key: string]: Tech } = {
    React: {
        name: 'React',
        logo: React
    },
    NodeJS: {
        name: 'Node.js',
        logo: NodeJs
    },
    MongoDB: {
        name: 'MongoDB',
        logo: MongoDB
    },
    Firebase: {
        name: 'Firebase',
        logo: Firebase
    },
    TailwindCSS: {
        name: 'Tailwind CSS',
        logo: Tailwind
    },
    HTML: {
        name: 'HTML',
        logo: HTML
    },
    CSS: {
        name: 'CSS',
        logo: CSS
    },
    JavaScript: {
        name: 'JavaScript',
        logo: JavaScript
    },
    PHP: {
        name: 'PHP',
        logo: PHP
    },
    Laravel: {
        name: 'Laravel',
        logo: Laravel
    },
    MySQL: {
        name: 'MySQL',
        logo: PHP
    },
    Redis: {
        name: 'Redis',
        logo: Redis
    },
    Docker: {
        name: 'Docker',
        logo: Docker
    },
    RESTfulAPI: {
        name: 'RESTful API',
        logo: RESTfulAPI
    },
    Git: {
        name: 'Git',
        logo: Git
    },
    CICD: {
        name: 'CI/CD',
        logo: CICD
    },
    Linux: {
        name: 'Linux',
        logo: Linux
    },
    Svelte: {
        name: 'Svelte',
        logo: Svelte
    },
    Serverless: {
        name: 'Serverless',
        logo: Serverless
    },
    Vercel: {
        name: 'Vercel',
        logo: Vercel
    },
    NeonDB: {
        name: 'NeonDB',
        logo: NeonDB
    },
    TypeScript: {
        name: 'TypeScript',
        logo: TypeScript
    },
    PostgreSQL: {
        name: 'PostgreSQL',
        logo: PostgreSQL
    },
    DevOps: {
        name: 'DevOps',
        logo: DevOps
    },
    Server: {
        name: 'Server Management',
        logo: Server
    }
};