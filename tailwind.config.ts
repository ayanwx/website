import type { Config } from "tailwindcss";

export default {
    content: [],
    theme: {
        extend: {
            colors: {
                bg: "#16161E",
                bg_alt: "#1A1B26",
                fg: "#EEEEEE",
                fg_alt: "#ACB0D0",
                green: "#18FFB1",
            },
            fontFamily: {
                heading: "M3270NF",
            },
        },
    },
    plugins: [],
} satisfies Config;
