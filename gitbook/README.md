# 👋 Overview

{% hint style="info" %}
**GitBook tip:** your product docs aren't just a reference of all your features! use them to encourage folks to perform certain actions and discover the value in your product.
{% endhint %}

**Overview of cxcss and its Purpose**

CxCss is a powerful CSS library that aims to provide all the capabilities and flexibility of native CSS directly from classnames. It simplifies the process of applying styles to HTML elements by allowing you to leverage classnames to achieve a wide range of styling options.

With cxcss, you can easily create and manage complex styles without writing extensive CSS code. It enables you to define classnames that encapsulate specific styling rules, making your styles modular, reusable, and easy to maintain.

**Installation Instructions**

To start using cxcss in your project, follow these simple installation steps:

1.  Install cxcss from npm as a dev dependency by running the following command:

    ```bash
    npm install --save-dev cxcss
    ```
2.  Once cxcss is installed, you can run the watch compiler by executing the following command:

    ```bash
    npx cxcss
    ```

    This command sets up the watch compiler, which automatically detects changes in your CSS files and recompiles them as needed. Alternatively, you can use the `--build` flag for a production build:

    ```bash
    npx cxcss --build
    ```
3.  Optionally, you can include the `cxcss` command in your start scripts in the `package.json` file. For example, in Next.js, you can modify the `"dev"` script as follows:

    ```json
    {
      "scripts": {
        "dev": "cxcss & next dev"
      }
    }
    ```

    This configuration allows you to run both the cxcss compiler and the Next.js development server simultaneously.
4. By default, running the compiler in watch or build mode generates an `index.css` file in the root of your project. However, if you prefer the output file to be located in a different directory or customize other aspects of cxcss, you can achieve various configurations using the `cx.config.json` file.

Here are a couple of example overviews from products with really great docs:

#### cx.config.json

The `cx.config.json` file allows you to customize and configure cxcss according to your project requirements. Here are the configurations you can achieve with the `cx.config.json` file:

*   **Output Directory**: Specify the output directory for the compiled CSS file. By default, the output file is generated in the root of your project.

    Example `cx.config.json` file:

    ```json
    {
      "output": "path/to/output/directory/"
    }
    ```
*   **Watch Directory**: Define the directory that cxcss should watch for changes during the watch mode. This optimization enhances the watch process performance by focusing on specific directories rather than the entire project.

    Example `cx.config.json` file:

    ```json
    {
      "watchDirectory": "src/styles/"
    }
    ```

    In the above configuration, cxcss will only watch the `"src/styles"` directory for changes.

By utilizing the `cx.config.json` file, you can tailor cxcss to your specific project needs and achieve desired configurations for output, watching directories, and preprocessor integration.

## Quick links

{% content-ref url="overview-1/what-we-do.md" %}
[what-we-do.md](overview-1/what-we-do.md)
{% endcontent-ref %}

{% content-ref url="overview-1/our-features.md" %}
[our-features.md](overview-1/our-features.md)
{% endcontent-ref %}

## Get Started

We've put together some helpful guides for you to get setup with our product quickly and easily.

{% content-ref url="fundamentals/getting-set-up/" %}
[getting-set-up](fundamentals/getting-set-up/)
{% endcontent-ref %}

{% content-ref url="fundamentals/getting-set-up/setting-permissions.md" %}
[setting-permissions.md](fundamentals/getting-set-up/setting-permissions.md)
{% endcontent-ref %}

{% content-ref url="fundamentals/getting-set-up/inviting-members.md" %}
[inviting-members.md](fundamentals/getting-set-up/inviting-members.md)
{% endcontent-ref %}
