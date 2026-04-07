import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme:{
        extend:{
            colors:{
                fydron: {
                    dark: "#0A2540",
                    primary: "#0078D4",
                    accent: "#00A4EF",
                }
            }
        }
    },
    plugins: [],
};

export default config;