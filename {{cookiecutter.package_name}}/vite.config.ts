// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
    return {
        define: {
            "process.env.NODE_ENV": JSON.stringify(mode),
        },
        build: {
            lib: {
                // Could also be a dictionary or array of multiple entry points
                entry: resolve(__dirname, "lib/index.ts"),
                name: "{{ cookiecutter.package_name }}",
                // the proper extensions will be added
                fileName: "{{ cookiecutter.package_name }}",
            },
            outDir: "../flect-static/",
        },
    };
});
