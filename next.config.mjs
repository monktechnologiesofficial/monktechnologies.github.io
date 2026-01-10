import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages deployment.
  output: "export",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    // next export requires unoptimized images.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" }
    ]
  }
};

export default withMDX(nextConfig);


